<?php
$page_title = 'Kontak & Lokasi Gerai — NAFA iSTORE';
$current_page = 'kontak';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

  <main class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
    <div class="reveal max-w-xl">
      <p class="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">Kontak & Lokasi</p>
      <h1 class="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Mampir atau chat, sama-sama bisa</h1>
      <p class="mt-3 text-neutral-500">Lihat unit langsung di toko kami, atau tanya-tanya dulu lewat WhatsApp.</p>
    </div>

    <!-- Info cards -->
    <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div class="reveal rounded-3xl border border-silver-200 p-7">
        <div class="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-xl">📍</div>
        <h3 class="mt-5 text-sm font-semibold">Alamat Toko</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-500"><?= APP_ADDRESS ?></p>
        <a href="https://maps.google.com/?q=Lowokwaru+Malang" target="_blank" rel="noopener noreferrer" class="mt-3 inline-block text-xs font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-ink">Buka di Google Maps →</a>
      </div>
      <div class="reveal rounded-3xl border border-silver-200 p-7">
        <div class="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-xl">💬</div>
        <h3 class="mt-5 text-sm font-semibold">WhatsApp</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-500"><?= APP_PHONE ?><br />Respons cepat jam kerja</p>
        <a href="https://wa.me/<?= APP_WA ?>" target="_blank" rel="noopener noreferrer" class="mt-3 inline-block text-xs font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-ink">Chat sekarang →</a>
      </div>
      <div class="reveal rounded-3xl border border-silver-200 p-7">
        <div class="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-xl">✉️</div>
        <h3 class="mt-5 text-sm font-semibold">Email</h3>
        <p class="mt-2 text-sm leading-relaxed text-neutral-500"><?= APP_EMAIL ?><br />Untuk kerja sama & B2B</p>
        <a href="mailto:<?= APP_EMAIL ?>" class="mt-3 inline-block text-xs font-semibold underline decoration-neutral-300 underline-offset-4 hover:decoration-ink">Kirim email →</a>
      </div>
      <div class="reveal rounded-3xl border border-silver-200 p-7">
        <div class="grid h-12 w-12 place-items-center rounded-2xl bg-cream text-xl">🕒</div>
        <h3 class="mt-5 text-sm font-semibold">Jam Buka</h3>
        <ul class="mt-2 space-y-1 text-sm text-neutral-500">
          <li class="flex justify-between gap-4"><span>Senin–Jumat</span><span class="font-medium text-ink">09.00–21.00</span></li>
          <li class="flex justify-between gap-4"><span>Sabtu–Minggu</span><span class="font-medium text-ink">09.00–21.00</span></li>
          <li class="flex justify-between gap-4"><span>Libur Nasional</span><span class="font-medium text-ink">10.00–18.00</span></li>
        </ul>
      </div>
    </div>

    <!-- Maps + Form -->
    <div class="mt-14 grid items-start gap-8 lg:grid-cols-2">
      <!-- Maps -->
      <div class="reveal overflow-hidden rounded-4xl border border-silver-200">
        <iframe
          src="https://maps.google.com/maps?q=Lowokwaru%20Malang&z=14&output=embed"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          title="Lokasi NAFA iSTORE Malang"></iframe>
      </div>

      <!-- Form pesan -->
      <div class="reveal rounded-4xl border border-silver-200 p-8 sm:p-10">
        <h2 class="text-xl font-semibold tracking-tight">Kirim pesan</h2>
        <p class="mt-2 text-sm text-neutral-500">Tanya stok, nego tukar tambah, atau sekadar salam. Kami balas cepat kok.</p>
        <form id="contactForm" class="mt-7 space-y-5" novalidate>
          <div>
            <label class="text-sm font-medium" for="cName">Nama</label>
            <input id="cName" type="text" placeholder="Nama kamu"
                   class="mt-2 w-full rounded-2xl border border-silver-200 bg-silver-100 px-5 py-3.5 text-sm outline-none transition focus:border-ink focus:bg-white" />
          </div>
          <div>
            <label class="text-sm font-medium" for="cPhone">No. WhatsApp</label>
            <input id="cPhone" type="tel" placeholder="0812xxxxxxx"
                   class="mt-2 w-full rounded-2xl border border-silver-200 bg-silver-100 px-5 py-3.5 text-sm outline-none transition focus:border-ink focus:bg-white" />
          </div>
          <div>
            <label class="text-sm font-medium" for="cMsg">Pesan</label>
            <textarea id="cMsg" rows="4" placeholder="Halo, mau tanya stok iPhone 16 Pro Max..."
                      class="mt-2 w-full resize-none rounded-2xl border border-silver-200 bg-silver-100 px-5 py-3.5 text-sm outline-none transition focus:border-ink focus:bg-white"></textarea>
          </div>
          <button type="submit" class="w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Kirim Pesan
          </button>
        </form>
      </div>
    </div>
  </main>

<?php
$extra_scripts = '<script src="' . asset('js/pages/kontak.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
