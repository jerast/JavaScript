/** 
 * Las variables con 'Function Scope' definidas 
 * solo pueden ser llamadas dentro de la misma función
 * donde son declaradas, y dentro de sus funciones anidadas.
*/

function func() { // <== function scope
    if (true) { // <== block scope
        var a = 'a';
        let b = 'b';
        const c = 'c';
    }

    console.log(a); // a
    console.log(b); // not defined
    console.log(c); // not defined
}
func();

/***************************/

function func() { // <== function scope
    if (true) { // <== block scope
        var a = 'a';
        let b = 'b';
        const c = 'c';

        console.log(b); // b
        console.log(c); // c
    }

    console.log(a); // a
}
func();