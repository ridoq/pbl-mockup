<?php
/**
 * NAFA iSTORE — Header Komponen
 * PBL SMT3 SIB Polinema
 */
require_once __DIR__ . '/helpers.php';
$page_title = $page_title ?? 'NAFA iSTORE — World From Device';
?>
<!doctype html>
<html lang="id" class="scroll-smooth">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?= htmlspecialchars($page_title) ?></title>

    <!-- Google Fonts: Inter Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap" rel="stylesheet" />

    <!-- Tailwind CSS CDN & Config Eksternal -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="<?= asset('js/config/tailwind.config.js') ?>"></script>

    <!-- Main Modular Stylesheet (Termasuk Atomic CSS & Reset) -->
    <link rel="stylesheet" href="<?= asset('css/main.css') ?>" />

    <?= $extra_head ?? '' ?>
</head>
<body class="bg-white font-sans text-ink antialiased selection:bg-cream selection:text-ink">
