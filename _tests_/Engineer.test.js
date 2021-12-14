const Engineer = require('../lib/Engineer');

test('can create a new Engineer object', () => {
    const engineer = new Engineer('dave', 123, 'dave@gmail.com', 'Github');
    expect(typeof(engineer)).toBe('object');
    console.log(engineer);
});

test('can create a new Engineer name', () => {
    const engineer = new Engineer('dave');
    expect(engineer.getName()).toBe('dave');
});

test('can create a new Engineer id', () => {
    const engineer = new Engineer('dave', 100);
    expect(engineer.getId()).toBe(100);
});

test('can create a new Engineer email', () => {
    const engineer = new Engineer('dave', 100, 'dave@gmail.com', 'Github');
    expect(engineer.getEmail()).toBe('dave@gmail.com');
});

test('can get role', () => {
    const engineer = new Engineer('Engineer');
    expect(engineer.getRole()).toBe('Engineer');
});

