/* ============================================================
   PAGE CONTROLLER: HOME / BERANDA (index.html) — NAFA iSTORE
   ============================================================ */

function renderHomeProducts() {
  const fg = document.getElementById("featuredGrid");
  const items = Array.isArray(PRODUCTS) ? PRODUCTS.filter(Boolean) : [];

  if (fg) {
    fg.innerHTML = items.slice(0, 6).map(productCardHTML).join("");
  }

  const models = items
    .map((p) => (p && p.name ? p.name : ""))
    .filter(Boolean);
  const marqueeHTML = models
    .map((m) => `<span>${m}</span><span class="text-ink/25">•</span>`)
    .join("");

  const m1 = document.getElementById("marqueeList");
  const m2 = document.getElementById("marqueeList2");
  if (m1) m1.innerHTML = marqueeHTML;
  if (m2) m2.innerHTML = marqueeHTML;
}

document.addEventListener("DOMContentLoaded", renderHomeProducts);
window.addEventListener("productsLoaded", renderHomeProducts);
