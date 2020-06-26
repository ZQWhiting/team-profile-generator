const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('name', '53662', 'example@email.com');

    expect(employee.name).toBe('name');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
})

test(`Gets Employee's name`, () => {
    const employee = new Employee('name', '53662', 'example@email.com');

    expect(employee.getName()).toBe(employee.name);
})
test(`Gets Employee's id`, () => {
    const employee = new Employee('name', '53662', 'example@email.com');

    expect(employee.getId()).toBe(employee.id);
})
test(`Gets Employee's email`, () => {
    const employee = new Employee('name', '53662', 'example@email.com');

    expect(employee.getEmail()).toBe(employee.email);
})
test(`Gets Employee's role`, () => {
    const employee = new Employee('name', '53662', 'example@email.com');

    expect(employee.getRole()).toBe('Employee');
})