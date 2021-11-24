const fs = require('fs');
const inquirer = require("inquirer");


// Function to initialize app
function initManager() {
    return inquirer
      .prompt([
        {
          name: "managerName",
          message: "Manager Name: ",
          validate: (managerInput) => {
            if (managerInput) {
              return true;
            } else {
              console.log("Please enter a manager name");
              return false;
            }
          }
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
            }
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
            }
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
            }
          },
          {
            type: "list",
            name: "continuation",
            message: "Next Team Member?",
            choices: [
                "Engineer",
                "Intern",
                "No, finalize team",
              ],
          },
      ]) 
}


initManager();