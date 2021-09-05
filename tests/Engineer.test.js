const { expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, email, id, and GitHub when provided with valid arguments", () => {
            const engineer = new Engineer("Misha", "hippohop@gmail.com", 1, "mhippo@github.com");

            expect(engineer.name).toEqual("Misha");
            expect(engineer.email).toEqual("hippohop@gmail.com");
            expect(engineer.id).toEqual(1);
            expect(engineer.gitHub).toEqual("mhippo@github.com");
        });

        it("Should return the corresponding value", () => {
            const engineer = new Engineer("Raj", "rpatel@gmail.com", 2, "github.com/rpatel");

            const name = engineer.getName();
            const email = engineer.getEmail();
            const id = engineer.getId();
            const role = engineer.getRole();
            const gitHub = engineer.getGithub();
            const icon = engineer.getIcon();

            expect(name).toEqual("Raj");
            expect(email).toEqual("rpatel@gmail.com");
            expect(id).toEqual(2);
            expect(role).toEqual("Engineer");
            expect(gitHub).toEqual("GitHub: <a href=https://github.com/rpatel class=\"text-reset\">github.com/rpatel</a>");
            expect(icon).toEqual("🛠️");
        });
    })
})