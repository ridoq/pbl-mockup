<?php
require_once __DIR__ . '/../config/app.php';
require_once __DIR__ . '/../includes/helpers.php';

$page_title = 'Daftar Akun — NAFA iSTORE';
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
<body class="flex min-h-screen items-center justify-center bg-silver-100 p-4 font-sans text-ink selection:bg-cream">
    <div class="w-full max-w-md rounded-4xl border border-silver-200 bg-white p-8 shadow-xl sm:p-10">
        <!-- Logo -->
        <div class="text-center">
            <a href="<?= base_url('index.php') ?>" class="inline-flex items-center gap-2">
                <svg width="28" height="32" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill="#0A0A0A" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.03 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
                    <text x="11" y="15" text-anchor="middle" font-size="6" font-weight="800" fill="#F6F1E7" font-family="Inter, sans-serif">NF</text>
                </svg>
                <span class="text-xl font-bold tracking-wide">NAFA <span class="italic">i</span>STORE</span>
            </a>
            <h1 class="mt-4 text-xl font-semibold">Buat Akun Baru</h1>
            <p class="mt-1 text-xs text-neutral-400">Daftar untuk kemudahan pemesanan & wishlist iPhone</p>
        </div>

        <form action="<?= base_url('auth/proses-login.php?action=register') ?>" method="POST" class="mt-6 space-y-4">
            <div>
                <label for="nama" class="text-xs font-semibold text-neutral-600">Nama Lengkap</label>
                <input type="text" id="nama" name="nama" required placeholder="Taufiqi Ridho" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
            </div>
            <div>
                <label for="email" class="text-xs font-semibold text-neutral-600">Alamat Email</label>
                <input type="email" id="email" name="email" required placeholder="nama@email.com" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
            </div>
            <div>
                <label for="no_whatsapp" class="text-xs font-semibold text-neutral-600">Nomor WhatsApp</label>
                <input type="tel" id="no_whatsapp" name="no_whatsapp" required placeholder="081234567890" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
            </div>
            <div>
                <label for="password" class="text-xs font-semibold text-neutral-600">Kata Sandi</label>
                <input type="password" id="password" name="password" required placeholder="Minimal 8 karakter" class="mt-1.5 w-full rounded-2xl border border-silver-200 bg-silver-100 px-4 py-3 text-sm outline-none transition focus:border-ink focus:bg-white" />
            </div>

            <button type="submit" class="mt-2 w-full rounded-full bg-ink py-3.5 text-sm font-semibold text-white transition hover:bg-neutral-800">
                Daftar Sekarang
            </button>
        </form>

        <p class="mt-6 text-center text-xs text-neutral-500">
            Sudah punya akun? <a href="<?= base_url('auth/login.php') ?>" class="font-semibold text-ink underline underline-offset-4">Masuk</a>
        </p>

        <div class="mt-6 border-t border-silver-200 pt-4 text-center">
            <a href="<?= base_url('index.php') ?>" class="text-xs text-neutral-400 transition hover:text-ink">← Kembali ke Beranda</a>
        </div>
    </div>
</body>
</html>
