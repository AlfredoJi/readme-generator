// importing packages needed for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// An array to hold all the questions.
const questions = [
    {
        type:"input",
        message: "Enter GitHub username: ",
        name: "username",
    },
    {
        type:"input",
        message: "Enter email: ",
        name: "email",
    },
    {
        type: "input",
        message: "Title of the project: ",
        name: "title",
    },
    {
        type: "input",
        message: "Enter description of project: ",
        name: "description",
    },
    {
        type: "input",
        message: "Enter installation of project: ",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter usage information of project: ",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter contribution guidelines of project: ",
        name: "guidelines",
    },
    {
        type: "input",
        message: "Enter test instructions of project: ",
        name: "instructions",
    },
    {
        type: "list",
        message: "Pick license: ",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
]

// Using inquirer to prompt the user to answer the questions in the command-line.
    inquirer.prompt(questions)
    .then((answers) => {
        const readmePageContent = generateMarkdown(answers);

        // Using fs to create the new README file.
        fs.writeFile("README.md", readmePageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created README.md!")
        );
    });
    