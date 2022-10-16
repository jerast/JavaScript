// function* gen() {
//      yield 1;
//      yield 2;
//      yield 3;
// }

// const g = gen();
// console.log(g.next().value); // 1
// console.log(g.next().value); // 2
// console.log(g.next().value); // 3

function* iterate(array) {
     for (let value of array) {
          yield value;
     }
}

const it = iterate(['Oscar', 'Anna', 'Maria', 'Juan']);
console.log(it.next().value); // Oscar
console.log(it.next().value); // Anna
console.log(it.next().value); // Maria
console.log(it.next().value); // Juan
console.log(it.next().value); // undefined