/* ============================================================
   PAGE CONTROLLER: CHECKOUT (checkout.html) — NAFA iSTORE
   ============================================================ */

const params = new URLSearchParams(location.search);
const paramId = params.get("id");
let product = findProduct(paramId);

// Jika dibuka tanpa ?id=... default ke produk pertama
if (!product && (!paramId || paramId === "undefined") && Array.isArray(PRODUCTS) && PRODUCTS.length > 0) {
  product = PRODUCTS[0];
}

let method = "pickup";
let storageLabel = params.get("storage") || null;
let colorParam = params.get("color") || null;
let activePrice = product ? product.price : 0;

function initCheckout() {
  const schedEl = document.getElementById("storeScheduleText");
  const addrEl = document.getElementById("storePickupAddress");
  const checkoutWrap = document.getElementById("checkoutWrap");
  const noProduct = document.getElementById("noProduct");

  if (typeof STORE !== "undefined") {
    if (schedEl) schedEl.textContent = `${STORE.address} — ${STORE.hours}`;
    if (addrEl) addrEl.textContent = STORE.address;
  }

  if (!product) {
    if (checkoutWrap) checkoutWrap.classList.add("hidden");
    if (noProduct) noProduct.classList.remove("hidden");
  } else {
    if (checkoutWrap) checkoutWrap.classList.remove("hidden");
    if (noProduct) noProduct.classList.add("hidden");

    if (storageLabel && Array.isArray(product.storages)) {
      const found = product.storages.find((s) => s.label === storageLabel);
      if (found) activePrice = found.price;
    } else if (product.price) {
      activePrice = product.price;
    }
    renderSummary();
    setMinDate();
  }
}

function renderSummary() {
  if (!product) return;
  const summaryCard = document.getElementById("summaryCard");
  if (!summaryCard) return;

  const storages = Array.isArray(product.storages) && product.storages.length
    ? product.storages
    : [{ label: "128GB", price: product.price || 0 }];
  const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ["Default"];
  const storage = storageLabel || storages[0].label;
  const color = colorParam || colors[0];

  summaryCard.innerHTML = `
    <div class="flex gap-4">
      <img src="${product.img}" alt="${product.name}" class="h-24 w-24 shrink-0 rounded-2xl border border-silver-200 bg-cream object-contain p-2" />
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">${product.cat || "Standard / Base Model"}</p>
        <h3 class="mt-1 font-semibold leading-snug">${product.name}</h3>
        <p class="mt-1 text-xs text-neutral-500">${storage} · ${color}</p>
      </div>
    </div>
    <div class="mt-5 space-y-2 border-t border-silver-200 pt-5 text-sm">
      <div class="flex justify-between"><span class="text-neutral-500">Harga perangkat</span><span class="font-medium">${rupiah(activePrice)}</span></div>
      <div class="flex justify-between"><span class="text-neutral-500">Garansi resmi</span><span class="font-medium text-emerald-600">Termasuk</span></div>
      <div class="flex justify-between border-t border-silver-200 pt-3 text-base"><span class="font-semibold">Total</span><span class="font-semibold">${rupiah(activePrice)}</span></div>
      <p class="text-xs text-neutral-400">atau ${rupiah(Math.round(activePrice / 12))}/bln · cicilan 0% 12x</p>
    </div>`;
}

function showError(input, show) {
  if (!input) return;
  const err = input.closest("div")?.querySelector(".err");
  if (err) err.classList.toggle("hidden", !show);
  input.classList.toggle("border-red-400", show);
}

function setMinDate() {
  const fDate = document.getElementById("fDate");
  if (!fDate) return;
  const today = new Date().toISOString().split("T")[0];
  fDate.min = today;
}

function formatDate(iso) {
  return new Date(iso + "T00:00:00").toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initCheckout();

  // Toggle metode pengiriman / pickup
  const pickupSchedule = document.getElementById("pickupSchedule");
  const tokpedInfo = document.getElementById("tokpedInfo");
  const submitBtn = document.getElementById("submitBtn");

  document.querySelectorAll('input[name="method"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      method = radio.value;
      if (pickupSchedule) pickupSchedule.classList.toggle("hidden", method !== "pickup");
      if (tokpedInfo) tokpedInfo.classList.toggle("hidden", method !== "tokopedia");
      if (submitBtn) {
        submitBtn.textContent = method === "pickup" ? "Konfirmasi Pesanan Pickup" : "Lanjutkan ke Tokopedia";
      }
    });
  });

  // Validasi & Submit
  const checkoutForm = document.getElementById("checkoutForm");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!product) return;

      const fName = document.getElementById("fName");
      const fPhone = document.getElementById("fPhone");
      const fEmail = document.getElementById("fEmail");
      const fNote = document.getElementById("fNote");
      const fDate = document.getElementById("fDate");
      const fTime = document.getElementById("fTime");
      const orderCode = document.getElementById("orderCode");
      const orderSummary = document.getElementById("orderSummary");
      const waConfirm = document.getElementById("waConfirm");
      const successPanel = document.getElementById("successPanel");

      const name = fName ? fName.value.trim() : "";
      const phone = fPhone ? fPhone.value.trim() : "";
      const email = fEmail ? fEmail.value.trim() : "";

      const vName = name.length < 3;
      const vPhone = !/^[0-9]{9,15}$/.test(phone.replace(/[\s-]/g, ""));
      const vEmail = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      showError(fName, vName);
      showError(fPhone, vPhone);
      showError(fEmail, vEmail);

      if (vName || vPhone || vEmail) {
        showToast("⚠️ Cek lagi data yang ditandai merah");
        return;
      }

      if (method === "pickup") {
        const vDate = !fDate || !fDate.value;
        const vTime = !fTime || !fTime.value;
        showError(fDate, vDate);
        showError(fTime, vTime);

        if (vDate || vTime) {
          showToast("⚠️ Lengkapi jadwal pengambilan");
          return;
        }

        const storages = Array.isArray(product.storages) && product.storages.length ? product.storages : [{ label: "128GB" }];
        const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ["Default"];

        const order = {
          code: "NF-" + Date.now().toString(36).toUpperCase().slice(-6),
          productId: product.id,
          name: product.name,
          storage: storageLabel || storages[0].label,
          color: colorParam || colors[0],
          price: activePrice,
          customer: { name, phone, email, note: fNote ? fNote.value.trim() : "" },
          method: "pickup",
          date: fDate.value,
          time: fTime.value,
          createdAt: new Date().toISOString(),
        };

        const orders = JSON.parse(localStorage.getItem("nafa_orders") || "[]");
        orders.push(order);
        localStorage.setItem("nafa_orders", JSON.stringify(orders));

        if (orderCode) orderCode.textContent = order.code;
        if (orderSummary) {
          orderSummary.innerHTML = `
            <div class="flex justify-between"><span class="text-neutral-500">Produk</span><span class="font-medium">${order.name} (${order.storage})</span></div>
            <div class="flex justify-between"><span class="text-neutral-500">Atas nama</span><span class="font-medium">${order.customer.name}</span></div>
            <div class="flex justify-between"><span class="text-neutral-500">Jadwal ambil</span><span class="font-medium">${formatDate(order.date)}, ${order.time}</span></div>
            <div class="flex justify-between"><span class="text-neutral-500">Metode</span><span class="font-medium">Pickup In Store</span></div>
            <div class="flex justify-between border-t border-creamdark pt-2"><span class="font-semibold">Total</span><span class="font-semibold">${rupiah(order.price)}</span></div>`;
        }
        if (waConfirm && typeof STORE !== "undefined") {
          waConfirm.href = `${STORE.wa}?text=${encodeURIComponent(
            `Halo ${STORE.name}, saya sudah membuat pesanan ${order.code} (${order.name}) untuk pickup ${order.date} ${order.time}. Konfirmasi ya!`
          )}`;
        }

        checkoutForm.classList.add("hidden");
        if (successPanel) {
          successPanel.classList.remove("hidden");
          successPanel.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        showToast("🟢 Membuka Tokopedia...");
        const targetUrl = product.tokopedia || (typeof STORE !== "undefined" ? STORE.tokopedia : "#");
        setTimeout(() => window.open(targetUrl, "_blank"), 600);
      }
    });
  }
});

window.addEventListener("productsLoaded", () => {
  const p = findProduct(params.get("id"));
  if (p) product = p;
  else if (!params.get("id") && PRODUCTS && PRODUCTS.length > 0) product = PRODUCTS[0];
  initCheckout();
});
