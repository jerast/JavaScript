const obj = {
    name: 'José',
    age: 26,
    country: 'CO',
};

let { name, ...all } = obj;

console.log( name, all );
// José { age: 26, country: 'CO' }

console.log( all );
// { age: 26, country: 'CO' }
