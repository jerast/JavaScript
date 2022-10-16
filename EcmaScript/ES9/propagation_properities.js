const obj1 = {
    name: 'José',
    age: 26,
};

const obj2 = {
    ...obj1,
    country: 'CO',
}

console.log(obj1);
// { name: 'José', age: 26 }

console.log(obj2);
// { name: 'José', age: 26, country: 'CO' }