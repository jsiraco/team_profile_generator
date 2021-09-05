const { expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an object with a name, email, and id when provided with valid arguments", () => {
            const employee = new Employee("Chiemi", "bunnyhop@gmail.com", 1);

            expect(employee.name).toEqual("Chiemi");
            expect(employee.email).toEqual("bunnyhop@gmail.com");
            expect(employee.id).toEqual(1);
        });

        it("Should return the corresponding value", () => {
            const employee = new Employee("Marie", "mrose@gmail.com", 2);

            const name = employee.getName();
            const email = employee.getEmail();
            const id = employee.getId();
            const role = employee.getRole();

            expect(name).toEqual("Marie");
            expect(email).toEqual("mrose@gmail.com");
            expect(id).toEqual(2);
            expect(role).toEqual("Employee");
        });
    })
})