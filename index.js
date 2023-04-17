//Imports
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

//array of questions
const questions = [
    {
        type: "input",
        name: 'Github',
        message: "What's your username?",
    },

    {
        type: "input",
        name: 'email',
        message: "What's your email address?",
    },

    {
        type: "input",
        name: 'title',
        message: "What's your project's title?",
    },

    {
        type: "input",
        name: 'description',
        message: "Please write a short description of your project.",
    },

    {
        type: "input",
        name: 'license',
        message: "Which licenses are you using for this project?",
        choices: ["MIT", "Apache", "GPL"]
    },

    {
        type: "input",
        name: 'installation',
        message: "What command should be run to install dependencies?",
        default: 'npm i'
    },

    {
        type: "input",
        name: 'picture',
        message: "What's the filepath for your project picture? (ex: ./assets/img/{insertpicturename}) (if no picture, leave blank)",
    },

    {
        type: "input",
        name: 'credits',
        message: "List all sources you used for credit",
    },

    {
        type: "input",
        name: 'contribute',
        message: "What does the user need to know about contrinuting to the repository?",
    },

    {
        type: "input",
        name: 'tests',
        message: "What command should be run to run tests?",
        default: "npm run test"
    },
];

//function to write Readme file
function writeToFile(fileName, readMe) {
    fs.writeFile(fileName, readMe, (err) =>
    err ? console.log(err) : console.log('Successfully created ${fileName}')    
)}

//function to initialize the program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const readMe = generateMarkdown(data)
        writeToFile("README.md", readMe)
    })
}

//function call to initialize program
init();
