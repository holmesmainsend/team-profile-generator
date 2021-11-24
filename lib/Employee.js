class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 7;
        this.email = 'gggg';
        this.role = 'gluddddde';
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


module.exports = Employee;