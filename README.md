# 🍱 HematBite - Perencana Menu & Budget Makan Harian

**HematBite** adalah aplikasi web interaktif (*Client-Side Web App*) yang membantu mahasiswa dan pekerja pemula mengelola anggaran makan harian dengan menyusun rekomendasi menu secara otomatis berbasis alokasi *budget*.

---

## 🎯 1. Tema Aplikasi
**Manajemen Anggaran Kuliner Harian & Perencanaan Menu Personal** *(Mengerucut pada efisiensi pengeluaran makan harian anak kos/mahasiswa)*.

---

## 🚨 2. Deskripsi Masalah Real
* **Pengeluaran Tak Terkontrol:** Mahasiswa dan pekerja pemula sering mengandalkan *instinct* saat membeli makan harian, yang menyebabkan anggaran bulanan habis di pertengahan bulan.
* **Kebingungan Pilihan Menu (*Decision Fatigue*):** Kebingungan menentukan menu makan harian sering kali berujung pada pembelian makanan mahal di luar rencana.
* **Belanja Bahan Tidak Efisien:** Bagi yang ingin memasak sendiri, sulit menghitung porsi dan bahan yang dibutuhkan sehingga banyak bahan makanan yang terbuang (*food waste*).

---

## 👤 3. Profil Target Pengguna
* **Mahasiswa & Anak Kos:** Berusia 18–24 tahun dengan anggaran bulanan terbatas dan butuh kepastian pengeluaran makan.
* **Pekerja Pemula (*First-Jobber*):** Berusia 22–27 tahun yang ingin memperketat tabungan dengan membatasi *budget* makan harian/mingguan.
* **Pengguna Praktis:** Menginginkan alat bantu tanpa perlu pendaftaran akun (*login*) yang rumit.

---

## 💡 4. Manfaat Utama Aplikasi
1. **Kepastian Finansial:** Mencegah pengeluaran makan membengkak melalui pembagian *budget* per porsi yang presisi.
2. **Efisiensi Waktu:** Memangkas waktu berpikir dalam memilih menu harian lewat *Generator* otomatis.
3. **Optimalisasi Belanja:** Menghasilkan daftar belanjaan yang pas sesuai rencana menu *Masak Sendiri*.

---

## 🛠️ 5. Daftar Fitur Inti 
* 🎯 **Kalkulator & Generator Budget Smart:** Membagi total anggaran ke dalam porsi harian (1, 3, atau 7 hari) dan frekuensi makan (2x/3x sehari).
* 🔒 **Grid Rencana Makan Interaktif:**
  * **Swap (Tukar Menu):** Mengganti 1 slot menu spesifik tanpa mengacak menu lainnya.
  * **Lock (Kunci Menu):** Mengunci menu favorit agar tidak berubah saat di-*generate* ulang.
* 🛒 **Daftar Belanja Otomatis (*Shopping List*):** Mengompilasi seluruh bahan dari menu bertipe *Masak Sendiri* lengkap dengan *checkbox* belanja.
* 📖 **Manajemen Katalog Makanan (CRUD):** Pengguna dapat menambah, mengedit harga, dan menghapus menu makanan lokal.
* 📲 **Ekspor & Bagikan:** Fitur berbagi ringkasan menu ke WhatsApp dan format ramah cetak/PDF.
* 💾 **Penyimpanan Lokal (*Local Storage*):** Menyimpan seluruh data secara otomatis di *browser* pengguna tanpa perlu server/database rumit.

---

## 🚫 6. Fitur yang Tidak Dikerjakan 
Untuk menjaga fokus penyelesaian dalam rentang 12 pertemuan, fitur berikut **tidak dimasukkan** dalam pengembangan:
* ❌ **Transaksi & Payment Gateway:** Tidak ada proses pembayaran langsung atau dompet digital di aplikasi.
* ❌ **Integrasi API Live Order (GoFood/GrabFood/ShopeeFood):** Tidak terhubung langsung dengan aplikasi pemesanan makanan luar.
* ❌ **Autentikasi Akun Cloud (Login/Register):** Aplikasi tidak menggunakan basis data server/cloud (murni berbasis `localStorage`).
* ❌ **Hitungan Nutrisi Medis Kompleks:** Tidak menghitung detail kalori, makronutrisi, atau kondisi medis spesifik (diet klinis).
* ❌ **Peta & Pelacak GPS:** Tidak menyediakan navigasi ke lokasi warung makan.

---

## ✅ 7. Kriteria Aplikasi Dinyatakan Berhasil
Aplikasi **HematBite** dinyatakan berhasil dan siap diuji apabila memenuhi kriteria berikut:
1. **Akurasi Perhitungan:** Algoritma dapat membagi *budget* dan memilih kombinasi menu tanpa ada total biaya yang melebihi batas anggaran.
2. **Persistensi Data:** Data katalog menu (CRUD) dan rencana makan tetap tersimpan di *browser* meskipun halaman di-*refresh*.
3. **Interaktivitas Fitur:** Fitur *Lock*, *Swap*, dan penyusunan *Shopping List* berfungsi $100\%$ tanpa *error* JavaScript.
4. **Responsif & Ramah Cetak:** Antarmuka dapat diakses secara nyaman melalui layar HP (*Mobile Browser*) serta menghasilkan layout yang rapi saat dicetak ke PDF.

---

## 📂 Struktur Proyek & Cara Menjalankan
```text
hematbite/
├── index.html        # File utama aplikasi (UI, Styling, & Logic)
├── README.md         # Dokumentasi proyek
└── LICENSE           # Lisensi proyek (MIT)
