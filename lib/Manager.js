const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super();
      this.role = 'Manager';
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
    }

    getName() {
        return {
            name: this.name
        };
      }
    getId() {
        return {
            id: this.id
        };
      }
    getEmail() {
        return {
            email: this.email
        };
      }
    getRole() {
        return {
            role: this.role
        };
      }
}


module.exports = Manager;