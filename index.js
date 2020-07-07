const inquirer = require("inquirer");
const fs = require("fs");

let team = [];

const teamNamePrompt = () => {
  inquirer.prompt([
    {
      message: "Add team name",
      name: "teamname"
    }
  ])
  .then(function(data) {
    const teamName = data.teamname
    finalTeamArray.push(teamName)
  })

  response = inquirer.prompt ([
    {
      type: "input",
      name: "name",
      message: "What is the employee's name?: "
    },

    {
      type: "input",
      name: "id",
      message: "Enter the employee's ID number: "
    },

    {
      type: "input",
      name: "email",
      message: "Enter the employee's email address: "
    },

    {
      type: "list",
      name: "role",
      message: "What is the employee's role?: ",
      choices: [
        "Engineer",
        "Intern",
        "Manager"
      ]
    }
  ]);
}