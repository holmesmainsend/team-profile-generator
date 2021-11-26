// TODO: create for loop (or forEach) based on length of arrays to pass in values to fs; remove hardcoded Jeffs, Bronsons, and Eugenes
// TODO: account for empty intern and/or engineer array
// TODO: add number/string validation for inquirer
// TODO: account for spaces in inquirer answers(?)
// TODO: create HTML file using fs
// TODO: add stylesheet + styling (bootstrap?)
// TODO: change console log message upon finalization
// TODO: create video and create sample HTML page in process
// TODO: add README using README generator

const fs = require("fs");
const inquirer = require("inquirer");
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
      validate: (managerName) => {
        if (managerName) {
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
      validate: (managerId) => {
        if (managerId) {
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
      validate: (managerEmail) => {
        if (managerEmail) {
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
        managerArray.push(data)
        initEngineer();
      } else if (data.continuation === "Intern") {
        managerArray.push(data)
        initIntern();
      } else {
        managerArray.push(data)
        let Jeff = new Manager(managerArray[0].name, managerArray[0].id, managerArray[0].email, managerArray[0].officeNumber);
        console.log("End of team");
      }
  });
}

function initEngineer() {
  return inquirer
  .prompt([
    {
      name: "name",
      message: "Engineer First Name: ",
      validate: (engineerName) => {
        if (engineerName) {
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
      validate: (engineerId) => {
        if (engineerId) {
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
      validate: (engineerEmail) => {
        if (engineerEmail) {
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
      validate: (githubUser) => {
        if (githubUser) {
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
      engineerArray.push(data)
      initEngineer();
    } else if (data.continuation === "Intern") {
      engineerArray.push(data)
      initIntern();
    } else {
      engineerArray.push(data)
      let Jeff = new Manager(managerArray[0].name, managerArray[0].id, managerArray[0].email, managerArray[0].officeNumber);
      let Bronson = new Engineer(engineerArray[0].name, engineerArray[0].id, engineerArray[0].email, engineerArray[0].github);
      let Eugene = new Intern(internArray[0].name, internArray[0].id, internArray[0].email, internArray[0].school);
      console.log("End of team");
    }
});
}

function initIntern() {
  return inquirer
  .prompt([
    {
      name: "name",
      message: "Intern First Name: ",
      validate: (internName) => {
        if (internName) {
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
      validate: (internId) => {
        if (internId) {
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
      validate: (internEmail) => {
        if (internEmail) {
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
      internArray.push(data)
      initEngineer();
    } else if (data.continuation === "Intern") {
      internArray.push(data)
      initIntern();
    } else {
      internArray.push(data)
      let Jeff = new Manager(managerArray[0].name, managerArray[0].id, managerArray[0].email, managerArray[0].officeNumber);
      let Bronson = new Engineer(engineerArray[0].name, engineerArray[0].id, engineerArray[0].email, engineerArray[0].github);
      let Eugene = new Intern(internArray[0].name, internArray[0].id, internArray[0].email, internArray[0].school);
      console.log("End of team");
    }
});
}

initManager();