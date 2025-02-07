// TODO: Include packages needed for this application
import fs from 'fs'; 
const jsonData = JSON.parse(fs.readFileSync('package.json', 'utf-8')); 
console.log(jsonData.name)

// TODO: Create an array of questions for user input
const questions = [];
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
