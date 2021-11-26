const Employee = require('../__mocks__/Employee');


test('creates an employee object', () => {
    const employee = new Employee('Harold', 2, 'employee.gmail.com');

    expect(employee.role).toBe('Employee');
    expect(employee.name).toBe('Harold');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})


test('gets employee details', () => {
    const employee = new Employee('Harold', 2, 'employee.gmail.com');

    expect(employee.getName()).toHaveProperty('name');
    expect(employee.getId()).toHaveProperty('id');
    expect(employee.getEmail()).toHaveProperty('email');
    expect(employee.getRole()).toHaveProperty('role');
})