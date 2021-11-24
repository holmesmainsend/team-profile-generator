const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Harold');

    expect(manager.name).toBe('Harold');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual(expect.any(String));
})


// test('gets manager details', () => {
//     const manager = new Manager('Harold');

//     expect(manager.getName()).toHaveProperty('name');
//     expect(manager.getId()).toHaveProperty('id');
//     expect(manager.getEmail()).toHaveProperty('email');
//     expect(manager.getRole()).toHaveProperty('role');
// })