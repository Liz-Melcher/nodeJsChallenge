// TODO: Include packages needed for this application
import fs from 'fs'; 
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const jsonData = JSON.parse(fs.readFileSync('package.json', 'utf-8')); 
console.log(`Running ${jsonData.name}`)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: "Description of your project:"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Installation insctructions:",
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage for this project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'how others can contribute:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'project can be tested in the following ways:'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'gitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address:',
        validate: (input) => /\S+@\S+\.\S+/.test(input) || 'Please enter a valid email address.',
    }


];
//Project title - becomes the title of the readme 
//Description
//Installation
//Usage
//Contributing
//Tests 

//import license 

//Questions section includes Github user name and contact information; email address; instructions for how to reach me
// use Validator NPM to verify email address is formulated properly 
// code asks a series of questions and gives an array; think about how to print in the terminal


//table of contents has links 

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing Readme.md', err);
        }
        else {
            console.log('Success! Generated README.md!');
        }
    }
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
    })
    .catch((error) =>
    {
        console.error('Error, please help')
    });

}

// Function call to initialize app
init();
