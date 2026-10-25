<?php
require_once __DIR__ . '/../config/app.php';
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../includes/helpers.php';
require_once __DIR__ . '/../includes/auth-guard.php';

// Pastikan login role admin (bisa demo fallback jika belum login)
if (!is_logged_in()) {
    $_SESSION['user_id'] = 1;
    $_SESSION['user_nama'] = 'Admin Nafaistore';
    $_SESSION['user_role'] = 'admin';
}

$page_title = 'Admin Dashboard — NAFA iSTORE';
$admin_page = 'dashboard';
?>
<!doctype html>
<html lang="id">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= htmlspecialchars($page_title) ?></title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="<?= asset('js/config/tailwind.config.js') ?>"></script>
    <link rel="stylesheet" href="<?= asset('css/main.css') ?>" />
</head>
<body class="flex min-h-screen bg-silver-100 font-sans text-ink selection:bg-cream">
    <!-- Sidebar -->
    <?php require_once __DIR__ . '/../includes/sidebar-admin.php'; ?>

    <!-- Main Content -->
    <div class="flex flex-1 flex-col overflow-hidden">
        <!-- Topbar -->
        <header class="flex h-16 items-center justify-between border-b border-silver-200 bg-white px-8">
            <h1 class="font-display text-xl font-bold">Dashboard Toko</h1>
            <div class="flex items-center gap-4">
                <span class="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-xs font-semibold text-ink">
                    <span class="h-2 w-2 rounded-full bg-emerald-500"></span>
                    Admin Online
                </span>
                <span class="text-sm font-medium text-neutral-600"><?= htmlspecialchars($_SESSION['user_nama'] ?? 'Admin') ?></span>
            </div>
        </header>

        <!-- Content Area -->
        <main class="flex-1 overflow-y-auto p-8">
            <!-- Metric Cards -->
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">Total Unit Ready</span>
                        <span class="rounded-xl bg-cream p-2 text-base">📱</span>
                    </div>
                    <p class="font-display mt-4 text-3xl font-bold">29 Unit</p>
                    <p class="mt-1 text-xs text-neutral-400">iPhone X s/d iPhone 18 Series</p>
                </div>
                <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">Kunjungan Gerai</span>
                        <span class="rounded-xl bg-cream p-2 text-base">🏬</span>
                    </div>
                    <p class="font-display mt-4 text-3xl font-bold">12 Janji</p>
                    <p class="mt-1 text-xs text-emerald-600 font-semibold">+3 reservasi hari ini</p>
                </div>
                <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">Unit Terjual (Okt)</span>
                        <span class="rounded-xl bg-cream p-2 text-base">🛍️</span>
                    </div>
                    <p class="font-display mt-4 text-3xl font-bold">18 Unit</p>
                    <p class="mt-1 text-xs text-neutral-400">Estimasi omset Rp 245jt</p>
                </div>
                <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-bold uppercase tracking-wider text-neutral-400">Status 3uTools</span>
                        <span class="rounded-xl bg-cream p-2 text-base">🛡️</span>
                    </div>
                    <p class="font-display mt-4 text-3xl font-bold text-emerald-600">100%</p>
                    <p class="mt-1 text-xs text-neutral-400">All Green terinspeksi 30 titik</p>
                </div>
            </div>

            <!-- Quick Table: Kunjungan Gerai Terkini -->
            <div class="mt-8 rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                <div class="flex items-center justify-between">
                    <div>
                        <h2 class="font-display text-lg font-bold">Jadwal Kunjungan Gerai Hari Ini</h2>
                        <p class="text-xs text-neutral-400">Pelanggan yang reservasi coba unit di lounge Malang</p>
                    </div>
                    <a href="<?= base_url('admin/pesanan/index.php') ?>" class="text-xs font-semibold text-neutral-600 underline underline-offset-4 hover:text-ink">Lihat Semua →</a>
                </div>

                <div class="mt-6 overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead class="border-b border-silver-200 text-xs uppercase tracking-wider text-neutral-400">
                            <tr>
                                <th class="pb-3 font-semibold">Nama Tamu</th>
                                <th class="pb-3 font-semibold">No. WA</th>
                                <th class="pb-3 font-semibold">Unit Incaran</th>
                                <th class="pb-3 font-semibold">Sesi Jam</th>
                                <th class="pb-3 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-silver-200 text-neutral-600">
                            <tr>
                                <td class="py-4 font-medium text-ink">Taufiqi Ridho</td>
                                <td class="py-4">0857-0000-1122</td>
                                <td class="py-4">iPhone 18 Pro Max 256GB</td>
                                <td class="py-4">15:00 - 16:00 WIB</td>
                                <td class="py-4"><span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200">Menunggu</span></td>
                            </tr>
                            <tr>
                                <td class="py-4 font-medium text-ink">Budi Santoso</td>
                                <td class="py-4">0812-9988-7711</td>
                                <td class="py-4">iPhone 15 Pro 128GB Second</td>
                                <td class="py-4">16:30 - 17:30 WIB</td>
                                <td class="py-4"><span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 border border-emerald-200">Check-in</span></td>
                            </tr>
                            <tr>
                                <td class="py-4 font-medium text-ink">Nabila Putri</td>
                                <td class="py-4">0821-4455-6677</td>
                                <td class="py-4">iPhone 14 Plus 128GB</td>
                                <td class="py-4">19:00 - 20:00 WIB</td>
                                <td class="py-4"><span class="rounded-full bg-silver-100 px-3 py-1 text-xs font-semibold text-neutral-600">Dijadwalkan</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
