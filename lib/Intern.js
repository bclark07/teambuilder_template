// In addition to `Employee`'s properties and methods, `Intern` will also have:

//   * school 

//   * getSchool()

//   * getRole() // Overridden to return 'Intern'

//function CreateIntern()
//   * name (passed)
//   * id (passed)
//   * getEmail() (passed)
//   * school

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

//push to manager array? Check manager length? Look at test files to decide...

module.exports = Intern;