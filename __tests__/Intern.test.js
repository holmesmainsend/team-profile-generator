const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Harold');

    expect(intern.role).toBe('Intern');
    expect(intern.name).toBe('Harold');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    console.log(intern);
})


test('gets intern details', () => {
    const intern = new Intern('Harold');

    expect(intern.getName()).toHaveProperty('name');
    expect(intern.getId()).toHaveProperty('id');
    expect(intern.getEmail()).toHaveProperty('email');
    expect(intern.getRole()).toHaveProperty('role');
    expect(intern.getSchool()).toHaveProperty('school');
})