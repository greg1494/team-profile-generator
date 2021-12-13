const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const employee = new Employee("dave", 123, "dave@gmail.com");
    expect(typeof(employee)).toBe('object');
});

test('can create a new employee name', () => {
    const employee = new Employee('dave');
    expect(employee.getName()).toBe('dave');
});

test('can create a new employee id', () => {
    const employee = new Employee('dave', 100);
    expect(employee.getId()).toBe(100);
});

test('can create a new employee email', () => {
    const employee = new Employee('dave', 100, 'dave@gmail.com');
    expect(employee.getEmail()).toBe('dave@gmail.com');
});

test('can get role', () => {
    const employee = new Employee('Employee');
    expect(employee.getRole()).toBe('Employee');
});