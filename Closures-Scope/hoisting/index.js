// Hoisting de Variables

    console.log(x)
    var x = "hola";
    console.log(x)

    // --------------------

    var x; // undefined
    console.log(x);

    x = "hola"; // "Hola"
    console.log(x)


// Hoisting de funciones

    hello(); // "Hola"
    function hello() {
        console.log("Hola")
    }

    // --------------------

    function hello() {
        console.log("Hola")
    }
    hello(); // "Hola"

// Hoisting variable/funcion

    hello(); // "Hola undefined"
    var name = "pepe";
    function hello() {
        console.log(`Hola ${name}`)
    }

    // --------------------

    var name; // undefined
    function hello() {
        console.log(`Hola ${name}`) 
    }
    hello(); // "Hola undefined"
    name = "pepe";