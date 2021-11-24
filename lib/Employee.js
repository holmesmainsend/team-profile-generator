class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = 4;
        this.email = 'example@aol.com';
        this.role = 'employee';
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