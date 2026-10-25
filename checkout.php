<?php
$page_title = 'Checkout & Pemesanan — NAFA iSTORE';
$current_page = 'katalog';
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/navbar.php';
?>

  <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
    <!-- Breadcrumb -->
    <nav class="flex items-center text-xs text-neutral-400">
      <a href="<?= base_url('index.php') ?>" class="hover:text-ink">Beranda</a>
      <span class="mx-2">/</span>
      <a href="<?= base_url('katalog.php') ?>" class="hover:text-ink">Katalog</a>
      <span class="mx-2">/</span>
      <span class="text-ink">Checkout</span>
    </nav>

    <!-- Produk tidak terpilih -->
    <div id="noProduct" class="hidden mt-12 rounded-4xl border border-silver-200 bg-silver-100 p-16 text-center">
      <p class="text-4xl">🛒</p>
      <h2 class="mt-4 text-lg font-semibold">Belum ada produk yang dipilih</h2>
      <p class="mt-2 text-sm text-neutral-500">Pilih dulu iPhone yang kamu mau dari katalog ya.</p>
      <a href="<?= base_url('katalog.php') ?>" class="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white">Ke Katalog</a>
    </div>

    <div id="checkoutWrap" class="mt-10 grid items-start gap-8 lg:grid-cols-5">

      <!-- ═══ KOLOM KIRI: Form + metode ═══ -->
      <div id="formSection" class="lg:col-span-3">
        <form id="checkoutForm" novalidate>
          <!-- Info pribadi -->
          <div class="rounded-4xl border border-silver-200 p-7 sm:p-9">
            <h2 class="text-lg font-semibold">1. Informasi Pribadi</h2>
            <div class="mt-6 grid gap-5 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <label class="text-sm font-medium" for="fName">Nama Lengkap *</label>
                <input id="fName" type="text" placeholder="Sesuai KTP/ID"
                       class="mt-2 w-full rounded-2xl border border-silver-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-ink" />
                <p class="err mt-1.5 hidden text-xs text-red-500">Nama minimal 3 karakter.</p>
              </div>
              <div>
                <label class="text-sm font-medium" for="fPhone">No. WhatsApp *</label>
                <input id="fPhone" type="tel" placeholder="0812xxxxxxx"
                       class="mt-2 w-full rounded-2xl border border-silver-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-ink" />
                <p class="err mt-1.5 hidden text-xs text-red-500">Nomor WhatsApp tidak valid (9–15 digit angka).</p>
              </div>
              <div>
                <label class="text-sm font-medium" for="fEmail">Email *</label>
                <input id="fEmail" type="email" placeholder="nama@email.com"
                       class="mt-2 w-full rounded-2xl border border-silver-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-ink" />
                <p class="err mt-1.5 hidden text-xs text-red-500">Format email tidak valid.</p>
              </div>
              <div class="sm:col-span-2">
                <label class="text-sm font-medium" for="fNote">Catatan (opsional)</label>
                <textarea id="fNote" rows="3" placeholder="Contoh: minta yang share region Indonesia, kirim kado, dll."
                          class="mt-2 w-full resize-none rounded-2xl border border-silver-200 bg-white px-5 py-3.5 text-sm outline-none transition focus:border-ink"></textarea>
              </div>
            </div>
          </div>

          <!-- Metode pembelian -->
          <div class="mt-6 rounded-4xl border border-silver-200 p-7 sm:p-9">
            <h2 class="text-lg font-semibold">2. Metode Pembelian</h2>

            <div class="mt-6 grid gap-4 sm:grid-cols-2">
              <!-- Opsi Pickup -->
              <label class="cursor-pointer">
                <input type="radio" name="method" value="pickup" class="peer sr-only" checked />
                <div class="rounded-3xl border-2 border-silver-200 p-6 transition peer-checked:border-ink peer-checked:bg-silver-100">
                  <div class="flex items-center justify-between">
                    <span class="text-2xl">🏬</span>
                    <span class="grid h-6 w-6 place-items-center rounded-full border-2 border-silver-300 peer-checked:bg-ink peer-checked:border-ink"></span>
                  </div>
                  <h3 class="mt-4 font-semibold">Pickup In Store</h3>
                  <p class="mt-1 text-xs leading-relaxed text-neutral-500">Ambil langsung di toko kami. Bayar di tempat, cek unit sebelum pulang.</p>
                </div>
              </label>

              <!-- Opsi Tokopedia -->
              <label class="cursor-pointer">
                <input type="radio" name="method" value="tokopedia" class="peer sr-only" />
                <div class="rounded-3xl border-2 border-silver-200 p-6 transition peer-checked:border-ink peer-checked:bg-silver-100">
                  <div class="flex items-center justify-between">
                    <span class="text-2xl">🟢</span>
                  </div>
                  <h3 class="mt-4 font-semibold">Beli via Tokopedia</h3>
                  <p class="mt-1 text-xs leading-relaxed text-neutral-500">Transaksi aman lewat Tokopedia. Bisa COD, paylater & cicilan.</p>
                </div>
              </label>
            </div>

            <!-- Jadwal pickup (muncul kalau pilih pickup) -->
            <div id="pickupSchedule" class="mt-6 rounded-3xl bg-silver-100 p-6">
              <p class="text-sm font-semibold">Jadwal pengambilan</p>
              <div class="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label class="text-xs font-medium text-neutral-500" for="fDate">Tanggal *</label>
                  <input id="fDate" type="date"
                         class="mt-2 w-full rounded-2xl border border-silver-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-ink" />
                  <p class="err mt-1.5 hidden text-xs text-red-500">Pilih tanggal pengambilan.</p>
                </div>
                <div>
                  <label class="text-xs font-medium text-neutral-500" for="fTime">Jam *</label>
                  <select id="fTime" class="mt-2 w-full rounded-2xl border border-silver-200 bg-white px-5 py-3 text-sm outline-none transition focus:border-ink">
                    <option value="">Pilih jam...</option>
                    <option>10:00 – 11:00</option>
                    <option>11:00 – 12:00</option>
                    <option>13:00 – 14:00</option>
                    <option>14:00 – 15:00</option>
                    <option>15:00 – 16:00</option>
                    <option>16:00 – 17:00</option>
                    <option>19:00 – 20:00</option>
                  </select>
                  <p class="err mt-1.5 hidden text-xs text-red-500">Pilih jam pengambilan.</p>
                </div>
              </div>
              <p class="mt-4 flex items-start gap-2 text-xs leading-relaxed text-neutral-500">
                📍 <span id="storeScheduleText"><?= APP_ADDRESS ?> — Setiap hari, 09.00–21.00 WIB</span>
              </p>
            </div>

            <div id="tokpedInfo" class="mt-6 hidden rounded-3xl bg-cream p-6 text-sm leading-relaxed">
              Kamu akan diarahkan ke <strong>Tokopedia</strong> untuk menyelesaikan pembayaran.
              Pastikan data di atas sudah benar — tim kami akan menghubungimu via WhatsApp untuk konfirmasi stok.
            </div>
          </div>

          <button type="submit" id="submitBtn"
                  class="mt-8 w-full rounded-full bg-ink px-8 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800">
            Konfirmasi Pesanan Pickup
          </button>
          <p class="mt-3 text-center text-xs text-neutral-400">Dengan melanjutkan, kamu menyetujui syarat & ketentuan NAFA iSTORE.</p>
        </form>

        <!-- ═══ PANEL SUKSES (menggantikan form) ═══ -->
        <div id="successPanel" class="hidden rounded-4xl border-2 border-ink bg-cream p-8 sm:p-10">
          <div class="grid h-14 w-14 place-items-center rounded-full bg-ink text-xl text-cream">✓</div>
          <h2 class="mt-5 text-2xl font-semibold tracking-tight">Pesanan diterima! 🎉</h2>
          <p class="mt-2 text-sm text-neutral-600">Simpan kode pesanan ini dan tunjukkan saat datang ke toko.</p>
          <div class="mt-6 rounded-2xl border border-creamdark bg-white p-5">
            <p class="text-xs text-neutral-400">Kode Pesanan</p>
            <p class="font-display mt-1 text-2xl font-bold tracking-wider" id="orderCode">—</p>
          </div>
          <div id="orderSummary" class="mt-5 space-y-2 border-t border-creamdark pt-5 text-sm"></div>
          <div class="mt-6 rounded-2xl bg-white p-5 text-sm leading-relaxed text-neutral-600">
            <p class="font-semibold text-ink">Instruksi pengambilan:</p>
            <ol class="mt-2 list-decimal space-y-1 pl-5">
              <li>Datang sesuai jadwal ke <strong id="storePickupAddress"><?= APP_ADDRESS ?></strong></li>
              <li>Tunjukkan kode pesanan + KTP/ID</li>
              <li>Tim kami akan unboxing & cek unit bareng kamu</li>
              <li>Pembayaran di tempat (cash / QRIS / debit / kartu kredit)</li>
            </ol>
          </div>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a id="waConfirm" href="#" target="_blank" rel="noopener"
               class="flex-1 rounded-full bg-ink px-8 py-4 text-center text-sm font-semibold text-white transition hover:bg-neutral-800">
              Konfirmasi via WhatsApp
            </a>
            <a href="<?= base_url('katalog.php') ?>" class="flex-1 rounded-full border border-creamdark bg-white px-8 py-4 text-center text-sm font-semibold transition hover:border-ink">
              Lanjut Belanja
            </a>
          </div>
        </div>
      </div>

      <!-- ═══ KOLOM KANAN: Ringkasan ═══ -->
      <aside class="lg:col-span-2">
        <div class="sticky top-24 rounded-4xl border border-silver-200 p-7">
          <h2 class="text-lg font-semibold">Ringkasan Pesanan</h2>
          <div id="summaryCard" class="mt-5"></div>
        </div>
      </aside>
    </div>
  </main>

<?php
$extra_scripts = '<script src="' . asset('js/pages/checkout.js') . '"></script>';
require_once __DIR__ . '/includes/footer.php';
?>
