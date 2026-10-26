<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$page_title = 'Detail Reservasi — Admin NAFA iSTORE';
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
            <h1 class="text-xl font-bold">Detail Reservasi #ORD-20261025-01</h1>
            <a href="<?= base_url('admin/pesanan/index.php') ?>" class="text-xs font-semibold text-neutral-400 hover:text-ink">← Kembali</a>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
            <div class="max-w-2xl rounded-3xl border border-silver-200 bg-white p-8 shadow-sm space-y-6">
                <div>
                    <span class="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700 border border-amber-200">Status: Menunggu Check-in</span>
                    <h2 class="mt-4 text-2xl font-bold">Taufiqi Ridho Maulana</h2>
                    <p class="text-sm text-neutral-500">WhatsApp: 0857-0000-1122 · Email: ridho@student.polinema.ac.id</p>
                </div>
                <div class="rounded-2xl border border-silver-200 p-5 bg-silver-100">
                    <p class="text-xs font-semibold uppercase text-neutral-400">Unit Yang Dipesan / Coba Fisik</p>
                    <p class="mt-2 text-base font-bold text-ink">iPhone 18 Pro Max 256GB — Deep Crimson</p>
                    <p class="text-sm font-semibold text-neutral-600">Rp 25.999.000</p>
                </div>
                <div>
                    <h3 class="text-sm font-semibold">Jadwal Pengambilan / Uji Fisik di Gerai:</h3>
                    <p class="mt-1 text-sm text-neutral-600">Hari ini, Sesi 15:00 – 16:00 WIB di Meja Lounge Gerai Malang</p>
                </div>
                <div class="flex gap-4 pt-4 border-t border-silver-200">
                    <a href="<?= base_url('admin/pesanan/update-status.php?id=1&status=selesai-beli') ?>" class="rounded-full bg-ink px-6 py-3 text-xs font-semibold text-white">Verifikasi Selesai Beli</a>
                    <a href="<?= base_url('admin/pesanan/update-status.php?id=1&status=batal') ?>" class="rounded-full border border-silver-300 px-6 py-3 text-xs font-semibold text-neutral-600">Batalkan</a>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
