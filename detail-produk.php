<?php
$page_title = 'Detail iPhone — NAFA iSTORE';
$current_page = 'katalog';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center text-xs text-neutral-400">
      <a href="<?= base_url('index.php') ?>" class="hover:text-ink">Beranda</a>
      <span class="mx-2">/</span>
      <a href="<?= base_url('katalog.php') ?>" class="hover:text-ink">Katalog</a>
      <span class="mx-2">/</span>
      <span class="text-ink" id="bcName">...</span>
    </nav>

    <!-- Empty state kalau id tidak valid -->
    <div id="notFound" class="hidden py-32 text-center">
      <p class="text-4xl">📵</p>
      <h1 class="mt-4 text-xl font-semibold">Produk tidak ditemukan</h1>
      <a href="<?= base_url('katalog.php') ?>" class="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white">Kembali ke Katalog</a>
    </div>

    <div id="productWrap" class="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
      <!-- Galeri -->
      <div>
        <div class="overflow-hidden rounded-4xl border border-silver-200 bg-cream">
          <img id="mainImage" src="" alt="" class="aspect-square w-full object-contain p-6 sm:p-8 transition duration-300" />
        </div>
        <div id="thumbs" class="mt-4 grid grid-cols-4 gap-3"></div>
      </div>

      <!-- Info -->
      <div>
        <p class="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400" id="pCat"></p>
        <h1 class="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl" id="pName"></h1>
        <div class="mt-3 flex items-center gap-3 text-sm">
          <span class="text-ink">★★★★★</span>
          <span class="text-neutral-400" id="pMeta"></span>
        </div>

        <div class="mt-6 rounded-3xl bg-silver-100 p-6">
          <p class="text-2xl font-semibold tracking-tight sm:text-3xl" id="pPrice"></p>
          <p class="mt-1 text-sm text-neutral-500" id="pInstallment"></p>
        </div>

        <!-- Pilih kapasitas -->
        <div class="mt-8">
          <p class="text-sm font-semibold">Kapasitas</p>
          <div id="storageOpts" class="mt-3 flex flex-wrap gap-3"></div>
        </div>

        <!-- Pilih warna -->
        <div class="mt-6">
          <p class="text-sm font-semibold">Warna <span class="font-normal text-neutral-400">— <span id="colorLabel"></span></span></p>
          <div id="colorOpts" class="mt-3 flex flex-wrap gap-3"></div>
        </div>

        <!-- CTA -->
        <div class="mt-9 flex flex-col gap-3 sm:flex-row">
          <a id="btnBuy" href="#"
             class="flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Beli Sekarang
            <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
          </a>
          <a id="btnTokped" href="#" target="_blank" rel="noopener"
             class="flex flex-1 items-center justify-center gap-2 rounded-full border border-silver-300 px-8 py-4 text-sm font-semibold transition hover:border-ink">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 8h18l-1.5 11a2 2 0 0 1-2 1.7h-11a2 2 0 0 1-2-1.7z"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/></svg>
            Beli di Tokopedia
          </a>
        </div>

        <!-- Trust badges -->
        <div class="mt-8 grid grid-cols-3 gap-3 text-center">
          <div class="rounded-2xl border border-silver-200 p-4">
            <p class="text-lg">✅</p><p class="mt-1 text-xs font-medium">100% Original</p>
          </div>
          <div class="rounded-2xl border border-silver-200 p-4">
            <p class="text-lg">🛡️</p><p class="mt-1 text-xs font-medium">Garansi Resmi 1 Tahun</p>
          </div>
          <div class="rounded-2xl border border-silver-200 p-4">
            <p class="text-lg">🏬</p><p class="mt-1 text-xs font-medium">Pickup In Store</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Deskripsi & Spesifikasi -->
    <div id="descWrap" class="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Deskripsi</h2>
        <p class="mt-4 leading-relaxed text-neutral-600" id="pDesc"></p>
      </div>
      <div>
        <h2 class="text-2xl font-semibold tracking-tight">Spesifikasi</h2>
        <dl class="mt-4" id="pSpecs"></dl>
      </div>
    </div>

    <!-- Produk terkait -->
    <section class="mt-24">
      <h2 class="text-2xl font-semibold tracking-tight">Kamu mungkin juga suka</h2>
      <div id="relatedGrid" class="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4"></div>
    </section>
  </main>

<?php
$extra_scripts = '<script src="' . asset('js/pages/detail-produk.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
