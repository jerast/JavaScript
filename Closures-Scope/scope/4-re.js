/** 
 * Declaración:
 *      Reservar un espacio en memoria.
 * 
 * Re-declaración:
 *      Volver a declarar una variable existente.
 * 
 * Asignación:
 *      Darle un valor a un espacio de memoria reservado.
 * 
 * Re-asignación:
 *      Darle un nuevo valor a una variable.
 */


/** Var */

    var hello; // Undefined

    hello = 'Hola'; // 'Hola'

    hello = 'Hello'; // 'Hello'

    var hello; // 'Hello'

/** Let */

    let world; // Undefined

    world = 'Mundo'; // Mundo

    world = 'World' // World

    let world; // error : Identifier 'world' has already been declared

/** Const */

    const a; // error : Missing initializer in const declaration
    
    const b = "OMG!"; // 'OMG!'

    const b = "Friday"; // error : Identifier 'b' has already been declared

    b = "OMGOD!"; // error : Assignment to constant variable.


/** 
    var, es posible realizar solo una declaración, el valor de la variable será undefiend.
    var, es posible re-declarar y re-asignar valores.
    let, es posible re-asignar pero no re-declarar.
    const, no puedes re-asignar ni re-declarar tipos de datos primitivos.
    const, puedes re-asignar arreglos y objetos pero no re-declararlos.
    const, tampoco puedes solo declararla, necesita una asignación.
 */
    

    
