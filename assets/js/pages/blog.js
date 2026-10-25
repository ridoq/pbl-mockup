/* ============================================================
   PAGE CONTROLLER: BLOG (blog.html) — NAFA iSTORE
   ============================================================ */

let blogState = { cat: "semua" };

function postCardHTML(p) {
  return `
  <article class="group cursor-pointer rounded-3xl border border-silver-200 overflow-hidden transition hover:-translate-y-1 hover:border-creamdark hover:shadow-xl hover:shadow-silver-200/70" onclick="openBlogModal('${p.id}')">
    <div class="overflow-hidden bg-cream">
      <img src="${p.img}" alt="${p.title}" loading="lazy" class="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 text-xs text-neutral-400">
        <span class="rounded-full bg-cream px-3 py-1 font-semibold text-ink">${p.cat}</span>
        <span>${p.read}</span>
      </div>
      <h3 class="mt-3 font-semibold leading-snug group-hover:underline">${p.title}</h3>
      <p class="mt-2 text-sm text-neutral-500 line-clamp-2">${p.excerpt}</p>
      <p class="mt-4 text-xs text-neutral-400">${p.date}</p>
    </div>
  </article>`;
}

function renderBlog() {
  const blogGrid = document.getElementById("blogGrid");
  const emptyBlog = document.getElementById("emptyBlog");
  if (!blogGrid) return;

  const posts = typeof POSTS !== "undefined" && Array.isArray(POSTS) ? POSTS : [];
  const list = blogState.cat === "semua" ? posts : posts.filter((p) => p.cat === blogState.cat);

  blogGrid.innerHTML = list.map(postCardHTML).join("");
  if (emptyBlog) emptyBlog.classList.toggle("hidden", list.length > 0);
}

function styleCat() {
  document.querySelectorAll(".catBtn").forEach((b) => {
    const active = b.dataset.cat === blogState.cat;
    b.classList.toggle("bg-ink", active);
    b.classList.toggle("text-white", active);
    b.classList.toggle("border-ink", active);
  });
}

function openBlogModal(id) {
  const modal = document.getElementById("postModal");
  if (!modal) return;
  const posts = typeof POSTS !== "undefined" && Array.isArray(POSTS) ? POSTS : [];
  const p = posts.find((x) => x.id === id);
  if (!p) return;

  const mImg = document.getElementById("mImg");
  const mCat = document.getElementById("mCat");
  const mDate = document.getElementById("mDate");
  const mRead = document.getElementById("mRead");
  const mTitle = document.getElementById("mTitle");
  const mBody = document.getElementById("mBody");

  if (mImg) {
    mImg.src = p.img;
    mImg.alt = p.title;
  }
  if (mCat) mCat.textContent = p.cat;
  if (mDate) mDate.textContent = p.date;
  if (mRead) mRead.textContent = p.read;
  if (mTitle) mTitle.textContent = p.title;

  if (mBody && Array.isArray(p.body)) {
    mBody.innerHTML = p.body
      .map((par) =>
        par.startsWith("## ")
          ? `<h2 class="pt-3 text-lg font-semibold text-ink">${par.replace("## ", "")}</h2>`
          : `<p>${par}</p>`
      )
      .join("");
  }

  modal.classList.remove("invisible", "opacity-0");
  document.body.style.overflow = "hidden";
}

// Global alias for onclick attribute compatibility
window.openBlogModal = openBlogModal;
window.openModal = openBlogModal;

function closeBlogModal() {
  const modal = document.getElementById("postModal");
  if (modal) {
    modal.classList.add("invisible", "opacity-0");
    document.body.style.overflow = "";
  }
}
window.closeBlogModal = closeBlogModal;
window.closeModal = closeBlogModal;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".catBtn").forEach((b) =>
    b.addEventListener("click", () => {
      blogState.cat = b.dataset.cat;
      styleCat();
      renderBlog();
    })
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlogModal();
  });

  styleCat();
  renderBlog();
});
