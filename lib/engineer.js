const Employee = require("./employee");

//Extending employee
class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
        super(name, email, id);
        this.gitHub = gitHub;
    }
    getGithub() {
        return `GitHub: <a href=https://${this.gitHub} class="text-reset">${this.gitHub}</a>`;
    };
    getRole() {
        return "Engineer";
    };
    getIcon() {
        return "🛠️";
    };
}

module.exports = Engineer;