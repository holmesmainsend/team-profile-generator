// TODO: add number validation
// TODO: account for spaces
// TODO: create video and create sample HTML page in process
// TODO: add README

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

function initManager() {
  inquirer
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
      choices: ["Manager", "Engineer", "Intern", "None, finalize team"],
    },
  ])
  .then((data) => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
    teamArray.push(manager);
      if (data.continuation === "Manager") {
        initManager();
      } else if (data.continuation === "Engineer") {
        initEngineer();
      } else if (data.continuation === "Intern") {
        initIntern();
      } else {
        writeFile(generateHTML.finalHTML(teamArray));
        console.log("Your team page has been generated!");
      }
  });
};

function initEngineer() {
  inquirer
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
      choices: ["Manager", "Engineer", "Intern", "None, finalize team"],
    },
  ])
  .then((data) => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github);
    teamArray.push(engineer);
    if (data.continuation === "Manager") {
      initManager();
    } else if (data.continuation === "Engineer") {
      initEngineer();
    } else if (data.continuation === "Intern") {
      initIntern();
    } else {
      writeFile(generateHTML.finalHTML(teamArray));
      console.log("Your team page has been generated!");
    }
});
};

function initIntern() {
  inquirer
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
          console.log("Please enter a school name without spaces");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "continuation",
      message: "Next Team Member?",
      choices: ["Manager", "Engineer", "Intern", "None, finalize team"],
    },
  ])
  .then((data) => {
    const intern = new Intern(data.name, data.id, data.email, data.school);
    teamArray.push(intern);
    if (data.continuation === "Manager") {
      initManager();
    } else if (data.continuation === "Engineer") {
      initEngineer();
    } else if (data.continuation === "Intern") {
      initIntern();
    } else {
      writeFile(generateHTML.finalHTML(teamArray));
      console.log("Your team page has been generated!");
    }
});
};

function initProgram() {
  teamArray = [];
  initManager();
};

// App Start
initProgram();