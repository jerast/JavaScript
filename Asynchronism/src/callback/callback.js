const sum1 = (a, b) => a + b;
const res1 = (a, b) => a - b;
const mul1 = (a, b) => a * b;
const div1 = (a, b) => a / b;

const calc3 = (a, b, operation) => operation(a, b); // function as parameter = callback

console.log(calc3(4, 5, sum1)); // 9


const greeting = name => console.log(`Hola ${name}`);
setTimeout(greeting, 2000, 'Joseph');

setTimeout(name => console.log(`Hola ${name}`) ,2000, 'Alexander');