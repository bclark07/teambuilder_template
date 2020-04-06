// const BuildHTML = require("./lib/BuildHTML");

// // Initialize a new Game object
// const build = new Build();

// // Start playing
// build.play();

const inquirer = require("inquirer");
const BuildHTML = require("./lib/BuildHTML");
//add each individual file?
const fs = require("fs"); //write BuildHTML file
const EmployeeArr = []; //one mamager with employees
// const path = require("path");
// const OUTPUT_DIR = path.resolve(_dirname, "output");

//check if need to add jest and remove path and fs, not in the package.json

// ### Roster output

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

// ## Bonus

// * Use validation to ensure that the information provided is in the proper expected format.

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

function CreateTeam() {
  //gets information that we need for all employees
  inquirer
    .prompt([
      {
        type: "list",
        message:
          "What role is the person you are creating the information for?",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
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
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "office",
                message: "What is the employee's office number?",
              },
            ])
            .then(function () {
              const Manager = require("./lib/Manager");
              const boss = new Manager(
                data.name,
                data.id,
                data.email,
                data.office
              );
              console.log(boss);

              // const html = Manager.generateManagerHTML(data.name, data.id, data.email, 100);
              // return writeFileAsync("index.html", html);
            });
          break;
        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "github",
                message: "What is the employee's gitHub?",
              },
            ])
            .then(function () {
              const Engineer = require("./lib/Engineer");

              console.log("Engineer");
              const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
              );
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
            .then(function () {
              const Intern = require("./lib/Intern");
              const freeworker = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
              );
              console.log("Intern");
            });
      }
    });
} //closes CreateTeam

//   var filename = data.name.toLowerCase().split(' ').join('') + ".json";

//   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

CreateTeam();

//aync.await option:
// const teamMembers = [];
// const idArray = [];

// // const teamMenu = teamMenu() => {
//     function teamMenu() {

//     const createTeam = async () => { //async function
//         const response = await inquirer.prompt({
//             {
//                 type: "list",
//                 message: "What role is the person you are creating the information for?",
//                 name: "role",
//                 choices: [
//                     "Manager",
//                     "Engineer",
//                     "Intern"
//                 ]
//             }});
// }

//     //10 minutes into recording - how to populate question array with variables

//     const { name, id, email, officeNumber } = response;
//     const manager = new Manager(name, id, email, officeNumber);

// }//closes teamMenu()

// teamMenu();
