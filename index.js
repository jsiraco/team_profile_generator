//Require Inquirer
const inquirer = require("inquirer");
//Require fs
const fs = require("fs");
//Require the Employee classes
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

let team = [];

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
    `
    return card;
}

let manager = new Manager("Chiemi", "chiemi@fakemail.com", 1, 243);
let engineer = new Engineer("Raj", "raj@fakemail.com", 2, "raj@github.com");
let intern = new Intern("Josef", "josef@fakemail.com", 3, "University of New Hampshire");


const literalHTML =
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
        ${buildCard(engineer)}
    </div>
</body>

</html>
    `;

const writeFile = () => {
    const filename = `index.html`;
    const contentHTML = literalHTML;
    //writes the file to the system, logs either a success or error
    fs.writeFile(filename, contentHTML, (err) => {
        err ? console.log(err) : console.log("Success!")
    });
};

writeFile();

