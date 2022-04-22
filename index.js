// Function to call initializing
function init() {
    // TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    const fs = require('fs');

    // TODO: Create a function to write README file

    const readme = ({ title, description, install, usage, contributions, tests, license, github, linkedin, email }) =>
        `
            # ${title}

            ## Table of Contents:

            1. Description
            2. Installation
            3. Usage
            4. Contributons
            5. Tests
            6. License
            7. GitHub
            8. LinkedIn
            9. Email

            ## Description

            ${description}

            ## Installation

            ${install}

            ## Usage

            ${usage}

            ## Contributions

            ${contributions}

            ## Tests

            ${tests}

            ## License

            ![License:${license}](https://img.shields.io/badge/License-${license.toUpperCase()}-green)

            ## GitHub

            ${github}

            ## LinkedIn

            ${linkedin}

            ## Email

            ${email}
            `
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title",
            },
            {
                type: "input",
                message: "What is the description of your project?",
                name: "description",
            },
            {
                type: "input",
                message: "What command should be run to install dependencies?",
                name: "install"
            },
            {
                type: "input",
                message: "How is your application used?",
                name: "usage",
            },
            {
                type: "input",
                message: "What sort of contributions would you prefer?",
                name: "contributions"
            },
            {
                type: "input",
                message: "What command should be used to run tests?",
                name: "tests"
            },
            {
                type: "list",
                message: "What license do you want/need for your repository?",
                choices: ["MIT", "GNU General Public License 3.0"],
                name: "license",
            },
            {
                type: "input",
                message: "What is your GitHub profile URL?",
                name: "github"
            },
            {
                type: "input",
                message: "What is your linkedin profile URL?",
                name: "linkedin"
            }, {
                type: "input",
                message: "What is your email address in case anyone has any questions?",
                name: "email"
            }
        ])
        .then((answers) => {
            const readmePageContent = readme(answers);
            fs.writeFile(`README2.md`, readmePageContent, (err) => {
                err ? console.log(err) : console.log("Generating README");
            }) 
        });
};


init();