<?php
$page_title = 'Blog & Panduan Edukasi — NAFA iSTORE';
$current_page = 'blog';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

  <main class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
    <div class="reveal max-w-xl">
      <p class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Blog Edukasi</p>
      <h1 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tips & panduan dari toko</h1>
      <p class="mt-3 text-neutral-500">Belajar merawat iPhone, trik tersembunyi, dan panduan beli-pilih langsung dari tim kami.</p>
    </div>

    <!-- Filter kategori -->
    <div class="reveal mt-8 flex flex-wrap gap-2">
      <button data-cat="semua" class="catBtn rounded-full border border-silver-200 px-5 py-2.5 text-sm font-semibold transition">Semua</button>
      <button data-cat="Perawatan" class="catBtn rounded-full border border-silver-200 px-5 py-2.5 text-sm font-semibold transition">Perawatan</button>
      <button data-cat="Tips & Trik" class="catBtn rounded-full border border-silver-200 px-5 py-2.5 text-sm font-semibold transition">Tips & Trik</button>
      <button data-cat="Panduan" class="catBtn rounded-full border border-silver-200 px-5 py-2.5 text-sm font-semibold transition">Panduan</button>
    </div>

    <!-- Grid artikel -->
    <div id="blogGrid" class="reveal mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"></div>
    <p id="emptyBlog" class="hidden py-20 text-center text-neutral-400">Tidak ada artikel di kategori ini.</p>
  </main>

  <!-- ══════════ MODAL BACA ARTIKEL ══════════ -->
  <div id="postModal" class="invisible fixed inset-0 z-[70] opacity-0 transition-all duration-300">
    <div class="absolute inset-0 bg-ink/60 backdrop-blur-sm" onclick="closeModal()"></div>
    <div class="absolute inset-x-0 bottom-0 top-10 mx-auto max-w-3xl overflow-hidden rounded-t-4xl bg-white shadow-2xl sm:top-16">
      <button onclick="closeModal()" class="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white border border-silver-200 shadow-md transition hover:bg-silver-100" aria-label="Tutup">
        <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></svg>
      </button>
      <div class="h-full overflow-y-auto">
        <img id="mImg" src="" alt="" class="aspect-[2/1] w-full object-cover" />
        <div class="px-7 py-8 sm:px-12 sm:py-10">
          <div class="flex flex-wrap items-center gap-3 text-xs text-neutral-400">
            <span id="mCat" class="rounded-full bg-cream px-3 py-1 font-semibold text-ink"></span>
            <span id="mDate"></span><span>•</span><span id="mRead"></span>
          </div>
          <h1 id="mTitle" class="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"></h1>
          <div id="mBody" class="mt-6 space-y-4 leading-relaxed text-neutral-600"></div>
          <div class="mt-10 rounded-3xl bg-cream p-7 text-center">
            <p class="font-semibold">Butuh bantuan langsung?</p>
            <p class="mt-1 text-sm text-neutral-500">Tim NAFA iSTORE siap bantu lewat WhatsApp.</p>
            <a href="https://wa.me/<?= APP_WA ?>" target="_blank" rel="noopener noreferrer" class="mt-4 inline-block rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">Chat Sekarang</a>
          </div>
        </div>
      </div>
    </div>
  </div>

<?php
$extra_scripts = '<script src="' . asset('js/data-blog.js') . '"></script><script src="' . asset('js/pages/blog.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
