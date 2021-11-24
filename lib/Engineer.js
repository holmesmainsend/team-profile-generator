const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
      super(name);
      this.role = 'Engineer';
      this.name = name;
      this.id = 2;
      this.email = 'engineer@aol.com';
      this.github = 'github@github.com';
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
    getGithub() {
        return {
            github: this.github
        };
      }
}


module.exports = Engineer;