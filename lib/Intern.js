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
    constructor(school) {
        //how are these passed?
        super(name, id, email);
        this.school = school;
        //need const like in Rectangle?
    }

    getSchool() {
        return school;
    }

    getRole() {
        return Intern;
    }
}

//push to manager array? Check manager length? Look at test files to decide...

const intern = new Intern(school);
//or does it need to be this.office? 
console.log("---Intern---");
intern.printInfo();