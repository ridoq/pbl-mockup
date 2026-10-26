<?php
/**
 * NAFA iSTORE — Sidebar Panel Admin
 * PBL SMT3 SIB Polinema
 */
require_once __DIR__ . '/helpers.php';
$admin_page = $admin_page ?? '';
?>
<!-- Admin Sidebar -->
<aside class="flex w-64 flex-col border-r border-silver-200 bg-white">
    <!-- Brand -->
    <div class="flex h-16 items-center gap-3 border-b border-silver-200 px-6">
        <svg width="24" height="28" viewBox="0 0 24 24" aria-hidden="true">
            <path
                fill="#0A0A0A"
                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
            />
            <text x="11" y="15" text-anchor="middle" font-size="6" font-weight="800" fill="#F6F1E7" font-family="Inter, sans-serif">NF</text>
        </svg>
        <div>
            <h2 class="text-sm font-bold tracking-wide">NAFA <span class="italic">i</span>STORE</h2>
            <p class="text-[10px] font-medium text-neutral-400">Admin Control Panel</p>
        </div>
    </div>

    <!-- Nav List -->
    <nav class="flex-1 space-y-1 p-4 text-sm font-medium">
        <a href="<?= base_url('admin/index.php') ?>" class="flex items-center gap-3 rounded-xl px-4 py-3 <?= $admin_page === 'dashboard' ? 'bg-cream font-semibold text-ink' : 'text-neutral-600 hover:bg-neutral-50 hover:text-ink' ?>">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
            Dashboard
        </a>
        <a href="<?= base_url('admin/produk/index.php') ?>" class="flex items-center gap-3 rounded-xl px-4 py-3 <?= $admin_page === 'produk' ? 'bg-cream font-semibold text-ink' : 'text-neutral-600 hover:bg-neutral-50 hover:text-ink' ?>">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            Kelola iPhone
        </a>
        <a href="<?= base_url('admin/pesanan/index.php') ?>" class="flex items-center gap-3 rounded-xl px-4 py-3 <?= $admin_page === 'pesanan' ? 'bg-cream font-semibold text-ink' : 'text-neutral-600 hover:bg-neutral-50 hover:text-ink' ?>">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
            Kunjungan Gerai
        </a>
        <a href="<?= base_url('admin/blog/index.php') ?>" class="flex items-center gap-3 rounded-xl px-4 py-3 <?= $admin_page === 'blog' ? 'bg-cream font-semibold text-ink' : 'text-neutral-600 hover:bg-neutral-50 hover:text-ink' ?>">
            <svg class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
            Kelola Blog
        </a>
    </nav>

    <!-- Bottom Actions -->
    <div class="border-t border-silver-200 p-4 space-y-1">
        <a href="<?= base_url('index.php') ?>" class="flex items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-semibold text-neutral-600 hover:bg-neutral-50 hover:text-ink">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            Lihat Web Utama
        </a>
        <a href="<?= base_url('auth/logout.php') ?>" class="flex items-center gap-3 rounded-xl px-4 py-2.5 text-xs font-semibold text-red-600 hover:bg-red-50">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            Keluar (Logout)
        </a>
    </div>
</aside>
