//Imports
const inquirer = require("inquirer")
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

//array of questions
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project called?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description about your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license are you using for this project?',
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What should someone do to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this project?',
    },
    {
        type: 'input',
        name: 'picture',
        message: "What is the filepath for your project picture? (ex: ./pictures/{insertpicturenamehere})(if you don't have one, keep this blank)",
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any sources that you owe credit to.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How would someone contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How would someone test this project?',
    },
];

//function to write Readme file
function writeToFile(fileName, readMe) {
    fs.writeFile(fileName, readMe, (err) =>
      err ? console.log(err) : console.log(`Successfully created ${fileName}`)
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
