// script 1
((stop) => {
    let a = 0
    let b = 1;
    console.log(`${a}\n${b}`);
    while (a + b <= stop) {
        let c = a + b
        a = b; 
        b = c;
        console.log(`${c}`);
    }
    console.log(`${a + b} => Finished!`)
})(10000);


// script 2
((stop) => {
    let fib = [0, 1];
    while (fib.at(-1) + fib.at(-2) <= stop) {
        fib.push(fib.at(-1) + fib.at(-2));
    }
    fib.forEach(item => console.log(item));
    console.log(`${fib.at(-1) + fib.at(-2)} => Finished!`);
})(10000);