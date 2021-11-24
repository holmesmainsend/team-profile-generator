const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
      super(name);
      this.role = 'Manager';
      this.name = name;
      this.id = 1;
      this.email = 'manager@aol.com';
      this.officeNumber = 9;
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


module.exports = Engineer;