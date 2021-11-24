// TODO: make initEngineer and initIntern functions recursive

const fs = require("fs");
const inquirer = require("inquirer");

// Function to initialize app
function initManager() {
  return inquirer.prompt([
    {
      name: "managerName",
      message: "Manager Name: ",
      validate: (managerName) => {
        if (managerName) {
          return true;
        } else {
          console.log("Please enter a manager name");
          return false;
        }
      },
    },
    {
      name: "managerId",
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
      name: "managerEmail",
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
  ]);
}

function initEngineer() {
  return inquirer.prompt([
    {
      name: "engineerName",
      message: "Engineer Name: ",
      validate: (engineerName) => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter an engineer name");
          return false;
        }
      },
    },
    {
      name: "engineerId",
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
      name: "engineerEmail",
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
      name: "githubUser",
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
  ]);
}

function initIntern() {
  return inquirer.prompt([
    {
      name: "internName",
      message: "Intern Name: ",
      validate: (internName) => {
        if (internName) {
          return true;
        } else {
          console.log("Please enter an intern name");
          return false;
        }
      },
    },
    {
      name: "internId",
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
      name: "internEmail",
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
      message: "School Name: ",
      validate: (school) => {
        if (school) {
          return true;
        } else {
          console.log("Please enter a school name");
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
  ]);
}

// initManager().then((data) => {
//   if (data.continuation === "Engineer") {
//     initEngineer().then((data) => {
//       if (data.continuation === "Engineer") {
//         initEngineer();
//       } else if (data.continuation === "Intern") {
//         initIntern();
//       } else {
//         console.log("End of team");
//       }
//     });
//   } else if (data.continuation === "Intern") {
//     initIntern().then((data) => {
//         if (data.continuation === "Engineer") {
//           initEngineer();
//         } else if (data.continuation === "Intern") {
//           initIntern();
//         } else {
//           console.log("End of team");
//         }
//       });
//   } else {
//     console.log("End of team");
//   }
// });