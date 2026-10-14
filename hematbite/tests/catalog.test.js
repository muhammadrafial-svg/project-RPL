describe("US-5: Catalog CRUD & Search Module", () => {
    test("Menambah menu baru ke dalam array katalog", () => {
        let testFoods = [...DEFAULT_FOODS];
        const initialLength = testFoods.length;
        const newFood = { id: "f_test", nama: "Soto Kudus", harga: 15000, kategori: "siang", tipe: "beli", bahan: [] };
        testFoods.push(newFood);

        expect(testFoods.length).toBe(initialLength + 1);
        expect(testFoods[testFoods.length - 1].nama).toBe("Soto Kudus");
    });

    test("Pencarian katalog menyaring menu berdasarkan kata kunci", () => {
        let testFoods = [...DEFAULT_FOODS];
        const query = "Geprek".toLowerCase();
        const results = testFoods.filter(f => f.nama.toLowerCase().includes(query));

        expect(results.length).toBeGreaterThanOrEqual(1);
        expect(results[0].nama).toContain("Geprek");
    });

    test("Menghapus menu berdasarkan ID mengurangi jumlah katalog", () => {
        let testFoods = [{ id: "f1", nama: "Nasi Uduk" }, { id: "f2", nama: "Mie Ayam" }];
        testFoods = testFoods.filter(f => f.id !== "f1");

        expect(testFoods.length).toBe(1);
        expect(testFoods[0].id).toBe("f2");
    });
});
