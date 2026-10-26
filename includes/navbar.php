<?php
/**
 * NAFA iSTORE — Navbar Komponen Reusable
 * PBL SMT3 SIB Polinema
 */
require_once __DIR__ . '/helpers.php';

$current_page = $current_page ?? basename($_SERVER['PHP_SELF'], '.php');
if ($current_page === '' || $current_page === 'index') {
    $current_page = 'home';
}
?>
<!-- ══════════ NAVBAR ══════════ -->
<header class="sticky top-0 z-50 border-b border-silver-200 bg-white/85 backdrop-blur-md">
    <nav class="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="<?= base_url('index.php') ?>" class="flex items-center gap-3">
            <svg width="30" height="34" viewBox="0 0 24 24" aria-hidden="true">
                <path
                    fill="#0A0A0A"
                    d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                />
                <text x="11" y="15" text-anchor="middle" font-size="6" font-weight="800" fill="#F6F1E7" font-family="Inter, sans-serif">NF</text>
            </svg>
            <span class="text-lg font-bold tracking-wide sm:text-xl">NAFA <span class="italic">i</span>STORE</span>
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden items-center gap-8 text-[15px] font-medium text-neutral-600 md:flex">
            <li><a href="<?= base_url('index.php') ?>" class="<?= $current_page === 'home' ? 'font-semibold text-ink' : 'transition hover:text-ink' ?>">Beranda</a></li>
            <li><a href="<?= base_url('katalog.php') ?>" class="<?= $current_page === 'katalog' ? 'font-semibold text-ink' : 'transition hover:text-ink' ?>">Katalog</a></li>
            <li><a href="<?= base_url('blog.php') ?>" class="<?= $current_page === 'blog' ? 'font-semibold text-ink' : 'transition hover:text-ink' ?>">Blog</a></li>
            <li><a href="<?= base_url('kontak.php') ?>" class="<?= $current_page === 'kontak' ? 'font-semibold text-ink' : 'transition hover:text-ink' ?>">Kontak</a></li>
        </ul>

        <!-- Action / CTA & Mobile Menu Toggle -->
        <div class="flex items-center gap-2">
            <a href="<?= base_url('katalog.php') ?>" class="hidden rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800 md:inline-block">Lihat Katalog</a>
            <button id="menuBtn" class="grid h-11 w-11 place-items-center rounded-full border border-silver-300 md:hidden" aria-label="Menu">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
            </button>
        </div>
    </nav>

    <!-- Mobile Drawer Menu -->
    <div id="mobileMenu" class="hidden border-t border-silver-200 bg-white px-4 py-4 md:hidden">
        <ul class="flex flex-col gap-1 text-[15px] font-medium">
            <li><a href="<?= base_url('index.php') ?>" class="block rounded-xl <?= $current_page === 'home' ? 'bg-cream font-semibold' : 'hover:bg-cream' ?> px-4 py-3">Beranda</a></li>
            <li><a href="<?= base_url('katalog.php') ?>" class="block rounded-xl <?= $current_page === 'katalog' ? 'bg-cream font-semibold' : 'hover:bg-cream' ?> px-4 py-3">Katalog</a></li>
            <li><a href="<?= base_url('blog.php') ?>" class="block rounded-xl <?= $current_page === 'blog' ? 'bg-cream font-semibold' : 'hover:bg-cream' ?> px-4 py-3">Blog</a></li>
            <li><a href="<?= base_url('kontak.php') ?>" class="block rounded-xl <?= $current_page === 'kontak' ? 'bg-cream font-semibold' : 'hover:bg-cream' ?> px-4 py-3">Kontak</a></li>
            <li class="pt-2"><a href="<?= base_url('katalog.php') ?>" class="block rounded-full bg-ink px-5 py-3 text-center text-sm font-semibold text-white">Lihat Katalog</a></li>
        </ul>
    </div>
</header>
