<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../config/database.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$page_title = 'Kelola iPhone — Admin NAFA iSTORE';
$admin_page = 'produk';

// Ambil data produk dari JSON jika DB kosong
$productsJson = file_get_contents(__DIR__ . '/../../data/products.json');
$products = json_decode($productsJson, true) ?? [];
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
    <?php require_once __DIR__ . '/../../includes/sidebar-admin.php'; ?>

    <div class="flex flex-1 flex-col overflow-hidden">
        <header class="flex h-16 items-center justify-between border-b border-silver-200 bg-white px-8">
            <h1 class="font-display text-xl font-bold">Katalog Inventaris iPhone</h1>
            <a href="<?= base_url('admin/produk/tambah.php') ?>" class="rounded-full bg-ink px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-neutral-800">
                + Tambah Unit Baru
            </a>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
            <div class="rounded-3xl border border-silver-200 bg-white p-6 shadow-sm">
                <div class="flex items-center justify-between">
                    <p class="text-xs text-neutral-400">Total <?= count($products) ?> unit katalog aktif (WebP Optimized)</p>
                </div>

                <div class="mt-6 overflow-x-auto">
                    <table class="w-full text-left text-sm">
                        <thead class="border-b border-silver-200 text-xs uppercase tracking-wider text-neutral-400">
                            <tr>
                                <th class="pb-3 font-semibold">Produk</th>
                                <th class="pb-3 font-semibold">Kategori</th>
                                <th class="pb-3 font-semibold">Kondisi</th>
                                <th class="pb-3 font-semibold">Harga Jual</th>
                                <th class="pb-3 font-semibold text-right">Aksi</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-silver-200 text-neutral-600">
                            <?php foreach ($products as $p): ?>
                            <tr>
                                <td class="py-4 font-medium text-ink flex items-center gap-3">
                                    <img src="<?= asset(ltrim($p['img'], 'assets/')) ?>" alt="" class="h-10 w-10 rounded-xl object-contain bg-cream p-1" />
                                    <div>
                                        <p class="font-semibold"><?= htmlspecialchars($p['name']) ?></p>
                                        <p class="text-[11px] text-neutral-400"><?= htmlspecialchars($p['spec']) ?></p>
                                    </div>
                                </td>
                                <td class="py-4 text-xs"><?= htmlspecialchars($p['cat']) ?></td>
                                <td class="py-4">
                                    <span class="rounded-full px-2.5 py-0.5 text-[10px] font-semibold <?= $p['condition'] === 'Second' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800' ?>">
                                        <?= htmlspecialchars($p['condition']) ?>
                                    </span>
                                </td>
                                <td class="py-4 font-semibold text-ink"><?= format_rupiah($p['price']) ?></td>
                                <td class="py-4 text-right space-x-2">
                                    <a href="<?= base_url('admin/produk/edit.php?id=' . urlencode($p['id'])) ?>" class="text-xs font-semibold text-neutral-600 hover:text-ink">Edit</a>
                                    <a href="<?= base_url('admin/produk/hapus.php?id=' . urlencode($p['id'])) ?>" onclick="return confirm('Hapus unit ini?')" class="text-xs font-semibold text-red-600 hover:text-red-700">Hapus</a>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</body>
</html>
