// TODO: Include packages needed for this application

import { writeFile } from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "What is the usage information for your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution"
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test"
    },
    {
        type: "list",
        message: "What license would you like to use for your project?",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
];

// TODO: Create a function to write README file


function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) =>
        err ? console.error(err) : console.log("Your README file has been created!")

    
    );
}



// TODO: Create a function to initialize app
async function init() {
    const answers = await inquirer.prompt(questions);
    writeToFile("README.md", generateMarkdown(answers)
);
}

// Function call to initialize app
init();
