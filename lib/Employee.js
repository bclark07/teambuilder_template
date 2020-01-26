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
    constructor(name, id, title, email) {
        this.name = name;
        this.id = id;
        this.role = title;
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
        return role;
    }
  
  }
  
  const shape = new Shape(25, 25);
  
  shape.printInfo();