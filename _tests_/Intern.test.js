const Intern = require('../lib/Intern');

test('can create a new Employee object', () => {
    const intern = new Intern('dave', 123, 'dave@gmail.com');
    expect(typeof(intern)).toBe('object');
});

test('can create a new Intern name', () => {
    const intern = new Intern('dave');
    expect(intern.getName()).toBe('dave');
});

test('can create a new Intern id', () => {
    const intern = new Intern('dave', 100);
    expect(intern.getId()).toBe(100);
});

test('can create a new Intern email', () => {
    const intern = new Intern('dave', 100, 'dave@gmail.com');
    expect(intern.getEmail()).toBe('dave@gmail.com');
});

test('can get role', () => {
    const intern = new Intern('Intern');
    expect(intern.getRole()).toBe('Intern');
});