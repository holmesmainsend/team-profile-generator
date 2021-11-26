const Engineer = require('../__mocks__/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Harry', 22, "engineer@gmail.com", "gitterson");

    expect(engineer.role).toBe('Engineer');
    expect(engineer.name).toBe('Harry');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
})


test('gets engineer details', () => {
    const engineer = new Engineer('Harry', 22, "engineer@gmail.com", "gitterson");

    expect(engineer.getName()).toHaveProperty('name');
    expect(engineer.getId()).toHaveProperty('id');
    expect(engineer.getEmail()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('role');
})