// STATE MANAGEMENT & AUTHENTICATION
let isRegisterMode = false;
let currentUser = null;

// TAMBAHKAN LOGIKA AUTH DIPALING ATAS FILE APP.JS
function checkAuth() {
    const session = localStorage.getItem("hematbite_session");
    if (session) {
        currentUser = JSON.parse(session);
        document.getElementById("screen-login").classList.add("hidden");
        document.getElementById("screen-app").classList.remove("hidden");
        document.getElementById("screen-app").classList.add("flex");
        document.getElementById("user-display-name").innerText = currentUser.username;
        
        loadFoods();
        loadShoppingChecklist();
        handleGenerate();
    } else {
        document.getElementById("screen-login").classList.remove("hidden");
        document.getElementById("screen-app").classList.add("hidden");
        document.getElementById("screen-app").classList.remove("flex");
    }
}

function toggleAuthMode() {
    isRegisterMode = !isRegisterMode;
    const title = document.getElementById("auth-title");
    const subtitle = document.getElementById("auth-subtitle");
    const btnSubmit = document.getElementById("btn-auth-submit");
    const switchText = document.getElementById("auth-switch-text");
    const btnSwitch = document.getElementById("btn-auth-switch");

    if (isRegisterMode) {
        title.innerText = "Daftar Akun Baru";
        subtitle.innerText = "Buat akun untuk mulai mengelola anggaran makan";
        btnSubmit.innerText = "Daftar Akun";
        switchText.innerText = "Sudah punya akun?";
        btnSwitch.innerText = "Masuk di sini";
    } else {
        title.innerText = "Masuk ke HematBite";
        subtitle.innerText = "Masukkan nama pengguna dan kata sandi kamu";
        btnSubmit.innerText = "Masuk Sekarang";
        switchText.innerText = "Belum punya akun?";
        btnSwitch.innerText = "Daftar Akun";
    }
}

function handleAuth(e) {
    e.preventDefault();
    const username = document.getElementById("auth-username").value.trim();
    const password = document.getElementById("auth-password").value.trim();

    let users = JSON.parse(localStorage.getItem("hematbite_users")) || [];

    if (isRegisterMode) {
        const existing = users.find(u => u.username.toLowerCase() === username.toLowerCase());
        if (existing) {
            alert("Nama pengguna sudah terdaftar!");
            return;
        }
        const newUser = { username, password };
        users.push(newUser);
        localStorage.setItem("hematbite_users", JSON.stringify(users));
        localStorage.setItem("hematbite_session", JSON.stringify({ username }));
        
        showToast("Registrasi berhasil!");
        checkAuth();
    } else {
        const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
        if (user) {
            localStorage.setItem("hematbite_session", JSON.stringify({ username: user.username }));
            checkAuth();
            showToast("Berhasil masuk!");
        } else {
            alert("Nama pengguna atau kata sandi salah!");
        }
    }
}

function logout() {
    localStorage.removeItem("hematbite_session");
    currentUser = null;
    checkAuth();
    showToast("Berhasil keluar!");
}

// UBAH EVENT LISTENER UTAMA PADA APP.JS MENJADI SEPERTI INI:
document.addEventListener("DOMContentLoaded", () => {
    checkAuth();
});


// DEFAULT SEED DATA
const DEFAULT_FOODS = [
    { id: "f1", nama: "Nasi Uduk Telur Balado", harga: 10000, kategori: "sarapan", tipe: "beli", bahan: [] },
    { id: "f2", nama: "Lontong Sayur", harga: 12000, kategori: "sarapan", tipe: "beli", bahan: [] },
    { id: "f3", nama: "Bubur Ayam", harga: 10000, kategori: "sarapan", tipe: "beli", bahan: [] },
    { id: "f4", nama: "Roti Bakar & Telur", harga: 8000, kategori: "sarapan", tipe: "masak", bahan: ["Roti tawar", "Telur", "Mentega"] },
    { id: "f5", nama: "Oatmeal & Pisang", harga: 7000, kategori: "sarapan", tipe: "masak", bahan: ["Oatmeal", "Pisang", "Susu"] },
    { id: "f6", nama: "Nasi Goreng Telur", harga: 9000, kategori: "sarapan", tipe: "masak", bahan: ["Nasi", "Telur", "Bawang", "Kecap"] },
    { id: "f7", nama: "Nasi Warteg (Sayur + Telur)", harga: 13000, kategori: "siang", tipe: "beli", bahan: [] },
    { id: "f8", nama: "Nasi Warteg (Ayam + Sayur)", harga: 18000, kategori: "siang", tipe: "beli", bahan: [] },
    { id: "f9", nama: "Nasi Ayam Geprek", harga: 15000, kategori: "siang", tipe: "beli", bahan: [] },
    { id: "f10", nama: "Nasi Padang Rendang", harga: 22000, kategori: "siang", tipe: "beli", bahan: [] },
    { id: "f11", nama: "Soto Ayam & Nasi", harga: 15000, kategori: "siang", tipe: "beli", bahan: [] },
    { id: "f12", nama: "Mie Ayam", harga: 12000, kategori: "siang", tipe: "beli", bahan: [] },
    { id: "f13", nama: "Tumis Kangkung & Tempe Goreng", harga: 10000, kategori: "siang", tipe: "masak", bahan: ["Kangkung", "Tempe", "Bawang", "Cabai"] },
    { id: "f14", nama: "Ayam Goreng Lengkuas + Nasi", harga: 16000, kategori: "siang", tipe: "masak", bahan: ["Ayam", "Lengkuas", "Bumbu halus", "Beras"] },
    { id: "f15", nama: "Tahu Telur Bumbu Kacang", harga: 11000, kategori: "siang", tipe: "masak", bahan: ["Tahu", "Telur", "Kacang tanah", "Kecap"] },
    { id: "f16", nama: "Sup Sayur & Perkedel", harga: 12000, kategori: "siang", tipe: "masak", bahan: ["Kentang", "Wortel", "Buncis", "Telur"] },
    { id: "f17", nama: "Pecel Lele + Nasi", harga: 16000, kategori: "malam", tipe: "beli", bahan: [] },
    { id: "f18", nama: "Nasi Goreng Spesial", harga: 16000, kategori: "malam", tipe: "beli", bahan: [] },
    { id: "f19", nama: "Sate Ayam + Lontong", harga: 20000, kategori: "malam", tipe: "beli", bahan: [] },
    { id: "f20", nama: "Capcay Ayam + Nasi", harga: 17000, kategori: "malam", tipe: "beli", bahan: [] },
    { id: "f21", nama: "Bebek Goreng + Nasi", harga: 25000, kategori: "malam", tipe: "beli", bahan: [] },
    { id: "f22", nama: "Tumis Buncis Bakso + Nasi", harga: 11000, kategori: "malam", tipe: "masak", bahan: ["Buncis", "Bakso", "Bawang", "Beras"] },
    { id: "f23", nama: "Telur Dadar Crispy & Sambal", harga: 8000, kategori: "malam", tipe: "masak", bahan: ["Telur", "Tepung terigu", "Cabai", "Beras"] },
    { id: "f24", nama: "Sambal Goreng Ati Ampela", harga: 14000, kategori: "malam", tipe: "masak", bahan: ["Ati ampela", "Cabai merah", "Santan", "Beras"] }
];

// STATE MANAGEMENT
let foods = [];
let currentPlan = null;
let checkedShoppingItems = {};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
    loadFoods();
    loadShoppingChecklist();
    handleGenerate();
});

function loadFoods() {
    const stored = localStorage.getItem("hematbite_foods");
    if (stored) {
        foods = JSON.parse(stored);
    } else {
        foods = [...DEFAULT_FOODS];
        saveFoodsToStorage();
    }
}

function saveFoodsToStorage() {
    localStorage.setItem("hematbite_foods", JSON.stringify(foods));
}

function loadShoppingChecklist() {
    const stored = localStorage.getItem("hematbite_shopping");
    if (stored) checkedShoppingItems = JSON.parse(stored);
}

function saveShoppingChecklist() {
    localStorage.setItem("hematbite_shopping", JSON.stringify(checkedShoppingItems));
}

// TABS SWITCHING
function switchTab(tabName) {
    document.getElementById("sec-plan").classList.add("hidden");
    document.getElementById("sec-shopping").classList.add("hidden");
    document.getElementById("sec-catalog").classList.add("hidden");

    document.querySelectorAll("nav button").forEach(btn => {
        btn.className = "px-3 py-1.5 rounded-lg transition hover:text-emerald-100 text-white/80";
    });

    document.getElementById(`sec-${tabName}`).classList.remove("hidden");
    const activeBtn = document.getElementById(`tab-${tabName}`);
    activeBtn.className = "px-3 py-1.5 rounded-lg transition bg-white text-emerald-700 shadow-sm";

    if (tabName === "shopping") renderShoppingList();
    if (tabName === "catalog") renderCatalog();
}

// GENERATOR LOGIC ENGINE
function handleGenerate(e) {
    if (e) e.preventDefault();

    const budget = parseFloat(document.getElementById("input-budget").value) || 150000;
    const days = parseInt(document.getElementById("input-days").value) || 7;
    const mealsPerDay = parseInt(document.getElementById("input-meals").value) || 3;
    const typeFilter = document.getElementById("input-type").value;

    const targetDailyBudget = budget / days;
    const targetMealBudget = targetDailyBudget / mealsPerDay;

    let schedule = [];

    for (let day = 1; day <= days; day++) {
        let dayMeals = [];
        const categories = mealsPerDay === 2 ? ["siang", "malam"] : ["sarapan", "siang", "malam"];

        categories.forEach(cat => {
            let existingSlot = null;
            if (currentPlan && currentPlan.schedule[day - 1]) {
                existingSlot = currentPlan.schedule[day - 1].daftarMenu.find(m => m.kategori === cat && m.isLocked);
            }

            if (existingSlot) {
                dayMeals.push(existingSlot);
            } else {
                const pickedFood = pickRandomFood(cat, typeFilter, targetMealBudget);
                dayMeals.push({
                    kategori: cat,
                    makanan: pickedFood,
                    isLocked: false
                });
            }
        });

        schedule.push({ hariKe: day, daftarMenu: dayMeals });
    }

    let totalSpent = 0;
    schedule.forEach(d => d.daftarMenu.forEach(m => totalSpent += m.makanan.harga));

    currentPlan = {
        budgetTotal: budget,
        jumlahHari: days,
        frekuensiMakan: mealsPerDay,
        tipeMakanan: typeFilter,
        totalPengeluaran: totalSpent,
        schedule: schedule
    };

    renderPlan();
    showToast("Rencana makan berhasil diperbarui!");
}

function pickRandomFood(category, typeFilter, targetBudget) {
    let filtered = foods.filter(f => {
        const matchCat = f.kategori === category || (category === "malam" && f.kategori === "siang");
        const matchType = typeFilter === "semua" || f.tipe === typeFilter;
        return matchCat && matchType;
    });

    if (filtered.length === 0) {
        filtered = foods.filter(f => typeFilter === "semua" || f.tipe === typeFilter);
    }

    let withinBudget = filtered.filter(f => f.harga <= targetBudget * 1.25);
    let pool = withinBudget.length > 0 ? withinBudget : filtered;

    if (pool.length === 0) pool = foods;

    return pool[Math.floor(Math.random() * pool.length)];
}

// RENDER PLAN GRID
function renderPlan() {
    if (!currentPlan) return;

    document.getElementById("sum-target").innerText = `Rp${currentPlan.budgetTotal.toLocaleString('id-ID')}`;
    document.getElementById("sum-actual").innerText = `Rp${currentPlan.totalPengeluaran.toLocaleString('id-ID')}`;
    
    const diff = currentPlan.budgetTotal - currentPlan.totalPengeluaran;
    const diffEl = document.getElementById("sum-diff");
    diffEl.innerText = `${diff >= 0 ? '+' : ''}Rp${diff.toLocaleString('id-ID')}`;
    diffEl.className = `text-lg font-extrabold ${diff >= 0 ? 'text-blue-600' : 'text-rose-600'}`;

    const totalMealsCount = currentPlan.jumlahHari * currentPlan.frekuensiMakan;
    const avg = Math.round(currentPlan.totalPengeluaran / totalMealsCount);
    document.getElementById("sum-avg").innerText = `Rp${avg.toLocaleString('id-ID')}`;

    const grid = document.getElementById("plan-grid");
    grid.innerHTML = "";

    currentPlan.schedule.forEach(day => {
        let dayTotal = 0;
        day.daftarMenu.forEach(m => dayTotal += m.makanan.harga);

        let cardHtml = `
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 card-print space-y-3">
                <div class="flex justify-between items-center border-b pb-2">
                    <span class="font-bold text-slate-800 text-sm">Hari Ke-${day.hariKe}</span>
                    <span class="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                        Total: Rp${dayTotal.toLocaleString('id-ID')}
                    </span>
                </div>
                <div class="space-y-2.5">
        `;

        day.daftarMenu.forEach(slot => {
            const food = slot.makanan;
            const typeBadge = food.tipe === 'beli' 
                ? '<span class="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-[10px] font-semibold">Beli</span>'
                : '<span class="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded text-[10px] font-semibold">Masak</span>';

            cardHtml += `
                <div class="p-2.5 rounded-xl border ${slot.isLocked ? 'border-amber-300 bg-amber-50/40' : 'border-slate-100 bg-slate-50/50'} flex justify-between items-center text-xs">
                    <div class="space-y-1">
                        <div class="flex items-center space-x-1.5">
                            <span class="font-bold text-slate-400 uppercase text-[10px]">${slot.kategori}</span>
                            ${typeBadge}
                        </div>
                        <p class="font-semibold text-slate-800">${food.nama}</p>
                        <p class="text-slate-500 text-[11px]">Rp${food.harga.toLocaleString('id-ID')}</p>
                    </div>
                    <div class="flex space-x-1 no-print">
                        <button onclick="toggleLock(${day.hariKe}, '${slot.kategori}')" title="${slot.isLocked ? 'Buka Kunci' : 'Kunci Menu'}" 
                            class="p-1.5 rounded-lg ${slot.isLocked ? 'bg-amber-500 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}">
                            <i class="fa-solid ${slot.isLocked ? 'fa-lock' : 'fa-lock-open'}"></i>
                        </button>
                        <button onclick="swapSingleMeal(${day.hariKe}, '${slot.kategori}')" title="Tukar Menu" 
                            class="p-1.5 rounded-lg bg-slate-200 text-slate-600 hover:bg-emerald-600 hover:text-white transition">
                            <i class="fa-solid fa-rotate"></i>
                        </button>
                    </div>
                </div>
            `;
        });

        cardHtml += `</div></div>`;
        grid.innerHTML += cardHtml;
    });
}

// LOCK & SWAP LOGIC
function toggleLock(dayNum, category) {
    const day = currentPlan.schedule.find(d => d.hariKe === dayNum);
    if (!day) return;
    const slot = day.daftarMenu.find(m => m.kategori === category);
    if (slot) {
        slot.isLocked = !slot.isLocked;
        renderPlan();
        showToast(slot.isLocked ? "Menu dikunci!" : "Kunci menu dibuka!");
    }
}

function swapSingleMeal(dayNum, category) {
    const day = currentPlan.schedule.find(d => d.hariKe === dayNum);
    if (!day) return;
    const slot = day.daftarMenu.find(m => m.kategori === category);
    if (!slot) return;

    const targetBudget = (currentPlan.budgetTotal / currentPlan.jumlahHari) / currentPlan.frekuensiMakan;
    const newFood = pickRandomFood(category, currentPlan.tipeMakanan, targetBudget);

    slot.makanan = newFood;

    let total = 0;
    currentPlan.schedule.forEach(d => d.daftarMenu.forEach(m => total += m.makanan.harga));
    currentPlan.totalPengeluaran = total;

    renderPlan();
    showToast("Menu berhasil ditukar!");
}

// SHOPPING LIST COMPILER
function renderShoppingList() {
    const container = document.getElementById("shopping-list-container");
    container.innerHTML = "";

    if (!currentPlan) {
        container.innerHTML = `<p class="text-xs text-slate-400">Belum ada rencana makan yang dibuat.</p>`;
        return;
    }

    let allIngredients = [];
    currentPlan.schedule.forEach(day => {
        day.daftarMenu.forEach(slot => {
            if (slot.makanan.tipe === "masak" && slot.makanan.bahan) {
                slot.makanan.bahan.forEach(b => {
                    const trimmed = b.trim();
                    if (trimmed && !allIngredients.includes(trimmed)) {
                        allIngredients.push(trimmed);
                    }
                });
            }
        });
    });

    if (allIngredients.length === 0) {
        container.innerHTML = `<p class="text-xs text-slate-400 py-4 text-center">Tidak ada bahan masakan (Semua menu bertipe Beli Jadi atau tanpa daftar bahan).</p>`;
        return;
    }

    allIngredients.sort().forEach((item) => {
        const isChecked = !!checkedShoppingItems[item];
        const row = document.createElement("label");
        row.className = `flex items-center space-x-3 p-3 rounded-xl border border-slate-100 bg-slate-50/50 cursor-pointer text-xs ${isChecked ? 'line-through text-slate-400 bg-slate-100' : 'text-slate-800'}`;
        row.innerHTML = `
            <input type="checkbox" ${isChecked ? 'checked' : ''} onchange="toggleShoppingItem('${item}')" class="w-4 h-4 text-emerald-600 rounded focus:ring-emerald-500">
            <span class="font-medium">${item}</span>
        `;
        container.appendChild(row);
    });
}

function toggleShoppingItem(item) {
    checkedShoppingItems[item] = !checkedShoppingItems[item];
    saveShoppingChecklist();
    renderShoppingList();
}

function resetShoppingChecklist() {
    checkedShoppingItems = {};
    saveShoppingChecklist();
    renderShoppingList();
    showToast("Centang belanja berhasil direset!");
}

// CATALOG CRUD LOGIC
function renderCatalog() {
    const tbody = document.getElementById("catalog-table-body");
    const search = document.getElementById("catalog-search").value.toLowerCase();
    tbody.innerHTML = "";

    const filtered = foods.filter(f => f.nama.toLowerCase().includes(search));

    filtered.forEach(f => {
        const tr = document.createElement("tr");
        tr.className = "hover:bg-slate-50 transition";
        tr.innerHTML = `
            <td class="p-3 font-semibold text-slate-800">${f.nama}</td>
            <td class="p-3 capitalize">${f.kategori}</td>
            <td class="p-3">
                <span class="px-2 py-0.5 rounded text-[10px] font-semibold ${f.tipe === 'beli' ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}">
                    ${f.tipe === 'beli' ? 'Beli' : 'Masak'}
                </span>
            </td>
            <td class="p-3 font-medium">Rp${f.harga.toLocaleString('id-ID')}</td>
            <td class="p-3 text-slate-500 max-w-xs truncate">${f.bahan && f.bahan.length > 0 ? f.bahan.join(", ") : '-'}</td>
            <td class="p-3 text-right space-x-2">
                <button onclick="editFood('${f.id}')" class="text-slate-400 hover:text-emerald-600"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="deleteFood('${f.id}')" class="text-slate-400 hover:text-rose-600"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openFoodModal(id = null) {
    document.getElementById("modal-food").classList.remove("hidden");
    if (id) {
        const food = foods.find(f => f.id === id);
        document.getElementById("modal-food-title").innerText = "Edit Menu Makanan";
        document.getElementById("food-id").value = food.id;
        document.getElementById("food-nama").value = food.nama;
        document.getElementById("food-kategori").value = food.kategori;
        document.getElementById("food-tipe").value = food.tipe;
        document.getElementById("food-harga").value = food.harga;
        document.getElementById("food-bahan").value = food.bahan ? food.bahan.join(", ") : "";
    } else {
        document.getElementById("modal-food-title").innerText = "Tambah Menu Makanan";
        document.getElementById("form-food").reset();
        document.getElementById("food-id").value = "";
    }
}

function closeFoodModal() {
    document.getElementById("modal-food").classList.add("hidden");
}

function saveFood(e) {
    e.preventDefault();
    const id = document.getElementById("food-id").value;
    const nama = document.getElementById("food-nama").value.trim();
    const kategori = document.getElementById("food-kategori").value;
    const tipe = document.getElementById("food-tipe").value;
    const harga = parseFloat(document.getElementById("food-harga").value) || 0;
    const bahanRaw = document.getElementById("food-bahan").value;
    const bahan = bahanRaw ? bahanRaw.split(",").map(b => b.trim()).filter(b => b) : [];

    if (id) {
        const idx = foods.findIndex(f => f.id === id);
        if (idx !== -1) foods[idx] = { id, nama, kategori, tipe, harga, bahan };
    } else {
        const newId = "f_" + Date.now();
        foods.push({ id: newId, nama, kategori, tipe, harga, bahan });
    }

    saveFoodsToStorage();
    closeFoodModal();
    renderCatalog();
    showToast("Data menu berhasil disimpan!");
}

function editFood(id) {
    openFoodModal(id);
}

function deleteFood(id) {
    if (confirm("Apakah kamu yakin ingin menghapus menu ini dari katalog?")) {
        foods = foods.filter(f => f.id !== id);
        saveFoodsToStorage();
        renderCatalog();
        showToast("Menu berhasil dihapus!");
    }
}

// EXPORT TO WHATSAPP
function exportWhatsApp() {
    if (!currentPlan) return;

    let text = `*🍱 RENCANA MENU MAKAN - HEMATBITE*\n`;
    text += `Target Budget: Rp${currentPlan.budgetTotal.toLocaleString('id-ID')}\n`;
    text += `Estimasi Pengeluaran: Rp${currentPlan.totalPengeluaran.toLocaleString('id-ID')}\n\n`;

    currentPlan.schedule.forEach(day => {
        text += `*Hari ${day.hariKe}:*\n`;
        day.daftarMenu.forEach(slot => {
            text += `- ${slot.kategori.toUpperCase()}: ${slot.makanan.nama} (Rp${slot.makanan.harga.toLocaleString('id-ID')})\n`;
        });
        text += `\n`;
    });

    text += `_Dibuat otomatis via HematBite App_`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/?text=${encoded}`, '_blank');
}

// TOAST NOTIFIER
function showToast(msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-msg").innerText = msg;
    toast.classList.remove("translate-y-20", "opacity-0");
    setTimeout(() => {
        toast.classList.add("translate-y-20", "opacity-0");
    }, 3000);
}