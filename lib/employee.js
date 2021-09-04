//Base class that other roles are extending
class Employee {
    constructor(name, email, id) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        console.log(`This is ${this.name}`)
    };

    getId() {
        console.log(`Their ID is ${this.id}`)
    };

    getEmail() {
        console.log(`Their email is ${this.email}`)
    };

    getRole() {
        return "Employee";
    };
}

module.exports = Employee;