// Paste URL Web App terbaru dari Langkah 2 di sini
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwqtZ9Pq1dT8VWHrIC8XRoQzK6yHZgupgSS2BGkUNyJHl57V0I7ixfbd68_od9KOyT4/exec";

// A. Fungsi Mengambil Ulasan
async function tampilkanUlasan() {
  const container = document.getElementById("reviewsGrid");
  if (!container) return;

  try {
    const response = await fetch(SCRIPT_URL);
    const data = await response.json();

    container.innerHTML = "";

    data.reverse().forEach(item => {
      const starRating = parseInt(item.rating) || 5;
      const starsHtml = "★".repeat(starRating) + "☆".repeat(5 - starRating);

      container.innerHTML += `
        <div class="review-card" style="background: rgba(255, 255, 255, 0.05); padding: 16px; border-radius: 12px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.08);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <strong style="color: #fff;">${item.nama}</strong>
            <span style="color: #ffc107; font-size: 0.9rem;">${starsHtml}</span>
          </div>
          <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0 0 8px 0;">${item.ulasan}</p>
          <small style="color: #64748b; font-size: 0.75rem;">${item.tanggal}</small>
        </div>
      `;
    });
  } catch (error) {
    console.error("Gagal memuat ulasan:", error);
  }
}

document.addEventListener("DOMContentLoaded", tampilkanUlasan);

// B. Fungsi Mengirim Ulasan
const reviewForm = document.getElementById("reviewForm");
if (reviewForm) {
  reviewForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const nama = document.getElementById("reviewerName").value;
    const ulasan = document.getElementById("reviewText").value;
    const ratingRadio = document.querySelector('input[name="rating"]:checked');
    const rating = ratingRadio ? ratingRadio.value : "5";

    try {
      // Menggunakan Content-Type text/plain agar bebas dari CORS error
      await fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ nama, ulasan, rating })
      });

      alert("Ulasan berhasil terkirim!");
      reviewForm.reset();
      tampilkanUlasan();
    } catch (error) {
      console.error("Gagal mengirim ulasan:", error);
      alert("Gagal mengirim ulasan.");
    }
  });
}

// ========================================================
// 1. INJEKSI CSS OTOMATIS (Mencegah Bentrokan style.css)
// ========================================================
const forceHideStyle = document.createElement('style');
forceHideStyle.innerHTML = `.hide-card { display: none !important; }`;
document.head.appendChild(forceHideStyle);

// ========================================================
// 2. KREDENSIAL EMAILJS
// ========================================================
const EMAILJS_PUBLIC_KEY  = "sF5xGTuXhqTwjJYv-"; 
const EMAILJS_SERVICE_ID  = "service_arl01b6";
const EMAILJS_TEMPLATE_ID = "template_r6myjvh";

(function() {
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }
})();

// ========================================================
// 3. DATA PAKET PRODUK
// ========================================================
const productPackages = {
  mobilelegends: [
  { name: "Weekly Diamond Pass", price: "Rp 30.000" },
  { name: "Twilight Pass", price: "Rp 147.000" },
  { name: "5 Diamond", price: "Rp 3.500" },
  { name: "12 Diamond", price: "Rp 5.500" },
  { name: "19 Diamond", price: "Rp 7.500" },
  { name: "28 Diamond", price: "Rp 10.000" },
  { name: "44 Diamond", price: "Rp 14.000" },
  { name: "59 Diamond", price: "Rp 18.000" },
  { name: "86 Diamond", price: "Rp 25.000" },
  { name: "172 Diamond", price: "Rp 47.000" },
  { name: "257 Diamond", price: "Rp 69.000" },
  { name: "284 Diamond", price: "Rp 89.000" },
  { name: "344 Diamond", price: "Rp 91.000" },
  { name: "429 Diamond", price: "Rp 114.000" },
  { name: "514 Diamond", price: "Rp 136.000" },
  { name: "706 Diamond", price: "Rp 172.000" },
  { name: "878 Diamond", price: "Rp 227.000" },
  { name: "963 Diamond", price: "Rp 249.000" },
  { name: "1412 Diamond", price: "Rp 357.000" },
  { name: "2195 Diamond", price: "Rp 542.000" },
  { name: "3688 Diamond", price: "Rp 912.000" },
  { name: "5532 Diamond", price: "Rp 1.372.000" },
  { name: "9288 Diamond", price: "Rp 2.292.000" }
],
  ff: [
  { name: "Membership Mingguan", price: "Rp 30.000" },
  { name: "Membership Bulanan", price: "Rp 87.000" },
  { name: "5 Diamond", price: "Rp 3.000" },
  { name: "12 Diamond", price: "Rp 4.000" },
  { name: "50 Diamond", price: "Rp 9.000" },
  { name: "70 Diamond", price: "Rp 11.500" },
  { name: "140 Diamond", price: "Rp 21.000" },
  { name: "210 Diamond", price: "Rp 31.000" },
  { name: "355 Diamond", price: "Rp 51.000" },
  { name: "500 Diamond", price: "Rp 71.000" },
  { name: "720 Diamond", price: "Rp 101.000" },
  { name: "1000 Diamond", price: "Rp 138.000" },
  { name: "1440 Diamond", price: "Rp 197.000" },
  { name: "2000 Diamond", price: "Rp 268.000" },
  { name: "4000 Diamond", price: "Rp 532.000" },
  { name: "7290 Diamond", price: "Rp 952.000" }
],
 valorant: [
  { name: "125 VP", price: "Rp 16.000" },
  { name: "420 VP", price: "Rp 47.000" },
  { name: "475 VP", price: "Rp 54.000" },
  { name: "700 VP", price: "Rp 77.000" },
  { name: "1000 VP", price: "Rp 107.000" },
  { name: "1375 VP", price: "Rp 147.000" },
  { name: "2050 VP", price: "Rp 215.000" },
  { name: "2400 VP", price: "Rp 252.000" },
  { name: "3550 VP", price: "Rp 367.000" },
  { name: "4000 VP", price: "Rp 415.000" },
  { name: "5350 VP", price: "Rp 540.000" },
  { name: "7000 VP", price: "Rp 705.000" },
  { name: "11000 VP", price: "Rp 1.090.000" }
],
 genshin: [
  { name: "Welkin Moon", price: "Rp 67.000" },
  { name: "60 Genesis Crystal", price: "Rp 17.000" },
  { name: "300 Genesis Crystal", price: "Rp 81.000" },
  { name: "980 Genesis Crystal", price: "Rp 237.000" },
  { name: "1980 Genesis Crystal", price: "Rp 462.000" },
  { name: "3280 Genesis Crystal", price: "Rp 762.000" },
  { name: "6480 Genesis Crystal", price: "Rp 1.482.000" }
],
  pubg: [
  { name: "60 UC", price: "Rp 16.500" },
  { name: "325 UC", price: "Rp 74.000" },
  { name: "660 UC", price: "Rp 145.000" },
  { name: "1800 UC", price: "Rp 362.000" },
  { name: "3850 UC", price: "Rp 727.000" },
  { name: "8100 UC", price: "Rp 1.452.000" }
],
  netflix: [
    { name: "1 Bulan (Shared)", price: "Rp 35.000" },
    { name: "1 Bulan (Private)", price: "Rp 50.000" }
  ],
  spotify: [
    { name: "1 Bulan Premium", price: "Rp 18.000" },
    { name: "3 Bulan Premium", price: "Rp 45.000" }
  ],
  youtube: [
    { name: "1 Bulan Plan", price: "Rp 12.000" },
    { name: "3 Bulan Plan", price: "Rp 30.000" }
  ],
  canva: [
    { name: "Canva Pro 1 Bulan (Shared)", price: "Rp 15.000" },
    { name: "Canva Pro 1 Tahun (Private)", price: "Rp 50.000" }
  ],
  capcut: [
    { name: "CapCut Pro 1 Bulan", price: "Rp 20.000" },
    { name: "CapCut Pro 1 Tahun", price: "Rp 90.000" }
  ],
  disney: [
    { name: "Disney+ Hotstar 1 Bulan", price: "Rp 25.000" },
    { name: "Disney+ Hotstar 1 Tahun", price: "Rp 150.000" }
  ],
  vidio: [
    { name: "Vidio Platinum 1 Bulan", price: "Rp 20.000" },
    { name: "Vidio Diamond (Sports) 1 Bulan", price: "Rp 45.000" }
  ],
  viu: [
    { name: "Viu Premium 1 Bulan", price: "Rp 15.000" },
    { name: "Viu Premium 1 Tahun", price: "Rp 75.000" }
  ],
  wetv: [
    { name: "WeTV VIP 1 Bulan", price: "Rp 18.000" },
    { name: "WeTV VIP 1 Tahun", price: "Rp 95.000" }
  ],
  hok: [
  { name: "16 Tokens", price: "Rp 3.500" },
  { name: "80 Tokens", price: "Rp 18.000" },
  { name: "240 Tokens", price: "Rp 52.000" },
  { name: "400 Tokens", price: "Rp 85.000" },
  { name: "560 Tokens", price: "Rp 118.000" },
  { name: "1200 Tokens", price: "Rp 245.000" },
  { name: "2400 Tokens", price: "Rp 485.000" }
],
roblox: [
  { name: "80 Robux", price: "Rp 18.000" },
  { name: "160 Robux", price: "Rp 35.000" },
  { name: "240 Robux", price: "Rp 52.000" },
  { name: "400 Robux", price: "Rp 85.000" },
  { name: "800 Robux", price: "Rp 165.000" },
  { name: "2000 Robux", price: "Rp 395.000" }
],
eafc: [
  { name: "40 FC Points", price: "Rp 7.000" },
  { name: "100 FC Points", price: "Rp 18.000" },
  { name: "520 FC Points", price: "Rp 82.000" },
  { name: "1070 FC Points", price: "Rp 162.000" },
  { name: "2200 FC Points", price: "Rp 325.000" },
  { name: "5700 FC Points", price: "Rp 810.000" }
],
codm: [
  { name: "31 CP", price: "Rp 7.000" },
  { name: "62 CP", price: "Rp 14.000" },
  { name: "127 CP", price: "Rp 28.000" },
  { name: "320 CP", price: "Rp 67.000" },
  { name: "645 CP", price: "Rp 132.000" },
  { name: "1373 CP", price: "Rp 265.000" },
  { name: "2750 CP", price: "Rp 525.000" }
],
  'indosat': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.000" },
    { name: 'Pulsa 25.000', price: "Rp 25.800" },
    { name: 'Pulsa 50.000', price: "Rp 51.000" }
  ],
  'indosat-ooredoo': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.000" },
    { name: 'Pulsa 25.000', price: "Rp 25.800" },
    { name: 'Pulsa 50.000', price: "Rp 51.000" }
  ],
  'xl': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.500" },
    { name: 'Pulsa 25.000', price: "Rp 26.000" },
    { name: 'Pulsa 50.000', price: "Rp 51.000" }
  ],
  'xl-axiata': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.500" },
    { name: 'Pulsa 25.000', price: "Rp 26.000" },
    { name: 'Pulsa 50.000', price: "Rp 51.000" }
  ],
  'telkomsel': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.500" },
    { name: 'Pulsa 20.000', price: "Rp 21.000" },
    { name: 'Pulsa 50.000', price: "Rp 51.000" }
  ],
  'tri': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.000" },
    { name: 'Pulsa 25.000', price: "Rp 25.800" }
  ],
  'three': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.000" },
    { name: 'Pulsa 25.000', price: "Rp 25.800" }
  ],
  'smartfren': [
    { name: 'Pulsa 10.000', price: "Rp 11.000" },
    { name: 'Pulsa 25.000', price: "Rp 25.800" }
  ],
  'axis': [
    { name: 'Pulsa 5.000', price: "Rp 6.500" },
    { name: 'Pulsa 10.000', price: "Rp 11.500" },
    { name: 'Pulsa 25.000', price: "Rp 26.000" }
  ],
  'byu': [
    { name: 'Pulsa 10.000', price: "Rp 11.500" },
    { name: 'Pulsa 25.000', price: "Rp 26.000" }
  ]
};

// ========================================================
// 4. MAIN APPLICATION (PEMUATAN SETELAH DOM READY)
// ========================================================
document.addEventListener('DOMContentLoaded', () => {

  // --- A. FILTER SEARCH & NAVBAR KATEGORI ---
  const cards = document.querySelectorAll('.product-card');
  const tabs = document.querySelectorAll('.tab-btn');
  const searchInput = document.getElementById('searchInput');

  let currentCategory = 'all';
  let currentQuery = '';

  function applyFilter() {
    cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category') || '';
      const cardName = (card.getAttribute('data-name') || '').toLowerCase();
      
      const matchCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      const matchSearch = cardName.includes(currentQuery);

      if (matchCategory && matchSearch) {
        card.classList.remove('hide-card');
      } else {
        card.classList.add('hide-card');
      }
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      tabs.forEach(b => b.classList.remove('active'));
      tab.classList.add('active');

      currentCategory = tab.getAttribute('data-category') || 'all';
      applyFilter();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentQuery = e.target.value.toLowerCase().trim();
      applyFilter();
    });
  }

  // --- B. MODAL CHECKOUT & RENDER PAKET HARGA ---
  const modal = document.getElementById('orderModal');
  const closeModal = document.getElementById('closeModal');
  const modalTitle = document.getElementById('modalTitle');
  const packageOptions = document.getElementById('packageOptions');
  const zoneIdContainer = document.getElementById('zone_idContainer');

  const itemPriceHidden = document.getElementById('item_price');
  const itemPackageHidden = document.getElementById('item_package');
  const itemNameHidden = document.getElementById('item_name');
  const qrisTotalPrice = document.getElementById('qrisTotalPrice');

  const checkoutForm = document.getElementById('checkoutForm');
  const btnSubmitOrder = document.getElementById('btnSubmitOrder');

  let selectedProduct = null;
  let selectedPackage = null;

  // KATEGORISASI PRODUK
  const noUserIdProducts = [
    'netflix', 'spotify', 'youtube', 'canva', 'capcut', 
    'disney', 'vidio', 'viu', 'wetv'
  ];

  const pulsaProducts = [
    'indosat', 'indosat-ooredoo', 'xl', 'xl-axiata', 'telkomsel', 
    'tri', 'three', 'smartfren', 'axis', 'byu'
  ];

  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const prodId = card.getAttribute('data-id');
      const prodName = card.getAttribute('data-name');

      selectedProduct = { id: prodId, name: prodName };
      if (itemNameHidden) itemNameHidden.value = prodName;
      if (modalTitle) modalTitle.textContent = `Order ${prodName}`;

      // Deteksi & Penyesuaian Input User ID / Nomor HP
      const userIdInput = document.getElementById('user_id');
      const userIdContainer = document.getElementById('userIdContainer') || 
                               (userIdInput ? (userIdInput.closest('.form-group') || userIdInput.parentElement) : null);
      const userIdLabel = userIdContainer ? userIdContainer.querySelector('label') : null;

      if (noUserIdProducts.includes(prodId)) {
        // STREAMING / APLIKASI: Sembunyikan Input
        if (userIdContainer) userIdContainer.style.display = 'none';
        if (userIdInput) {
          userIdInput.value = '-';
          userIdInput.removeAttribute('required');
        }
      } else if (pulsaProducts.includes(prodId)) {
        // PULSA & PAKET DATA: Tampilkan Input sebagai Nomor HP
        if (userIdContainer) userIdContainer.style.display = 'block';
        if (userIdLabel) userIdLabel.innerHTML = '<i class="fa-solid fa-phone"></i> Nomor HP / Tujuan:';
        if (userIdInput) {
          userIdInput.value = '';
          userIdInput.placeholder = 'Contoh: 081234567890';
          userIdInput.setAttribute('required', 'true');
        }
      } else {
        // GAME & DOKUMEN/JASA: Tampilkan Input sebagai User ID
        if (userIdContainer) userIdContainer.style.display = 'block';
        if (userIdLabel) userIdLabel.innerHTML = '<i class="fa-solid fa-user"></i> User ID / Target:';
        if (userIdInput) {
          userIdInput.value = '';
          userIdInput.placeholder = 'Masukkan ID Akun';
          userIdInput.setAttribute('required', 'true');
        }
      }

      // Sembunyikan/Tampilkan Zone ID (khusus game seperti ML, Genshin, HOK)
      if (zoneIdContainer) {
        if (prodId === 'mobilelegends' || prodId === 'genshin' || prodId === 'hok') {
          zoneIdContainer.style.display = 'block';
        } else {
          zoneIdContainer.style.display = 'none';
        }
      }

      renderPackages(prodId);
      if (modal) {
        modal.classList.add('active');
        modal.style.display = 'flex';
      }
    });
  });

  if (closeModal) {
    closeModal.addEventListener('click', () => {
      if (modal) {
        modal.classList.remove('active');
        modal.style.display = 'none';
      }
      resetImagePreview();
    });
  }

  function renderPackages(productId) {
    if (!packageOptions) return;
    packageOptions.innerHTML = '';

    const packages = productPackages[productId] || [
      { name: "Paket Standard", price: "Rp 50.000" }
    ];

    packages.forEach((pkg, index) => {
      const pkgDiv = document.createElement('div');
      pkgDiv.classList.add('package-card');

      if (index === 0) {
        pkgDiv.classList.add('selected');
        selectPackageItem(pkg);
      }

      pkgDiv.innerHTML = `<strong>${pkg.name}</strong><br><span style="color: var(--accent, #38bdf8);">${pkg.price}</span>`;

      pkgDiv.addEventListener('click', () => {
        document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));
        pkgDiv.classList.add('selected');
        selectPackageItem(pkg);
      });

      packageOptions.appendChild(pkgDiv);
    });
  }

  function selectPackageItem(pkg) {
    selectedPackage = pkg;
    if (itemPackageHidden) itemPackageHidden.value = pkg.name;
    if (itemPriceHidden) itemPriceHidden.value = pkg.price;
    if (qrisTotalPrice) qrisTotalPrice.textContent = pkg.price;
  }

  // --- C. PREVIEW GAMBAR BUKTI TRANSFER & KOMPRESI ---
  const fileInput = document.getElementById('payment_proof');
  const imagePreviewContainer = document.getElementById('imagePreviewContainer');
  const imagePreview = document.getElementById('imagePreview');

  if (fileInput) {
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          if (imagePreview) imagePreview.src = e.target.result;
          if (imagePreviewContainer) imagePreviewContainer.style.display = 'block';
        };
        reader.readAsDataURL(file);
      } else {
        resetImagePreview();
      }
    });
  }

  function resetImagePreview() {
    if (imagePreviewContainer && imagePreview) {
      imagePreview.src = '';
      imagePreviewContainer.style.display = 'none';
    }
  }

  function compressImage(file, maxWidth = 600, quality = 0.6) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  }

  // --- D. SUBMIT CHECKOUT (EMAILJS) ---
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
        alert('Harap unggah bukti pembayaran terlebih dahulu!');
        return;
      }

      if (btnSubmitOrder) {
        btnSubmitOrder.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';
        btnSubmitOrder.disabled = true;
      }

      try {
        const compressedImageBase64 = await compressImage(fileInput.files[0]);
        const randomTrxId = "FIT-" + Math.floor(100000 + Math.random() * 900000);

        const elUserId = document.getElementById('user_id');
        const elZoneId = document.getElementById('zone_id');
        const elEmail  = document.getElementById('customer_email');
        const elWa     = document.getElementById('customer_whatsapp');

        const gameName     = itemNameHidden ? itemNameHidden.value : selectedProduct.name;
        const packageName  = itemPackageHidden ? itemPackageHidden.value : selectedPackage.name;
        const packagePrice = itemPriceHidden ? itemPriceHidden.value : selectedPackage.price;

        const templateParams = {
          trx_id: randomTrxId,
          game: gameName,
          user_id: elUserId ? elUserId.value : "-",
          zone_id: (elZoneId && elZoneId.value) ? elZoneId.value : "-",
          nominal: packageName,
          metode_pembayaran: "QRIS All Payment",
          total: packagePrice,
          customer_email: elEmail ? elEmail.value : "-",
          customer_whatsapp: elWa ? elWa.value : "-",
          payment_proof: `<img src="${compressedImageBase64}" width="300" style="border-radius: 8px; border: 1px solid #ccc;" />`
        };

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);

        alert(`Pesanan ${gameName} berhasil! ID Transaksi Anda: ${randomTrxId}`);

        saveToHistory({
          trx_id: randomTrxId,
          product: gameName,
          package: packageName,
          price: packagePrice,
          date: new Date().toLocaleDateString('id-ID')
        });

        checkoutForm.reset();
        resetImagePreview();
        if (modal) {
          modal.classList.remove('active');
          modal.style.display = 'none';
        }
      } catch (error) {
        console.error("Gagal mengirim:", error);
        alert("Gagal mengirim pesanan. Periksa koneksi internet Anda.");
      } finally {
        if (btnSubmitOrder) {
          btnSubmitOrder.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Konfirmasi & Kirim Pesanan';
          btnSubmitOrder.disabled = false;
        }
      }
    });
  }

  // --- E. MODAL RIWAYAT, TRACKER & REVIEW ---
  const btnOpenHistory = document.getElementById('btnOpenHistory');
  const historyModal = document.getElementById('historyModal');
  const closeHistoryModal = document.getElementById('closeHistoryModal');
  const modalHistoryContainer = document.getElementById('modalHistoryContainer');

  if (btnOpenHistory && historyModal) {
    btnOpenHistory.addEventListener('click', () => {
      renderHistoryModal();
      historyModal.classList.add('active');
      historyModal.style.display = 'flex';
    });
  }

  if (closeHistoryModal && historyModal) {
    closeHistoryModal.addEventListener('click', () => {
      historyModal.classList.remove('active');
      historyModal.style.display = 'none';
    });
  }

  function renderHistoryModal() {
    if (!modalHistoryContainer) return;
    const history = JSON.parse(localStorage.getItem('fanit_orders')) || [];
    modalHistoryContainer.innerHTML = '';

    if (history.length === 0) {
      modalHistoryContainer.innerHTML = '<p style="color: #94a3b8; text-align: center; margin: 20px 0;">Belum ada riwayat transaksi.</p>';
      return;
    }

    history.forEach(item => {
      const card = document.createElement('div');
      card.style.cssText = "background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255, 255, 255, 0.06); padding: 12px; border-radius: 12px; margin-bottom: 10px;";
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <span style="color: #38bdf8; font-weight: bold; font-size: 0.85rem;">${item.trx_id}</span>
          <span style="color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 2px 8px; border-radius: 6px; font-size: 0.7rem;">Sukses</span>
        </div>
        <p style="color: #fff; margin: 0 0 4px 0; font-weight: 600; font-size: 0.9rem;">${item.product} - ${item.package}</p>
        <div style="display: flex; justify-content: space-between; color: #94a3b8; font-size: 0.8rem;">
          <span style="color: #06b6d4; font-weight: 600;">${item.price}</span>
          <span>${item.date}</span>
        </div>
      `;
      modalHistoryContainer.appendChild(card);
    });
  }

  const btnOpenTracker = document.getElementById('btnOpenTracker');
  const trackerModal = document.getElementById('trackerModal');
  const closeTrackerModal = document.getElementById('closeTrackerModal');
  const btnDoTrack = document.getElementById('btnDoTrack');
  const trackInputId = document.getElementById('trackInputId');
  const trackResultContainer = document.getElementById('trackResultContainer');

  if (btnOpenTracker && trackerModal) {
    btnOpenTracker.addEventListener('click', () => {
      trackerModal.classList.add('active');
      trackerModal.style.display = 'flex';
    });
  }

  if (closeTrackerModal && trackerModal) {
    closeTrackerModal.addEventListener('click', () => {
      trackerModal.classList.remove('active');
      trackerModal.style.display = 'none';
      if (trackInputId) trackInputId.value = '';
      if (trackResultContainer) {
        trackResultContainer.innerHTML = '<p class="tracker-placeholder-text">Masukkan ID transaksi yang tertera saat checkout untuk melihat status pesanan secara real-time.</p>';
      }
    });
  }

  if (btnDoTrack && trackInputId) {
    btnDoTrack.addEventListener('click', () => {
      const queryId = trackInputId.value.trim().toUpperCase();
      if (!queryId) {
        alert("Masukkan ID Transaksi terlebih dahulu!");
        return;
      }

      const history = JSON.parse(localStorage.getItem('fanit_orders')) || [];
      const found = history.find(ord => ord.trx_id.toUpperCase() === queryId);

      if (!trackResultContainer) return;
      trackResultContainer.innerHTML = '';

      if (found) {
        const resCard = document.createElement('div');
        resCard.style.cssText = "background: rgba(15, 23, 42, 0.8); border: 1px solid rgba(6, 182, 212, 0.3); padding: 14px; border-radius: 12px;";
        resCard.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="color: #38bdf8; font-weight: bold;">${found.trx_id}</span>
            <span style="color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 2px 8px; border-radius: 6px; font-size: 0.75rem;">Status: Selesai</span>
          </div>
          <p style="color: #fff; margin: 0 0 6px 0; font-weight: 600; font-size: 0.95rem;">${found.product} - ${found.package}</p>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0 0 4px 0;">Total: <span style="color: #06b6d4; font-weight: 600;">${found.price}</span></p>
          <p style="color: #64748b; font-size: 0.8rem; margin: 0;">Tanggal: ${found.date}</p>
        `;
        trackResultContainer.appendChild(resCard);
      } else {
        trackResultContainer.innerHTML = `
          <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.2); padding: 12px; border-radius: 10px; text-align: center;">
            <p style="color: #f87171; font-size: 0.85rem; margin: 0;"><i class="fa-solid fa-circle-exclamation"></i> ID Transaksi <b>${queryId}</b> tidak ditemukan.</p>
          </div>
        `;
      }
    });
  }

  // --- F. TIMELINE TRACKER ---
  const trackerInput = document.getElementById('trackerInput');
  const btnCheckTracker = document.getElementById('btnCheckTracker');
  const timelineBox = document.getElementById('orderTimelineBox');
  const displayOrderId = document.getElementById('displayOrderId');
  const displayStatusText = document.getElementById('displayStatusText');

  const tStep1 = document.getElementById('tStep1');
  const tStep2 = document.getElementById('tStep2');
  const tStep3 = document.getElementById('tStep3');

  function updateTimelineStatus(statusType) {
    if (!timelineBox) return;
    timelineBox.classList.add('active');

    if (tStep1) tStep1.className = 'timeline-step';
    if (tStep2) tStep2.className = 'timeline-step';
    if (tStep3) tStep3.className = 'timeline-step';

    if (statusType === 'pending') {
      if (tStep1) tStep1.classList.add('completed');
      if (tStep2) tStep2.classList.add('active-step');
      if (displayStatusText) displayStatusText.innerText = 'Menunggu Pembayaran / Verifikasi';
    } else if (statusType === 'processing') {
      if (tStep1) tStep1.classList.add('completed');
      if (tStep2) tStep2.classList.add('completed');
      if (tStep3) tStep3.classList.add('active-step');
      if (displayStatusText) displayStatusText.innerText = 'Sedang Diproses Admin';
    } else if (statusType === 'success') {
      if (tStep1) tStep1.classList.add('completed');
      if (tStep2) tStep2.classList.add('completed');
      if (tStep3) tStep3.classList.add('completed');
      if (displayStatusText) displayStatusText.innerText = 'Sukses / Selesai ✓';
    } else {
      if (tStep1) tStep1.classList.add('completed');
      if (tStep2) tStep2.classList.add('active-step');
      if (displayStatusText) displayStatusText.innerText = 'Dalam Antrean Proses';
    }
  }

  if (btnCheckTracker) {
    btnCheckTracker.addEventListener('click', () => {
      const queryId = trackerInput ? trackerInput.value.trim() : 'FAN-9921';
      if (!queryId) {
        alert('Masukkan ID Pesanan terlebih dahulu!');
        return;
      }
      if (displayOrderId) displayOrderId.innerText = queryId;
      const randomStatus = ['pending', 'processing', 'success'][Math.floor(Math.random() * 3)];
      updateTimelineStatus(randomStatus);
    });
  }

  // --- G. FLOATING BOTTOM NAV (MOBILE) ---
  const btnBottomHome = document.getElementById('btnBottomHome');
  const btnBottomHistory = document.getElementById('btnBottomHistory');
  const btnBottomTracker = document.getElementById('btnBottomTracker');

  if (btnBottomHome) {
    btnBottomHome.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (btnBottomHistory && historyModal) {
    btnBottomHistory.addEventListener('click', () => {
      renderHistoryModal();
      historyModal.classList.add('active');
      historyModal.style.display = 'flex';
    });
  }

  if (btnBottomTracker && trackerModal) {
    btnBottomTracker.addEventListener('click', () => {
      trackerModal.classList.add('active');
      trackerModal.style.display = 'flex';
    });
  }

  // --- H. USER ID HELP MODAL ---
  const btnHelpUserId = document.getElementById('btnHelpUserId');
  const userIdHelpModal = document.getElementById('userIdHelpModal');
  const closeUserIdHelpModal = document.getElementById('closeUserIdHelpModal');

  if (btnHelpUserId && userIdHelpModal) {
    btnHelpUserId.addEventListener('click', () => {
      userIdHelpModal.classList.add('active');
      userIdHelpModal.style.display = 'flex';
    });
  }

  if (closeUserIdHelpModal && userIdHelpModal) {
    closeUserIdHelpModal.addEventListener('click', () => {
      userIdHelpModal.classList.remove('active');
      userIdHelpModal.style.display = 'none';
    });
  }

  // --- I. HERO CAROUSEL LOGIC ---
  initHeroCarousel();

  // --- J. SYSTEM REVIEW LOGIC ---
  initReviewSystem();

  // --- K. THEME SWITCHER LOGIC ---
  initThemeSwitcher();

  // --- L. ANIMASI CANVAS JARINGAN ---
  initNetworkCanvas();
});

// ========================================================
// 5. SIMPAN RIWAYAT KE LOCAL STORAGE
// ========================================================
function saveToHistory(orderData) {
  let history = JSON.parse(localStorage.getItem('fanit_orders')) || [];
  history.unshift(orderData);
  localStorage.setItem('fanit_orders', JSON.stringify(history));
}

// ========================================================
// 6. HERO CAROUSEL LOGIC
// ========================================================
function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.dot');
  if (slides.length === 0) return;

  let currentSlide = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (dots[i]) dots[i].classList.remove('active');
    });

    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    if (dots[currentSlide]) dots[currentSlide].classList.add('active');
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }

  slideInterval = setInterval(nextSlide, 4000);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(index);
      slideInterval = setInterval(nextSlide, 4000);
    });
  });
}

// ========================================================
// 8. REVIEW SYSTEM LOGIC
// ========================================================
function initReviewSystem() {
  const reviewForm = document.getElementById('reviewForm');
  const reviewsGrid = document.getElementById('reviewsGrid');

  const defaultReviews = [
    { name: "Rizky K.", rating: 5, comment: "Top up diamond ML cepat banget, 1 menit langsung masuk akun!", date: "03/08/2026" },
    { name: "Dimas A.", rating: 5, comment: "Mantap layanannya sangat cepat.", date: "02/08/2026" }
  ];

  function getReviews() {
    const data = localStorage.getItem('fanit_reviews');
    return data ? JSON.parse(data) : defaultReviews;
  }

  function renderReviews() {
    if (!reviewsGrid) return;
    const reviews = getReviews();
    reviewsGrid.innerHTML = '';

    reviews.forEach(rev => {
      const stars = '★'.repeat(rev.rating) + '☆'.repeat(5 - rev.rating);
      const card = document.createElement('div');
      card.style.cssText = "background: rgba(15, 23, 42, 0.5); border: 1px solid rgba(255, 255, 255, 0.06); padding: 14px; border-radius: 12px; margin-bottom: 10px;";
      
      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h4 style="color: #fff; margin: 0; font-size: 0.95rem;">${escapeHTML(rev.name)}</h4>
          <div style="color: #fbbf24; font-size: 0.85rem; letter-spacing: 1px;">${stars}</div>
        </div>
        <p style="color: #94a3b8; font-size: 0.85rem; margin: 0 0 8px 0; line-height: 1.4;">${escapeHTML(rev.comment)}</p>
        <span style="color: #64748b; font-size: 0.75rem;"><i class="fa-regular fa-clock"></i> ${rev.date}</span>
      `;
      reviewsGrid.appendChild(card);
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[tag] || tag));
  }

  if (reviewForm) {
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const elName = document.getElementById('reviewerName');
      const elComment = document.getElementById('reviewText');
      const selectedRating = document.querySelector('input[name="rating"]:checked');

      if (!selectedRating) {
        alert("Silakan pilih rating bintang terlebih dahulu!");
        return;
      }

      const newReview = {
        name: elName ? elName.value.trim() : 'Anonim',
        rating: parseInt(selectedRating.value),
        comment: elComment ? elComment.value.trim() : '',
        date: new Date().toLocaleDateString('id-ID')
      };

      let reviews = getReviews();
      reviews.unshift(newReview);
      localStorage.setItem('fanit_reviews', JSON.stringify(reviews));

      reviewForm.reset();
      renderReviews();
      alert("Terima kasih! Ulasan Anda berhasil dikirim.");
    });
  }

  renderReviews();
}

// ========================================================
// 9. THEME COLOR SWITCHER LOGIC
// ========================================================
function initThemeSwitcher() {
  const savedColor = localStorage.getItem('fanit_accent_color');
  const savedGlow = localStorage.getItem('fanit_accent_glow');

  if (savedColor && savedGlow) {
    document.documentElement.style.setProperty('--accent', savedColor);
    document.documentElement.style.setProperty('--accent-glow', savedGlow);
  }

  const themeBtns = document.querySelectorAll('.theme-btn');
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const color = btn.getAttribute('data-color');
      const glow = btn.getAttribute('data-glow');

      document.documentElement.style.setProperty('--accent', color);
      document.documentElement.style.setProperty('--accent-glow', glow);

      localStorage.setItem('fanit_accent_color', color);
      localStorage.setItem('fanit_accent_glow', glow);
    });
  });
}

// ========================================================
// 10. ANIMASI NETWORK GRID CANVAS
// ========================================================
function initNetworkCanvas() {
  const canvas = document.getElementById('networkCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  const particleCount = Math.floor(window.innerWidth / 35);
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2 + 1
    });
  }

  function animateNetwork() {
    ctx.clearRect(0, 0, width, height);
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#38bdf8';

    particles.forEach((p, index) => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = accentColor;
      ctx.globalAlpha = 0.5;
      ctx.fill();

      for (let j = index + 1; j < particles.length; j++) {
        let p2 = particles[j];
        let distX = p.x - p2.x;
        let distY = p.y - p2.y;
        let distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = accentColor;
          ctx.globalAlpha = (1 - (distance / 120)) * 0.2;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    });

    requestAnimationFrame(animateNetwork);
  }

  animateNetwork();
}
document.addEventListener("DOMContentLoaded", () => {
  const colorDots = document.querySelectorAll(".color-dot");

  // 1. Cek apakah ada warna yang tersimpan di memori browser (localStorage)
  const savedColor = localStorage.getItem("fanit_theme_color");
  if (savedColor) {
    document.documentElement.style.setProperty("--primary-color", savedColor);
  }

  // 2. Pasang fungsi klik di setiap titik warna
  colorDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      // Ambil kode warna dari atribut data-color di HTML
      const selectedColor = this.getAttribute("data-color");

      if (selectedColor) {
        // Ubah warna utama CSS secara langsung
        document.documentElement.style.setProperty("--primary-color", selectedColor);

        // Simpan pilihan warna pembeli agar tidak hilang saat di-refresh
        localStorage.setItem("fanit_theme_color", selectedColor);
      }
    });
  });
});
function renderNominals(gameKey) {
  const container = document.getElementById('packageOptions');
  container.innerHTML = '';

  const items = gameData[gameKey] || [];

  items.forEach((item, index) => {
    const cardHTML = `
      <div class="package-card ${index === 0 ? 'active' : ''}" onclick="selectPackage(this, '${item.name}', '${item.price}')">
        <div class="card-body-content">
          <div class="card-title-text">${item.name}</div>
          <div class="card-price-row">
            <img src="https://cdn-icons-png.flaticon.com/512/616/616490.png" class="card-item-icon" alt="icon">
            <div class="card-price-text">${item.price}</div>
          </div>
        </div>
        <div class="card-footer-badge">
          <span class="badge-instan">
            <i class="fa-solid fa-bolt-lightning"></i> Pengiriman <b>INSTAN</b>
          </span>
        </div>
      </div>
    `;
    container.innerHTML += cardHTML;
  });

  // Otomatis pilih item pertama untuk nilai awal form
  if (items.length > 0) {
    document.getElementById('item_package').value = items[0].name;
    document.getElementById('item_price').value = items[0].price;
  }
}

// Fungsi ketika kartu nominal diklik
function selectPackage(element, name, price) {
  document.querySelectorAll('.package-card').forEach(card => card.classList.remove('active'));
  element.classList.add('active');

  // Simpan nilai ke input hidden checkout
  document.getElementById('item_package').value = name;
  document.getElementById('item_price').value = price;
}