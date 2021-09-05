const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, email, id, and school when provided with valid arguments", () => {
            const intern = new Intern("Misha", "hippohop@gmail.com", 1, "Brown University");

            expect(intern.name).toEqual("Misha");
            expect(intern.email).toEqual("hippohop@gmail.com");
            expect(intern.id).toEqual(1);
            expect(intern.school).toEqual("Brown University");
        });

        it("Should return the corresponding value", () => {
            const intern = new Intern("Raj", "rpatel@gmail.com", 2, "UMO");

            const name = intern.getName();
            const email = intern.getEmail();
            const id = intern.getId();
            const role = intern.getRole();
            const school = intern.getSchool();
            const icon = intern.getIcon();

            expect(name).toEqual("Raj");
            expect(email).toEqual("rpatel@gmail.com");
            expect(id).toEqual(2);
            expect(role).toEqual("Intern");
            expect(school).toEqual("School: UMO");
            expect(icon).toEqual("✏️");
        });
    })
})