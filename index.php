<?php
$page_title = 'NAFA iSTORE — World From Device';
$current_page = 'home';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

        <!-- ══════════ HERO ══════════ -->
        <section class="px-4 pt-6 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-7xl">
                <div class="relative overflow-hidden rounded-4xl bg-ink">
                    <div class="relative mt-8 flex items-center justify-center px-4 sm:mt-10 sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[48%] lg:justify-center">
                        <!-- Ambient glow: burgundy utama + cream sekunder -->
                        <div class="pointer-events-none absolute h-64 w-64 rounded-full bg-rose-900/25 blur-3xl lg:h-96 lg:w-96"></div>
                        <div class="pointer-events-none absolute -bottom-10 right-8 h-52 w-52 rounded-full bg-cream/10 blur-3xl"></div>
                        <!-- Ring dekoratif di belakang device -->
                        <div class="pointer-events-none absolute h-[26rem] w-[26rem] rounded-full border border-white/10 lg:h-[30rem] lg:w-[30rem]"></div>
                        <div class="pointer-events-none absolute h-80 w-80 rounded-full border border-white/5 lg:h-96 lg:w-96"></div>

                        <div class="animate-floaty relative z-10 flex items-center justify-center">
                            <div class="relative">
                                <img
                                    src="<?= asset('img/herotest1.webp') ?>"
                                    alt="iPhone 18 Pro Max Burgundy"
                                    class="max-h-72 w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition duration-500 hover:scale-105 sm:max-h-96 lg:max-h-[470px] xl:max-h-[500px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="relative z-10 max-w-2xl px-6 py-12 sm:px-12 sm:py-20 lg:py-28 lg:pl-16">
                        <div class="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/60 px-4 py-1.5 backdrop-blur-sm">
                            <span class="h-2 w-2 rounded-full bg-cream"></span>
                            <span class="text-xs font-semibold tracking-wide text-cream">Flagship 2026 Ready</span>
                        </div>
                        <h1 class="font-display mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            iPhone Impianmu.<br />
                            <span class="italic font-normal text-cream">Tanpa Drama.</span>
                        </h1>
                        <p class="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
                            Pilihan iPhone original baru dan second bergaransi resmi. Kualitas terkurasi, harga masuk akal, dan siap pakai sejak hari pertama.
                        </p>
                        <div class="mt-8 flex flex-wrap items-center gap-4">
                            <a href="<?= base_url('katalog.php') ?>" class="rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition hover:bg-white">Beli Sekarang</a>
                            <a href="<?= base_url('kontak.php') ?>" class="rounded-full border border-neutral-700 px-8 py-4 text-sm font-semibold text-white transition hover:border-cream/60">Konsultasi Dulu</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════ NILAI UTAMA (USP) ══════════ -->
        <section class="py-16 sm:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    <div class="rounded-3xl border border-silver-200 bg-silver-100 p-7">
                        <div class="text-xs font-bold tracking-[0.2em] text-neutral-400">01</div>
                        <h3 class="mt-4 text-lg font-semibold">100% Original</h3>
                        <p class="mt-2 text-sm leading-relaxed text-neutral-500">Bukan rekondisi abal-abal. IMEI tembus, semua fungsi tested.</p>
                    </div>
                    <div class="rounded-3xl border border-silver-200 bg-silver-100 p-7">
                        <div class="text-xs font-bold tracking-[0.2em] text-neutral-400">02</div>
                        <h3 class="mt-4 text-lg font-semibold">Garansi Resmi Toko</h3>
                        <p class="mt-2 text-sm leading-relaxed text-neutral-500">Ada kendala? Kami bantu sampai tuntas tanpa ribet.</p>
                    </div>
                    <div class="rounded-3xl border border-silver-200 bg-silver-100 p-7">
                        <div class="text-xs font-bold tracking-[0.2em] text-neutral-400">03</div>
                        <h3 class="mt-4 text-lg font-semibold">Bisa Cicilan 0%</h3>
                        <p class="mt-2 text-sm leading-relaxed text-neutral-500">Cicilan ringan sampai 12 bulan via berbagai metode bayar.</p>
                    </div>
                    <div class="rounded-3xl border border-silver-200 bg-silver-100 p-7">
                        <div class="text-xs font-bold tracking-[0.2em] text-neutral-400">04</div>
                        <h3 class="mt-4 text-lg font-semibold">Tukar Tambah Adil</h3>
                        <p class="mt-2 text-sm leading-relaxed text-neutral-500">Upgrade dari hp lama kamu dengan taksiran harga transparan.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════ KATEGORI ══════════ -->
        <section class="border-t border-silver-200 py-16 sm:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p class="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Lini Produk</p>
                        <h2 class="font-display mt-2 text-2xl font-bold tracking-tight sm:text-4xl">Temukan iPhone Sesuai Kebutuhanmu</h2>
                    </div>
                    <a href="<?= base_url('katalog.php') ?>" class="text-sm font-semibold underline underline-offset-4 hover:text-neutral-600">Lihat Semua →</a>
                </div>

                <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                    <a href="<?= base_url('katalog.php?cat=iPhone%2018%20Series') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:border-creamdark hover:shadow-lg">
                        <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream transition group-hover:scale-105">
                            <span class="font-display text-xl font-bold">18</span>
                        </div>
                        <p class="mt-4 text-sm font-semibold">iPhone 18 Series</p>
                        <p class="mt-1 text-xs text-neutral-400">Flagship 2026</p>
                    </a>

                    <a href="<?= base_url('katalog.php?cat=iPhone%2017%20Series') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:border-creamdark hover:shadow-lg">
                        <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream transition group-hover:scale-105">
                            <span class="font-display text-xl font-bold">17</span>
                        </div>
                        <p class="mt-4 text-sm font-semibold">iPhone 17 Series</p>
                        <p class="mt-1 text-xs text-neutral-400">Ultra Slim Air</p>
                    </a>

                    <a href="<?= base_url('katalog.php?cat=iPhone%2016%20Series') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:border-creamdark hover:shadow-lg">
                        <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream transition group-hover:scale-105">
                            <span class="font-display text-xl font-bold">16</span>
                        </div>
                        <p class="mt-4 text-sm font-semibold">iPhone 16 Series</p>
                        <p class="mt-1 text-xs text-neutral-400">Apple Intelligence</p>
                    </a>

                    <a href="<?= base_url('katalog.php?cat=iPhone%2015%20Series') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:border-creamdark hover:shadow-lg">
                        <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream transition group-hover:scale-105">
                            <span class="font-display text-xl font-bold">15</span>
                        </div>
                        <p class="mt-4 text-sm font-semibold">iPhone 15 Series</p>
                        <p class="mt-1 text-xs text-neutral-400">Titanium & Type-C</p>
                    </a>

                    <a href="<?= base_url('katalog.php?cat=iPhone%2014%20Series') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:border-creamdark hover:shadow-lg">
                        <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-cream transition group-hover:scale-105">
                            <span class="font-display text-xl font-bold">14</span>
                        </div>
                        <p class="mt-4 text-sm font-semibold">iPhone 14 Series</p>
                        <p class="mt-1 text-xs text-neutral-400">Paling Pas</p>
                    </a>

                    <a href="<?= base_url('katalog.php?cat=Second%20Mulus') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:border-creamdark hover:shadow-lg">
                        <div class="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-ink text-white transition group-hover:scale-105">
                            <span class="font-display text-xl font-bold text-cream">2nd</span>
                        </div>
                        <p class="mt-4 text-sm font-semibold">Second Mulus</p>
                        <p class="mt-1 text-xs text-neutral-400">Hemat & Teruji</p>
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════ PRODUK UNGGULAN ══════════ -->
        <section class="py-16 sm:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                    <div>
                        <p class="text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Koleksi Pilihan</p>
                        <h2 class="font-display mt-2 text-2xl font-bold tracking-tight sm:text-4xl">Sedang Banyak Dicari</h2>
                    </div>
                    <div class="flex gap-2">
                        <button id="tabBaru" class="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition">Kondisi Baru</button>
                        <button id="tabSecond" class="rounded-full border border-silver-300 px-4 py-2 text-xs font-semibold text-neutral-600 transition hover:border-ink">Second Mulus</button>
                    </div>
                </div>

                <div id="productGrid" class="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
                    <!-- Diisi dinamis oleh home.js -->
                </div>
            </div>
        </section>

        <!-- ══════════ BANNER PROMO / TRADE-IN ══════════ -->
        <section class="py-8">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="relative overflow-hidden rounded-4xl bg-cream p-8 sm:p-14">
                    <div class="relative z-10 max-w-xl">
                        <span class="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500">Program Tukar Tambah</span>
                        <h3 class="font-display mt-3 text-2xl font-bold tracking-tight sm:text-4xl">Bawa iPhone Lamamu, Pulang Bawa yang Baru.</h3>
                        <p class="mt-4 text-sm leading-relaxed text-neutral-600 sm:text-base">
                            Taksiran harga cepat dalam 10 menit via WhatsApp. Potongan harga langsung memotong total pembayaranmu.
                        </p>
                        <a href="https://wa.me/<?= APP_WA ?>?text=Halo%20min,%20mau%20tanya%20tukar%20tambah" target="_blank" rel="noopener noreferrer" class="mt-6 inline-block rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800">Cek Taksiran via WA</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════ TESTIMONI ══════════ -->
        <section class="border-t border-silver-200 py-16 sm:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p class="text-center text-xs font-bold tracking-[0.2em] uppercase text-neutral-400">Kata Mereka</p>
                <h2 class="font-display mt-2 text-center text-2xl font-bold tracking-tight sm:text-4xl">Pengalaman Beli di NAFA iSTORE</h2>

                <div class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div class="rounded-3xl border border-silver-200 bg-white p-7">
                        <div class="flex items-center gap-1 text-ink">★★★★★</div>
                        <p class="mt-4 text-sm leading-relaxed text-neutral-600">
                            "Awalnya ragu beli second, tapi pas barang nyampe bener-bener kayak baru. Batre health 94%, mulus no dent. Rekomendasi banget!"
                        </p>
                        <div class="mt-6 border-t border-silver-200 pt-4">
                            <p class="text-sm font-semibold">Dimas Anggara</p>
                            <p class="text-xs text-neutral-400">Beli iPhone 13 128GB Second</p>
                        </div>
                    </div>

                    <div class="rounded-3xl border border-silver-200 bg-white p-7">
                        <div class="flex items-center gap-1 text-ink">★★★★★</div>
                        <p class="mt-4 text-sm leading-relaxed text-neutral-600">
                            "Pelayanan cepet, tanya-tanya di WA dibales detail banget. iPhone 15 Pro Max-nya original segel green peel utuh. Puas!"
                        </p>
                        <div class="mt-6 border-t border-silver-200 pt-4">
                            <p class="text-sm font-semibold">Sarah Nabila</p>
                            <p class="text-xs text-neutral-400">Beli iPhone 15 Pro Max Baru</p>
                        </div>
                    </div>

                    <div class="rounded-3xl border border-silver-200 bg-white p-7">
                        <div class="flex items-center gap-1 text-ink">★★★★★</div>
                        <p class="mt-4 text-sm leading-relaxed text-neutral-600">
                            "Tukar tambah iPhone 11 ke 14 gampang bgt. Harga taksiran masuk akal, gak dijatuhin kayak di konter lain. Sukses terus NAFA!"
                        </p>
                        <div class="mt-6 border-t border-silver-200 pt-4">
                            <p class="text-sm font-semibold">Rian Pratama</p>
                            <p class="text-xs text-neutral-400">Trade-in ke iPhone 14</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════ CTA PENUTUP ══════════ -->
        <section class="py-16 sm:py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="rounded-4xl bg-ink p-10 text-center sm:p-16">
                    <h2 class="font-display text-2xl font-bold tracking-tight text-white sm:text-4xl">Siap Upgrade iPhone Kamu Hari Ini?</h2>
                    <p class="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-neutral-400 sm:text-base">
                        Kunjungi katalog lengkap kami atau hubungi admin untuk cek stok terbaru dan promo hari ini.
                    </p>
                    <div class="mt-8 flex flex-wrap justify-center gap-4">
                        <a href="<?= base_url('katalog.php') ?>" class="rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition hover:bg-white">Pesan Sekarang</a>
                        <a href="<?= base_url('kontak.php') ?>" class="rounded-full border border-neutral-700 px-8 py-4 text-sm font-semibold text-white transition hover:border-cream/60">Tanya Dulu, Gapapa</a>
                    </div>
                </div>
            </div>
        </section>

<?php
$extra_scripts = '<script src="' . asset('js/pages/home.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
