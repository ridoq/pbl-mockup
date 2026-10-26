/* ============================================================
   DATA PRODUK & KONFIG TOKO — NAFA iSTORE
   Ubah di sini, semua halaman otomatis ikut.
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
  {
    "id": "iphone-18-pro-max",
    "name": "iPhone 18 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "256GB · Deep Crimson Titanium",
    "price": 25999000,
    "badge": "Terbaru",
    "rating": 5,
    "sold": 88,
    "img": "assets/img/productNew/iphone-18-pro-max-deep-crimson.webp",
    "colors": [
      "Deep Crimson",
      "Ice Blue",
      "Platinum",
      "Obsidian Black"
    ],
    "colorImages": {
      "Deep Crimson": "assets/img/productNew/iphone-18-pro-max-deep-crimson.webp",
      "Ice Blue": "assets/img/productNew/iphone-18-pro-max-ice-blue-titanium.webp",
      "Platinum": "assets/img/productNew/iphone-18-pro-max-platinum-titanium.webp",
      "Obsidian Black": "assets/img/productNew/iphone-18-pro-max-obsidian-black.webp"
    },
    "storages": [
      {
        "label": "256GB",
        "price": 25999000
      },
      {
        "label": "512GB",
        "price": 28999000
      },
      {
        "label": "1TB",
        "price": 32999000
      }
    ],
    "desc": "Flagship masa depan dengan bodi Titanium generasi baru, chip Apple Silicon A20 Pro, sistem quad-camera periskop dan layar ProMotion 144Hz.",
    "specs": {
      "Layar": "6.9\" Super Retina XDR OLED 144Hz",
      "Chip": "A20 Pro Bionic",
      "Kamera": "48MP Quad-Pixel + 48MP Ultra Wide + 48MP Periscope Telephoto 10x",
      "Baterai": "Hingga 36 jam pemutaran video",
      "Ketahanan": "Titanium Armor, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-18-pro",
    "name": "iPhone 18 Pro",
    "cat": "Pro Model",
    "condition": "Baru",
    "spec": "128GB · Deep Crimson Titanium",
    "price": 22499000,
    "badge": "Terbaru",
    "rating": 5,
    "sold": 95,
    "img": "assets/img/productNew/iphone-18-pro-deep-crimson.webp",
    "colors": [
      "Deep Crimson",
      "Ice Blue",
      "Platinum",
      "Obsidian Black"
    ],
    "colorImages": {
      "Deep Crimson": "assets/img/productNew/iphone-18-pro-deep-crimson.webp",
      "Ice Blue": "assets/img/productNew/iphone-18-pro-ice-blue-titanium.webp",
      "Platinum": "assets/img/productNew/iphone-18-pro-platinum-titanium.webp",
      "Obsidian Black": "assets/img/productNew/iphone-18-pro-obsidian-black.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 22499000
      },
      {
        "label": "256GB",
        "price": 24499000
      },
      {
        "label": "512GB",
        "price": 27999000
      }
    ],
    "desc": "Kekuatan Pro dalam genggaman kompak. Dilengkapi chip A20 Pro bertenaga AI Neural generasi terdepan dan kamera pro 48MP triple system.",
    "specs": {
      "Layar": "6.3\" Super Retina XDR OLED 144Hz",
      "Chip": "A20 Pro Bionic",
      "Kamera": "48MP Main + 48MP Ultra Wide + 48MP Telephoto 5x",
      "Baterai": "Hingga 30 jam pemutaran video",
      "Ketahanan": "Titanium Armor, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-17-pro-max",
    "name": "iPhone 17 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "256GB · Cosmic Amber",
    "price": 23999000,
    "badge": "Populer",
    "rating": 4.9,
    "sold": 210,
    "img": "assets/img/productNew/iphone-17-pro-max-cosmic-amber.webp",
    "colors": [
      "Cosmic Amber",
      "Deep Blue",
      "Silver"
    ],
    "colorImages": {
      "Cosmic Amber": "assets/img/productNew/iphone-17-pro-max-cosmic-amber.webp",
      "Deep Blue": "assets/img/productNew/iphone-17-pro-max-deep-blue-titanium.webp",
      "Silver": "assets/img/productNew/iphone-17-pro-max-silver-titanium.webp"
    },
    "storages": [
      {
        "label": "256GB",
        "price": 23999000
      },
      {
        "label": "512GB",
        "price": 26999000
      },
      {
        "label": "1TB",
        "price": 30999000
      }
    ],
    "desc": "Layar 6.9 inci memukau dengan bezel tertipis di kelasnya, chip A19 Pro, dan tombol Camera Control sentuhan presisi.",
    "specs": {
      "Layar": "6.9\" Super Retina XDR, ProMotion 120Hz",
      "Chip": "A19 Pro",
      "Kamera": "48MP Fusion + 48MP Ultra Wide + 48MP Telephoto",
      "Baterai": "Hingga 34 jam pemutaran video",
      "Ketahanan": "Titanium Aerospace, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-17-pro",
    "name": "iPhone 17 Pro",
    "cat": "Pro Model",
    "condition": "Baru",
    "spec": "128GB · Cosmic Amber",
    "price": 20499000,
    "badge": null,
    "rating": 4.9,
    "sold": 180,
    "img": "assets/img/productNew/iphone-17-pro-cosmic-amber.webp",
    "colors": [
      "Cosmic Amber",
      "Deep Blue",
      "Silver"
    ],
    "colorImages": {
      "Cosmic Amber": "assets/img/productNew/iphone-17-pro-cosmic-amber.webp",
      "Deep Blue": "assets/img/productNew/iphone-17-pro-deep-blue-titanium.webp",
      "Silver": "assets/img/productNew/iphone-17-pro-silver-titanium.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 20499000
      },
      {
        "label": "256GB",
        "price": 22499000
      },
      {
        "label": "512GB",
        "price": 25499000
      }
    ],
    "desc": "Desain ringkas 6.3 inci dengan kekuatan chip A19 Pro. Ketahanan bodi Titanium dengan pendinginan vapor chamber mutakhir.",
    "specs": {
      "Layar": "6.3\" Super Retina XDR, ProMotion 120Hz",
      "Chip": "A19 Pro",
      "Kamera": "48MP Fusion + 48MP Ultra Wide + 48MP Telephoto",
      "Baterai": "Hingga 28 jam pemutaran video",
      "Ketahanan": "Titanium Aerospace, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-17-air",
    "name": "iPhone 17 Air",
    "cat": "Plus Model",
    "condition": "Baru",
    "spec": "128GB · Cloud Blue",
    "price": 16999000,
    "badge": "Ultra Slim",
    "rating": 4.8,
    "sold": 145,
    "img": "assets/img/productNew/iphone-17-air-cloud-blue.webp",
    "colors": [
      "Cloud Blue",
      "Starlight",
      "Space Black"
    ],
    "colorImages": {
      "Cloud Blue": "assets/img/productNew/iphone-17-air-cloud-blue.webp",
      "Starlight": "assets/img/productNew/iphone-17-air-starlight.webp",
      "Space Black": "assets/img/productNew/iphone-17-air-space-black.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 16999000
      },
      {
        "label": "256GB",
        "price": 18499000
      },
      {
        "label": "512GB",
        "price": 20999000
      }
    ],
    "desc": "iPhone tertipis yang pernah ada. Bodi 5.6mm yang sangat ringan dengan layar besar 6.6 inci dan chip A19 yang super efisien.",
    "specs": {
      "Layar": "6.6\" Super Retina XDR ProMotion",
      "Chip": "A19 Bionic",
      "Kamera": "48MP Fusion Camera",
      "Baterai": "Hingga 25 jam pemutaran video",
      "Ketahanan": "Aluminum Ultra-Light, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-17",
    "name": "iPhone 17",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "128GB · Black",
    "price": 15499000,
    "badge": null,
    "rating": 4.8,
    "sold": 290,
    "img": "assets/img/productNew/iphone-17-black.webp",
    "colors": [
      "Black",
      "White",
      "Lavender",
      "Mist Blue",
      "Sage Green"
    ],
    "colorImages": {
      "Black": "assets/img/productNew/iphone-17-black.webp",
      "White": "assets/img/productNew/iphone-17-white.webp",
      "Lavender": "assets/img/productNew/iphone-17-lavender.webp",
      "Mist Blue": "assets/img/productNew/iphone-17-mist-blue.webp",
      "Sage Green": "assets/img/productNew/iphone-17-sage-green.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 15499000
      },
      {
        "label": "256GB",
        "price": 16999000
      },
      {
        "label": "512GB",
        "price": 19499000
      }
    ],
    "desc": "iPhone 17 standar hadir dengan refresh rate 120Hz ProMotion pertama di seri reguler, kamera ganda 48MP dan chip A19.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR ProMotion 120Hz",
      "Chip": "A19 Bionic",
      "Kamera": "48MP Dual Fusion + 48MP Ultra Wide",
      "Baterai": "Hingga 26 jam pemutaran video",
      "Ketahanan": "Ceramic Shield gen 3, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-16-pro-max",
    "name": "iPhone 16 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "256GB · Black Titanium",
    "price": 21999000,
    "badge": "Best Seller",
    "rating": 4.9,
    "sold": 430,
    "img": "assets/img/productNew/iphone-16-pro-max-black-titanium.webp",
    "colors": [
      "Black Titanium",
      "White Titanium",
      "Desert Titanium",
      "Natural Titanium"
    ],
    "colorImages": {
      "Black Titanium": "assets/img/productNew/iphone-16-pro-max-black-titanium.webp",
      "White Titanium": "assets/img/productNew/iphone-16-pro-max-white-titanium.webp",
      "Desert Titanium": "assets/img/productNew/iphone-16-pro-max-desert-titanium.webp",
      "Natural Titanium": "assets/img/productNew/iphone-16-pro-max-natural-titanium.webp"
    },
    "storages": [
      {
        "label": "256GB",
        "price": 21999000
      },
      {
        "label": "512GB",
        "price": 24999000
      },
      {
        "label": "1TB",
        "price": 27999000
      }
    ],
    "desc": "Layar 6.9 inci terbesar, tombol Camera Control baru, chip A18 Pro, dan baterai paling awet di seluruh lini iPhone.",
    "specs": {
      "Layar": "6.9\" Super Retina XDR, ProMotion 120Hz",
      "Chip": "A18 Pro",
      "Kamera": "48MP Main + 48MP Ultra Wide + 12MP 5x Tele",
      "Baterai": "Hingga 33 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-16-pro",
    "name": "iPhone 16 Pro",
    "cat": "Pro Model",
    "condition": "Baru",
    "spec": "128GB · Black Titanium",
    "price": 18499000,
    "badge": null,
    "rating": 4.9,
    "sold": 390,
    "img": "assets/img/productNew/iphone-16-pro-black-titanium.webp",
    "colors": [
      "Black Titanium",
      "White Titanium",
      "Desert Titanium",
      "Natural Titanium"
    ],
    "colorImages": {
      "Black Titanium": "assets/img/productNew/iphone-16-pro-black-titanium.webp",
      "White Titanium": "assets/img/productNew/iphone-16-pro-white-titanium.webp",
      "Desert Titanium": "assets/img/productNew/iphone-16-pro-desert-titanium.webp",
      "Natural Titanium": "assets/img/productNew/iphone-16-pro-natural-titanium.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 18499000
      },
      {
        "label": "256GB",
        "price": 19999000
      },
      {
        "label": "512GB",
        "price": 22999000
      }
    ],
    "desc": "Ukuran pas 6.3 inci, performa maksimal chip A18 Pro, tombol Camera Control, dan kemampuan video 4K 120fps Dolby Vision.",
    "specs": {
      "Layar": "6.3\" Super Retina XDR, ProMotion 120Hz",
      "Chip": "A18 Pro",
      "Kamera": "48MP Main + 48MP Ultra Wide + 12MP 5x Tele",
      "Baterai": "Hingga 27 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-16",
    "name": "iPhone 16",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "128GB · Ultramarine",
    "price": 13999000,
    "badge": "Populer",
    "rating": 4.8,
    "sold": 520,
    "img": "assets/img/productNew/iphone-16-ultramarine.webp",
    "colors": [
      "Ultramarine",
      "Teal",
      "Pink",
      "White",
      "Black"
    ],
    "colorImages": {
      "Ultramarine": "assets/img/productNew/iphone-16-ultramarine.webp",
      "Teal": "assets/img/productNew/iphone-16-teal.webp",
      "Pink": "assets/img/productNew/iphone-16-pink.webp",
      "White": "assets/img/productNew/iphone-16-white.webp",
      "Black": "assets/img/productNew/iphone-16-black.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 13999000
      },
      {
        "label": "256GB",
        "price": 15499000
      },
      {
        "label": "512GB",
        "price": 17999000
      }
    ],
    "desc": "Kamera ganda vertikal dengan fitur Spatial Capture, tombol Action & Camera Control baru, serta chip A18 super kencang.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR",
      "Chip": "A18",
      "Kamera": "48MP Fusion + 12MP Ultra Wide",
      "Baterai": "Hingga 22 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-16e",
    "name": "iPhone 16e",
    "cat": "SE Series",
    "condition": "Baru",
    "spec": "128GB · Starlight",
    "price": 9999000,
    "badge": "Hemat",
    "rating": 4.7,
    "sold": 210,
    "img": "assets/img/productNew/iphone-16e-white.webp",
    "colors": [
      "Starlight",
      "Midnight"
    ],
    "colorImages": {
      "Starlight": "assets/img/productNew/iphone-16e-white.webp",
      "Midnight": "assets/img/productNew/iphone-16e-black.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 9999000
      },
      {
        "label": "256GB",
        "price": 11499000
      }
    ],
    "desc": "iPhone modern berlayar OLED bezel-less paling terjangkau dengan chip A18, modem 5G Apple C1, dan kamera tunggal 48MP.",
    "specs": {
      "Layar": "6.1\" OLED Super Retina",
      "Chip": "A18 Bionic",
      "Kamera": "48MP Fusion Camera",
      "Baterai": "Hingga 20 jam pemutaran video",
      "Ketahanan": "IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-15-pro-max",
    "name": "iPhone 15 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "256GB · Natural Titanium",
    "price": 19499000,
    "badge": null,
    "rating": 4.9,
    "sold": 480,
    "img": "assets/img/productNew/iphone-15-pro-max-natural-titanium.webp",
    "colors": [
      "Natural Titanium",
      "Blue Titanium",
      "White Titanium",
      "Black Titanium"
    ],
    "colorImages": {
      "Natural Titanium": "assets/img/productNew/iphone-15-pro-max-natural-titanium.webp",
      "Blue Titanium": "assets/img/productNew/iphone-15-pro-max-blue-titanium.webp",
      "White Titanium": "assets/img/productNew/iphone-15-pro-max-white-titanium.webp",
      "Black Titanium": "assets/img/productNew/iphone-15-pro-max-black-titanium.webp"
    },
    "storages": [
      {
        "label": "256GB",
        "price": 19499000
      },
      {
        "label": "512GB",
        "price": 22499000
      },
      {
        "label": "1TB",
        "price": 25499000
      }
    ],
    "desc": "Pelopor bodi Titanium dengan lensa telephoto 5x tetraprism, chip A17 Pro 3nm untuk gaming konsol AAA, dan port USB-C 10Gbps.",
    "specs": {
      "Layar": "6.7\" Super Retina XDR, ProMotion 120Hz",
      "Chip": "A17 Pro",
      "Kamera": "48MP Main + 12MP Ultra Wide + 12MP 5x Tele",
      "Baterai": "Hingga 29 jam pemutaran video",
      "Ketahanan": "Titanium, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-15-pro",
    "name": "iPhone 15 Pro",
    "cat": "Pro Model",
    "condition": "Baru",
    "spec": "128GB · Natural Titanium",
    "price": 16499000,
    "badge": null,
    "rating": 4.8,
    "sold": 370,
    "img": "assets/img/productNew/iphone-15-pro-natural-titanium.webp",
    "colors": [
      "Natural Titanium",
      "Blue Titanium",
      "White Titanium",
      "Black Titanium"
    ],
    "colorImages": {
      "Natural Titanium": "assets/img/productNew/iphone-15-pro-natural-titanium.webp",
      "Blue Titanium": "assets/img/productNew/iphone-15-pro-blue-titanium.webp",
      "White Titanium": "assets/img/productNew/iphone-15-pro-white-titanium.webp",
      "Black Titanium": "assets/img/productNew/iphone-15-pro-black-titanium.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 16499000
      },
      {
        "label": "256GB",
        "price": 18499000
      },
      {
        "label": "512GB",
        "price": 21499000
      }
    ],
    "desc": "Bodi Titanium ringan dengan tombol Action serbaguna, chip A17 Pro, dan kamera utama 48MP dengan beragam focal length pro.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR, ProMotion 120Hz",
      "Chip": "A17 Pro",
      "Kamera": "48MP Main + 12MP Ultra Wide + 12MP 3x Tele",
      "Baterai": "Hingga 23 jam pemutaran video",
      "Ketahanan": "Titanium, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-15-plus",
    "name": "iPhone 15 Plus",
    "cat": "Plus Model",
    "condition": "Baru",
    "spec": "128GB · Pink",
    "price": 13499000,
    "badge": null,
    "rating": 4.8,
    "sold": 290,
    "img": "assets/img/productNew/iphone-15-plus-pink.webp",
    "colors": [
      "Pink",
      "Black",
      "Blue",
      "Green",
      "Yellow"
    ],
    "colorImages": {
      "Pink": "assets/img/productNew/iphone-15-plus-pink.webp",
      "Black": "assets/img/productNew/iphone-15-black.webp",
      "Blue": "assets/img/productNew/iphone-15-blue.webp",
      "Green": "assets/img/productNew/iphone-15-green.webp",
      "Yellow": "assets/img/productNew/iphone-15-yellow.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 13499000
      },
      {
        "label": "256GB",
        "price": 14999000
      },
      {
        "label": "512GB",
        "price": 17499000
      }
    ],
    "desc": "Layar 6.7 inci yang besar dengan baterai luar biasa awet, Dynamic Island, dan kamera utama 48MP dengan 2x optical quality zoom.",
    "specs": {
      "Layar": "6.7\" Super Retina XDR, Dynamic Island",
      "Chip": "A16 Bionic",
      "Kamera": "48MP Main + 12MP Ultra Wide",
      "Baterai": "Hingga 26 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-15",
    "name": "iPhone 15",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "128GB · Black",
    "price": 11499000,
    "badge": null,
    "rating": 4.8,
    "sold": 680,
    "img": "assets/img/productNew/iphone-15-black.webp",
    "colors": [
      "Black",
      "Blue",
      "Green",
      "Yellow",
      "Pink"
    ],
    "colorImages": {
      "Black": "assets/img/productNew/iphone-15-black.webp",
      "Blue": "assets/img/productNew/iphone-15-blue.webp",
      "Green": "assets/img/productNew/iphone-15-green.webp",
      "Yellow": "assets/img/productNew/iphone-15-yellow.webp",
      "Pink": "assets/img/productNew/iphone-15-pink.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 11499000
      },
      {
        "label": "256GB",
        "price": 12999000
      },
      {
        "label": "512GB",
        "price": 15499000
      }
    ],
    "desc": "Hadir dengan Dynamic Island, kamera 48MP beresolusi super tinggi, port USB-C universal, dan kaca belakang frosted yang elegan.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR, Dynamic Island",
      "Chip": "A16 Bionic",
      "Kamera": "48MP Main + 12MP Ultra Wide",
      "Baterai": "Hingga 20 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-14-pro-max",
    "name": "iPhone 14 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "128GB · Deep Purple",
    "price": 16999000,
    "badge": null,
    "rating": 4.8,
    "sold": 350,
    "img": "assets/img/productNew/iphone-14-pro-max-deep-purple.webp",
    "colors": [
      "Deep Purple",
      "Space Black",
      "Gold",
      "Silver"
    ],
    "colorImages": {
      "Deep Purple": "assets/img/productNew/iphone-14-pro-max-deep-purple.webp",
      "Space Black": "assets/img/productNew/iphone-14-pro-max-space-black.webp",
      "Gold": "assets/img/productNew/iphone-14-pro-max-gold.webp",
      "Silver": "assets/img/productNew/iphone-14-pro-max-silver.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 16999000
      },
      {
        "label": "256GB",
        "price": 18999000
      },
      {
        "label": "512GB",
        "price": 21999000
      }
    ],
    "desc": "Generasi pertama yang memperkenalkan Dynamic Island dan Always-On Display. Kamera 48MP Pro dan bodi baja tahan karat berkilau.",
    "specs": {
      "Layar": "6.7\" Super Retina XDR, Dynamic Island 120Hz",
      "Chip": "A16 Bionic",
      "Kamera": "48MP Main + 12MP Ultra Wide + 12MP 3x Tele",
      "Baterai": "Hingga 29 jam pemutaran video",
      "Ketahanan": "Stainless Steel, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-14",
    "name": "iPhone 14",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "128GB · Midnight",
    "price": 9999000,
    "badge": null,
    "rating": 4.8,
    "sold": 720,
    "img": "assets/img/productNew/iphone-14-midnight.webp",
    "colors": [
      "Midnight",
      "Starlight",
      "Blue",
      "Purple",
      "Yellow",
      "(PRODUCT)RED"
    ],
    "colorImages": {
      "Midnight": "assets/img/productNew/iphone-14-midnight.webp",
      "Starlight": "assets/img/productNew/iphone-14-starlight.webp",
      "Blue": "assets/img/productNew/iphone-14-blue.webp",
      "Purple": "assets/img/productNew/iphone-14-purple.webp",
      "Yellow": "assets/img/productNew/iphone-14-yellow.webp",
      "(PRODUCT)RED": "assets/img/productNew/iphone-14-red.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 9999000
      },
      {
        "label": "256GB",
        "price": 11499000
      }
    ],
    "desc": "Pilihan terpercaya dengan chip A15 Bionic 5-core GPU, stabilisasi video Action Mode, dan deteksi benturan darurat.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR OLED",
      "Chip": "A15 Bionic (5-core GPU)",
      "Kamera": "12MP Main + 12MP Ultra Wide Photonic Engine",
      "Baterai": "Hingga 20 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-13-pro-max",
    "name": "iPhone 13 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "128GB · Sierra Blue",
    "price": 14499000,
    "badge": null,
    "rating": 4.8,
    "sold": 310,
    "img": "assets/img/productNew/iphone-13-pro-max-sierra-blue.webp",
    "colors": [
      "Sierra Blue",
      "Graphite",
      "Gold",
      "Silver"
    ],
    "colorImages": {
      "Sierra Blue": "assets/img/productNew/iphone-13-pro-max-sierra-blue.webp",
      "Graphite": "assets/img/productNew/iphone-13-pro-max-graphite.webp",
      "Gold": "assets/img/productNew/iphone-13-pro-max-gold.webp",
      "Silver": "assets/img/productNew/iphone-13-pro-max-silver.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 14499000
      },
      {
        "label": "256GB",
        "price": 15999000
      },
      {
        "label": "512GB",
        "price": 17999000
      }
    ],
    "desc": "Layar 120Hz ProMotion pertama dengan baterai super tahan lama, mode sinematik Dolby Vision, dan kamera macro photography.",
    "specs": {
      "Layar": "6.7\" Super Retina XDR ProMotion 120Hz",
      "Chip": "A15 Bionic (5-core GPU)",
      "Kamera": "12MP Main + 12MP Ultra Wide + 12MP 3x Tele",
      "Baterai": "Hingga 28 jam pemutaran video",
      "Ketahanan": "Stainless Steel, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-13",
    "name": "iPhone 13",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "128GB · Midnight",
    "price": 8499000,
    "badge": "Best Value",
    "rating": 4.9,
    "sold": 1100,
    "img": "assets/img/productNew/iphone-13-midnight.webp",
    "colors": [
      "Midnight",
      "Starlight",
      "Blue",
      "Pink",
      "Green",
      "(PRODUCT)RED"
    ],
    "colorImages": {
      "Midnight": "assets/img/productNew/iphone-13-midnight.webp",
      "Starlight": "assets/img/productNew/iphone-13-starlight.webp",
      "Blue": "assets/img/productNew/iphone-13-blue.webp",
      "Pink": "assets/img/productNew/iphone-13-pink.webp",
      "Green": "assets/img/productNew/iphone-13-green.webp",
      "(PRODUCT)RED": "assets/img/productNew/iphone-13-red.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 8499000
      },
      {
        "label": "256GB",
        "price": 9999000
      }
    ],
    "desc": "iPhone paling value-for-money. Kamera sensor-shift OIS diagonal, baterai jauh lebih tahan lama, dan notch layar 20% lebih kecil.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR OLED",
      "Chip": "A15 Bionic",
      "Kamera": "12MP Main (Sensor-shift OIS) + 12MP Ultra Wide",
      "Baterai": "Hingga 19 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-12-pro-max",
    "name": "iPhone 12 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "128GB · Pacific Blue",
    "price": 12499000,
    "badge": null,
    "rating": 4.7,
    "sold": 430,
    "img": "assets/img/productNew/iphone-12-pro-max-pacific-blue.webp",
    "colors": [
      "Pacific Blue",
      "Graphite",
      "Silver",
      "Gold"
    ],
    "colorImages": {
      "Pacific Blue": "assets/img/productNew/iphone-12-pro-max-pacific-blue.webp",
      "Graphite": "assets/img/productNew/iphone-12-pro-max-graphite.webp",
      "Silver": "assets/img/productNew/iphone-12-pro-max-silver.webp",
      "Gold": "assets/img/productNew/iphone-12-pro-max-gold.webp"
    },
    "storages": [
      {
        "label": "128GB",
        "price": 12499000
      },
      {
        "label": "256GB",
        "price": 13999000
      }
    ],
    "desc": "iPhone flat-edge pertama berlayar 6.7 inci dengan konektivitas 5G, pemindai LiDAR untuk augmented reality, dan format Apple ProRAW.",
    "specs": {
      "Layar": "6.7\" Super Retina XDR OLED",
      "Chip": "A14 Bionic",
      "Kamera": "12MP Triple System + LiDAR Scanner",
      "Baterai": "Hingga 20 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-12",
    "name": "iPhone 12",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "64GB · Black",
    "price": 6999000,
    "badge": null,
    "rating": 4.7,
    "sold": 840,
    "img": "assets/img/productNew/iphone-12-black.webp",
    "colors": [
      "Black",
      "White",
      "Blue",
      "Green",
      "Purple",
      "(PRODUCT)RED"
    ],
    "colorImages": {
      "Black": "assets/img/productNew/iphone-12-black.webp",
      "White": "assets/img/productNew/iphone-12-white.webp",
      "Blue": "assets/img/productNew/iphone-12-blue.webp",
      "Green": "assets/img/productNew/iphone-12-green.webp",
      "Purple": "assets/img/productNew/iphone-12-purple.webp",
      "(PRODUCT)RED": "assets/img/productNew/iphone-12-red.webp"
    },
    "storages": [
      {
        "label": "64GB",
        "price": 6999000
      },
      {
        "label": "128GB",
        "price": 7999000
      }
    ],
    "desc": "Layar Super Retina XDR OLED tajam, perlindungan Ceramic Shield 4x lebih tahan jatuh, MagSafe wireless charging, dan 5G kencang.",
    "specs": {
      "Layar": "6.1\" Super Retina XDR OLED",
      "Chip": "A14 Bionic",
      "Kamera": "12MP Dual Ultra Wide & Wide",
      "Baterai": "Hingga 17 jam pemutaran video",
      "Ketahanan": "Ceramic Shield, IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-11-pro-max",
    "name": "iPhone 11 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Baru",
    "spec": "64GB · Midnight Green",
    "price": 9499000,
    "badge": null,
    "rating": 4.7,
    "sold": 520,
    "img": "assets/img/productNew/iphone-11-pro-midnight-green.webp",
    "colors": [
      "Midnight Green",
      "Space Grey",
      "Silver",
      "Gold"
    ],
    "colorImages": {
      "Midnight Green": "assets/img/productNew/iphone-11-pro-midnight-green.webp",
      "Space Grey": "assets/img/productNew/iphone-11-pro-max-space-grey.webp",
      "Silver": "assets/img/productNew/iphone-11-pro-max-silver.webp",
      "Gold": "assets/img/productNew/iphone-11-pro-max-gold.webp"
    },
    "storages": [
      {
        "label": "64GB",
        "price": 9499000
      },
      {
        "label": "256GB",
        "price": 10999000
      }
    ],
    "desc": "Legenda tiga kamera iPhone pertama. Kaca buram bertekstur premium dengan Midnight Green ikonik dan layar Super Retina XDR 6.5 inci.",
    "specs": {
      "Layar": "6.5\" Super Retina XDR OLED",
      "Chip": "A13 Bionic",
      "Kamera": "12MP Triple Camera (Ultra Wide, Wide, Telephoto)",
      "Baterai": "Hingga 20 jam pemutaran video",
      "Ketahanan": "IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-11",
    "name": "iPhone 11",
    "cat": "Standard / Base Model",
    "condition": "Baru",
    "spec": "64GB · Black",
    "price": 5499000,
    "badge": "Hemat",
    "rating": 4.8,
    "sold": 1420,
    "img": "assets/img/productNew/iphone-11-black.webp",
    "colors": [
      "Black",
      "White",
      "Green",
      "Purple",
      "(PRODUCT)RED"
    ],
    "colorImages": {
      "Black": "assets/img/productNew/iphone-11-black.webp",
      "White": "assets/img/productNew/iphone-11-white.webp",
      "Green": "assets/img/productNew/iphone-11-teal.webp",
      "Purple": "assets/img/productNew/iphone-11-purple.webp",
      "(PRODUCT)RED": "assets/img/productNew/iphone-11-red.webp"
    },
    "storages": [
      {
        "label": "64GB",
        "price": 5499000
      },
      {
        "label": "128GB",
        "price": 6299000
      }
    ],
    "desc": "iPhone terpopuler sepanjang masa. Dual kamera dengan Night Mode spektakuler, chip A13 Bionic, dan baterai awet seharian.",
    "specs": {
      "Layar": "6.1\" Liquid Retina HD",
      "Chip": "A13 Bionic",
      "Kamera": "12MP Dual Ultra Wide & Wide",
      "Baterai": "Hingga 17 jam pemutaran video",
      "Ketahanan": "IP68",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-se-gen-3",
    "name": "iPhone SE (Gen 3)",
    "cat": "SE Series",
    "condition": "Baru",
    "spec": "64GB · Midnight",
    "price": 6499000,
    "badge": "Klasik",
    "rating": 4.7,
    "sold": 260,
    "img": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80&auto=format&fit=crop",
    "colors": [
      "Midnight",
      "Starlight",
      "(PRODUCT)RED"
    ],
    "storages": [
      {
        "label": "64GB",
        "price": 6499000
      },
      {
        "label": "128GB",
        "price": 7499000
      }
    ],
    "desc": "Desain ikonik klasik dengan tombol Touch ID Home, diperkuat chip A15 Bionic secepat iPhone 13 dan koneksi 5G.",
    "specs": {
      "Layar": "4.7\" Retina HD",
      "Chip": "A15 Bionic",
      "Kamera": "12MP Wide Camera",
      "Baterai": "Hingga 15 jam pemutaran video",
      "Ketahanan": "IP67",
      "Garansi": "Resmi 1 tahun"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-14-plus-bekas",
    "name": "iPhone 14 Plus",
    "cat": "Plus Model",
    "condition": "Second",
    "spec": "128GB · Blue · Ex-iBox 99%",
    "price": 9499000,
    "badge": "Mulus 99%",
    "rating": 4.8,
    "sold": 75,
    "img": "assets/img/productNew/iphone-14-blue.webp",
    "colors": [
      "Blue"
    ],
    "storages": [
      {
        "label": "128GB",
        "price": 9499000
      }
    ],
    "desc": "Unit second mulus 99% Ex-Garansi Resmi iBox. Layar 6.7 inci luas dan baterai sangat sehat 92%+, lolos inspeksi 30 titik toko.",
    "specs": {
      "Kondisi": "Mulus 99% no dent, Ex-iBox",
      "Battery Health": "92%",
      "Kelengkapan": "Fullset OEM Box + Cable",
      "Layar": "6.7\" Super Retina XDR OLED",
      "Garansi": "Garansi toko 14 hari tukar unit"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-13-pro-bekas",
    "name": "iPhone 13 Pro",
    "cat": "Pro Model",
    "condition": "Second",
    "spec": "128GB · Sierra Blue · 98%",
    "price": 9999000,
    "badge": "Mulus",
    "rating": 4.8,
    "sold": 110,
    "img": "assets/img/productNew/iphone-13-pro-max-sierra-blue.webp",
    "colors": [
      "Sierra Blue"
    ],
    "storages": [
      {
        "label": "128GB",
        "price": 9999000
      },
      {
        "label": "256GB",
        "price": 11299000
      }
    ],
    "desc": "iPhone 13 Pro second kondisi terawat 98%. Layar mulus 120Hz ProMotion, kamera 3x optical zoom tajam, battery health 88%.",
    "specs": {
      "Kondisi": "Mulus 98%, all function normal",
      "Battery Health": "88%",
      "Kelengkapan": "Unit + Box original",
      "Layar": "6.1\" Super Retina XDR 120Hz",
      "Garansi": "Garansi toko 14 hari tukar unit"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-12-pro-max-bekas",
    "name": "iPhone 12 Pro Max",
    "cat": "Pro Max Model",
    "condition": "Second",
    "spec": "128GB · Graphite · 97%",
    "price": 8299000,
    "badge": "Mulus",
    "rating": 4.7,
    "sold": 95,
    "img": "assets/img/productNew/iphone-12-pro-max-graphite.webp",
    "colors": [
      "Graphite"
    ],
    "storages": [
      {
        "label": "128GB",
        "price": 8299000
      }
    ],
    "desc": "Layar lebar 6.7 inci dengan bodi stainless steel graphite elegan. Sinyal all operator aktif permanen dan lolos QC 30 titik.",
    "specs": {
      "Kondisi": "Fisik 97% pemakaian wajar",
      "Battery Health": "86%",
      "Kelengkapan": "Unit + Fast Charger",
      "Layar": "6.7\" Super Retina XDR OLED",
      "Garansi": "Garansi toko 14 hari tukar unit"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-xs-max-bekas",
    "name": "iPhone XS Max",
    "cat": "Pro Max Model",
    "condition": "Second",
    "spec": "64GB · Gold · 97%",
    "price": 4999000,
    "badge": "Mulus",
    "rating": 4.7,
    "sold": 140,
    "img": "https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=800&q=80&auto=format&fit=crop",
    "colors": [
      "Gold",
      "Space Grey"
    ],
    "storages": [
      {
        "label": "64GB",
        "price": 4999000
      },
      {
        "label": "256GB",
        "price": 5699000
      }
    ],
    "desc": "Seri flagship layar besar 6.5 inci OLED Super Retina dengan bodi stainless steel gold mewah dan dual kamera portrait mode.",
    "specs": {
      "Kondisi": "Fisik 97%, Face ID & TrueTone On",
      "Battery Health": "85%",
      "Layar": "6.5\" Super Retina OLED",
      "Chip": "A12 Bionic",
      "Garansi": "Garansi toko 14 hari tukar unit"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-xr-bekas",
    "name": "iPhone XR",
    "cat": "Standard / Base Model",
    "condition": "Second",
    "spec": "64GB · Black · 96%",
    "price": 3699000,
    "badge": "Hemat",
    "rating": 4.7,
    "sold": 320,
    "img": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80&auto=format&fit=crop",
    "colors": [
      "Black",
      "White",
      "Coral",
      "Red"
    ],
    "storages": [
      {
        "label": "64GB",
        "price": 3699000
      },
      {
        "label": "128GB",
        "price": 4299000
      }
    ],
    "desc": "iPhone terlaris berlayar 6.1 Liquid Retina dengan daya tahan baterai legendaris. Face ID normal dan sinyal lancar all operator.",
    "specs": {
      "Kondisi": "Fisik 96% mulus terawat",
      "Battery Health": "84%",
      "Layar": "6.1\" Liquid Retina HD",
      "Chip": "A12 Bionic",
      "Garansi": "Garansi toko 14 hari tukar unit"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  },
  {
    "id": "iphone-x-bekas",
    "name": "iPhone X",
    "cat": "Standard / Base Model",
    "condition": "Second",
    "spec": "64GB · Space Grey · 95%",
    "price": 3199000,
    "badge": "Klasik",
    "rating": 4.6,
    "sold": 210,
    "img": "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80&auto=format&fit=crop",
    "colors": [
      "Space Grey",
      "Silver"
    ],
    "storages": [
      {
        "label": "64GB",
        "price": 3199000
      },
      {
        "label": "256GB",
        "price": 3799000
      }
    ],
    "desc": "iPhone edisi ulang tahun ke-10 yang merevolusi smartphone modern dengan layar OLED bezel-less dan Face ID pertama di dunia.",
    "specs": {
      "Kondisi": "Fisik 95%, Face ID aktif",
      "Battery Health": "83%",
      "Layar": "5.8\" Super Retina OLED",
      "Chip": "A11 Bionic",
      "Garansi": "Garansi toko 14 hari tukar unit"
    },
    "tokopedia": "https://www.tokopedia.com/nafaistore"
  }
];

function normalizeProduct(p) {
  if (!p || typeof p !== 'object') return null;
  const name = String(p.name || 'iPhone');
  let cat = p.cat;
  if (!cat || cat === 'Pro') {
    cat = name.includes('Max') ? 'Pro Max Model' : 'Pro Model';
  } else if (cat === 'Standar' || cat === 'Standard') {
    if (name.includes('Plus') || name.includes('Air')) cat = 'Plus Model';
    else if (name.includes('SE') || name.includes('16e')) cat = 'SE Series';
    else cat = 'Standard / Base Model';
  } else if (cat === 'Plus') {
    cat = 'Plus Model';
  } else if (cat === 'Pro Max') {
    cat = 'Pro Max Model';
  }
  p.cat = cat || 'Standard / Base Model';
  p.name = name;
  p.condition = p.condition === 'Second' ? 'Second' : 'Baru';
  if (!p.spec) {
    p.spec = (p.storages && p.storages[0] ? p.storages[0].label : '128GB') + (p.condition === 'Second' ? ' · Second' : '');
  }
  if (typeof p.price !== 'number' || isNaN(p.price)) {
    p.price = (p.storages && p.storages[0] && p.storages[0].price) ? p.storages[0].price : 0;
  }
  if (!p.rating) p.rating = 4.8;
  if (typeof p.sold !== 'number') p.sold = 0;
  if (!p.img) p.img = 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80&auto=format&fit=crop';
  
  // Set default gallery jika ada colorImages
  if (p.colorImages && typeof p.colorImages === 'object') {
    const list = Object.values(p.colorImages).filter(Boolean);
    if (!Array.isArray(p.gallery) || !p.gallery.length) {
      p.gallery = list.length ? list : [p.img];
    }
  } else if (!Array.isArray(p.gallery) || !p.gallery.length) {
    p.gallery = [p.img];
  }

  if (!Array.isArray(p.colors) || !p.colors.length) {
    if (p.colorImages && typeof p.colorImages === 'object') {
      p.colors = Object.keys(p.colorImages);
    } else {
      p.colors = ['Hitam', 'Putih'];
    }
  }

  if (!Array.isArray(p.storages) || !p.storages.length) {
    p.storages = [{ label: '128GB', price: p.price || 0 }];
  }
  if (!p.desc) p.desc = `${p.name} tersedia di NAFA iSTORE. Original bergaransi resmi.`;
  if (!p.specs || typeof p.specs !== 'object') {
    p.specs = {
      'Layar': 'Super Retina XDR',
      'Garansi': p.condition === 'Second' ? 'Garansi toko 14 hari tukar' : 'Resmi 1 tahun',
    };
  }
  return p;
}

/* Helper cek apakah data localStorage kadaluarsa / format lama */
function isLegacyProducts(list) {
  if (!Array.isArray(list) || list.length < 20) return true;
  if (!list.some(p => p && p.colorImages)) return true;
  // Jika masih menyimpan path .png lama di productNew, refresh cache ke .webp
  if (list.some(p => p && p.img && p.img.includes('assets/img/productNew') && p.img.endsWith('.png'))) return true;
  return false;
}

/* Ambil data dari localStorage atau DEFAULT_PRODUCTS */
let PRODUCTS = (() => {
  try {
    const saved = localStorage.getItem('nafa_products');
    if (saved) {
      const list = JSON.parse(saved);
      if (Array.isArray(list) && !isLegacyProducts(list)) {
        return list.map(normalizeProduct).filter(Boolean);
      }
      localStorage.removeItem('nafa_products');
    }
    return DEFAULT_PRODUCTS.map(normalizeProduct).filter(Boolean);
  } catch {
    return DEFAULT_PRODUCTS.map(normalizeProduct).filter(Boolean);
  }
})();

/* Sambungan langsung ke data/products.json (dummy data JSON).
   Jika diakses lewat server lokal (Laragon / Live Server / localhost),
   otomatis tersinkronkan dan memicu event 'productsLoaded'. */
if (typeof window !== 'undefined' && window.location && window.location.protocol.startsWith('http')) {
  let jsonPath = 'data/products.json';
  if (window.location.pathname.includes('/admin/') || window.location.pathname.includes('/template/')) {
    jsonPath = '../data/products.json';
  }

  fetch(jsonPath)
    .then(res => {
      if (!res.ok) throw new Error('Failed to load JSON');
      return res.json();
    })
    .then(data => {
      if (Array.isArray(data) && data.length > 0) {
        const normalized = data.map(normalizeProduct).filter(Boolean);
        if (normalized.length > 0) {
          PRODUCTS = normalized;
          try {
            const saved = localStorage.getItem('nafa_products');
            if (!saved || isLegacyProducts(JSON.parse(saved))) {
              localStorage.setItem('nafa_products', JSON.stringify(PRODUCTS));
            }
          } catch {}
          window.dispatchEvent(new CustomEvent('productsLoaded', { detail: PRODUCTS }));
        }
      }
    })
    .catch(err => {
      // Fallback tetap aman menggunakan DEFAULT_PRODUCTS
    });
}

/* Helper global untuk reset data produk kembali ke default kapan saja */
if (typeof window !== 'undefined') {
  window.resetNafaProducts = () => {
    localStorage.removeItem('nafa_products');
    location.reload();
  };
}

/* ============ Helper ============ */
const rupiah = n => {
  const num = typeof n === 'number' && !isNaN(n) ? n : (parseInt(n, 10) || 0);
  return 'Rp' + num.toLocaleString('id-ID');
};
const findProduct = id => (PRODUCTS || []).find(p => p && p.id === id) || null;

/* Warna → hex untuk swatch & chip info warna.
   Nama color Apple/common dipetakan ke hex terdekat. */
const COLOR_HEX = {
  'deep crimson': '#6B1F2A', 'crimson': '#6B1F2A', 'cosmic amber': '#E08A2C', 'amber': '#E08A2C',
  'ice blue': '#BFD7E4', 'cloud blue': '#A7C4DD', 'mist blue': '#9DB8CC', 'sierra blue': '#A6C1D8',
  'pacific blue': '#2E4A62', 'deep blue': '#1E3A5F', 'blue': '#3B6EA5', 'blue titanium': '#3E5C76',
  'ultramarine': '#3A5BDC', 'teal': '#2E7D74', 'platinum': '#E3E4E1', 'silver': '#D8DADA',
  'starlight': '#E8E2D6', 'white': '#F5F5F5', 'white titanium': '#E6E7E4', 'cream': '#F6F1E7',
  'obsidian black': '#1B1B1D', 'space black': '#2B2B2E', 'black': '#1C1C1E', 'midnight': '#1E2A38',
  'black titanium': '#3A3C3E', 'space grey': '#5A5A5E', 'space gray': '#5A5A5E', 'graphite': '#4A4A4E',
  'natural titanium': '#B7B1A6', 'desert titanium': '#C8A57B', 'gold': '#D9BC8C', 'purple': '#8E6AA8',
  'deep purple': '#4B3A6B', 'lavender': '#C5B3DE', 'pink': '#F0B9C4', 'coral': '#F1795F',
  'sage green': '#A8B5A0', 'green': '#5A7D63', 'midnight green': '#3E5250', 'yellow': '#F2D24B',
  'red': '#C1272D', '(product)red': '#C1272D',
};
const colorHex = (name) => {
  if (!name) return '#E5E5E5';
  const key = String(name).toLowerCase().trim();
  if (COLOR_HEX[key]) return COLOR_HEX[key];
  const hit = Object.keys(COLOR_HEX).find(k => key.includes(k) || k.includes(key));
  return hit ? COLOR_HEX[hit] : '#DCD9D2';
};
if (typeof window !== 'undefined') { window.colorHex = colorHex; }

/* Chip info warna simple di pojok gambar produk (dipakai card & galeri detail) */
function stageColorChip(colorName, extraClass = 'absolute left-3 top-3 z-10 chip-clamp sm:left-4 sm:top-4') {
  if (!colorName) return '';
  return `
    <span class="stage-color-chip ${extraClass}">
      <span class="dot" style="background:${colorHex(colorName)}"></span>
      <span class="txt">${colorName}</span>
    </span>`;
}

const resolveAssetUrl = url => {
  if (!url || url.startsWith('http') || url.startsWith('//') || url.startsWith('data:')) return url;
  if (typeof window !== 'undefined' && window.location) {
    if (window.location.pathname.includes('/template/') || window.location.pathname.includes('/admin/')) {
      return '../' + url.replace(/^\.\.\//, '');
    }
  }
  return url;
};
if (typeof window !== 'undefined') {
  window.resolveAssetUrl = resolveAssetUrl;
}

/* Kartu produk — dipakai di index, katalog & related.
   Responsif: pas untuk grid 2 kolom di HP & 3 kolom di desktop. */
function productCardHTML(p) {
  if (!p) return '';
  const item = normalizeProduct(p);
  const pageExt = window.location.pathname.endsWith('.php') ? '.php' : '.html';
  const condChip = item.condition === 'Second'
    ? `<span class="absolute right-3 top-3 z-10 rounded-full bg-ink px-2.5 py-1 text-[10px] font-semibold text-cream italic sm:right-4 sm:top-4">Second</span>`
    : `<span class="absolute right-3 top-3 z-10 rounded-full border border-silver-200 bg-white px-2.5 py-1 text-[10px] font-semibold text-ink sm:right-4 sm:top-4">Baru</span>`;

  const displayImg = resolveAssetUrl(item.img);
  const mainColor = (Array.isArray(item.colors) && item.colors[0]) || '';

  return `
  <a href="detail-produk${pageExt}?id=${item.id}"
     class="group block rounded-2xl border border-silver-200 bg-white p-2.5 transition hover:-translate-y-1 hover:border-creamdark hover:shadow-xl hover:shadow-silver-200/70 sm:rounded-3xl sm:p-4">
    <div class="product-stage product-stage-halo relative overflow-hidden rounded-xl sm:rounded-2xl">
      ${window.NAFA_HIDE_CARD_COLOR_CHIP ? '' : stageColorChip(mainColor)}
      <img src="${displayImg}" alt="${item.name}" loading="lazy"
           class="relative z-[1] aspect-square w-full object-contain p-2 sm:p-3 transition duration-500 group-hover:scale-105" />
      ${item.badge ? `<span class="absolute right-3 top-11 z-10 rounded-full px-2.5 py-1 text-[10px] font-semibold sm:right-4 sm:top-12 ${item.badge === 'Hemat' || item.badge === 'Mulus' ? 'bg-white text-ink' : 'bg-ink text-cream'}">${item.badge}</span>` : ''}
      ${condChip}
    </div>
    <div class="p-2 pb-1 sm:p-3 sm:pb-2">
      <p class="text-[9px] font-semibold uppercase tracking-[0.15em] text-neutral-400 sm:text-[11px] sm:tracking-[0.2em]">${item.cat}</p>
      <h3 class="mt-1 text-sm font-semibold leading-snug sm:text-base">${item.name}</h3>
      <p class="mt-0.5 text-[11px] text-neutral-500 sm:text-xs">${item.spec}</p>
      <div class="mt-2 flex items-end justify-between gap-2 sm:mt-3 sm:gap-3">
        <div>
          <p class="text-sm font-semibold sm:text-base">${rupiah(item.price)}</p>
          <p class="text-[10px] text-neutral-400 sm:text-xs">atau ${rupiah(Math.round(item.price / 12))}/bln</p>
        </div>
        <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-white transition group-hover:bg-neutral-700 sm:h-11 sm:w-11" aria-label="Lihat detail">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>
        </span>
      </div>
    </div>
  </a>`;
}
