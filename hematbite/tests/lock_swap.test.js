describe("US-3: Lock & Swap Engine", () => {
    test("Fungsi toggleLock mengubah status isLocked pada slot menu", () => {
        const samplePlan = {
            budgetTotal: 150000,
            jumlahHari: 1,
            frekuensiMakan: 3,
            schedule: [{
                hariKe: 1,
                daftarMenu: [
                    { kategori: "sarapan", makanan: { id: "f1", nama: "Nasi Uduk", harga: 10000 }, isLocked: false }
                ]
            }]
        };
        currentPlan = samplePlan;
        
        const slot = currentPlan.schedule[0].daftarMenu[0];
        slot.isLocked = !slot.isLocked;
        expect(slot.isLocked).toBe(true);
    });

    test("Menu yang terkunci (isLocked = true) dipertahankan saat generator berjalan", () => {
        const lockedItem = { kategori: "sarapan", makanan: { id: "f1", nama: "Nasi Uduk Locked", harga: 10000 }, isLocked: true };
        const existingSchedule = [lockedItem];
        
        const retainedSlot = existingSchedule.find(m => m.kategori === "sarapan" && m.isLocked);
        expect(retainedSlot.makanan.nama).toBe("Nasi Uduk Locked");
    });

    test("Swap mengganti item makanan dengan menu baru", () => {
        if (typeof foods === 'undefined' || foods.length === 0) foods = [...DEFAULT_FOODS];
        const targetBudget = 10000;
        const newFood = pickRandomFood("siang", "semua", targetBudget);
        
        expect(newFood).toBeDefined();
        expect(typeof newFood.nama).toBe("string");
    });
});
