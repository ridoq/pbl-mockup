/* ============================================================
   DATA BLOG — NAFA iSTORE
   Semua artikel blog disimpan di sini (satu sumber).
   Dipakai oleh: blog.html — nanti juga oleh halaman admin CRUD blog.
   ============================================================ */

/* Cara nambah / edit artikel manual:
   1. Copy satu blok { ... }, ubah isinya.
   2. id harus unik & tanpa spasi (dipakai buat buka modal).
   3. body = array of string. String yang diawali "## " otomatis
      jadi sub-judul saat artikel dibuka di modal. */

const DEFAULT_POSTS = [
  {
    id: 'perawatan-baterai',
    title: '5 Tips Merawat Baterai iPhone agar Awet Lebih dari 2 Tahun',
    cat: 'Perawatan', date: '12 Jan 2025', read: '5 menit baca',
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1200&q=80&auto=format&fit=crop',
    excerpt: 'Battery Health turun cepat? Kebiasaan kecil ini bikin baterai iPhone kamu awet bertahun-tahun.',
    body: [
      'Baterai iPhone memang dirancang untuk bertahan lama, tapi cara kita menggunakannya menentukan seberapa cepat Battery Health-nya turun. Berikut kebiasaan yang kami rekomendasikan ke semua pelanggan.',
      '## 1. Jaga suhu, jangan sampai panas',
      'Musuh terbesar baterai adalah panas. Hindari meninggalkan iPhone di dashboard mobil atau di bawah sinar matahari langsung. Saat ngecas sambil main game berat, lepas casing agar panas cepat hilang.',
      '## 2. Pertahankan level baterai antara 20–80%',
      'Baterai lithium-ion paling nyaman di range tengah. Tidak perlu selalu full 100% — malah sebaiknya tidak. Kalau sering overnight charging, aktifkan fitur Optimized Battery Charging di Pengaturan → Baterai.',
      '## 3. Pakai charger original atau bersertifikasi',
      'Charger murahan tanpa sertifikasi bisa mengirim daya tidak stabil. Selalu pakai adapter original atau yang bersertifikasi MFi (Made for iPhone).',
      '## 4. Aktifkan Low Power Mode lebih awal',
      'Jangan tunggu baterai 20% baru panik. Mengaktifkan Low Power Mode di 30–40% memperpanjang umur harian sekaligus mengurangi siklus charge.',
      '## 5. Update iOS secara rutin',
      'Apple rutin mengirim optimasi manajemen daya lewat update software. iOS terbaru biasanya membuat manajemen baterai lebih pintar, bukan lebih boros.',
      'Dengan kebiasaan ini, pelanggan kami rata-rata masih menikmati Battery Health 90%+ setelah 2 tahun pemakaian. Kalau baterai kamu sudah di bawah 80% dan cepat drop, bawa ke toko — kami bantu cek gratis.',
    ],
  },
  {
    id: 'cek-iphone-second',
    title: 'Ciri iPhone Second yang Masih Bagus — Panduan Cek Sebelum Beli',
    cat: 'Panduan', date: '8 Jan 2025', read: '7 menit baca',
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&q=80&auto=format&fit=crop',
    excerpt: 'Mau beli iPhone bekas? Cek 7 hal ini dulu supaya tidak dapat unit bermasalah.',
    body: [
      'Membeli iPhone second bisa jadi cara paling hemat masuk ke ekosistem Apple — asalkan tahu cara memeriksanya. Ini checklist yang kami pakai sendiri di toko.',
      '## 1. Cek IMEI dan status kunci iCloud',
      'Minta penjual menunjukkan IMEI (Settings → General → About). Pastikan Find My iPhone sudah off dan akun iCloud keluar saat proses serah terima. Unit yang masih terkunci iCloud = batu bata mahal.',
      '## 2. Battery Health minimal 80%',
      'Settings → Battery → Battery Health. Di bawah 80% berarti baterai sudah wajar diganti — jadikan bahan nego, atau pastikan toko menggantinya.',
      '## 3. Uji semua tombol, speaker, dan mikrofon',
      'Nyalakan video dengan suara, uji tombol volume, mute switch, dan power. Merekam voice memo membantu cek semua mikrofon sekaligus.',
      '## 4. Periksa layar di latar putih & hitam',
      'Layar full putih untuk cek dead pixel atau baret, full hitam untuk cek backlight dan noda internal.',
      '## 5. Cek riwayat perbaikan (Parts & Service History)',
      'Di iPhone XR ke atas: Settings → General → About. Bagian "Parts and Service History" menunjukkan apakah ada part yang pernah diganti non-original.',
      '## 6. Tes Face ID dan kamera semua lensa',
      'Face ID yang sudah rusak sangat mahal perbaikannya. Coba juga zoom, ultra wide, dan mode portrait.',
      '## 7. Beli dari penjual terpercaya',
      'Paling aman: beli di toko fisik yang memberikan garansi. Di NAFA iSTORE, unit pre-owned kami melewati 30 titik inspeksi dan bergaransi 14 hari tukar.',
    ],
  },
  {
    id: 'optimasi-storage',
    title: 'Optimalkan Penyimpanan iPhone: Hapus Ini, Jangan Itu',
    cat: 'Tips & Trik', date: '3 Jan 2025', read: '4 menit baca',
    img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1200&q=80&auto=format&fit=crop',
    excerpt: 'Storage penuh bikin iPhone lemot. Ini urutan bersih-bersih yang aman dan efektif.',
    body: [
      'iPhone yang storage-nya penuh akan terasa melambat drastis. Sebelum tergoda upgrade kapasitas, coba bersihkan dengan urutan ini.',
      '## 1. Mulai dari yang paling boros',
      'Buka Settings → General → iPhone Storage. Tunggu hitungan selesai, lalu urutkan dari app terbesar. Biasanya pemenangnya: Foto, WhatsApp, dan aplikasi streaming.',
      '## 2. Offload aplikasi yang jarang dipakai',
      'Fitur Offload App menghapus aplikasi tapi menyimpan datanya. Pasang ulang kapan saja tanpa kehilangan progress atau chat.',
      '## 3. Bersihkan cache WhatsApp dengan benar',
      'Jangan asal hapus chat. Masuk WhatsApp → Settings → Storage and Data → Manage Storage, lalu hapus file besar dan item yang diteruskan berkali-kali.',
      '## 4. Matikan Auto Download media',
      'Setiap grup WhatsApp otomatis menyimpan foto & video? Matikan di Settings → Chats. Hemat bisa sampai puluhan GB.',
      '## 5. Hapus screenshot & video duplikat',
      'Aplikasi Foto punya fitur Duplicates di album Utilities — gabungkan sekali klik.',
      'Yang jangan dihapus: cache aplikasi banking atau Health. Data-nya tidak bisa dipulihkan. Selamat membersihkan!',
    ],
  },
  {
    id: 'ios-update-atau-tunda',
    title: 'iOS Update atau Tunda Dulu? Ini Panduannya',
    cat: 'Panduan', date: '28 Des 2024', read: '4 menit baca',
    img: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1200&q=80&auto=format&fit=crop',
    excerpt: 'Notifikasi update muncul terus. Buruan update atau tunggu dulu? Tergantung ini.',
    body: [
      'Setiap kali Apple mengumumkan iOS baru, pertanyaan klasik muncul: update sekarang atau tunggu dulu? Jawabannya tergantung tiga faktor.',
      '## Kalau update point release (contoh: 18.1 → 18.2)',
      'Update minor berisi perbaikan bug dan keamanan. Segera update — manfaatnya jelas, risikonya kecil.',
      '## Kalau update major (contoh: 18 → 19)',
      'Tunggu 2–4 minggu setelah rilis. Beri waktu Apple menambal bug awal yang biasanya ditemukan pengguna awal. Kalau iPhone kamu jadi alat kerja utama, tunggu versi .1.',
      '## Cek kompatibilitas fitur favoritmu',
      'Beberapa fitur AI baru hanya untuk iPhone 15 Pro ke atas. Kalau alasannya cuma fitur yang tidak didukung perangkatmu, tidak ada yang hilang dengan menunda.',
      '## Tips sebelum update apa pun',
      'Backup dulu ke iCloud atau komputer, pastikan storage tersisa minimal 10 GB, dan update saat malam hari agar tidak mengganggu aktivitas. Untuk urusan update firmware di toko, semua unit kami selalu set versi terbaru yang stabil.',
    ],
  },
  {
    id: 'membersihkan-iphone',
    title: 'Cara Membersihkan iPhone dengan Benar (dan Aman)',
    cat: 'Perawatan', date: '20 Des 2024', read: '3 menit baca',
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80&auto=format&fit=crop',
    excerpt: 'Salah bersihkan bisa merusak coating layar anti-fingerprint. Ini cara yang benar.',
    body: [
      'Layar iPhone dilapisi coating oleophobic yang mencegah sidik jari menempel. Salah membersihkan bisa mengikis coating ini permanen.',
      '## Yang boleh dipakai',
      'Microfiber cloth kering (kain kacamata) untuk sehari-hari. Untuk noda membandel, sedikit basahi kain dengan air bersih — cukup lembap, bukan basah.',
      '## Yang TIDAK boleh dipakai',
      'Cairan pembersih yang mengandung amonia (seperti pembersih kaca), pemutih, hydrogen peroxide, atau tisu kasar. Semua itu mengikis coating dan bisa merusak coating anti-air di sekeliling port.',
      '## Membersihkan port charging',
      'Gunakan tusuk gigi kayu atau sikat lembut kering — jangan pernah pakai logam atau tiup dengan mulut (uap air dari napas bisa berembus di dalam).',
      '## Rutinitas yang kami sarankan',
      'Sekali sehari lap dengan microfiber kering. Sekali seminggu, lap dengan kain lembap. Simpel, dan layar tetap secermat hari pertama.',
    ],
  },
];

/* Kalau halaman admin CRUD blog sudah jadi, hasil edit admin
   disimpan di localStorage "nafa_posts" dan otomatis menimpa
   data default di atas — jadi blog & admin selalu sinkron. */
const POSTS = (() => {
  try {
    const saved = localStorage.getItem('nafa_posts');
    return saved ? JSON.parse(saved) : DEFAULT_POSTS;
  } catch {
    return DEFAULT_POSTS;
  }
})();
