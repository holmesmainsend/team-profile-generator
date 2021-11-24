const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Harold');

    expect(employee.role).toBe('Employee');
    expect(employee.name).toBe('Harold');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    console.log(employee);
})


test('gets employee details', () => {
    const employee = new Employee('Harold');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
})