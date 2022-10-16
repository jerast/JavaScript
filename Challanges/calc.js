
// method 1 - arrow functions method
const sum = (a, b) => alert(a + b);
const res = (a, b) => alert(a - b);
const mul = (a, b) => alert(a * b);
const div = (a, b) => alert(a / b);

const calc = () => {
    a = parseInt( prompt("numero 1:") );
    b = parseInt( prompt("numero 2:") );
    op = prompt(`Qué operación desea hacer?\n1. Suma\n2. Resta\n3. Multiplicación\n4. División`);

    if (op < 1 || op > 4) {
        alert("error : No es una opción válida");
        return 'error';
    };

    if (op == 1) sum(a, b);
    if (op == 2) res(a, b);
    if (op == 3) mul(a, b);
    if (op == 4) div(a, b);
}
calc();


// method 2 - array manipulation method
const calc2 = (a = 6, b = 4, opt = '+') => {
    let options = ['+', '-', '*', '/', '%'];

    if ( typeof(a) != 'number' || typeof(b) != 'number' ) return 'error: números no válidos';
    if ( !options.some(op => op == opt) ) return `error : '${opt}' is not a valid option`;

    console.log(a, opt, b);

    if (options.indexOf(opt) == 0) return a + b;
    if (options.indexOf(opt) == 1) return a - b;
    if (options.indexOf(opt) == 2) return a * b;
    if (options.indexOf(opt) == 3) return a / b;
    if (options.indexOf(opt) == 4) return a % b;
};
console.log(calc2(9, 15, '%'));


// method 3 - callback method
const sum1 = (a, b) => a + b;
const res1 = (a, b) => a - b;
const mul1 = (a, b) => a * b;
const div1 = (a, b) => a / b;
const mod1 = (a, b) => a % b;
const calc3 = (a, b, operation) => operation(a, b); // function as parameter = callback
console.log(calc3(4, 5, mod1)); 