<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$page_title = 'Kelola Kunjungan Gerai & Pesanan — Admin NAFA iSTORE';
$admin_page = 'pesanan';
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
    <?php require_once __DIR__ . '/../../includes/sidebar-admin.php'; ?>

    <div class="flex flex-1 flex-col overflow-hidden">
        <header class="flex h-16 items-center justify-between border-b border-silver-200 bg-white px-8">
            <h1 class="font-display text-xl font-bold">Kunjungan Gerai & Pesanan</h1>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
            <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead class="border-b border-silver-200 text-xs uppercase tracking-wider text-neutral-400">
                            <tr>
                                <th class="pb-3 font-semibold">Kode / Tgl</th>
                                <th class="pb-3 font-semibold">Customer</th>
                                <th class="pb-3 font-semibold">Unit Pilihan</th>
                                <th class="pb-3 font-semibold">Metode</th>
                                <th class="pb-3 font-semibold">Status</th>
                                <th class="pb-3 font-semibold text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-silver-200 text-neutral-600">
                            <tr>
                                <td class="py-4">
                                    <p class="font-semibold text-ink">ORD-20261025-01</p>
                                    <p class="text-[11px] text-neutral-400">25 Okt 2026, 14:30</p>
                                </td>
                                <td class="py-4 font-medium text-ink">
                                    <p>Taufiqi Ridho</p>
                                    <p class="text-xs text-neutral-400">0857-0000-1122</p>
                                </td>
                                <td class="py-4">iPhone 18 Pro Max 256GB</td>
                                <td class="py-4">
                                    <span class="rounded-full bg-cream px-2.5 py-1 text-xs font-semibold text-ink">Pickup In Store</span>
                                </td>
                                <td class="py-4">
                                    <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200">Menunggu</span>
                                </td>
                                <td class="py-4 text-right">
                                    <a href="<?= base_url('admin/pesanan/detail.php?id=1') ?>" class="text-xs font-semibold text-ink underline underline-offset-4">Detail</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
