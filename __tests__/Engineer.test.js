const Engineer = require('../lib/Engineer');

test('Creates an Engineer object', () => {
    const engineer = new Engineer('name', '53662', 'example@email.com', 'myGithub');

    expect(engineer.name).toBe('name')
    expect(engineer.id).toBe('53662')
    expect(engineer.email).toBe('example@email.com')
    expect(engineer.github).toBe('myGithub')
})

test(`gets engineer's github`, () => {
    const engineer = new Engineer('name', '53662', 'example@email.com', 'ZmyGithub');

    expect(engineer.getGithub()).toBe(engineer.github);
})

test(`gets engineer's role`, () => {
    const engineer = new Engineer('name', '53662', 'example@email.com', 'myGithub');

    expect(engineer.getRole()).toBe('Engineer');
})