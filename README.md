# 🍱 HematBite - Perencana Menu & Budget Makan Harian

**HematBite** adalah aplikasi web interaktif berbasis *client-side* yang dirancang untuk membantu mahasiswa dan pekerja mengelola anggaran makan harian dengan menyusun rekomendasi menu makanan secara otomatis.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

---

## 📌 Latar Belakang & Masalah

* **Masalah:** Banyak anak kos, mahasiswa, maupun pekerja pemula kesulitan membagi anggaran makan harian. Sering kali pengeluaran membengkak di awal bulan atau kebingungan memilih variasi menu murah setiap harinya.
* **Solusi:** HematBite membagi total anggaran yang dimasukkan pengguna menjadi alokasi porsi harian, lalu secara otomatis menyusun kombinasi menu makan (sarapan, makan siang, dan makan malam) yang ramah kantong.

---

## ✨ Fitur Utama

* 🎯 **Kalkulator & Generator Budget Smart:** Membagi anggaran untuk durasi 1, 3, atau 7 hari berdasarkan opsi frekuensi makan (2x atau 3x sehari) serta preferensi tipe masakan (*Beli Jadi*, *Masak Sendiri*, atau *Campuran*).
* 🔒 **Interactive Plan Grid (Lock & Swap):**
  * **Tukar Menu (Swap):** Mengganti menu yang kurang disukai tanpa mengacak ulang seluruh jadwal.
  * **Kunci Menu (Lock):** Mengunci menu favorit agar tidak berubah saat melakukan *generate* ulang.
* 🛒 **Daftar Belanja Otomatis (*Shopping List*):** Mengompilasi bahan-bahan masakan dari menu bertipe *Masak Sendiri* secara otomatis lengkap dengan *checkbox* interaktif.
* 📖 **Katalog Makanan Custom (CRUD):** Dilengkapi 32+ data makanan lokal Indonesia yang bisa ditandai, ditambah, diedit, atau dihapus oleh pengguna.
* 📲 **Ekspor & Bagikan:** 
  * Format teks Siap Kirim langsung ke **WhatsApp**.
  * Tampilan ramah cetak (**Cetak / Simpan PDF**).
* 💾 **Penyimpanan Lokal (*Local Persistence*):** Bebas pusing *setup database*, semua data tersimpan aman di `localStorage` *browser*.

---

## 🛠️ Teknologi yang Digunakan

* **Frontend:** HTML5, [Tailwind CSS](https://tailwindcss.com/) (via CDN), FontAwesome Icons.
* **Logic & Engine:** Vanilla JavaScript (ES6+).
* **Storage:** Web Storage API (`localStorage`).

---

1. **Clone repositori ini:**
   ```bash
   git clone [https://github.com/username/hematbite.git](https://github.com/username/hematbite.git)
