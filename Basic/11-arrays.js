/** More info.

 *  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
 *  https://devdocs.io/javascript-array/
 */

var frutas = ['Manzana', 'Pera', 'Plátano', 'Cereza', 'Pera'];
var numeros = [4, 2, 6, 2, 4, 8, 8];

frutas.length // 5
frutas[0] // 'Manzana'
frutas.at(-1) // 'Pera'
frutas.indexOf('Cereza') // 3
frutas.filter(item => item == 'Pera') // ['Pera', 'Pera']
frutas.find(item => item == 'Plátano') // 'Plátano'
frutas.some(item => item == 'Pera') // true
numeros.map(item => item * 3) // [12, 6, 18, 6, 12, 24, 24]
noRepetidos = [... new Set(numeros)]; // [4, 2, 6, 8]

frutas.push('Uvas') // ['Manzana', 'Pera', 'Plátano', 'Cereza', 'Pera', 'Uvas']
frutas.unshift('Naranjas') // ['Naranjas', 'Manzana', 'Pera', 'Plátano', 'Cereza', 'Pera']
frutas.pop() // ['Manzana', 'Pera', 'Plátano', 'Cereza']
frutas.shift() // ['Pera', 'Plátano', 'Cereza', 'Pera']

var array_1 = [1,2,3,4];
array_1.splice(-1,1)  // returned --> [4]      array_1 = [1,2,3]
array_1.slice(0,-1);  // returned --> [1,2,3]  array_2 = [1,2,3,4]
array_1.pop();        // returned --> 4        array_3 = [1,2,3]
array_1.shift();      // returned --> 1        array_4 = [2,3,4]


var articles = [
    { name: "Cicle",      cost: 3000  },
    { name: "TV",         cost: 2500  },
    { name: "Book",       cost: 320   },
    { name: "Smartphone", cost: 10000 },
    { name: "Laptop",     cost: 20000 },
    { name: "Keyboard",   cost: 500   },
    { name: "Headphones", cost: 1700  },
]

var filter_articles = articles.filter((item) => {
    return item.cost <= 500;
});
// 0: {name: 'Book', cost: 320}
// 1: {name: 'Keyboard', cost: 500}

var map_articles = articles.map((item) => {
    return item.name;
});
// ['Cicle', 'TV', 'Book', 'Smartphone', 'Laptop', 'Keyboard', 'Headphones']

var find_articles = articles.find((item) => {
    return item.name === "Laptop";
});
// { cost: 20000, name: 'Laptop'}

var foreach_articles = articles.forEach((item) => {
    console.log(item.name);
});
// Cicle
// TV
// Book
// Smartphone
// Laptop
// Keyboard
// Headphones

var some_articles = articles.some((item) => {
    return item.cost <= 700;
});
// true

var every_articles = articles.every(item => {
    return item.cost <= 700;
})
// false