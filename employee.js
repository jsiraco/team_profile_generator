class Employee {
    constructor(person, role, email, id) {
        this.person = person;
        this.role = role,
        this.email = email;
        this.id = id;
    }

    printInfo() {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
        console.log(`This is ${this.person}, ${this.role}, employee #${this.id}, found at ${this.email}`);
    }
}

module.exports = Employee;