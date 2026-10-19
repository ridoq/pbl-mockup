/* ============================================================
   DATA PRODUK & KONFIG TOKO — NAFA iSTORE
   Ubah di sini, semua halaman otomatis ikut.
   ⚠️ Ganti img, tokopedia, dan data toko dengan punyamu!
   ============================================================ */

const STORE = {
  name: 'NAFA iSTORE',
  phone: '0812-3456-7890',
  wa: 'https://wa.me/6281234567890',
  email: 'halo@nafaistore.id',
  address: 'Jl. Teknologi No. 88, Jakarta Selatan',
  hours: 'Setiap hari, 09.00–21.00 WIB',
  tokopedia: 'https://www.tokopedia.com/nafaistore',
};

const DEFAULT_PRODUCTS = [
  /* ============ BARU ============ */
  {
    id: 'iphone-16-pro-max',
    name: 'iPhone 16 Pro Max',
    cat: 'Pro',
    condition: 'Baru',
    spec: '256GB · Titanium Natural',
    price: 21999000,
    badge: 'Terbaru',
    rating: 4.9,
    sold: 320,
    img: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Natural Titanium', 'Desert Titanium', 'White Titanium', 'Black Titanium'],
    storages: [
      { label: '256GB', price: 21999000 },
      { label: '512GB', price: 24999000 },
      { label: '1TB',   price: 27999000 },
    ],
    desc: 'iPhone 16 Pro Max adalah iPhone paling canggih yang pernah dibuat. Body Titanium aerospace-grade dengan layar Super Retina XDR terbesar, chip A18 Pro yang sangat cepat, dan sistem kamera Pro 48MP dengan tombol Camera Control baru.',
    specs: {
      'Layar': '6.9" Super Retina XDR, ProMotion 120Hz',
      'Chip': 'A18 Pro',
      'Kamera': '48MP Main + 48MP Ultra Wide + 12MP 5x Tele',
      'Baterai': 'Hingga 33 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-16-pro-max',
  },
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    cat: 'Pro',
    condition: 'Baru',
    spec: '128GB · Titanium Hitam',
    price: 18499000,
    badge: null,
    rating: 4.9,
    sold: 410,
    img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Black Titanium', 'White Titanium', 'Natural Titanium', 'Desert Titanium'],
    storages: [
      { label: '128GB', price: 18499000 },
      { label: '256GB', price: 19999000 },
      { label: '512GB', price: 22999000 },
    ],
    desc: 'Ukuran pas, performa maksimal. iPhone 16 Pro membawa chip A18 Pro, kamera 48MP, dan layar ProMotion dalam bodi 6.3 inci yang nyaman digenggam satu tangan.',
    specs: {
      'Layar': '6.3" Super Retina XDR, ProMotion 120Hz',
      'Chip': 'A18 Pro',
      'Kamera': '48MP Main + 48MP Ultra Wide + 12MP 5x Tele',
      'Baterai': 'Hingga 27 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-16-pro',
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    cat: 'Standar',
    condition: 'Baru',
    spec: '128GB · Ultramarine',
    price: 13999000,
    badge: 'Baru',
    rating: 4.8,
    sold: 520,
    img: 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Ultramarine', 'Teal', 'Pink', 'White', 'Black'],
    storages: [
      { label: '128GB', price: 13999000 },
      { label: '256GB', price: 15499000 },
      { label: '512GB', price: 17999000 },
    ],
    desc: 'iPhone 16 dengan chip A18, tombol Camera Control, dan warna-warna vibrant. Pilihan paling worth it untuk kebutuhan sehari-hari yang years ahead.',
    specs: {
      'Layar': '6.1" Super Retina XDR',
      'Chip': 'A18',
      'Kamera': '48MP Fusion + 12MP Ultra Wide',
      'Baterai': 'Hingga 22 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-16',
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    cat: 'Standar',
    condition: 'Baru',
    spec: '128GB · Pink',
    price: 11499000,
    badge: null,
    rating: 4.8,
    sold: 680,
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Pink', 'Yellow', 'Blue', 'Green', 'Black'],
    storages: [
      { label: '128GB', price: 11499000 },
      { label: '256GB', price: 12999000 },
    ],
    desc: 'iPhone 15 dengan Dynamic Island, kamera 48MP, dan USB-C. Sweet spot antara fitur terbaru dan harga yang masuk akal.',
    specs: {
      'Layar': '6.1" Super Retina XDR, Dynamic Island',
      'Chip': 'A16 Bionic',
      'Kamera': '48MP Main + 12MP Ultra Wide',
      'Baterai': 'Hingga 20 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-15',
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    cat: 'Standar',
    condition: 'Baru',
    spec: '128GB · Midnight',
    price: 9499000,
    badge: 'Hemat',
    rating: 4.7,
    sold: 750,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Red'],
    storages: [
      { label: '128GB', price: 9499000 },
      { label: '256GB', price: 10499000 },
    ],
    desc: 'Pilihan hemat tanpa kompromi. iPhone 14 masih sangat bertenaga dengan chip A15 dan kamera malam yang juara.',
    specs: {
      'Layar': '6.1" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Kamera': '12MP Main + 12MP Ultra Wide',
      'Baterai': 'Hingga 20 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-14',
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    cat: 'Standar',
    condition: 'Baru',
    spec: '128GB · Midnight',
    price: 9499000,
    badge: 'Hemat',
    rating: 4.7,
    sold: 750,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Red'],
    storages: [
      { label: '128GB', price: 9499000 },
      { label: '256GB', price: 10499000 },
    ],
    desc: 'Pilihan hemat tanpa kompromi. iPhone 14 masih sangat bertenaga dengan chip A15 dan kamera malam yang juara.',
    specs: {
      'Layar': '6.1" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Kamera': '12MP Main + 12MP Ultra Wide',
      'Baterai': 'Hingga 20 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-14',
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    cat: 'Standar',
    condition: 'Baru',
    spec: '128GB · Midnight',
    price: 9499000,
    badge: 'Hemat',
    rating: 4.7,
    sold: 750,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Red'],
    storages: [
      { label: '128GB', price: 9499000 },
      { label: '256GB', price: 10499000 },
    ],
    desc: 'Pilihan hemat tanpa kompromi. iPhone 14 masih sangat bertenaga dengan chip A15 dan kamera malam yang juara.',
    specs: {
      'Layar': '6.1" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Kamera': '12MP Main + 12MP Ultra Wide',
      'Baterai': 'Hingga 20 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-14',
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    cat: 'Standar',
    condition: 'Baru',
    spec: '128GB · Midnight',
    price: 9499000,
    badge: 'Hemat',
    rating: 4.7,
    sold: 750,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Midnight', 'Starlight', 'Blue', 'Purple', 'Red'],
    storages: [
      { label: '128GB', price: 9499000 },
      { label: '256GB', price: 10499000 },
    ],
    desc: 'Pilihan hemat tanpa kompromi. iPhone 14 masih sangat bertenaga dengan chip A15 dan kamera malam yang juara.',
    specs: {
      'Layar': '6.1" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Kamera': '12MP Main + 12MP Ultra Wide',
      'Baterai': 'Hingga 20 jam pemutaran video',
      'Ketahanan': 'Ceramic Shield, IP68',
      'Garansi': 'Resmi 1 tahun',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-14',
  },

  /* ============ SECOND ============ */
  {
    id: 'iphone-14-plus-bekas',
    name: 'iPhone 14 Plus',
    cat: 'Standar',
    condition: 'Second',
    spec: '128GB · Blue · BH 91%',
    price: 7499000,
    badge: 'Mulus',
    rating: 4.7,
    sold: 45,
    img: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Blue'],
    storages: [{ label: '128GB', price: 7499000 }],
    desc: 'iPhone 14 Plus second kondisi sangat baik. Battery Health 91%, layar bebas baret, semua fungsi normal. Sudah lolos 30 titik inspeksi tim kami dan bergaransi toko 14 hari tukar.',
    specs: {
      'Kondisi': '<em>Second</em> — mulus, like new',
      'Battery Health': '91%',
      'Layar': '6.7" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Kelengkapan': 'Unit + kabel (Box opsional)',
      'Garansi': 'Garansi toko 14 hari tukar',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-14-plus-bekas',
  },
  {
    id: 'iphone-13-bekas',
    name: 'iPhone 13',
    cat: 'Standar',
    condition: 'Second',
    spec: '128GB · Starlight · BH 88%',
    price: 5799000,
    badge: null,
    rating: 4.7,
    sold: 62,
    img: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Starlight'],
    storages: [{ label: '128GB', price: 5799000 }],
    desc: 'Entry point paling hemat ke ekosistem iPhone. Unit second rapi, Battery Health 88%, kamera dan Face ID normal. Lolos inspeksi 30 titik dan garansi toko 14 hari tukar.',
    specs: {
      'Kondisi': '<em>Second</em> — rapi, minim baret',
      'Battery Health': '88%',
      'Layar': '6.1" Super Retina XDR',
      'Chip': 'A15 Bionic',
      'Kelengkapan': 'Unit + kabel',
      'Garansi': 'Garansi toko 14 hari tukar',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-13-bekas',
  },
  {
    id: 'iphone-12-pro-max-bekas',
    name: 'iPhone 12 Pro Max',
    cat: 'Pro',
    condition: 'Second',
    spec: '128GB · Pacific Blue · BH 84%',
    price: 4999000,
    badge: null,
    rating: 4.6,
    sold: 38,
    img: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=1000&q=80&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1000&q=80&auto=format&fit=crop',
    ],
    colors: ['Pacific Blue'],
    storages: [{ label: '128GB', price: 4999000 }],
    desc: 'iPhone Pro dengan harga paling bersahabat. Unit second dengan Battery Health 84%, fungsi lengkap normal, bodi masih kokoh. Lolos inspeksi 30 titik, garansi toko 14 hari tukar.',
    specs: {
      'Kondisi': '<em>Second</em> — baik, ada baret halus',
      'Battery Health': '84%',
      'Layar': '6.7" Super Retina XDR, 60Hz',
      'Chip': 'A14 Bionic',
      'Kelengkapan': 'Unit + kabel',
      'Garansi': 'Garansi toko 14 hari tukar',
    },
    tokopedia: 'https://www.tokopedia.com/nafaistore/iphone-12-pro-max-bekas',
  },
];

/* Kalau produk diubah lewat halaman admin (admin/produk.html), hasilnya
   disimpan di localStorage "nafa_products" dan otomatis menimpa default.
   Hapus key tersebut untuk kembali ke data awal. */
const PRODUCTS = (() => {
  try {
    const saved = localStorage.getItem('nafa_products');
    return saved ? JSON.parse(saved) : DEFAULT_PRODUCTS;
  } catch {
    return DEFAULT_PRODUCTS;
  }
})();

/* ============ Helper ============ */
const rupiah = n => 'Rp' + n.toLocaleString('id-ID');
const findProduct = id => PRODUCTS.find(p => p.id === id) || null;

/* Kartu produk — dipakai di index, katalog & related.
   Responsif: pas untuk grid 2 kolom di HP & 3 kolom di desktop. */
function productCardHTML(p) {
  const condChip = p.condition === 'Second'
    ? `<span class="absolute right-3 top-3 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-cream italic sm:right-4 sm:top-4">Second</span>`
    : `<span class="absolute right-3 top-3 rounded-full border border-silver-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-ink sm:right-4 sm:top-4">Baru</span>`;

  return `
  <a href="detail-produk.html?id=${p.id}"
     class="group block rounded-2xl border border-silver-200 bg-white p-2.5 transition hover:-translate-y-1 hover:border-creamdark hover:shadow-xl hover:shadow-silver-200/70 sm:rounded-3xl sm:p-4">
    <div class="relative overflow-hidden rounded-xl bg-cream sm:rounded-2xl">
      <img src="${p.img}" alt="${p.name}" loading="lazy"
           class="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
      ${p.badge ? `<span class="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-semibold sm:left-4 sm:top-4 ${p.badge === 'Hemat' || p.badge === 'Mulus' ? 'bg-white text-ink' : 'bg-ink text-cream'}">${p.badge}</span>` : ''}
      ${condChip}
    </div>
    <div class="p-2 pb-1 sm:p-3 sm:pb-2">
      <p class="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px] sm:tracking-[0.2em]">${p.cat}</p>
      <h3 class="mt-1 text-sm font-semibold leading-snug sm:text-base">${p.name}</h3>
      <p class="mt-0.5 text-[11px] text-neutral-500 sm:text-xs">${p.spec}</p>
      <div class="mt-2 flex items-end justify-between gap-2 sm:mt-3 sm:gap-3">
        <div>
          <p class="text-sm font-semibold sm:text-base">${rupiah(p.price)}</p>
          <p class="text-[10px] text-neutral-400 sm:text-xs">atau ${rupiah(Math.round(p.price / 12))}/bln</p>
        </div>
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:bg-neutral-700 sm:h-11 sm:w-11" aria-label="Lihat detail">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </span>
      </div>
    </div>
  </a>`;
}