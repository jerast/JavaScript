const myGlobal = 0;

function funct() {
    const number = 1;
    console.log(myGlobal);

    function parent() { // internal function
        const inner = 2;
        console.log(number, myGlobal);
        
        function child() {
            console.log(inner, number, myGlobal);
        }

        return child();
    }

    return parent();
}

funct();