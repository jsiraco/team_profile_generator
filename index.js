//Require Inquirer
const inquirer = require("inquirer");
//Require fs
const fs = require("fs");
//Require the Employee class
const Employee = require("./employee");
const { ArgumentOutOfRangeError } = require("rxjs");


//Manager Class
class Manager extends Employee {
    constructor(officeNumber) {
        super("Chiemi", "chiemi@fakemail.com", 1);
        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        console.log(this.officeNumber);
    }
    getRole() {
        return "Manager";
    };
}

//Engineer Class
class Engineer extends Employee {
    constructor(gitHub) {
        super("Raj", "raj@fakemail.com", 2);
        this.gitHub = gitHub;
    }
    getGithub() {
        console.log(this.gitHub);
    }
    getRole() {
        return "Engineer";
    };
}

//Intern Class
class Intern extends Employee {
    constructor(school) {
        super("Josef", "josef@fakemail.com", 3);
        this.school = school;
    }
    getSchool() {

    }
    getRole() {
        return "Intern";
    };
}

//Manager HTML
const managerHTML = (data) => {
    `
    <div class="column is-4">
        <div class="card">
            <header class="card-header color-fill">
                <h1 class="card-header-title">
                    Manager ☕
                </h1>
            </header>
            <div class="card-content">
                <div class="hero">
                    <h1 class="subtitle employee-name">
                        ${data.manager}
                    </h1>
                </div>
                <br>
                <div class="content">
                    <p>ID: ${data.id}</p>
                    <p>Email: <a href="${data.email}" class="text-reset">${data.email}</a></p>
                    <p>Office #: ${data.officeNum} </p>
                </div>
            </div>
        </div>
    </div>
    `
}

//Engineer HTML
const engineerHTML = (data) => {
    `
    <div class="column is-4">
        <div class="card">
            <header class="card-header color-fill">
                <h1 class="card-header-title">
                    Engineer 🛠️
                </h1>
            </header>
            <div class="card-content">
                <div class="hero">
                    <h1 class="subtitle employee-name">
                        ${data.engineer}
                    </h1>
                </div>
                <br>
                <div class="content">
                    <p>ID: ${data.id}</p>
                    <p>Email: <a href="${data.email}" class="text-reset">${data.email}</a></p>
                    <p>GitHub: <a href="${data.gitHub}" class="text-reset" target="_blank">${data.gitHub}</a></p>                    </div>
            </div>
        </div>
    </div>
    `
}

//Intern HTML
const InternHTML = (data) => {
    `
    <div class="column is-4">
        <div class="card">
            <header class="card-header color-fill">
                <h1 class="card-header-title">
                    Intern ✏️
                </h1>
            </header>
            <div class="card-content">
                <div class="hero">
                    <h1 class="subtitle employee-name">
                        ${data.intern}
                    </h1>
                </div>
                <br>
                <div class="content">
                    <p>ID: ${data.id}</p>
                    <p>Email: <a href="${data.email}" class="text-reset">${data.email}</a></p>
                    <p>GitHub: <a href="${data.gitHub}" class="text-reset" target="_blank">${data.gitHub}</a></p>
                </div>
            </div>
        </div>
    </div>
    `
}

const literalHTML = (data) => {
    `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <section class="hero is-success">
        <div class="hero-body">
            <h1 class="title has-text-centered">
                Team Profile
            </h1>
        </div>
    </section>
    <br>
    <div class="columns is-multiline is-mobile">
        ${}
    </div>
</body>

</html>
    `
}

const manager = new Manager(243);
const engineer = new Engineer("raj@github.com");
const intern = new Intern("University of New Hampshire");

manager.getName();
manager.getId();
manager.getRole();
manager.getEmail();
manager.getOfficeNumber();
