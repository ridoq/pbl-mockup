/* ============================================================
   PAGE CONTROLLER: KATALOG (katalog.html) — NAFA iSTORE
   ============================================================ */

/* ============ Konfigurasi ============ */
const PER_PAGE = 9;

/* Halaman katalog: gambar produk tanpa chip info warna (grid lebih bersih) */
window.NAFA_HIDE_CARD_COLOR_CHIP = true;

const ALL_CATS = [
  "SE Series",
  "Standard / Base Model",
  "Plus Model",
  "Pro Model",
  "Pro Max Model",
];

const normalizeCat = (cat) => {
  if (!cat) return "Standard / Base Model";
  if (cat === "Pro") return "Pro Model";
  if (cat === "Standar" || cat === "Standard") return "Standard / Base Model";
  if (cat === "Plus") return "Plus Model";
  if (cat === "Pro Max") return "Pro Max Model";
  return cat;
};

/* ============ State Filter ============ */
let state = {
  search: "",
  conds: new Set(), // awalnya unchecklist (kosong = semua kondisi)
  cats: new Set(),  // awalnya unchecklist (kosong = semua kategori)
  min: null,
  max: null,
  sort: "default",
  visible: PER_PAGE,
};

/* ============ Pipeline Filter ============ */
function getFiltered() {
  let list = (Array.isArray(PRODUCTS) ? PRODUCTS : []).filter(Boolean);

  // Jika ada kondisi yang dicentang -> filter sesuai kondisi
  if (state.conds.size > 0) {
    list = list.filter((p) => state.conds.has(p.condition));
  }

  // Jika ada kategori yang dicentang -> filter sesuai kategori
  if (state.cats.size > 0) {
    list = list.filter((p) => state.cats.has(normalizeCat(p.cat)));
  }

  if (state.search) {
    const q = state.search.toLowerCase();
    list = list.filter(
      (p) =>
        String(p.name || "").toLowerCase().includes(q) ||
        String(p.spec || "").toLowerCase().includes(q) ||
        normalizeCat(p.cat).toLowerCase().includes(q) ||
        String(p.condition || "").toLowerCase().includes(q)
    );
  }

  if (state.min !== null) list = list.filter((p) => (p.price || 0) >= state.min);
  if (state.max !== null) list = list.filter((p) => (p.price || 0) <= state.max);

  if (state.sort === "murah") list.sort((a, b) => (a.price || 0) - (b.price || 0));
  if (state.sort === "mahal") list.sort((a, b) => (b.price || 0) - (a.price || 0));
  if (state.sort === "populer") list.sort((a, b) => (b.sold || 0) - (a.sold || 0));

  return list;
}

/* ============ Render ============ */
function renderCatalog() {
  const list = getFiltered();
  const shown = list.slice(0, state.visible);
  const remaining = list.length - shown.length;

  const grid = document.getElementById("catalogGrid");
  if (grid) grid.innerHTML = shown.map(productCardHTML).join("");

  const emptyEl = document.getElementById("emptyState");
  if (emptyEl) emptyEl.classList.toggle("hidden", list.length > 0);

  const infoEl = document.getElementById("resultInfo");
  if (infoEl) {
    infoEl.textContent = list.length
      ? `Menampilkan ${shown.length} dari ${list.length} produk`
      : "Tidak ada hasil";
  }

  // Load more button
  const wrap = document.getElementById("loadMoreWrap");
  if (wrap) wrap.classList.toggle("hidden", remaining <= 0);

  const sEl = document.getElementById("shownCount");
  const tEl = document.getElementById("totalCount");
  if (sEl) sEl.textContent = shown.length;
  if (tEl) tEl.textContent = list.length;
}

function applyFilters() {
  state.visible = PER_PAGE;
  renderCatalog();
}

/* Pre-set filter dari URL — dipakai card kategori di beranda:
   ?cond=Baru|Second (kondisi) dan ?q=... (kata kunci, mis. "iPhone 18") */
(function initFiltersFromUrl() {
  try {
    const params = new URLSearchParams(window.location.search);
    const cond = params.get("cond");
    if (cond === "Baru" || cond === "Second") {
      state.conds = new Set([cond]);
      document.querySelectorAll(".condCheck").forEach((cb) => {
        cb.checked = cb.value === cond;
      });
    }
    const q = params.get("q");
    if (q) {
      state.search = q;
      const searchInput = document.getElementById("searchInput");
      if (searchInput) searchInput.value = q;
    }
  } catch {}
})();

/* ============ Parse & Format Harga ============ */
const parseNum = (str) => {
  const n = parseInt(str.replace(/[^\d]/g, ""), 10);
  return isNaN(n) ? null : n;
};
const formatNum = (n) => (n ? n.toLocaleString("id-ID") : "");

/* ============ Reset ============ */
function resetFilters() {
  state.search = "";
  state.min = null;
  state.max = null;
  state.sort = "default";
  state.conds = new Set();
  state.cats = new Set();

  document
    .querySelectorAll(".condCheck, .catCheck")
    .forEach((cb) => (cb.checked = false));
  document
    .querySelectorAll(".priceChip")
    .forEach((c) => c.classList.remove("bg-ink", "text-white", "border-ink"));

  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");

  if (minPrice) minPrice.value = "";
  if (maxPrice) maxPrice.value = "";
  if (searchInput) searchInput.value = "";
  if (sortSelect) sortSelect.value = "default";

  applyFilters();
}

/* ============ Event Listeners Setup ============ */
document.addEventListener("DOMContentLoaded", () => {
  // Load more
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      state.visible += PER_PAGE;
      renderCatalog();
    });
  }

  // Checkbox kondisi & kategori
  document.querySelectorAll(".condCheck").forEach((cb) =>
    cb.addEventListener("change", () => {
      cb.checked ? state.conds.add(cb.value) : state.conds.delete(cb.value);
      applyFilters();
    })
  );

  document.querySelectorAll(".catCheck").forEach((cb) =>
    cb.addEventListener("change", () => {
      cb.checked ? state.cats.add(cb.value) : state.cats.delete(cb.value);
      applyFilters();
    })
  );

  // Price chips
  const minPrice = document.getElementById("minPrice");
  const maxPrice = document.getElementById("maxPrice");

  document.querySelectorAll(".priceChip").forEach((chip) => {
    chip.addEventListener("click", () => {
      const active = chip.classList.contains("bg-ink");
      document
        .querySelectorAll(".priceChip")
        .forEach((c) => c.classList.remove("bg-ink", "text-white", "border-ink"));
      if (minPrice) minPrice.value = "";
      if (maxPrice) maxPrice.value = "";
      state.min = null;
      state.max = null;

      if (!active) {
        chip.classList.add("bg-ink", "text-white", "border-ink");
        state.min = chip.dataset.min ? +chip.dataset.min : null;
        state.max = chip.dataset.max ? +chip.dataset.max : null;
      }
      applyFilters();
    });
  });

  // Input harga manual
  function onPriceInput() {
    state.min = minPrice ? parseNum(minPrice.value) : null;
    state.max = maxPrice ? parseNum(maxPrice.value) : null;
    if (minPrice) minPrice.value = formatNum(state.min);
    if (maxPrice) maxPrice.value = formatNum(state.max);
    document
      .querySelectorAll(".priceChip")
      .forEach((c) => c.classList.remove("bg-ink", "text-white", "border-ink"));
    applyFilters();
  }

  if (minPrice) minPrice.addEventListener("input", onPriceInput);
  if (maxPrice) maxPrice.addEventListener("input", onPriceInput);

  // Search & sort
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.search = e.target.value;
      applyFilters();
    });
  }

  const sortSelect = document.getElementById("sortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sort = e.target.value;
      applyFilters();
    });
  }

  // Reset button
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) resetBtn.addEventListener("click", resetFilters);

  // Toggle filter panel mobile
  const filterPanel = document.getElementById("filterPanel");
  const filterChevron = document.getElementById("filterChevron");
  const filterToggle = document.getElementById("filterToggle");
  if (filterToggle && filterPanel) {
    filterToggle.addEventListener("click", () => {
      filterPanel.classList.toggle("hidden");
      if (filterChevron) filterChevron.classList.toggle("rotate-180");
    });
  }

  renderCatalog();
});

window.addEventListener("productsLoaded", () => {
  renderCatalog();
});
