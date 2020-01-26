// The first class is an `Employee` parent class with the following properties and
// methods:

//   * name
//   * id
//   * title
//   * getName()
//   * getId()
//   * getEmail()
//   * getRole() // Returns 'Employee'

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return name;
    }

    getId() {
        return id;
    }

    getEmail() {
        return email;
    }

    getRole() {
        return Employee;
    }

    //delete later
    printInfo() {
        for (var key in this) {
            console.log(`${key}: ${this[key]}`);
        }
    }
}

module.exports = Employee;
