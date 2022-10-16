// cómo se programa
if (5 > 8) {
    
} else {
    
}

// cómo lo entiende el motor de JavaScript
if ((5 > 8) == true) {
    
} else {
    
}

/*******************************/

if (true){
    console.log(true)
} // true

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function (user, cpu) {
    if (user != cpu) {
        if (user === op1 && cpu === op3) {
            console.log("el usuario GANO con "+ op1);
        } else if (user === op2 && cpu === op1) {
            console.log( "el usuario GANO con " + op2);
        } else if (user === op3 && cpu === op2) {
            console.log("el usuario GANO con " + op3);
        } else {
            console.log("La CPU Gano!!");
        }
    } else if (user === cpu) {
        console.log("Empate");
    }
};

resultado(op1,op3); //el usuario GANO con Piedra


