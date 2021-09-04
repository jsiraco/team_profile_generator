//Require Inquirer
const inquirer = require("inquirer");
//Require fs
const fs = require("fs");
//Require the Employee classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
// Email validation
const validation = require("email-validator");

let team = [];

//Employee Questions
function employeeQuestions(data) {
    return (questions = [
        {
            type: "input",
            name: "name",
            message: `Please enter the ${data}'s name`,
            validate: val => /[a-z]/gi.test(val), 
        },
        {
            type: "input",
            name: "email",
            message: `Please enter the ${data}'s Email`,
            validate(input) {
                if (validation.validate(input)) {
                    return true;
                } else {
                    return "Please enter a valid email."
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: `Please enter the ${data}'s Employee ID`,
            validate: val => /[a-z1-9]/gi.test(val), 
        }
    ]);
};


const roleQuestions =
    [{
        type: "input",
        name: "office",
        message: `Please enter the Manager's office #`,
        validate: val => /[a-z1-9]/gi.test(val), 
    },
    {
        type: "input",
        name: "github",
        message: `Please enter the Engineer's GitHub`,
        validate: val => /[a-z1-9]/gi.test(val), 
    },
    {
        type: "input",
        name: "school",
        message: `Please enter the Intern's school`,
        validate: val => /[a-z]/gi.test(val), 
    }];

const roleSelection = {
    type: "list",
    name: "employee",
    message: "Please select a role to add, or exit",
    choices: ["Engineer", "Intern", "Exit"],
};


//Builds cards
const buildCard = (data) => {

    let specialFunc = (data) => {
        if (data instanceof Manager) {
            return data.getOfficeNumber();
        } else if (data instanceof Engineer) {
            return data.getGithub();
        } else if (data instanceof Intern) {
            return data.getSchool();
        } else {
            return;
        }
    }

    let card =
        `
    <div class="column is-4">
        <div class="card">
            <header class="card-header color-fill">
                <h1 class="card-header-title">
                    ${data.getRole()} ${data.getIcon()}
                </h1>
            </header>
            <div class="card-content">
                <div class="hero">
                    <h1 class="subtitle employee-name">
                        ${data.name}
                    </h1>
                </div>
                <br>
                <div class="content">
                    <p>ID: ${data.id}</p>
                    <p>Email: <a href="${data.email}" class="text-reset">${data.email}</a></p>
                    <p>${specialFunc(data)}</p>
                </div>
            </div>
        </div>
    </div>
    `;
    return card;
}

const literalHTML = (data) => {
    let page =
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
        ${data}
    </div>
</body>

</html>
    `;
    return page;
};

//Builds cards for the team
// function buildTeam(team) {
//     for (let i = 0; i < team.length; i++) {
//         return buildCard(team[i])
//     }
// }

let role = "Manager"

let buildEmployee = (role) => {
    let managerQuestions = [...employeeQuestions("Manager"), roleQuestions[0], roleSelection];
    let engineerQuestions = [...employeeQuestions("Engineer"), roleQuestions[1], roleSelection];
    let internQuestions = [...employeeQuestions("Intern"), roleQuestions[2], roleSelection];

    switch (role) {
        case "Manager":
            inquirer.prompt(managerQuestions).then((answers) => {
                let manager = new Manager(answers.name, answers.email, answers.id, answers.office);
                team.push(buildCard(manager));
                role = answers.employee;
                buildEmployee(role);
            })
            break;
        case "Engineer":
            inquirer.prompt(engineerQuestions).then((answers) => {
                let engineer = new Engineer(answers.name, answers.email, answers.id, answers.github);
                team.push(buildCard(engineer));
                role = answers.employee;
                buildEmployee(role);
            })
            break;
        case "Intern":
            inquirer.prompt(internQuestions).then((answers) => {
                let intern = new Intern(answers.name, answers.email, answers.id, answers.school);
                team.push(buildCard(intern));
                role = answers.employee;
                buildEmployee(role);
            })
            break;
        case "Exit":
            stringTeam = team.toString().replace(/,/g, "")
            writeFile(stringTeam);
    }
}



const writeFile = (cards) => {
    const filename = `index.html`;
    const contentHTML = literalHTML(cards);
    //writes the file to the system, logs either a success or error
    fs.writeFile(filename, contentHTML, (err) => {
        err ? console.log(err) : console.log("Success!")
    });
};

buildEmployee(role);


