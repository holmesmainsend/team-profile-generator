const fs = require('fs');
const inquirer = require("inquirer");


// Function to initialize app
function init() {
    return inquirer
      .prompt([
        {
          name: "title",
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
      ]) 
}

init();