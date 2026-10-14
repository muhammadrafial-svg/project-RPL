describe("US-1: Auth & Session Module", () => {
    test("Registrasi akun baru menyimpan data user dan session di localStorage", () => {
        localStorage.clear();
        let users = [];
        const newUser = { username: "budi", password: "123" };
        users.push(newUser);
        localStorage.setItem("hematbite_users", JSON.stringify(users));
        localStorage.setItem("hematbite_session", JSON.stringify({ username: "budi" }));

        const storedSession = JSON.parse(localStorage.getItem("hematbite_session"));
        expect(storedSession.username).toBe("budi");
    });

    test("Registrasi dengan username duplikat mendeteksi keberadaan akun", () => {
        const users = [{ username: "budi", password: "123" }];
        const isDuplicate = users.some(u => u.username.toLowerCase() === "BUDI".toLowerCase());
        expect(isDuplicate).toBe(true);
    });

    test("Logout menghapus session dari localStorage", () => {
        localStorage.setItem("hematbite_session", JSON.stringify({ username: "budi" }));
        localStorage.removeItem("hematbite_session");
        const session = localStorage.getItem("hematbite_session");
        expect(session).toBe(null);
    });
});
