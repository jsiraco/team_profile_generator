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
    return eQuestions = [
        {
            type: "input",
            name: "name",
            message: `Please enter the ${data}'s name`,
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
        }
    ];
};

const roleQuestions = (data) => {
    if (data instanceof Manager) {
        return rQuestion = {
            type: "input",
            name: "id",
            message: `Please enter the ${data}'s office #`,
        };
    } else if (data instanceof Engineer) {
        return rQuestion = {
            type: "input",
            name: "id",
            message: `Please enter the ${data}'s GitHub`,
        };
    } else if (data instanceof Intern) {
        return rQuestion = {
            type: "input",
            name: "id",
            message: `Please enter the ${data}'s school`,
        };
    } else {
        return;
    }
};

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

let manager = new Manager("Chiemi", "chiemi@fakemail.com", 1, 243);
let engineer = new Engineer("Raj", "raj@fakemail.com", 2, "raj@github.com");
let intern = new Intern("Josef", "josef@fakemail.com", 3, "University of New Hampshire");


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

const buildEmployee = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: `Please enter the Manager's name`,
            },
            {
                type: "input",
                name: "email",
                message: `Please enter the Managers's Email`,
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
                message: `Please enter the Manager's Employee ID`,
            },
            {
                type: "input",
                name: "office",
                message: `Please enter the Manager's office #`,
            }
        ]).then((answers) => {
            let manager = new Manager(answers.name, answers.email, answers.id, answers.office);
            team.push(manager);
            console.log(team);

            inquirer.prompt(roleSelection).then((answer) => {
                console.log(answer);

            })

            // function buildTeam(team) {
            //     for (let i = 0; i < team.length; i++) {
            //         return buildCard(team[i])
            //     }
            // }
            // writeFile(buildTeam(team));
        })
}

const writeFile = (cards) => {
    const filename = `index.html`;
    const contentHTML = literalHTML(cards);
    //writes the file to the system, logs either a success or error
    fs.writeFile(filename, contentHTML, (err) => {
        err ? console.log(err) : console.log("Success!")
    });
};

buildEmployee();


