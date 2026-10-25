<?php
$page_title = 'Katalog iPhone Lengkap — NAFA iSTORE';
$current_page = 'katalog';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

        <main class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <!-- Header card (gaya hero beranda) -->
            <div class="relative overflow-hidden rounded-4xl bg-ink px-7 py-10 sm:px-12 sm:py-14">
                <div class="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-rose-900/20 blur-3xl"></div>
                <div class="pointer-events-none absolute -bottom-12 right-24 h-40 w-40 rounded-full bg-cream/10 blur-3xl"></div>
                <div class="relative z-10 max-w-xl">
                    <p class="text-xs font-semibold uppercase tracking-[0.25em] text-cream/60">Katalog</p>
                    <h1 class="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Semua iPhone</h1>
                    <p class="mt-3 text-neutral-400">
                        Tersedia unit <span class="font-semibold text-white">Baru</span> bergaransi resmi &
                        <span class="font-semibold text-white italic">Second</span> pilihan yang lolos inspeksi 30 titik. Klik produk untuk detail.
                    </p>
                </div>
            </div>

            <!-- ══════════ LAYOUT: SIDEBAR + GRID ══════════ -->
            <div class="mt-8 grid gap-8 lg:grid-cols-[260px_1fr]">
                <!-- ═══ SIDEBAR FILTER ═══ -->
                <aside>
                    <!-- Tombol toggle filter (khusus mobile) -->
                    <button
                        id="filterToggle"
                        class="mb-4 flex w-full items-center justify-between rounded-full border border-silver-200 bg-white px-5 py-3.5 text-sm font-semibold lg:hidden"
                    >
                        <span class="flex items-center gap-2">
                            <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 6h16M7 12h10M10 18h4" /></svg>
                            Filter
                        </span>
                        <svg id="filterChevron" class="h-4 w-4 transition" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" /></svg>
                    </button>

                    <div id="filterPanel" class="hidden lg:sticky lg:top-24 lg:block lg:self-start">
                        <div class="nafa-scroll rounded-3xl border border-silver-200 lg:max-h-[calc(100vh-9rem)] lg:overflow-y-auto">
                            <div class="fade-zone p-6">
                                <!-- Heading + reset -->
                                <div class="flex items-center justify-between">
                                    <h2 class="font-semibold">Filter</h2>
                                    <button id="resetBtn" class="text-xs font-semibold text-neutral-400 underline underline-offset-4 transition hover:text-ink">Reset</button>
                                </div>

                                <!-- Kondisi -->
                                <div class="mt-6 border-t border-silver-200 pt-6">
                                    <h3 class="text-sm font-semibold">Kondisi</h3>
                                    <div class="mt-3 space-y-2.5">
                                        <label class="flex cursor-pointer items-center gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="condCheck h-4 w-4 rounded border-silver-300 accent-ink" value="Baru" />
                                            <span>Baru</span>
                                        </label>
                                        <label class="flex cursor-pointer items-center gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="condCheck h-4 w-4 rounded border-silver-300 accent-ink" value="Second" />
                                            <span class="italic">Second</span>
                                        </label>
                                    </div>
                                </div>

                                <!-- Kategori -->
                                <div class="mt-6 border-t border-silver-200 pt-6">
                                    <h3 class="text-sm font-semibold">Kategori</h3>
                                    <div class="mt-3.5 space-y-3">
                                        <label class="flex cursor-pointer items-start gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="catCheck mt-0.5 h-4 w-4 rounded border-silver-300 accent-ink shrink-0" value="SE Series" />
                                            <div class="leading-tight">
                                                <span class="font-medium text-ink">SE Series</span>
                                                <p class="mt-0.5 text-[11px] text-neutral-400">Layar klasik / paling terjangkau</p>
                                            </div>
                                        </label>
                                        <label class="flex cursor-pointer items-start gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="catCheck mt-0.5 h-4 w-4 rounded border-silver-300 accent-ink shrink-0" value="Standard / Base Model" />
                                            <div class="leading-tight">
                                                <span class="font-medium text-ink">Standard / Base Model</span>
                                                <p class="mt-0.5 text-[11px] text-neutral-400">Ukuran pas / 2 kamera</p>
                                            </div>
                                        </label>
                                        <label class="flex cursor-pointer items-start gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="catCheck mt-0.5 h-4 w-4 rounded border-silver-300 accent-ink shrink-0" value="Plus Model" />
                                            <div class="leading-tight">
                                                <span class="font-medium text-ink">Plus Model</span>
                                                <p class="mt-0.5 text-[11px] text-neutral-400">Layar besar / 2 kamera</p>
                                            </div>
                                        </label>
                                        <label class="flex cursor-pointer items-start gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="catCheck mt-0.5 h-4 w-4 rounded border-silver-300 accent-ink shrink-0" value="Pro Model" />
                                            <div class="leading-tight">
                                                <span class="font-medium text-ink">Pro Model</span>
                                                <p class="mt-0.5 text-[11px] text-neutral-400">Fitur lengkap & profesional / 3 kamera</p>
                                            </div>
                                        </label>
                                        <label class="flex cursor-pointer items-start gap-3 text-sm text-neutral-600 transition hover:text-ink">
                                            <input type="checkbox" class="catCheck mt-0.5 h-4 w-4 rounded border-silver-300 accent-ink shrink-0" value="Pro Max Model" />
                                            <div class="leading-tight">
                                                <span class="font-medium text-ink">Pro Max Model</span>
                                                <p class="mt-0.5 text-[11px] text-neutral-400">Layar paling besar, baterai paling awet, & fitur lengkap</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>

                                <!-- Rentang harga cepat -->
                                <div class="mt-6 border-t border-silver-200 pt-6">
                                    <h3 class="text-sm font-semibold">Rentang Harga</h3>
                                    <div class="mt-3 flex flex-wrap gap-2">
                                        <button
                                            data-min=""
                                            data-max="8000000"
                                            class="priceChip rounded-full border border-silver-200 px-3.5 py-1.5 text-xs font-medium transition hover:border-ink"
                                        >
                                            &lt; 8jt
                                        </button>
                                        <button
                                            data-min="8000000"
                                            data-max="15000000"
                                            class="priceChip rounded-full border border-silver-200 px-3.5 py-1.5 text-xs font-medium transition hover:border-ink"
                                        >
                                            8 – 15jt
                                        </button>
                                        <button
                                            data-min="15000000"
                                            data-max=""
                                            class="priceChip rounded-full border border-silver-200 px-3.5 py-1.5 text-xs font-medium transition hover:border-ink"
                                        >
                                            &gt; 15jt
                                        </button>
                                    </div>
                                    <!-- Input manual min/max -->
                                    <div class="mt-4 flex items-center gap-2">
                                        <input
                                            id="minPrice"
                                            type="text"
                                            inputmode="numeric"
                                            placeholder="Min"
                                            class="w-full rounded-xl border border-silver-200 bg-silver-100 px-3 py-2.5 text-xs outline-none transition focus:border-ink focus:bg-white"
                                        />
                                        <span class="text-neutral-300">–</span>
                                        <input
                                            id="maxPrice"
                                            type="text"
                                            inputmode="numeric"
                                            placeholder="Maks"
                                            class="w-full rounded-xl border border-silver-200 bg-silver-100 px-3 py-2.5 text-xs outline-none transition focus:border-ink focus:bg-white"
                                        />
                                    </div>
                                </div>

                                <!-- Info second -->
                                <div class="mt-6 rounded-2xl bg-cream p-4 text-xs leading-relaxed text-ink/70">
                                    <p class="font-semibold text-ink">🛡️ Unit <em>second</em> kami</p>
                                    <p class="mt-1">Semua iPhone <em>second</em> lolos inspeksi 30 titik, battery health jelas, dan bergaransi toko 14 hari tukar.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                <!-- ═══ KONTEN KANAN ═══ -->
                <div>
                    <!-- Toolbar: jumlah + search + sort -->
                    <div class="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <p id="resultInfo" class="text-sm text-neutral-400"></p>
                        <div class="flex flex-col gap-3 sm:flex-row sm:items-center">
                            <label class="relative block sm:w-64">
                                <svg
                                    class="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2"
                                    viewBox="0 0 24 24"
                                >
                                    <circle cx="11" cy="11" r="7" />
                                    <path d="m21 21-4.3-4.3" />
                                </svg>
                                <input
                                    id="searchInput"
                                    type="text"
                                    placeholder="Cari iPhone..."
                                    class="w-full rounded-full border border-silver-200 bg-silver-100 py-2.5 pl-10 pr-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-ink focus:bg-white"
                                />
                            </label>
                            <select
                                id="sortSelect"
                                class="shrink-0 rounded-full border border-silver-200 bg-white px-4 py-2.5 text-sm font-medium outline-none transition focus:border-ink"
                            >
                                <option value="default">Urutkan</option>
                                <option value="murah">Harga Terendah</option>
                                <option value="mahal">Harga Tertinggi</option>
                                <option value="populer">Terpopuler</option>
                            </select>
                        </div>
                    </div>

                    <!-- Grid: 2 kolom di HP, 3 kolom di desktop -->
                    <div id="catalogGrid" class="mt-5 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3"></div>
                    <!-- Load More -->
                    <div id="loadMoreWrap" class="mt-10 hidden text-center">
                        <button
                            id="loadMoreBtn"
                            class="rounded-full border border-silver-300 bg-white px-8 py-4 text-sm font-semibold transition hover:border-ink hover:bg-silver-100"
                        >
                            Muat Lebih Banyak
                        </button>
                        <p class="mt-3 text-xs text-neutral-400">Menampilkan <span id="shownCount">0</span> dari <span id="totalCount">0</span> produk</p>
                    </div>
                    <!-- Empty state -->
                    <div id="emptyState" class="hidden py-24 text-center">
                        <p class="text-4xl">🔍</p>
                        <h3 class="mt-4 text-lg font-semibold">Produk tidak ditemukan</h3>
                        <p class="mt-2 text-sm text-neutral-500">Coba ubah kata kunci, filter, atau rentang harga.</p>
                        <button onclick="resetFilters()" class="mt-6 rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800">
                            Reset Semua Filter
                        </button>
                    </div>
                </div>
            </div>
        </main>

<?php
$extra_scripts = '<script src="' . asset('js/pages/katalog.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
