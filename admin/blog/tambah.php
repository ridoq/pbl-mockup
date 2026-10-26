<?php
require_once __DIR__ . '/../../config/app.php';
require_once __DIR__ . '/../../includes/helpers.php';
require_once __DIR__ . '/../../includes/auth-guard.php';

$page_title = 'Tulis Artikel Baru — Admin NAFA iSTORE';
$admin_page = 'blog';
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
            <h1 class="text-xl font-bold">Tulis Artikel Edukasi</h1>
            <a href="<?= base_url('admin/blog/index.php') ?>" class="text-xs font-semibold text-neutral-400 hover:text-ink">← Kembali</a>
        </header>

        <main class="flex-1 overflow-y-auto p-8">
            <form action="<?= base_url('admin/blog/proses.php?action=create') ?>" method="POST" class="max-w-3xl rounded-3xl border border-silver-200 bg-white p-8 shadow-sm space-y-6">
                <div>
                    <label class="text-xs font-semibold text-neutral-600">Judul Artikel</label>
                    <input type="text" name="title" required placeholder="Contoh: Tips Memilih iPhone Sesuai Kebutuhan" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
                </div>
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label class="text-xs font-semibold text-neutral-600">Kategori</label>
                        <select name="category" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white">
                            <option>Perawatan</option>
                            <option>Tips & Trik</option>
                            <option>Panduan</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-xs font-semibold text-neutral-600">Estimasi Waktu Baca</label>
                        <input type="text" name="read_time" placeholder="4 menit baca" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
                    </div>
                </div>
                <div>
                    <label class="text-xs font-semibold text-neutral-600">Konten Artikel (Paragraf)</label>
                    <textarea name="content" rows="8" placeholder="Tulis isi artikel..." class="mt-1.5 w-full resize-none rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white"></textarea>
                </div>
                <button type="submit" class="w-full rounded-full bg-ink py-4 text-sm font-semibold text-white transition hover:bg-neutral-800">
                    Terbitkan Artikel
                </button>
            </form>
        </main>
    </div>
</body>
</html>
