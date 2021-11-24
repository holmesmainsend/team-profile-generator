class Employee {
    constructor(name = '') {
        this.role = 'Employee';
        this.name = name;
        this.id = 0;
        this.email = 'employee@aol.com';
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