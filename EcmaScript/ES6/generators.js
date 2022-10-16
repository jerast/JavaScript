function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const genHello = helloWorld();
console.log(genHello.next().value);
console.log(genHello.next().value);
console.log(genHello.next().value);

/** 
 *  En JavaScript, un generator es una función que puede ser detenida 
 *  en medio de su ejecución y retomada más adelante desde el mismo punto 
 *  en el que se detuvo. Esto es posible gracias a la palabra clave yield. 
 * 
 *  Normalmente, cuando se ejecuta una función, esta ejecuta todas sus instrucciones 
 *  y luego regresa el control al contexto del llamado. 
 *  Sin embargo, cuando una función contiene una declaración yield, 
 *  esta pausa su ejecución y devuelve el control al contexto del llamado. 
 *  La siguiente vez que la función es llamada, continúa su ejecución desde 
 *  el punto en el que se detuvo la última vez.
 */