const Manager = require('../lib/Manager');

test('can create a new Manager object', () => {
    const manager = new Manager('dave', 123, 'dave@gmail.com');
    expect(typeof(manager)).toBe('object');
});

test('can create a new Manager name', () => {
    const manager = new Manager('dave');
    expect(manager.getName()).toBe('dave');
});

test('can create a new Manager id', () => {
    const manager = new Manager('dave', 100);
    expect(manager.getId()).toBe(100);
});

test('can create a new Manager email', () => {
    const manager = new Manager('dave', 100, 'dave@gmail.com');
    expect(manager.getEmail()).toBe('dave@gmail.com');
});

test('can get role', () => {
    const manager = new Manager('Manager');
    expect(manager.getRole()).toBe('Manager');
});


