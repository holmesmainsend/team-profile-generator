const Manager = require('../__mocks__/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Biffy', 90, "manager@gmail.com", 3);

    expect(manager.role).toBe('Manager');
    expect(manager.name).toBe('Biffy');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
})


test('gets manager details', () => {
    const manager = new Manager('Biffy', 90, "manager@gmail.com", 3);

    expect(manager.getName()).toHaveProperty('name');
    expect(manager.getId()).toHaveProperty('id');
    expect(manager.getEmail()).toHaveProperty('email');
    expect(manager.getRole()).toHaveProperty('role');
})