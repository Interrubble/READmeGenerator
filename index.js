// Function to call initializing
function init() {
    // TODO: Include packages needed for this application
    const inquirer = require('inquirer');
    const fs = require('fs');
    const generate = require('./utils/generateMarkdown.js');
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
                choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
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
            // TODO: Create a function to write README file
            
            const readme =
            `
            # ${answers.title}

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

            ${answers.description}

            ## Installation

            ${answers.install}

            ## Usage

            ${answers.usage}

            ## Contributions

            ${answers.contributions}

            ## Tests

            ${answers.tests}

            ## License

            ${answers.license}

            ## GitHub

            ${answers.github}

            ## LinkedIn

            ${answers.linkedin}

            ## Email

            ${answers.email}
            `
            fs.writeFile(`README2.md`, (readme, null, 2), (err,data)=>{
                err? console.log(err): console.log("Generating README");
            }), generate(answers)
        });
};


init();