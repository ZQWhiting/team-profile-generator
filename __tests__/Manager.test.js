const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('name', '53662', 'example@email.com', '23-B');

    expect(manager.name).toBe('name')
    expect(manager.id).toBe('53662')
    expect(manager.email).toBe('example@email.com')
    expect(manager.officeNumber).toBe('23-B')
})

test(`gets manager's role`, () => {
    const manager = new Manager('name', '53662', 'example@email.com', '23-B');

    expect(manager.getRole()).toBe('Manager');
})