// TODO: find way to cycle through all engineer/array items for adding to HTML
// TODO: finalize bootstrap styling
// TODO: create video and create sample HTML page in process
// TODO: add README using README generator

const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require("./generateHTML");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Function to write README file
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./teamPage.html', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

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
        let managerFinal = generateHTML.managerHTML(managerArray[0]);
        writeFile(generateHTML.finalHTML(managerFinal));
        console.log("Your team page has been generated!");
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
      let engineerFinal = generateHTML.engineerHTML(engineerArray[0]);
      if (internArray == []) {
        console.log("No interns!");
      } else {
        internFinal = generateHTML.internHTML(internArray[0]);
      }
      let managerFinal = generateHTML.managerHTML(managerArray[0]);
      writeFile(generateHTML.finalHTML(managerFinal, engineerFinal, internFinal));
      console.log("Your team page has been generated!");
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
      let internFinal = generateHTML.internHTML(internArray[0]);
      if (engineerArray == []) {
        console.log("No engineers!");
      } else {
        engineerFinal = generateHTML.engineerHTML(engineerArray[0]);
      }
      let managerFinal = generateHTML.managerHTML(managerArray[0]);
      writeFile(generateHTML.finalHTML(managerFinal, engineerFinal, internFinal));
      console.log("Your team page has been generated!");
    }
});
};

initManager();