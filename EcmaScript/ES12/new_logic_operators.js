/** 
 *  &&=     Asignación AND lógico
 *  ||=     Asignación OR lógico
 *  ??=     Asignación de anulación lógica
 */

let isTrue = true;
let isFalse = false;

console.log(isTrue &&= isFalse);
// false

console.log(isTrue ||= isFalse);
// false

console.log(isTrue ??= isFalse);
// false