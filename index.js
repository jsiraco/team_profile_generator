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
                        <p>Email: <a href="${data.email}" class="text-reset">${data.email}</a></p>
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
        ${data.manager}
        ${data.engineer}
        ${data.intern}
    </div>
</body>

</html>
    `
}

//Prompt to choose Employee
const employeeInquirer = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "employee",
                message: "Please select an employee type to add, or exit",
                choices: ["Engineer", "Intern", "Exit"],
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
                case "Exit":
                    console.log("Terminated")
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
            const engineer = new Engineer(data.engineer, data.id, data.email, data.gitHub);

            engineer.generateEngineer(data);
            employeeInquirer(); 
            return engineer;
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
            const intern = new Intern(data.intern, data.id, data.email, data.gitHub);

            intern.generateIntern(data);
            employeeInquirer(); 
            return intern;
        })
}

//Function to end application
const generateHTML = (data) => {
    const filename = "index.html";
    const contentHTML = literalHTML(data);
    //Writes file to system
    fs.writeFile(filename, contentHTML, (err) => {
        err ? console.log(err) : console.log("Success!")
    })
}

//Inquirer Prompt to start application and built Manager
inquirer
    .prompt([
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
        const manager = new Manager(data.manager, data.id, data.email, data.officeNum);
        
        manager.generateManager(data);
        employeeInquirer(); 
        return manager;
    })
