const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '') {
      super(name);
      this.role = 'Intern';
      this.name = name;
      this.id = 3;
      this.email = 'intern@aol.com';
      this.school = 'Villanova';
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
    getSchool() {
        return {
            school: this.school
        };
      }
}


module.exports = Intern;