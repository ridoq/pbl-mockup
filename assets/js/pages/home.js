/* ============================================================
   PAGE CONTROLLER: HOME / BERANDA (index.php) — NAFA iSTORE
   ============================================================ */

const BLOG_PAGE_URL = (() => {
  const pageExt = window.location.pathname.endsWith(".php") ? ".php" : ".html";
  return `blog${pageExt}`;
})();

/* Kurasi "Produk Pilihan": prioritaskan unit ber-badge promosi
   (Terbaru, Populer, Best Seller, ...) lalu tie-break dari yang
   paling banyak terjual — otomatis ikut kalau admin update data. */
const BADGE_SCORE = { Terbaru: 6, Populer: 5, "Best Seller": 4, "Best Value": 3, "Ultra Slim": 2 };

function pickCurated(items, n = 6) {
  return items
    .map((p, i) => ({ p, i, score: (BADGE_SCORE[p.badge] || 0) * 10 + (p.sold || 0) / 1000 }))
    .sort((a, b) => b.score - a.score || a.i - b.i)
    .slice(0, n)
    .map((x) => x.p);
}

function renderHomeProducts() {
  const track = document.getElementById("featuredGrid");
  const items = Array.isArray(PRODUCTS) ? PRODUCTS.filter(Boolean) : [];

  // Hanya isi carousel jika elemen secara eksplisit ber-data-carousel="true"
  if (track && track.dataset.carousel === "true") {
    const curated = pickCurated(items, 8);
    track.innerHTML = curated
      .map(
        (p) => `
      <div class="carousel-item w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[31%] xl:w-[23.5%]">
        ${productCardHTML(p)}
      </div>`
      )
      .join("");
    setupCarouselNav();
  }

  renderGenCounts(items);

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

/* Navigasi carousel Produk Pilihan: panah geser per kartu,
   auto-disabled di ujung track.
   Catatan: CSS scroll-behavior:smooth + scroll-snap-mandatory bikin
   scrollBy() smooth sering di-re-snap balik oleh Chrome, makanya
   target dihitung eksplisit per kartu lewat scrollTo(). */
function setupCarouselNav() {
  const track = document.getElementById("featuredGrid");
  const prev = document.getElementById("featPrev");
  const next = document.getElementById("featNext");
  if (!track || !prev || !next) return;

  const padLeft = () => parseFloat(getComputedStyle(track).paddingLeft) || 0;

  const currentItemIndex = () => {
    const pad = padLeft();
    let best = 0, bestDist = Infinity;
    track.querySelectorAll(".carousel-item").forEach((item, i) => {
      const dist = Math.abs(item.offsetLeft - pad - track.scrollLeft);
      if (dist < bestDist) { bestDist = dist; best = i; }
    });
    return best;
  };

  const goTo = (index) => {
    const items = track.querySelectorAll(".carousel-item");
    const clamped = Math.max(0, Math.min(items.length - 1, index));
    const target = items.length ? items[clamped].offsetLeft - padLeft() : 0;
    animateScroll(track, target);
  };

  /* Animasi scroll manual (timer + ease-out): lebih andal daripada
     behavior:'smooth' maupun rAF — keduanya bisa tidak jalan sama
     sekali di beberapa kondisi (tab latar, webview tertentu). */
  let animId = 0;
  const animateScroll = (el, target) => {
    const id = ++animId;
    const from = el.scrollLeft;
    const dist = target - from;
    if (Math.abs(dist) < 2) return;
    const dur = 420;
    const t0 = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    const stepFn = () => {
      if (id !== animId) return; // dibatalkan oleh interaksi baru
      const t = Math.min(1, (performance.now() - t0) / dur);
      el.scrollTo({ left: from + dist * ease(t), behavior: "instant" });
      if (t < 1) setTimeout(stepFn, 16);
    };
    setTimeout(stepFn, 16);
  };
  // Interaksi sentuh/scroll manual membatalkan animasi berjalan
  ["pointerdown", "wheel", "touchstart"].forEach((ev) =>
    track.addEventListener(ev, () => ++animId, { passive: true })
  );

  const syncArrows = () => {
    const maxScroll = track.scrollWidth - track.clientWidth - 1;
    prev.disabled = track.scrollLeft <= 1;
    next.disabled = track.scrollLeft >= maxScroll;
  };

  prev.onclick = () => goTo(currentItemIndex() - 1);
  next.onclick = () => goTo(currentItemIndex() + 1);
  track.onscroll = syncArrows;
  window.addEventListener("resize", syncArrows);
  syncArrows();
}

/* Jumlah unit per generasi untuk tile kategori beranda */
function renderGenCounts(items) {
  document.querySelectorAll("[data-gen]").forEach((el) => {
    const gen = el.dataset.gen;
    const count =
      gen === "Second"
        ? items.filter((p) => p.condition === "Second").length
        : items.filter((p) => p.name && p.name.includes(gen)).length;
    el.textContent = count > 0 ? `${count} unit tersedia` : "Lihat katalog";
  });
}

/* Teaser blog: 3 artikel terbaru dari POSTS (satu sumber dengan blog.php,
   termasuk hasil CRUD admin). Kartu dinamis tidak boleh pakai .reveal —
   reveal.js hanya observe elemen yang sudah ada saat DOMContentLoaded. */
function renderHomeBlog() {
  const grid = document.getElementById("homeBlogGrid");
  if (!grid) return;

  const posts =
    typeof POSTS !== "undefined" && Array.isArray(POSTS) ? POSTS : [];
  const list = posts.filter(Boolean).slice(0, 3);

  grid.innerHTML = list
    .map(
      (p) => `
  <a href="${BLOG_PAGE_URL}" class="group rounded-3xl border border-silver-200 p-7 transition hover:-translate-y-1 hover:border-creamdark">
    <span class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400">${p.cat}</span>
    <h3 class="mt-3 font-semibold leading-snug group-hover:underline">${p.title}</h3>
    <p class="mt-3 text-sm text-neutral-500">${p.excerpt}</p>
  </a>`
    )
    .join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderHomeProducts();
  renderHomeBlog();
});
window.addEventListener("productsLoaded", () => {
  renderHomeProducts();
  renderHomeBlog();
});
