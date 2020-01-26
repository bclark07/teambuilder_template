
// In addition to `Employee`'s properties and methods, `Engineer` will also have:

// * github  // GitHub username

// * getGithub()

// * getRole() // Overridden to return 'Engineer'

//function CreateEngineer()
//   * name (passed)
//   * id (passed)
//   * getEmail() (passed)
//   * gitHub username


const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(gitHub) {
        //how are these passed?
        super(name, id, email);
        this.gitHub = gitHub;
        //need const like in Rectangle?
    }

    getGithub() {
        return gitHub;
    }

    getRole() {
        return Engineer;
    }
}

//push to manager array? Check manager length? Look at test files to decide...

const engineer = new Engineer(gitHub);
//or does it need to be this.office? 
console.log("---Engineer---");
engineer.printInfo();