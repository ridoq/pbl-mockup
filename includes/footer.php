<?php
/**
 * NAFA iSTORE — Footer Komponen & Script Loader
 * PBL SMT3 SIB Polinema
 */
require_once __DIR__ . '/helpers.php';
?>
    <!-- ══════════ FOOTER ══════════ -->
    <footer class="border-t border-silver-200 bg-white py-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-10 md:grid-cols-4">
                <div class="md:col-span-2">
                    <a href="<?= base_url('index.php') ?>" class="flex items-center gap-3">
                        <svg width="26" height="30" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                fill="#0A0A0A"
                                d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
                            />
                            <text x="11" y="15" text-anchor="middle" font-size="6" font-weight="800" fill="#F6F1E7" font-family="Inter, sans-serif">NF</text>
                        </svg>
                        <span class="text-base font-bold tracking-wide sm:text-lg">NAFA <span class="italic">i</span>STORE</span>
                    </a>
                    <p class="mt-4 max-w-sm text-sm leading-relaxed text-neutral-500">
                        Destinasi terpercaya untuk iPhone original baru maupun second bergaransi resmi. Kualitas terinspeksi, transparan, dan terpercaya di Malang.
                    </p>
                </div>
                <div>
                    <h4 class="text-sm font-semibold">Navigasi</h4>
                    <ul class="mt-4 space-y-3 text-sm text-neutral-500">
                        <li><a href="<?= base_url('index.php') ?>" class="hover:text-ink transition">Beranda</a></li>
                        <li><a href="<?= base_url('katalog.php') ?>" class="hover:text-ink transition">Katalog</a></li>
                        <li><a href="<?= base_url('blog.php') ?>" class="hover:text-ink transition">Blog Edukasi</a></li>
                        <li><a href="<?= base_url('kontak.php') ?>" class="hover:text-ink transition">Kontak & Lokasi Gerai</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="text-sm font-semibold">Kontak Gerai</h4>
                    <ul class="mt-4 space-y-3 text-sm text-neutral-500">
                        <li><a href="https://wa.me/<?= APP_WA ?>" target="_blank" rel="noopener noreferrer" class="hover:text-ink transition">WA: <?= APP_PHONE ?></a></li>
                        <li><?= APP_EMAIL ?></li>
                        <li><?= APP_ADDRESS ?></li>
                        <li>Buka Setiap hari, 09.00–21.00 WIB</li>
                    </ul>
                </div>
            </div>
            <div class="mt-12 flex flex-col items-center justify-between gap-3 border-t border-silver-200 pt-8 text-xs text-neutral-400 sm:flex-row">
                <p>© <?= date('Y') ?> NAFA iSTORE. Semua hak dilindungi.</p>
                <div class="flex gap-6">
                    <a href="#" class="hover:text-ink transition">Syarat & Ketentuan</a>
                    <a href="#" class="hover:text-ink transition">Kebijakan Privasi</a>
                </div>
            </div>
        </div>
    </footer>

    <!-- Global Toast Component -->
    <div
        id="toast"
        class="pointer-events-none fixed bottom-6 left-1/2 z-[60] -translate-x-1/2 translate-y-20 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-ink opacity-0 shadow-2xl transition-all duration-300"
    >
        <span id="toastMsg"></span>
    </div>

    <!-- Core Modular Scripts -->
    <script src="<?= asset('js/data-produk.js') ?>"></script>
    <script src="<?= asset('js/components/navbar.js') ?>"></script>
    <script src="<?= asset('js/components/toast.js') ?>"></script>
    <script src="<?= asset('js/components/reveal.js') ?>"></script>

    <?= $extra_scripts ?? '' ?>
</body>
</html>
