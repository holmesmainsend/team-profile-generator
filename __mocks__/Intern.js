const Employee = require('../__mocks__/Employee');

module.exports = class Intern extends Employee {
    constructor(name, id, email, school) {
      super();
      this.role = 'Intern';
      this.name = name;
      this.id = id;
      this.email = email;
      this.school = school;
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