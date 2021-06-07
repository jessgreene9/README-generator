// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return console.log(err);
      } else {
        console.log("Your README has been generated.");
      }
    });
  };
  
inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your Project?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project.",
    },
    {
      type: "input",
      name: "installation",
      message: "Enter instructions to install",
    },
    {
      type: "input",
      name: "usage",
      message: "How should your application to be used?",
    },
    {
      type: "list",
      name: "license",
      message: "Please select a license.",
      choices: [
        "MIT License","GNU LGPL v3","MPL 2.0","GNU AGPL v3","The Unlicense","Apache License 2.0", "GNU GPL v3","Eclipse Public License 1.0"
      ],
    },
    {
      type: "input",
      name: "contribution",
      message: "Please list any contributors to your project along with their contact information.",
    },
    {
      type: "input",
      name: "tests",
      message: "Describe how to test your project.",
      
    },
    {
      type: "input",
      name: "username",
      message: "Enter your GitHub username",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email address?",
    },
  ]).then(function (data) {
    writeToFile("./output-README/README.md", generateMarkdown(data));
  });

