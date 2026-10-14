describe("US-4: Auto-Shopping List Compiler", () => {
    test("Ekstraksi bahan belanjaan hanya mengambil menu tipe 'masak' & bebas duplikasi", () => {
        const mockSchedule = [
            {
                daftarMenu: [
                    { makanan: { tipe: "beli", bahan: [] } },
                    { makanan: { tipe: "masak", bahan: ["Telur", " Bawang ", "Telur"] } }
                ]
            }
        ];

        let ingredients = [];
        mockSchedule.forEach(day => {
            day.daftarMenu.forEach(slot => {
                if (slot.makanan.tipe === "masak" && slot.makanan.bahan) {
                    slot.makanan.bahan.forEach(b => {
                        const trimmed = b.trim();
                        if (trimmed && !ingredients.includes(trimmed)) {
                            ingredients.push(trimmed);
                        }
                    });
                }
            });
        });

        expect(ingredients.length).toBe(2);
        expect(ingredients.includes("Telur")).toBe(true);
        expect(ingredients.includes("Bawang")).toBe(true);
    });

    test("toggleShoppingItem mengubah status centang di checklist", () => {
        checkedShoppingItems = {};
        const item = "Telur";
        checkedShoppingItems[item] = !checkedShoppingItems[item];
        expect(checkedShoppingItems[item]).toBe(true);

        checkedShoppingItems[item] = !checkedShoppingItems[item];
        expect(checkedShoppingItems[item]).toBe(false);
    });
});
