const Employee = require('../lib/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Harold');

    expect(employee.name).toBe('Harold');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual(expect.any(String));
})


test('gets employee details', () => {
    const employee = new Employee('Harold');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
})