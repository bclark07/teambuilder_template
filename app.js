//added each individual class file within the function
const inquirer = require("inquirer");
const fs = require("fs"); //write BuildHTML file
const util = require("util"); //need this?
const writeFileAsync = util.promisify(fs.writeFile); //need this?
const BuildHTML = require("./lib/BuildHTML"); //render generator
//OR
// const path = require("path");
// const OUTPUT_DIR = path.resolve(__dirname, "output"); //output path
// const outputPath = path.join(OUTPUT_DIR, "employees.html");
//creates a path to output full html file

const EmployeeArr = []; //one mamager with employees

// ### Roster output

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

// ## Bonus

// * Use validation to ensure that the information provided is in the proper expected format.

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

function CreateManager() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?",
      },
    ])
    .then(function (data) {
      inquirer
        .prompt([
          {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?",
          },
        ])
        .then(function (response) {
          const Manager = require("./lib/Manager");
          const boss = new Manager(
            data.name,
            data.id,
            data.email,
            response.officeNumber
          );
          EmployeeArr.push(boss);
          console.log(EmployeeArr);
          CreateTeam();
        });
    });
} //closes CreateManager

function CreateTeam() {
  //gets information that we need for all employees
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "What role is the person you are creating the information for?",
        name: "role",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the employee's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?",
      },
    ])
    //gathers remaining information depending on the role and exports data to create employee card
    .then(function (data) {
      const role = data.role;
      switch (role) {
        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "What is the employee's gitHub?",
              },
            ])
            .then(function (response) {
              const Engineer = require("./lib/Engineer");
              const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                response.github
              );
              EmployeeArr.push(engineer);
              console.log(EmployeeArr);
              SelectEmployee();
              //push engineer to the EngineerArr array, or teamMembers array (15 minutes into video from 2.15)
            });
          break;
        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                name: "school",
                message: "Where does this intern go to school?",
              },
            ])
            .then(function (response) {
              const Intern = require("./lib/Intern");
              const intern = new Intern(
                data.name,
                data.id,
                data.email,
                response.school
              );
              EmployeeArr.push(intern);
              console.log(EmployeeArr);
              SelectEmployee();
            });
          break;
      }
    });
} //closes CreateTeam

function SelectEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "next",
        message: "Would you like to add another team member?",
        choices: ["yes", "no"],
      },
    ])
    .then(function (response) {
      if (response.next === "yes") {
        CreateTeam();
      } else {
        const html = BuildHTML(EmployeeArr);
        writeFileAsync("./output/team.html", html);
        // OR
        // fs.writeFileSync(outputPath, BuildHTML(EmployeeArr), "utf-8");
      }
    });
} //closes selectEmployee

CreateManager();
