const names = [
    { name: 'José', age: 26 },
    { name: 'Fernando', age: 23 },
];

// es5
let listOfNames = names.map(function(item) {
    console.log(item.name); 
});

// es6
let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = name => { /* ... */ };

const square = num => num * num;

