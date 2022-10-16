/** 
 * Las variables con 'Function Scope' definidas 
 * solo pueden ser llamadas dentro de la misma función
 * donde son declaradas, y dentro de sus funciones anidadas.
*/


function func() { // <== function scope
    var a = 'a';
    let b = 'b';
    const c = 'c';

    if (true) { // <== block scope
        console.log(a); // a
        console.log(b); // b
        console.log(c); // c 
    }

    console.log(a); // a
    console.log(b); // b
    console.log(c); // c
}
func();

 // <== Global scope
console.log(a); // not defined
console.log(b); // not defined
console.log(c); // not defined