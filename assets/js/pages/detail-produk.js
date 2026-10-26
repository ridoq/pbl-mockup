/* ============================================================
   PAGE CONTROLLER: DETAIL PRODUK (detail-produk.html) — NAFA iSTORE
   ============================================================ */

const params = new URLSearchParams(location.search);
const paramId = params.get("id");
let product = findProduct(paramId);

// Jika dibuka tanpa ?id=... default ke produk pertama
if (!product && (!paramId || paramId === "undefined") && Array.isArray(PRODUCTS) && PRODUCTS.length > 0) {
  product = PRODUCTS[0];
}

let selStorage = null;
let selColor = null;

function renderDetail() {
  const notFound = document.getElementById("notFound");
  const productWrap = document.getElementById("productWrap");
  const descWrap = document.getElementById("descWrap");
  const relatedWrap = document.getElementById("relatedWrap");

  if (!product) {
    if (notFound) notFound.classList.remove("hidden");
    if (productWrap) productWrap.classList.add("hidden");
    if (descWrap) descWrap.classList.add("hidden");
    if (relatedWrap) relatedWrap.classList.add("hidden");
    return;
  }

  if (notFound) notFound.classList.add("hidden");
  if (productWrap) productWrap.classList.remove("hidden");
  if (descWrap) descWrap.classList.remove("hidden");
  if (relatedWrap) relatedWrap.classList.remove("hidden");

  initPage();
}

function initPage() {
  if (!product) return;

  const bcName = document.getElementById("bcName");
  const pCat = document.getElementById("pCat");
  const pName = document.getElementById("pName");
  const pMeta = document.getElementById("pMeta");
  const pDesc = document.getElementById("pDesc");
  const pSpecs = document.getElementById("pSpecs");
  const mainImage = document.getElementById("mainImage");
  const btnTokped = document.getElementById("btnTokped");
  const relatedGrid = document.getElementById("relatedGrid");

  document.title = `${product.name} — NAFA iSTORE`;
  if (bcName) bcName.textContent = product.name;
  if (pCat) pCat.textContent = product.cat;
  if (pName) pName.textContent = product.name;
  if (pMeta) pMeta.textContent = `${product.rating || 4.8} rating · ${product.sold || 0} terjual`;
  if (pDesc) pDesc.textContent = product.desc || `${product.name} original bergaransi resmi di NAFA iSTORE.`;

  // Spesifikasi
  const specsObj = product.specs || {};
  if (pSpecs) {
    pSpecs.innerHTML = Object.entries(specsObj)
      .map(
        ([k, v]) => `
      <div class="flex justify-between gap-6 border-b border-silver-200 py-4 text-sm">
        <dt class="text-neutral-400">${k}</dt>
        <dd class="text-right font-medium">${v}</dd>
      </div>`
      )
      .join("");
  }

  // Pilihan Warna
  const colors = Array.isArray(product.colors) && product.colors.length ? product.colors : ["Default"];
  selColor = colors[0];
  renderColors(colors);

  // Galeri: jika ada colorImages, prioritaskan foto varian warna
  let gallery = Array.isArray(product.gallery) && product.gallery.length ? product.gallery : [product.img];
  if (product.colorImages && typeof product.colorImages === "object") {
    const cImgs = Object.values(product.colorImages).filter(Boolean);
    if (cImgs.length > 0) gallery = cImgs;
  }

  // Main image awal berdasarkan warna terpilih
  const initialSrc = (product.colorImages && product.colorImages[selColor]) || gallery[0] || product.img;
  const resolvedInitialSrc = typeof resolveAssetUrl === "function" ? resolveAssetUrl(initialSrc) : initialSrc;
  if (mainImage) {
    mainImage.src = resolvedInitialSrc;
    mainImage.alt = product.name;
  }

  renderThumbs(gallery, initialSrc);

  // Kapasitas
  const storages = Array.isArray(product.storages) && product.storages.length
    ? product.storages
    : [{ label: "128GB", price: product.price || 0 }];
  selStorage = storages[0];
  renderStorages(storages);

  // Tokopedia
  if (btnTokped) {
    btnTokped.href = product.tokopedia || (typeof STORE !== "undefined" ? STORE.tokopedia : "#");
  }

  // Produk terkait (kategori sama, beda id)
  if (relatedGrid) {
    const related = (PRODUCTS || [])
      .filter((p) => p && p.id !== product.id && p.cat === product.cat)
      .concat((PRODUCTS || []).filter((p) => p && p.id !== product.id && p.cat !== product.cat))
      .slice(0, 4);
    relatedGrid.innerHTML = related.map(productCardHTML).join("");
  }

  updatePrice();
}

function renderThumbs(galleryList, activeSrc) {
  const thumbs = document.getElementById("thumbs");
  if (!thumbs) return;

  thumbs.innerHTML = galleryList
    .map((src) => {
      const isMatch = src === activeSrc || (activeSrc && (activeSrc.endsWith(src) || src.endsWith(activeSrc)));
      const thumbUrl = typeof resolveAssetUrl === "function" ? resolveAssetUrl(src) : src;
      return `
      <button type="button" onclick="switchImage('${src}', this)" class="product-stage overflow-hidden rounded-2xl border-2 transition ${
        isMatch ? "border-ink" : "border-silver-200 hover:border-creamdark"
      }">
        <img src="${thumbUrl}" alt="Foto unit" class="aspect-square w-full object-contain p-1.5" />
      </button>`;
    })
    .join("");
}

function renderStorages(storagesList) {
  const storageOpts = document.getElementById("storageOpts");
  if (!storageOpts) return;

  const list = storagesList || (product && product.storages) || [{ label: "128GB", price: product.price || 0 }];
  const base = list[0].price;

  storageOpts.innerHTML = list
    .map(
      (s) => `
      <button onclick="pickStorage('${s.label}', this)"
        class="rounded-2xl border px-5 py-3 text-sm font-semibold transition ${
          s.label === (selStorage ? selStorage.label : "")
            ? "border-ink bg-ink text-white"
            : "border-silver-200 hover:border-creamdark"
        }">
        ${s.label}
        ${
          s.price > base
            ? `<span class="block text-[11px] font-normal ${
                s.label === (selStorage ? selStorage.label : "") ? "text-neutral-300" : "text-neutral-400"
              }">+${rupiah(s.price - base)}</span>`
            : ""
        }
      </button>`
    )
    .join("");
}

function renderColors(colorsList) {
  const colorLabel = document.getElementById("colorLabel");
  const colorOpts = document.getElementById("colorOpts");
  if (!colorOpts) return;

  const list = colorsList || (product && product.colors) || ["Default"];
  if (colorLabel) colorLabel.textContent = selColor || list[0];

  // Radio bulat warna: dot berwarna + nama warna muncul saat hover
  colorOpts.innerHTML = list
    .map((c) => {
      const active = c === selColor;
      const hex = typeof colorHex === "function" ? colorHex(c) : "#DCD9D2";
      return `
      <button type="button" onclick="pickColor('${c}')" aria-label="Warna ${c}"
        class="group/sw relative grid h-10 w-10 place-items-center rounded-full transition">
        <span
          class="block h-7 w-7 rounded-full transition duration-200 ${
            active
              ? "ring-2 ring-ink ring-offset-2"
              : "ring-1 ring-black/10 group-hover/sw:scale-110 group-hover/sw:ring-ink/40"
          }"
          style="background:${hex}"></span>
        <span
          class="pointer-events-none absolute -top-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-lg transition duration-150 group-hover/sw:opacity-100">${c}</span>
      </button>`;
    })
    .join("");
  updateMainColorChip();
}

/* Chip info warna simple di pojok kiri atas gambar utama */
function updateMainColorChip() {
  const holder = document.getElementById("mainColorChip");
  if (!holder) return;
  holder.innerHTML =
    typeof stageColorChip === "function" && selColor ? stageColorChip(selColor, "") : "";
}

function pickStorage(label, btn) {
  const storages = (product && product.storages) || [{ label, price: product.price || 0 }];
  selStorage = storages.find((s) => s.label === label) || storages[0];
  renderStorages(storages);
  updatePrice();
}

function pickColor(color) {
  selColor = color;
  const colors = (product && product.colors) || ["Default"];
  renderColors(colors);

  const mainImage = document.getElementById("mainImage");
  const thumbs = document.getElementById("thumbs");

  // Untuk kondisi Baru (atau yang punya colorImages), ubah gambar ke warna tersebut
  if (product && product.colorImages && product.colorImages[color]) {
    const targetSrc = product.colorImages[color];
    const resolvedTargetSrc = typeof resolveAssetUrl === "function" ? resolveAssetUrl(targetSrc) : targetSrc;
    if (mainImage) mainImage.src = resolvedTargetSrc;

    // Sinkronkan thumbnail aktif
    if (thumbs) {
      thumbs.querySelectorAll("button").forEach((btn) => {
        const img = btn.querySelector("img");
        const src = img ? img.getAttribute("src") || "" : "";
        if (src === targetSrc || src === resolvedTargetSrc || (targetSrc && (targetSrc.endsWith(src) || src.endsWith(targetSrc)))) {
          btn.classList.add("border-ink");
          btn.classList.remove("border-silver-200");
        } else {
          btn.classList.remove("border-ink");
          btn.classList.add("border-silver-200");
        }
      });
    }
  }
  updatePrice();
}

function switchImage(src, btn) {
  const mainImage = document.getElementById("mainImage");
  const thumbs = document.getElementById("thumbs");

  const resolvedSrc = typeof resolveAssetUrl === "function" ? resolveAssetUrl(src) : src;
  if (mainImage) mainImage.src = resolvedSrc;
  if (thumbs) {
    thumbs.querySelectorAll("button").forEach((b) => {
      b.classList.remove("border-ink");
      b.classList.add("border-silver-200");
    });
  }
  if (btn) {
    btn.classList.add("border-ink");
    btn.classList.remove("border-silver-200");
  }

  // Jika thumbnail cocok dengan salah satu warna, ubah pilihan warna otomatis
  if (product && product.colorImages) {
    for (const [cName, cPath] of Object.entries(product.colorImages)) {
      if (cPath === src || src.endsWith(cPath) || cPath.endsWith(src)) {
        selColor = cName;
        renderColors(product.colors || []);
        updatePrice();
        break;
      }
    }
  }
}

function updatePrice() {
  const pPrice = document.getElementById("pPrice");
  const pInstallment = document.getElementById("pInstallment");
  const btnBuy = document.getElementById("btnBuy");

  const price = selStorage ? selStorage.price : product ? product.price : 0;
  if (pPrice) pPrice.textContent = rupiah(price);
  if (pInstallment) {
    pInstallment.textContent = `atau ${rupiah(Math.round(price / 12))}/bulan · cicilan 0% 12x`;
  }
  const sLabel = selStorage ? selStorage.label : "";
  const cLabel = selColor || "";
  const pageExt = window.location.pathname.endsWith('.php') ? '.php' : '.html';
  if (btnBuy && product) {
    btnBuy.href = `checkout${pageExt}?id=${product.id}&storage=${encodeURIComponent(sLabel)}&color=${encodeURIComponent(cLabel)}`;
  }
}

document.addEventListener("DOMContentLoaded", renderDetail);
window.addEventListener("productsLoaded", () => {
  const p = findProduct(params.get("id"));
  if (p) product = p;
  else if (!params.get("id") && PRODUCTS && PRODUCTS.length > 0) product = PRODUCTS[0];
  renderDetail();
});
