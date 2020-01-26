// In addition to `Employee`'s properties and methods, `Manager` will also have:

//   * officeNumber

//   * getRole() // Overridden to return 'Manager'

//function CreateManager()
//  name (passed)
//   * id (passed)
//   * getEmail() (passed)
// * officeNumber

const Employee = require("./Employee");

class Manager extends Employee {
    constructor(office) {
        //how are these passed?
        super(name, id, email);
        this.office = office;
        //need const like in Rectangle?
    }

    getOffice() {
        return office;
    }

    getRole() {
        return Manager;
    }
}

//push to manager array? Check manager length? Look at test files to decide...

const manager = new Manager(office);
//or does it need to be this.office? 
console.log("---Manager---");
manager.printInfo();