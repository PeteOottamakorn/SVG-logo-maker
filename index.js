const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
  // Prompt user for up to three characters
  {
    type: "input",
    name: "text",
    message: "Please enter up to three characters for the logo",
  },
  // Prompt user for text color
  {
    type: "input",
    name: "textColor",
    message:
      "Please enter a color or hexadecimal number for the logo's text color",
  },
  // Prompt user for a shape
  {
    type: "list",
    name: "shape",
    message: "Please choose one of the shapes below",
  },
  // Prompt user for shape color
  {
    type: "input",
    name: "shapeColor",
    message: "Please enter a color or hexadecimal number for the shape's color",
  },
];

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
  });
}

init();
