const Intern = require('../lib/Intern');

test('creates Intern object', () => {
    const intern = new Intern('name', '53662', 'example@email.com', 'University of Utah');

    expect(intern.name).toBe('name')
    expect(intern.id).toBe('53662')
    expect(intern.email).toBe('example@email.com')
    expect(intern.school).toBe('University of Utah')
})
test(`gets intern's school`, () => {
    const intern = new Intern('name', '53662', 'example@email.com', 'University of Utah');

    expect(intern.getSchool()).toBe(intern.school);
})

test(`gets intern's role`, () => {
    const intern = new Intern('name', '53662', 'example@email.com', 'University of Utah');

    expect(intern.getRole()).toBe('Intern');
})