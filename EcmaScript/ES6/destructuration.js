let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX',
};

// es5
console.log( person.name, person.age);

// es6
let { name, country } = person;
console.log( name, country );

