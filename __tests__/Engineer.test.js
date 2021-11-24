const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Harold');

    expect(engineer.role).toBe('Engineer');
    expect(engineer.name).toBe('Harold');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    console.log(engineer);
})


test('gets engineer details', () => {
    const engineer = new Engineer('Harold');

    expect(engineer.getName()).toHaveProperty('name');
    expect(engineer.getId()).toHaveProperty('id');
    expect(engineer.getEmail()).toHaveProperty('email');
    expect(engineer.getRole()).toHaveProperty('role');
})