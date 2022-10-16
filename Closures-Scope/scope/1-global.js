/** 
 * Las variables con 'Global Scope' definidas al inicio 
 * del código podrán ser llamadas en 
 * cualquier parte del mismo.
*/


var a = 'a';
let b = 'b';
const c = 'c';

function func() { // <== function scope
    console.log(a);
    console.log(b);
    console.log(c);

    if (true) { // <== block scope
        console.log(a);
        console.log(b);
        console.log(c);
    }

    (() => { // <== anidate function scope
        console.log(a);
        console.log(b);
        console.log(c);
    })();
}

console.log(a); // 'a'
console.log(b); // 'b'
console.log(c); // 'c'

func();