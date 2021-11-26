// TODO: create for loop (or forEach) based on length of arrays to pass in values to fs
// TODO: create HTML file using fs
// TODO: add stylesheet + styling (bootstrap?)
// TODO: change console log message upon finalization
// TODO: create video and create sample HTML page in process
// TODO: add README using README generator

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Function to initialize app
function initManager() {
  managerArray = [];
  engineerArray = [];
  internArray = [];

  return inquirer
  .prompt([
    {
      name: "name",
      message: "Manager First Name: ",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter a manager first name");
          return false;
        }
      },
    },
    {
      name: "id",
      message: "Employee ID: ",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter an employee ID");
          return false;
        }
      },
    },
    {
      name: "email",
      message: "Manager Email: ",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter an email");
          return false;
        }
      },
    },
    {
      name: "officeNumber",
      message: "Office Number: ",
      validate: (officeNumber) => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter an office number");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "continuation",
      message: "Next Team Member?",
      choices: ["Engineer", "Intern", "None, finalize team"],
    },
  ])
  .then((data) => {
      if (data.continuation === "Engineer") {
        managerArray.push(data);
        initEngineer();
      } else if (data.continuation === "Intern") {
        managerArray.push(data);
        initIntern();
      } else {
        managerArray.push(data);
        generateHTML.managerHTML(managerArray[0]);
        console.log("End of team");
      }
  });
};

function initEngineer() {
  return inquirer
  .prompt([
    {
      name: "name",
      message: "Engineer First Name: ",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter an engineer first name");
          return false;
        }
      },
    },
    {
      name: "id",
      message: "Employee ID: ",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter an employee ID");
          return false;
        }
      },
    },
    {
      name: "email",
      message: "Engineer Email: ",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter an email");
          return false;
        }
      },
    },
    {
      name: "github",
      message: "GitHub Username: ",
      validate: (github) => {
        if (github) {
          return true;
        } else {
          console.log("Please enter a username");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "continuation",
      message: "Next Team Member?",
      choices: ["Engineer", "Intern", "None, finalize team"],
    },
  ])
  .then((data) => {
    if (data.continuation === "Engineer") {
      engineerArray.push(data);
      initEngineer();
    } else if (data.continuation === "Intern") {
      engineerArray.push(data);
      initIntern();
    } else {
      engineerArray.push(data);
      // Add forEach + generateHTML loop here
      if (internArray == []) {
        console.log("No interns!");
      } else {
        generateHTML.internHTML(internArray[0]);
      // Add forEach + generateHTML loop here
      }
      generateHTML.engineerHTML(engineerArray[0]);
      generateHTML.managerHTML(managerArray[0]);
      console.log("End of team");
    }
});
};

function initIntern() {
  return inquirer
  .prompt([
    {
      name: "name",
      message: "Intern First Name: ",
      validate: (name) => {
        if (name) {
          return true;
        } else {
          console.log("Please enter an intern first name");
          return false;
        }
      },
    },
    {
      name: "id",
      message: "Employee ID: ",
      validate: (id) => {
        if (id) {
          return true;
        } else {
          console.log("Please enter an employee ID");
          return false;
        }
      },
    },
    {
      name: "email",
      message: "Intern Email: ",
      validate: (email) => {
        if (email) {
          return true;
        } else {
          console.log("Please enter an email");
          return false;
        }
      },
    },
    {
      name: "school",
      message: "School Name (no spaces): ",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter a school name (no spaces");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "continuation",
      message: "Next Team Member?",
      choices: ["Engineer", "Intern", "None, finalize team"],
    },
  ])
  .then((data) => {
    if (data.continuation === "Engineer") {
      internArray.push(data);
      initEngineer();
    } else if (data.continuation === "Intern") {
      internArray.push(data);
      initIntern();
    } else {
      internArray.push(data);
      // Add forEach + generateHTML loop here
      if (engineerArray == []) {
        console.log("No engineers!")
      } else {
        generateHTML.engineerHTML(engineerArray[0]);
      // Add forEach + generateHTML loop here
      }
      generateHTML.internHTML(internArray[0]);
      generateHTML.managerHTML(managerArray[0]);
      console.log("End of team");
    }
});
};

initManager();