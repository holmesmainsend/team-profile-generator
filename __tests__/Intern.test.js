const Intern = require('../__mocks__/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Tim', 19, 'intern@hotmail.com', 'URI');

    expect(intern.role).toBe('Intern');
    expect(intern.name).toBe('Tim');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
})


test('gets intern details', () => {
    const intern = new Intern('Tim', 19, 'intern@hotmail.com', 'URI');

    expect(intern.getName()).toHaveProperty('name');
    expect(intern.getId()).toHaveProperty('id');
    expect(intern.getEmail()).toHaveProperty('email');
    expect(intern.getRole()).toHaveProperty('role');
    expect(intern.getSchool()).toHaveProperty('school');
})