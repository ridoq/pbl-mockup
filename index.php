<?php
$page_title = 'NAFA iSTORE — World From Device';
$current_page = 'home';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

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

                                <a
                                    href="<?= base_url('katalog.php') ?>"
                                    class="animate-floaty-slow absolute -right-6 top-6 z-20 hidden items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 shadow-2xl backdrop-blur-md transition hover:border-cream/40 sm:flex lg:-right-8 lg:top-8"
                                >
                                    <!-- <span class="grid h-8 w-8 place-items-center rounded-xl bg-cream text-xs">📱</span> -->
                                    <span>
                                        <span class="block text-xs font-semibold text-white">iPhone 18 Pro Max</span>
                                        <span class="block text-[11px] text-cream/70">Mulai Rp29.499.000</span>
                                    </span>
                                </a>

                                <!-- Floating badge: garansi (pepet kiri bawah HP) -->
                                <div
                                    class="animate-floaty-slow absolute -left-8 bottom-8 z-20 hidden items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-2.5 shadow-2xl backdrop-blur-md sm:flex lg:-left-12 lg:bottom-10"
                                >
                                    <span class="grid h-7 w-7 place-items-center rounded-full bg-cream text-xs">✓</span>
                                    <span class="text-xs font-semibold text-white">100% Original · Garansi Resmi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="relative z-10 px-6 pt-4 pb-12 sm:px-12 sm:py-20 lg:max-w-[52%] lg:px-16 lg:py-28">
                        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">World From Device</p>
                        <h1 class="font-calibri mt-4 text-3xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Temukan iPhone Pilihanmu<br class="hidden sm:block" />
                            <span class="font-calibri  text-cream/90">di NafaiStore</span>
                        </h1>
                        <p class="mt-6 max-w-md text-[15px] leading-relaxed text-neutral-400 sm:text-base">
                            Pilihan iPhone untuk berbagai kebutuhan, dengan kualitas dan harga yang terbaik.
                        </p>
                        <div class="mt-9 flex flex-wrap items-center gap-5">
                            <a href="<?= base_url('katalog.php') ?>" class="rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white"
                                >Lihat Koleksi</a
                            >
                            <a
                                href="<?= base_url('kontak.php') ?>"
                                class="text-sm font-medium text-neutral-300 underline decoration-neutral-600 underline-offset-8 transition hover:text-white hover:decoration-white"
                                >Kunjungi toko kami</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ══════════ KEUNGGULAN / NILAI UTAMA ══════════ -->
        <section class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
                <div class="reveal group">
                    <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cream text-ink shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" />
                        </svg>
                    </div>
                    <p class="text-3xl font-semibold tracking-tight sm:text-4xl">100%</p>
                    <p class="mt-2 text-sm text-neutral-500">Unit resmi iBox bergaransi</p>
                </div>
                <div class="reveal group">
                    <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cream text-ink shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" />
                        </svg>
                    </div>
                    <p class="text-3xl font-semibold tracking-tight sm:text-4xl">30+</p>
                    <p class="mt-2 text-sm text-neutral-500">Titik uji kualitas &amp; fungsi</p>
                </div>
                <div class="reveal group">
                    <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cream text-ink shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /><path d="M20 3v4" /><path d="M22 5h-4" /><path d="M4 17v2" /><path d="M5 18H3" />
                        </svg>
                    </div>
                    <p class="text-3xl font-semibold tracking-tight sm:text-4xl">98%+</p>
                    <p class="mt-2 text-sm text-neutral-500">Standar fisik mulus Grade A</p>
                </div>
                <div class="reveal group">
                    <div class="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-cream text-ink shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
                        <svg class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" /><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" /><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" /><path d="M2 7h20" /><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7" />
                        </svg>
                    </div>
                    <p class="text-3xl font-semibold tracking-tight sm:text-4xl">Gratis</p>
                    <p class="mt-2 text-sm text-neutral-500">Konsultasi &amp; cek unit di toko</p>
                </div>
            </div>
        </section>

        <!-- ══════════ MARQUEE ══════════ -->
        <section class="overflow-hidden border-y border-creamdark/60 bg-cream py-5">
            <div class="flex w-max animate-marquee gap-10">
                <div class="flex shrink-0 items-center gap-10 text-xs font-semibold uppercase tracking-[0.25em] text-ink/60" id="marqueeList"></div>
                <div class="flex shrink-0 items-center gap-10 text-xs font-semibold uppercase tracking-[0.25em] text-ink/60" id="marqueeList2" aria-hidden="true"></div>
            </div>
        </section>

        <!-- ══════════ KATEGORI GENERASI ══════════ -->
        <section class="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:pb-28 lg:px-8">
            <div class="reveal flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Kategori</p>
                    <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Jelajahi per Generasi</h2>
                </div>
                <a href="<?= base_url('katalog.php') ?>" class="text-sm font-semibold underline decoration-neutral-300 underline-offset-8 transition hover:decoration-ink">Semua kategori →</a>
            </div>
            <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                <a href="<?= base_url('katalog.php?q=iPhone%2018') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-creamdark hover:shadow-lg hover:shadow-silver-200/70">
                    <div class="product-stage mx-auto grid h-16 w-16 place-items-center rounded-full text-xl font-semibold transition duration-300 group-hover:scale-105">18</div>
                    <p class="mt-4 text-sm font-semibold">iPhone 18 Series</p>
                    <p class="mt-1 text-xs text-neutral-400" data-gen="iPhone 18"></p>
                </a>
                <a href="<?= base_url('katalog.php?q=iPhone%2017') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-creamdark hover:shadow-lg hover:shadow-silver-200/70">
                    <div class="product-stage mx-auto grid h-16 w-16 place-items-center rounded-full text-xl font-semibold transition duration-300 group-hover:scale-105">17</div>
                    <p class="mt-4 text-sm font-semibold">iPhone 17 Series</p>
                    <p class="mt-1 text-xs text-neutral-400" data-gen="iPhone 17"></p>
                </a>
                <a href="<?= base_url('katalog.php?q=iPhone%2016') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-creamdark hover:shadow-lg hover:shadow-silver-200/70">
                    <div class="product-stage mx-auto grid h-16 w-16 place-items-center rounded-full text-xl font-semibold transition duration-300 group-hover:scale-105">16</div>
                    <p class="mt-4 text-sm font-semibold">iPhone 16 Series</p>
                    <p class="mt-1 text-xs text-neutral-400" data-gen="iPhone 16"></p>
                </a>
                <a href="<?= base_url('katalog.php?q=iPhone%2015') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-creamdark hover:shadow-lg hover:shadow-silver-200/70">
                    <div class="product-stage mx-auto grid h-16 w-16 place-items-center rounded-full text-xl font-semibold transition duration-300 group-hover:scale-105">15</div>
                    <p class="mt-4 text-sm font-semibold">iPhone 15 Series</p>
                    <p class="mt-1 text-xs text-neutral-400" data-gen="iPhone 15"></p>
                </a>
                <a href="<?= base_url('katalog.php?q=iPhone%2014') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-creamdark hover:shadow-lg hover:shadow-silver-200/70">
                    <div class="product-stage mx-auto grid h-16 w-16 place-items-center rounded-full text-xl font-semibold transition duration-300 group-hover:scale-105">14</div>
                    <p class="mt-4 text-sm font-semibold">iPhone 14 Series</p>
                    <p class="mt-1 text-xs text-neutral-400" data-gen="iPhone 14"></p>
                </a>
                <a href="<?= base_url('katalog.php?cond=Second') ?>" class="group rounded-3xl border border-silver-200 bg-white p-5 text-center transition hover:-translate-y-1 hover:border-creamdark hover:shadow-lg hover:shadow-silver-200/70">
                    <div class="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ink text-xl font-semibold text-cream transition duration-300 group-hover:scale-105">2nd</div>
                    <p class="mt-4 text-sm font-semibold">Second Mulus</p>
                    <p class="mt-1 text-xs text-neutral-400" data-gen="Second"></p>
                </a>
            </div>
        </section>

        <!-- ══════════ PRODUK PILIHAN — BENTO GRID ASIMETRIS ══════════ -->
        <section id="produk" class="bg-silver-100 py-20">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <!-- Section Header -->
                <div class="reveal flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Kurasi Pilihan</p>
                        <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Produk Pilihan Minggu Ini</h2>
                        <p class="mt-3 max-w-md text-neutral-500">Unit unggulan yang paling banyak dicari — resmi, terkurasi, dan siap kirim hari ini.</p>
                    </div>
                    <a href="<?= base_url('katalog.php') ?>" class="rounded-full border border-silver-300 bg-white px-6 py-3 text-sm font-semibold transition hover:border-ink">Lihat Semua Katalog (29 Unit) →</a>
                </div>

                <!-- Bento Grid Layout (12 Kolom) -->
                <div id="featuredGrid" class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
                    <!-- TILE 1: Star of the Week (Flagship Spotlight) -->
                    <a href="<?= base_url('detail-produk.php?id=iphone-18-pro-max') ?>" class="reveal group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-rose-950/40 bg-gradient-to-br from-[#16060A] via-[#0E0C0E] to-[#070708] p-7 text-white shadow-xl transition hover:border-rose-900/60 hover:shadow-2xl hover:shadow-rose-950/30 sm:p-10 md:col-span-2 lg:col-span-7 lg:row-span-2">
                        <!-- Ambient Burgundy Glow -->
                        <div class="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#8B1538]/25 blur-3xl"></div>
                        <div class="pointer-events-none absolute -bottom-16 left-10 h-64 w-64 rounded-full bg-[#590D22]/20 blur-3xl"></div>

                        <div class="relative z-10">
                            <div class="flex flex-wrap items-center gap-2.5">
                                <span class="inline-flex items-center gap-1.5 rounded-full border border-rose-500/30 bg-rose-950/70 px-3 py-1 text-xs font-semibold text-rose-200">
                                    <span class="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse"></span>
                                    ★ Pilihan Utama Minggu Ini
                                </span>
                                <span class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
                                    Resmi iBox
                                </span>
                            </div>
                            <h3 class="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                                iPhone 18 Pro Max
                            </h3>
                            <p class="mt-1.5 text-sm font-medium text-rose-200/80">
                                256GB · Deep Crimson Titanium · Garansi Resmi
                            </p>

                            <!-- Feature Pills -->
                            <div class="mt-4 flex flex-wrap gap-2 text-xs">
                                <span class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Chip A20 Pro 3nm</span>
                                <span class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Layar 6.9" 144Hz</span>
                                <span class="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-neutral-300">Quad 48MP Periscope</span>
                            </div>
                        </div>

                        <!-- Center Phone Visual -->
                        <div class="relative z-10 my-6 flex items-center justify-center">
                            <img 
                                src="<?= asset('img/productNew/iphone-18-pro-max-deep-crimson.webp') ?>" 
                                alt="iPhone 18 Pro Max Deep Crimson" 
                                class="max-h-60 sm:max-h-72 w-auto object-contain drop-shadow-[0_20px_35px_rgba(139,21,56,0.4)] transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <!-- Footer Info & Price -->
                        <div class="relative z-10 flex flex-wrap items-end justify-between gap-4 border-t border-white/10 pt-5">
                            <div>
                                <p class="text-xs text-neutral-400">Harga Resmi Mulai</p>
                                <p class="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">Rp 25.999.000</p>
                                <p class="text-xs text-rose-300/80">Cicilan 0% mulai Rp 2.166.583 / bln</p>
                            </div>
                            <span class="inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-bold text-ink transition group-hover:bg-white group-hover:shadow-lg">
                                <span>Lihat Detail</span>
                                <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </div>
                    </a>

                    <!-- TILE 2: Best Value (iPhone 17 Air) -->
                    <a href="<?= base_url('detail-produk.php?id=iphone-17-air') ?>" class="reveal group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-silver-200 bg-white p-6 sm:p-7 transition hover:-translate-y-1 hover:border-creamdark hover:shadow-xl hover:shadow-silver-200/60 md:col-span-1 lg:col-span-5">
                        <div>
                            <div class="flex items-center justify-between gap-2">
                                <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 border border-amber-200">
                                    🔥 Best Value & Paling Tipis
                                </span>
                                <span class="rounded-full border border-silver-200 bg-silver-100 px-2.5 py-1 text-[11px] font-semibold text-neutral-600">
                                    Baru
                                </span>
                            </div>
                            <h3 class="mt-3 text-xl font-bold tracking-tight text-ink group-hover:text-neutral-700">
                                iPhone 17 Air
                            </h3>
                            <p class="mt-1 text-xs text-neutral-500">256GB · Cloud Blue · Bodi Ultra Slim Ringan</p>
                        </div>

                        <div class="product-stage product-stage-halo relative my-4 overflow-hidden rounded-2xl py-4 flex items-center justify-center">
                            <img 
                                src="<?= asset('img/productNew/iphone-17-air-cloud-blue.webp') ?>" 
                                alt="iPhone 17 Air Cloud Blue" 
                                class="max-h-40 w-auto object-contain transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div class="flex items-center justify-between border-t border-silver-200 pt-4">
                            <div>
                                <p class="text-[11px] text-neutral-400">Harga Resmi</p>
                                <p class="text-xl font-bold text-ink">Rp 16.999.000</p>
                            </div>
                            <span class="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-neutral-800">
                                Detail →
                            </span>
                        </div>
                    </a>

                    <!-- TILE 3: Second Grade A+ Like New (iPhone 13 Pro) -->
                    <a href="<?= base_url('detail-produk.php?id=iphone-13-pro-bekas') ?>" class="reveal group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-silver-200 bg-white p-6 sm:p-7 transition hover:-translate-y-1 hover:border-creamdark hover:shadow-xl hover:shadow-silver-200/60 md:col-span-1 lg:col-span-5">
                        <div>
                            <div class="flex items-center justify-between gap-2">
                                <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 border border-emerald-200">
                                    💎 Second Grade A+ Like New
                                </span>
                                <span class="rounded-full bg-ink px-2.5 py-1 text-[11px] font-semibold text-cream italic">
                                    Second
                                </span>
                            </div>
                            <h3 class="mt-3 text-xl font-bold tracking-tight text-ink group-hover:text-neutral-700">
                                iPhone 13 Pro
                            </h3>
                            <p class="mt-1 text-xs text-neutral-500">128GB · Sierra Blue · Fisik 98% Mulus & BH 88%+</p>
                        </div>

                        <div class="product-stage product-stage-halo relative my-4 overflow-hidden rounded-2xl py-4 flex items-center justify-center">
                            <img 
                                src="<?= asset('img/productNew/iphone-13-pro-max-sierra-blue.webp') ?>" 
                                alt="iPhone 13 Pro Sierra Blue" 
                                class="max-h-40 w-auto object-contain transition duration-500 group-hover:scale-105"
                            />
                        </div>

                        <div class="flex items-center justify-between border-t border-silver-200 pt-4">
                            <div>
                                <p class="text-[11px] text-neutral-400">Harga Hemat</p>
                                <p class="text-xl font-bold text-ink">Rp 9.999.000</p>
                            </div>
                            <span class="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-neutral-800">
                                Detail →
                            </span>
                        </div>
                    </a>

                    <!-- TILE 4: Layanan Tukar Tambah / Trade-In Banner -->
                    <div class="reveal relative flex flex-col justify-between overflow-hidden rounded-4xl border border-creamdark bg-gradient-to-r from-cream via-[#F5EFE4] to-creamdark/40 p-7 sm:p-9 shadow-sm sm:flex-row sm:items-center gap-6 md:col-span-2 lg:col-span-8">
                        <div class="max-w-xl">
                            <div class="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/60 px-3 py-1 text-xs font-semibold text-ink backdrop-blur-sm">
                                <span>🔄</span> Program Trade-In Resmi
                            </div>
                            <h3 class="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                                Tukar iPhone Lamamu, Upgrade Tanpa Beban
                            </h3>
                            <p class="mt-2 text-sm leading-relaxed text-neutral-600">
                                Punya iPhone seri lama? Tukarkan langsung di Nafa iStore dengan taksiran harga tertinggi. Potong harga langsung ke unit baru atau second pilihanmu.
                            </p>
                        </div>
                        <a href="https://wa.me/6281234567890?text=Halo%20Nafa%20iStore,%20saya%20mau%20tanya%20tukar%20tambah%20iPhone" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 shrink-0 shadow-lg shadow-ink/10">
                            <span>Taksir via WhatsApp</span>
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>

                    <!-- TILE 5: Akses Katalog Lengkap -->
                    <a href="<?= base_url('katalog.php') ?>" class="reveal group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-silver-200 bg-white p-7 sm:p-9 transition hover:-translate-y-1 hover:border-ink hover:shadow-xl hover:shadow-silver-200/60 md:col-span-2 lg:col-span-4">
                        <div>
                            <div class="inline-flex items-center gap-2 rounded-full border border-silver-200 bg-silver-100 px-3 py-1 text-xs font-semibold text-neutral-600">
                                📱 29+ Pilihan Model
                            </div>
                            <h3 class="mt-4 text-2xl font-bold tracking-tight text-ink group-hover:underline">
                                Semua iPhone di Katalog
                            </h3>
                            <p class="mt-2 text-sm text-neutral-500">
                                Lihat perbandingan harga, kapasitas, dan warna lengkap dari seri 11 hingga 18 Pro Max.
                            </p>
                        </div>

                        <div class="mt-6 flex items-center justify-between border-t border-silver-200 pt-5">
                            <span class="text-sm font-semibold text-ink">Buka Katalog Lengkap</span>
                            <span class="grid h-10 w-10 place-items-center rounded-full bg-silver-100 text-ink transition group-hover:bg-ink group-hover:text-cream">
                                →
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </section>

        <!-- ══════════ BLOG TEASER ══════════ -->
        <section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div class="reveal flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Blog</p>
                    <h2 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Tips dari toko kami</h2>
                </div>
                <a href="<?= base_url('blog.php') ?>" class="text-sm font-semibold underline decoration-neutral-300 underline-offset-8 transition hover:decoration-ink">Semua artikel →</a>
            </div>
            <div id="homeBlogGrid" class="mt-12 grid gap-6 md:grid-cols-3">
                <!-- Diisi dinamis oleh home.js (dari data blog) -->
            </div>
        </section>

        <!-- ══════════ CTA ══════════ -->
        <section class="px-4 pb-20 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-7xl">
                <div class="reveal rounded-4xl bg-ink px-7 py-16 text-center sm:px-12 lg:py-24">
                    <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">Ready Stock</p>
                    <h2 class="mx-auto mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Siap upgrade ke <span class="italic text-cream/90">iPhone</span> baru?
                    </h2>
                    <p class="mx-auto mt-5 max-w-md text-neutral-400">Ambil langsung di toko, atau pesan lewat Tokopedia kami.</p>
                    <div class="mt-9 flex flex-wrap items-center justify-center gap-4">
                        <a href="<?= base_url('katalog.php') ?>" class="rounded-full bg-cream px-8 py-4 text-sm font-semibold text-ink transition hover:bg-white">Pesan Sekarang</a>
                        <a href="<?= base_url('kontak.php') ?>" class="rounded-full border border-neutral-700 px-8 py-4 text-sm font-semibold text-white transition hover:border-cream/60"
                            >Tanya Dulu, Gapapa</a
                        >
                    </div>
                </div>
            </div>
        </section>

<?php
$extra_scripts = '<script src="' . asset('js/data-blog.js') . '"></script>'
               . '<script src="' . asset('js/pages/home.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
