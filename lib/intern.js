const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
    }
    getSchool() {
        return `School: ${this.school}`;
    };
    getRole() {
        return "Intern";
    };

    getIcon() {
        return "✏️";
    };
}

module.exports = Intern;