//Require Inquirer
const inquirer = require("inquirer");
//Require fs
const fs = require("fs");
//Require the Employee class
const Employee = require("./employee");


//Manager Class
class Manager extends Employee {
    constructor(officeNumber) {
        super("", "Manager", "", null);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    };
}

//Engineer Class
class Engineer extends Employee {
    constructor(gitHub) {
        super("", "Engineer", "", null);
        this.gitHub = gitHub;
    }
    getGithub();
    getRole() {
        return "Engineer";
    };
}

//Intern Class
class Intern extends Employee {
    constructor(school) {
        super("Joe", "Intern", "joe@fakemail", 3);
        this.school = school;
    }
    getSchool();
    getRole() {
        return "Intern";
    };
}