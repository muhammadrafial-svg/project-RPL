# 🍱 HematBite - Perencana Menu & Budget Makan Harian

**HematBite** adalah aplikasi web interaktif (*Client-Side Single Page Application*) yang dirancang untuk membantu mahasiswa dan pekerja pemula mengelola anggaran makan harian dengan menyusun rekomendasi menu otomatis berbasis alokasi *budget* porsi.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

---

## 📌 1. Tema Aplikasi
**Manajemen Anggaran Kuliner Harian & Perencanaan Menu Personal** *(Mengerucut pada efisiensi pengeluaran makan harian dan pengelolaan bahan makanan anak kos/mahasiswa)*.

---

## 🚨 2. Deskripsi Masalah Real
* **Pengeluaran Tak Terkontrol:** Mahasiswa dan pekerja pemula sering mengandalkan perkiraan kasar saat membeli makan harian, yang menyebabkan anggaran bulanan habis sebelum waktunya.
* **Kebingungan Pilihan Menu (*Decision Fatigue*):** Kebingungan menentukan menu makan harian setiap kali jam makan tiba sering berujung pada pembelian makanan instan atau mahal di luar rencana.
* **Belanja Bahan Tidak Efisien:** Pengguna yang ingin memasak sendiri sering kesulitan memposting porsi dan bahan yang dibutuhkan, sehingga banyak bahan makanan tersisa dan membusuk (*food waste*).

---

## 👤 3. Profil Target Pengguna
* **Mahasiswa & Anak Kos:** Berusia 18–24 tahun dengan anggaran bulanan terbatas dan membutuhkan kepastian alokasi pengeluaran makan harian.
* **Pekerja Pemula (*First-Jobber*):** Berusia 22–27 tahun yang ingin memperketat tabungan dengan membatasi *budget* makan harian/mingguan.
* **Pengguna Praktis:** Menginginkan alat bantu perencanaan cepat tanpa perlu proses pendaftaran akun (*login*) yang rumit.

---

## 💡 4. Manfaat Utama Aplikasi
1. **Kepastian Finansial:** Mencegah pengeluaran makan membengkak melalui pembagian *budget* per porsi yang presisi.
2. **Efisiensi Waktu:** Memangkas waktu berpikir dalam memilih menu harian lewat generator acak otomatis yang terukur.
3. **Optimalisasi Belanja:** Menghasilkan daftar belanjaan yang pas sesuai rencana menu *Masak Sendiri* tanpa ada bahan terbuang.

---

## 🛠️ 5. Daftar Fitur Inti (Target 12 Pertemuan)

* 🎯 **Kalkulator & Generator Budget Smart:** Membagi total anggaran ke dalam porsi harian (1, 3, atau 7 hari) dan frekuensi makan (2x atau 3x sehari) dengan toleransi harga $+20\%$.
* 🔒 **Grid Rencana Makan Interaktif (Lock & Swap):**
  * **Swap (Tukar Menu):** Mengganti 1 slot menu spesifik tanpa mengacak menu lainnya.
  * **Lock (Kunci Menu):** Mengunci menu favorit agar tidak berubah saat melakukan *generate* ulang.
* 🛒 **Daftar Belanja Otomatis (*Shopping List*):** Mengompilasi seluruh bahan dari menu bertipe *Masak Sendiri* secara otomatis lengkap dengan *checkbox* keterbelian.
* 📖 **Manajemen Katalog Makanan (CRUD):** Pengguna dapat menambah, mengedit harga, menyaring, dan menghapus menu makanan lokal.
* 📲 **Ekspor & Bagikan:** Fitur berbagi ringkasan menu ke WhatsApp dan format ramah cetak/PDF.
* 💾 **Penyimpanan Lokal (*Local Persistence*):** Menyimpan seluruh data katalog dan rencana makan secara otomatis di `localStorage` *browser* tanpa perlu *database server*.

---

## 🚫 6. Fitur yang Tidak Dikerjakan (*Out of Scope*)
Untuk menjaga fokus penyelesaian dalam rentang 12 pertemuan, fitur berikut **tidak dimasukkan** dalam ruang lingkup pengembangan:
* ❌ **Transaksi & Payment Gateway:** Tidak ada proses transaksi pembayaran langsung atau integrasi dompet digital.
* ❌ **Integrasi API Live Order (GoFood/GrabFood/ShopeeFood):** Tidak terhubung langsung dengan platform pemesanan makanan eksternal.
* ❌ **Autentikasi Akun Cloud (Login/Register):** Aplikasi murni berbasis *Client-Side* (`localStorage`) tanpa server backend.
* ❌ **Hitungan Nutrisi Medis Kompleks:** Tidak menghitung detail kalori, makronutrisi, atau kondisi diet medis spesifik.
* ❌ **Peta & Pelacak GPS:** Tidak menyediakan navigasi atau pemetaan lokasi warung makan.

---

## ✅ 7. Kriteria Aplikasi Dinyatakan Berhasil
Aplikasi **HematBite** dinyatakan berhasil apabila memenuhi kriteria berikut:
1. **Akurasi Perhitungan:** Algoritma dapat membagi *budget* dan memilih kombinasi menu tanpa ada total biaya yang melebihi batas anggaran yang ditentukan.
2. **Persistensi Data:** Data katalog menu (CRUD) dan rencana makan tetap tersimpan di *browser* meskipun halaman di-*refresh*.
3. **Interaktivitas Fitur:** Fitur *Lock*, *Swap*, dan penyusunan *Shopping List* berfungsi $100\%$ tanpa *error* JavaScript pada konsol.
4. **Responsif & Ramah Cetak:** Antarmuka dapat diakses secara nyaman melalui layar HP (*Mobile Browser*) serta menghasilkan layout yang rapi saat dicetak ke PDF.

---

## 🏗️ 8. Arsitektur Teknis & Spesifikasi Kode

### Tech Stack
* **Front-end:** HTML5, Tailwind CSS (via CDN), FontAwesome Icons
* **Language & Logic:** Vanilla JavaScript (ES6+)
* **State Management:** Web Storage API (`localStorage`)
* **Architecture:** Client-Side Single Page Application (No-Build Static Architecture)
# 🍱 HematBite - Smart Meal & Budget Planner (MVP Version 1)

**HematBite** adalah aplikasi web berbasis *Single Page Application* (SPA) yang membantu mahasiswa dan pekerja pemula (*first-jobber*) merencanakan jadwal menu makan harian sesuai anggaran (*budget*) tanpa potensi *food waste*.

---

## 🎯 Spesifikasi MVP & 5 User Stories

### **US-1: Autentikasi Pengguna & Sesi Lokal**
- **Brief:** Buat sistem login/register lokal tanpa backend.
- **Acceptance Criteria:**
  - Registrasi menyimpan nama pengguna & kata sandi ke `localStorage`.
  - Sistem menolak registrasi jika *username* sudah digunakan.
  - Sesi login bertahan saat halaman direfresh dan terhapus saat *Logout*.

### **US-2: Smart Budget Meal Generator**
- **Brief:** Algoritma pembagi budget harian ke porsi makan harian.
- **Acceptance Criteria:**
  - Menghitung target budget porsi: `(Total Budget / Hari) / Frekuensi`.
  - Memilih menu acak sesuai kategori porsi dengan toleransi budget +25%.
  - Total pengeluaran aktual dihitung secara transparan.

### **US-3: Lock & Swap Engine**
- **Brief:** Fitur kunci menu favorit dan tukar menu tunggal.
- **Acceptance Criteria:**
  - Menu yang dikunci (`isLocked = true`) tidak berubah saat re-generate.
  - Fitur *Swap* mengganti 1 slot menu spesifik secara acak.
  - Biaya akumulatif otomatis dihitung ulang.

### **US-4: Auto-Shopping List Compiler**
- **Brief:** Rekap bahan otomatis dari rencana aktif.
- **Acceptance Criteria:**
  - Mengambil bahan khusus dari menu bertipe `masak`.
  - Menggabungkan bahan duplikat (*deduplication*) dan membersihkan spasi.
  - Status centang tersimpan di `localStorage`.

### **US-5: Manajemen Katalog Makanan (CRUD)**
- **Brief:** Manajemen database menu makanan.
- **Acceptance Criteria:**
  - Tambah menu baru dengan validasi harga (>0).
  - Pencarian menu secara *real-time* berdasarkan kata kunci.
  - Hapus menu dari katalog secara persisten.

---

## 🧪 Berkas Unit Test & Cara Menjalankan

Aplikasi ini dilengkapi 5 file Unit Test fisik yang menguji aturan bisnis utama:
1. `tests/auth.test.js`
2. `tests/generator.test.js`
3. `tests/lock_swap.test.js`
4. `tests/shopping.test.js`
5. `tests/catalog.test.js`

### **Cara Menjalankan Unit Test:**
1. Buka berkas `test.html` di browser (Chrome/Edge/Firefox).
2. Seluruh tes akan dieksekusi secara otomatis dan menampilkan status **ALL PASSED (100% Lulus)**.

---

## 🛠️ AI Iterative Engineering Workflow
Pengerjaan proyek ini menerapkan pendekatan AI-Assisted Development:
1. **Brief:** Memberikan instruksi spesifik per modul ke AI Agent.
2. **Plan:** Menentukan struktur data dan algoritma toleransi harga.
3. **Build:** AI membuat scaffold kode awal.
4. **Verify:** Mahasiswa mereview, menambahkan toleransi budget +25%, serta menguji unit test.
5. **Commit:** Melakukan *git commit* terpisah sesuai kategori berkas.
   
### Struktur Data Utama (Entities)
```typescript
interface FoodItem {
  id: string;
  nama: string;
  harga: number;
  kategori: 'sarapan' | 'siang' | 'malam';
  tipe: 'beli' | 'masak';
  bahan: string[];
}

interface MealSlot {
  kategori: 'sarapan' | 'siang' | 'malam';
  makanan: FoodItem;
  isLocked: boolean;
}

interface DayPlan {
  hariKe: number;
  daftarMenu: MealSlot[];
}

interface MealPlan {
  budgetTotal: number;
  jumlahHari: number;
  frekuensiMakan: number;
  tipeMakanan: 'semua' | 'beli' | 'masak';
  totalPengeluaran: number;
  jadwalHarian: DayPlan[];
}
