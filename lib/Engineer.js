
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
    constructor(name, id, email, github) {
        //how are these passed?
        super(name, id, email);
        this.github = github;
        //need const like in Rectangle?
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }
}

//push to manager array? Check manager length? Look at test files to decide...


module.exports = Engineer;