const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, email, id);
        this.gitHub = gitHub;
    }
    getGithub() {
        return `GitHub: ${this.gitHub}`;
    };
    getRole() {
        return "Engineer";
    };
    getIcon() {
        return "🛠️";
    };
}

module.exports = Engineer;