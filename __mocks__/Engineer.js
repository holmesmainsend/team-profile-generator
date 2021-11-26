const Employee = require('../__mocks__/Employee');

module.exports = class Engineer extends Employee {
    constructor(name, id, email, github) {
      super();
      this.role = 'Engineer';
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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