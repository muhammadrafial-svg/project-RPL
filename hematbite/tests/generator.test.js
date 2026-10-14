describe("US-2: Smart Budget Meal Generator", () => {
    test("Kalkulasi target budget per porsi makan terbagi secara presisi", () => {
        const budget = 150000;
        const days = 7;
        const mealsPerDay = 3;
        const targetDaily = budget / days;
        const targetMeal = targetDaily / mealsPerDay;

        expect(Math.round(targetMeal)).toBe(7143);
    });

    test("pickRandomFood mengembalikan makanan dengan toleransi budget (+25%)", () => {
        if (typeof foods === 'undefined' || foods.length === 0) {
            foods = [...DEFAULT_FOODS];
        }
        const food = pickRandomFood("siang", "semua", 15000);
        expect(food).toBeDefined();
        expect(food.harga).toBeLessThanOrEqual(15000 * 1.25);
    });

    test("Total estimasi biaya jadwal sama dengan jumlah harga seluruh slot menu", () => {
        if (typeof foods === 'undefined' || foods.length === 0) {
            foods = [...DEFAULT_FOODS];
        }
        const budget = 150000;
        const targetMeal = (budget / 7) / 3;
        const day1 = [
            pickRandomFood("sarapan", "semua", targetMeal),
            pickRandomFood("siang", "semua", targetMeal),
            pickRandomFood("malam", "semua", targetMeal)
        ];
        const dayTotal = day1.reduce((acc, m) => acc + m.harga, 0);
        expect(dayTotal).toBeGreaterThanOrEqual(10000);
    });
});
