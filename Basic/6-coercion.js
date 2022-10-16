/**  La coerción en JavaScript se refiere a la conversión de un valor 
 *   de un tipo de datos a otro. hay dos tipos de coerción: 
 * 
 *   1. Implicita
 *   2. Explicita 
 * 
 *   La coerción implicita se produce cuando se realiza una operación en valores de diferentes 
 *   tipos de datos, mientras que la coerción explicita es cuando se utilizan funciones de 
 *   coerción para convertir un valor a un tipo de datos específico. */

// Implícita

var x = 10;
var y = " foo";

console.log(x + y); // "10 foo"

// Explícita

var x = "10";
console.log(typeof x); // "string"

x = Number(x);
console.log(typeof x); // "number"
