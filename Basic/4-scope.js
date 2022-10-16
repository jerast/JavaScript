/**
 * Scope en JavaScript se refiere a la visibilidad de variables y funciones. 
 * Las variables JavaScript son de dos tipos:

    1. variables globales
    2. variables locales

 * Las variables y los objetos definidos en el ámbito global se pueden acceder 
 * desde cualquier parte del código, pero las variables y los objetos definidos 
 * en el ámbito local solo se pueden acceder desde la función en la que se han definido.
 */

var x = 10; // x es una variable global

function myFunction() {
    var y = 5; // y es una variable local
}

function myOtherFunc() {
    console.log(x) // 10
    console.log(y) // undefined
}

console.log(x) // 10
console.log(y) // undefined