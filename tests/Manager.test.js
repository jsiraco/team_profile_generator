const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, email, id, and office when provided with valid arguments", () => {
            const manager = new Manager("Misha", "hippohop@gmail.com", 1, 243);

            expect(manager.name).toEqual("Misha");
            expect(manager.email).toEqual("hippohop@gmail.com");
            expect(manager.id).toEqual(1);
            expect(manager.officeNumber).toEqual(243);
        });

        it("Should return the corresponding value", () => {
            const manager = new Manager("Raj", "rpatel@gmail.com", 1, 68);

            const name = manager.getName();
            const email = manager.getEmail();
            const id = manager.getId();
            const role = manager.getRole();
            const office = manager.getOfficeNumber();
            const icon = manager.getIcon();

            expect(name).toEqual("Raj");
            expect(email).toEqual("rpatel@gmail.com");
            expect(id).toEqual(1);
            expect(role).toEqual("Manager");
            expect(office).toEqual("Office #: 68");
            expect(icon).toEqual("☕");
        });
    })
})