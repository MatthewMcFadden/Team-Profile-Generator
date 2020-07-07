const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let team = [];

const teamNamePrompt = () => {
  response = await inquirer.prompt ([
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
        "Manger",
        "Engineer",
        "Intern"
      ]
    }
  ]);

  let response = ""

  if (response.role === "Manager") {
    response = await inquirer.prompt ([{
      type: "input",
      name: "x",
      message: "What is the employee's office number?: "
    }]);
    // store information and push
    const manager = new Manager (response.name, response.id, response.email, response.x);
    team.push(manager);  

  } else if (response.role === "Engineer") {
    response = await inquirer.prompt ([{
      type: "input",
      name: "x",
      message: "What is the employee's Github username?: "
    }]);
    // store information and push
    const engineer = new Engineer (response.name, response.id, response.email, response.x);
    team.push(engineer);

  } else if (response.role === "Intern") {
    response = await inquirer.prompt ([{
      type: "input",
      name: "x",
      message: "What school is this employee attending?: "
    }]);
    // store information and push
    const intern = new Intern (response.name, response.id, response.email, response.x);
    team.push(intern);
  };
}