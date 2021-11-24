const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '') {
      super(name);
      this.name = name;
      this.id = 7;
      this.email = 'gggg';
      this.role = 'gluddddde';
    }
}


module.exports = Manager;