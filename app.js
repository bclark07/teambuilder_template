const inquirer = require("inquirer");
// const path = require("path");
const fs = require("fs");

//check if need to add jest and remove path and fs, not in the package.json

// The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns.

// ### Roster output

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

//   * Name

//   * Role

//   * ID

//   * Role-specific property (School, link to GitHub profile, or office number)

// ## Bonus

// * Use validation to ensure that the information provided is in the proper expected format.

// * Add the application to your portfolio.

// const Employee = require("./lib/Employee");



//ask if creating an engineer or intern, or putting team together
// }
//2 parameters - what file writing to, and 
// use fs package
// writeFile function

// The project must generate a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

//   * Name

//   * Role

//   * ID

//   * Role-specific property (School, link to GitHub profile, or office number)

// function CreateTeam() {

function CreateTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "What role is the person you are creating the information for?",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's id number?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the employee's email address?"
        }
    ])
   .then(function (data) {
    const role = data.role;
    switch (role) {
        case 'Manager':
            inquirer.prompt([
                {
                    type: "input",
                    name: "office",
                    message: "What is the employee's office number?"
                }
            ]);
            const Manager = require('./lib/Manager');
            const boss = new Manager(data.name, data.id, data.email, data.office);
            console.log(boss);
            break;
        case 'Engineer':
            inquirer.prompt([
                {
                    type: "input",
                    name: "github",
                    message: "What is the employee's gitHub?"
                }
            ]);
            const Engineer = require('./lib/Engineer');
            console.log("Engineer");
            const engine = new Engineer(data.name, data.id, data.email, data.github);
            break;
        case 'Intern':
            inquirer.prompt([
                {
                    type: "input",
                    name: "school",
                    message: "Where does this intern go to school?"
                }
            ]);
            const Intern = require('./lib/Intern');
            const freeworker = new Intern(data.name, data.id, data.email, data.school);
            console.log("Intern");
    }
});
}

//   var filename = data.name.toLowerCase().split(' ').join('') + ".json";

//   fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

//     if (err) {
//       return console.log(err);
//     }

//     console.log("Success!");

CreateTeam();
