const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const html = require("./src/page-template");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

let team = [];
let generateTeam = '';

async function app () {
  try {
    await teamPrompt ()
    for (let i = 0; i < team.length; i++) {
      generateTeam = generateTeam + html.generateCard(team[i]);
    }

    let finalHTML = html.generateHTML(generateTeam)

    console.log(generateTeam);

    writeFileAsync("./dist/index.html", finalHTML)
    
  } catch (err) {
    return console.log(err);
  }
};

async function teamPrompt () {
  let finishedResponse = "";
  do {
    try {
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
            "Manager",
            "Engineer",
            "Intern"
          ]
        }
      ]);

      let secondResponse = ""

      if (response.role === "Manager") {
        secondResponse = await inquirer.prompt ([{
          type: "input",
          name: "x",
          message: "What is the employee's office number?: "
        }]);
        // store information and push
        const manager = new Manager (response.name, response.id, response.email, secondResponse.x);
        team.push(manager);  

      } else if (response.role === "Engineer") {
        secondResponse = await inquirer.prompt ([{
          type: "input",
          name: "x",
          message: "What is the employee's Github username?: "
        }]);
        // store information and push
        const engineer = new Engineer (response.name, response.id, response.email, secondResponse.x);
        team.push(engineer);

      } else if (response.role === "Intern") {
        secondResponse = await inquirer.prompt ([{
          type: "input",
          name: "x",
          message: "What school is this employee attending?: "
        }]);
        // store information and push
        const intern = new Intern (response.name, response.id, response.email, secondResponse.x);
        team.push(intern);
      };
    } catch (err) {
      return console.log(err);
    }

    finishedResponse = await inquirer.prompt([{
      type: "list",
      name: "finish",
      message: "Do you want to add more team members?: ",
      choices: [
        "Yes",
        "No"
      ]
    }])
  } while (finishedResponse.finish === "Yes");
}

app ();