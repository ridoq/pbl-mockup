<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$page_title = 'Edit iPhone — Admin NAFA iSTORE';
$admin_page = 'produk';

$id = $_GET['id'] ?? '';
$productsJson = file_get_contents(__DIR__ . '/../../data/products.json');
$products = json_decode($productsJson, true) ?? [];
$targetProduct = null;
foreach ($products as $p) {
    if ($p['id'] === $id) {
        $targetProduct = $p;
        break;
    }
}
if (!$targetProduct && !empty($products)) {
    $targetProduct = $products[0];
}
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
            <h1 class="text-xl font-bold">Edit Unit: <?= htmlspecialchars($targetProduct['name'] ?? '') ?></h1>
            <a href="<?= base_url('admin/produk/index.php') ?>" class="text-xs font-semibold text-neutral-400 hover:text-ink">← Kembali</a>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
            <form action="<?= base_url('admin/produk/proses.php?action=update&id=' . urlencode($id)) ?>" method="POST" class="max-w-2xl rounded-3xl border border-silver-200 bg-white p-8 shadow-sm space-y-6">
                <div>
                    <label class="text-xs font-semibold text-neutral-600">Nama Seri Model</label>
                    <input type="text" name="name" value="<?= htmlspecialchars($targetProduct['name'] ?? '') ?>" required class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs font-semibold text-neutral-600">Kategori</label>
                        <input type="text" name="cat" value="<?= htmlspecialchars($targetProduct['cat'] ?? '') ?>" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
                    </div>
                    <div>
                        <label class="text-xs font-semibold text-neutral-600">Kondisi</label>
                        <select name="condition" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white">
                            <option value="Baru" <?= ($targetProduct['condition'] ?? '') === 'Baru' ? 'selected' : '' ?>>Baru</option>
                            <option value="Second" <?= ($targetProduct['condition'] ?? '') === 'Second' ? 'selected' : '' ?>>Second</option>
                        </select>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs font-semibold text-neutral-600">Harga Jual (Rp)</label>
                        <input type="number" name="price" value="<?= htmlspecialchars($targetProduct['price'] ?? 0) ?>" required class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
                    </div>
                    <div>
                        <label class="text-xs font-semibold text-neutral-600">Spesifikasi Singkat</label>
                        <input type="text" name="spec" value="<?= htmlspecialchars($targetProduct['spec'] ?? '') ?>" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
                    </div>
                </div>
                <button type="submit" class="w-full rounded-full bg-ink py-4 text-sm font-semibold text-white transition hover:bg-neutral-800">
                    Perbarui Data iPhone
                </button>
            </form>
        </main>
    </div>
</body>
</html>
