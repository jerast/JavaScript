/**
 *  - Elimina algunos errores silenciosos de JavaScript 
 *  cambiándolos para que lancen errores.
 * 
 *  - Corrige errores que hacen difícil para los motores 
 *  de JavaScript realizar optimizaciones: 
 *  a veces, el código en modo estricto puede correr 
 *  más rápido que un código idéntico pero no estricto.
 * 
 *  - Prohíbe cierta sintaxis que probablemente sea 
 *  definida en futuras versiones de ECMAScript.
 */

'use strict';

pi = 3.1416;
console.log(pi); // 'pi' is not defined

function strictFunc() {
    'use strict';
    return pi = 3.1416;
}
strictFunc() // 'pi' is not defined