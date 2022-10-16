/** Hoisting es el comportamiento de JavaScript de mover 
 *  todas las declaraciones de variables al comienzo de un ámbito. 
 *  Esto significa que puede usar una variable antes de que se haya declarado. */

 console.log(x); // undefined

 var x = 5;

 console.log(x); // 5

 /** También funciona con las functiones.
  *  En el momento de compilado, JavaScript mueve todas las functiones
  *  al principio del código. */

myFunction(); // "Hello world!"

function myFunction() {
  console.log("Hello world!");
}