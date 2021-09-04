const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return `Office #: ${this.officeNumber}`;
    };

    getRole() {
        return "Manager";
    };

    getIcon() {
        return "☕";
    };
}

module.exports = Manager;