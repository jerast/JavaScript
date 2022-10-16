/** Truthy y falsy son términos usados para describir si una declaración 
 *  es verdadera o falsa. En JavaScript, se considera verdadera una 
 *  declaración que evalúa a un valor que no es igual a false. 
 *  Se considera falsa una declaración que evalúa el valor false. */

/** En JavaScript, una expresión es considerada verdadera si su valor es: 

 * El valor `true`
 * Un número diferente de cero
 * Un objeto
 * Un array no vacío
 * A string (que no está vacía) */

Boolean(true) // true 
Boolean(1); // true
Boolean("a"); // true
Boolean([]); // true
Boolean({}); // true
Boolean(function(){}); // true
 
/** Por otro lado, una expresión es considerada falsa si su valor es:
 
 * El valor `false`
 * El valor `null`
 * El valor `undefined`
 * El valor `NaN`
 * Un string vacío
 * Un número igual que cero */

Boolean(false); //false
Boolean(null); //false
Boolean(undefined); //false
Boolean(""); //false
Boolean(0); //false
Boolean(NaN); //false
 
/** En JavaScript, las sentencias `if` y `else` solo pueden evaluar si una expresión es *verdadera* o *falsa*. */