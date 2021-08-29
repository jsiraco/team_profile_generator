//Require Inquirer
const inquirer = require("inquirer");
//Require fs
const fs = require("fs");
//Require the Employee class
const Employee = require("./employee");

//Manager Class
class Manager extends Employee {
    constructor(officeNum) {
        super("Bobby", "Manager", "bobby@fakemail", 4);
        this.officeNum = officeNum;
    }

    printOffice() {
        console.log(`Office #${this.officeNum}`)
    }

    generateManager(data) {
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
                        <p>Email: <a href="${data.email}" class="text-reset">${email}</a></p>
                        <p>Office #: ${data.officeNum} </p>
                    </div>
                </div>
            </div>
        </div>
        `
    }
}

//Engineer Class
class Engineer extends Employee {
    constructor(gitHub) {
        super("Mike", "Engineer", "mike@fakemail", 2);
        this.gitHub = gitHub;
    }

    printGitHub() {
        console.log(`GitHub: ${this.gitHub}`)
    }

    generateEngineer(data) {
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
}

//Intern Class
class Intern extends Employee {
    constructor(gitHub) {
        super("Joe", "Intern", "joe@fakemail", 3);
        this.gitHub = gitHub;
    }

    printGitHub() {
        console.log(`GitHub: ${this.gitHub}`)
    }

    generateIntern(data) {
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
}

//Prompt to choose Employee
const employeeInquirer = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "Please select an employee type to add",
                choices: ["Engineer", "Intern"],
            },
        ])
        .then(data => {
            switch (data.employee) {
                case "Engineer":
                    engineerInquirer();
                    break;
                case "Intern":
                    internInquirer();
                    break;
            }
        })
}

//Prompt to generate Engineer
const engineerInquirer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineer",
                message: "Please enter the Engineer's name",
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the Engineer's Employee ID",
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the Engineer's Email",
            },
            {
                type: "input",
                name: "gitHub",
                message: "Please enter the Engineer's GitHub account",
            },
        ])
        .then(data => {
            generateEngineer(data);
            employeeInquirer(); 
        })
}

//Prompt to generate Intern
const internInquirer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "intern",
                message: "Please enter the Intern's name",
            },
            {
                type: "input",
                name: "id",
                message: "Please enter the Intern's Employee ID",
            },
            {
                type: "input",
                name: "email",
                message: "Please enter the Intern's Email",
            },
            {
                type: "input",
                name: "gitHub",
                message: "Please enter the Intern's GitHub account",
            },
        ])
        .then(data => {
            generateIntern(data);
            employeeInquirer(); 
        })
}

//Inquirer Prompt to start application
inquirer
    .prompt([
        {
            type: "input",
            name: "teamName",
            message: "Please enter your team name",
        },
        {
            type: "input",
            name: "manager",
            message: "Please enter the Manager's name",
        },
        {
            type: "input",
            name: "id",
            message: "Please enter the Manager's Employee ID",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the Manager's Email",
        },
        {
            type: "input",
            name: "officeNum",
            message: "Please enter the Manager's Office Number",
        },
    ])
    .then(data => {
        employeeInquirer(); 
        generateManager(data);
    })


const manager = new Manager(229);
const engineer = new Engineer("mike@github");
const intern = new Intern("joe@github");

manager.printInfo();
manager.printOffice();

intern.printInfo();
intern.printGitHub();

engineer.printInfo();
engineer.printGitHub();
