const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// const Bronson = new Engineer ("Bronson", 33, "engine@engine.net", "gitter@github.com");
// const Eugene = new Intern ("Eugene", 10, "eugy@hotmail.com", "URI");
// console.log(Bronson, Eugene);

// Function to initialize app
function initManager() {
  teamArray = [];
  return inquirer
  .prompt([
    {
      name: "name",
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
        teamArray.push(data)
        console.log(teamArray)
        initEngineer();
      } else if (data.continuation === "Intern") {
        teamArray.push(data)
        console.log(teamArray)
        initIntern();
      } else {
        teamArray.push(data)
        let Jeff = new Manager(teamArray[0].name, teamArray[0].id, teamArray[0].email, teamArray[0].officeNumber);
        console.log(Jeff);
        console.log("End of team");
      }
  });
}

function initEngineer() {
  return inquirer
  .prompt([
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
  ])
  .then((data) => {
    if (data.continuation === "Engineer") {
      teamArray.push(data)
      console.log(teamArray)
      initEngineer();
    } else if (data.continuation === "Intern") {
      teamArray.push(data)
      console.log(teamArray)
      initIntern();
    } else {
      teamArray.push(data)
      console.log(teamArray)
      console.log("End of team");
    }
});
}

function initIntern() {
  return inquirer
  .prompt([
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
  ])
  .then((data) => {
    if (data.continuation === "Engineer") {
      teamArray.push(data)
      console.log(teamArray)
      initEngineer();
    } else if (data.continuation === "Intern") {
      teamArray.push(data)
      console.log(teamArray)
      initIntern();
    } else {
      teamArray.push(data)
      console.log(teamArray)
      console.log("End of team");
    }
});
}


initManager();