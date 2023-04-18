// if-else anidated method
const op1 = "Piedra";
const op2 = "Papel";
const op3 = "Tijera";

const rps_ifElse = function (user, cpu) {
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
rps_ifElse(op1,op3);

// Switch method
const rps_switch = (option = Math.floor(Math.random() * 3)) => {
    const options = ['rock', 'paper', 'scissors'];
    const cpu = options[ Math.floor(Math.random() * 3) ];
    const user = options[option];

    console.log(`${user} - ${cpu}`);

    if ( user === cpu) {
        console.log("Empate");
        return;
    }
    switch (user | cpu) {
        case 'rock' | 'scissors':
            console.log("User Wins!");
            break;
        case 'paper' | 'rock':
            console.log("User Wins!");
            break;
        case 'scissors' | 'paper':
            console.log("User Wins!");
            break;
        default:
            console.log("CPU Wins!");
            break;
    }
}
console.log(rps_switch());

// Guard Clause method
const rps_guardClause = (option) => {
    const options = ['rock', 'paper', 'scissors'];
    const cpu = options[ Math.floor(Math.random() * 3) ];
    const user = options[ option || Math.floor(Math.random() * 3) ];

    console.log(`${user} - ${cpu}`);

    if ( user === cpu) return("Empate");

    if ( user == 'paper' && cpu == 'rock') return "User Wins!";
    if ( user == 'rock' && cpu == 'scissors') return "User Wins!";
    if ( user == 'scissors' && cpu == 'paper') return "User Wins!";
    
    return "CPU Wins!";
}
console.log(rps_guardClause());

// Understand JS Random Generating
const randomize = (limit = 3) => {
    const randomNum = Math.random();
    const multiplier = randomNum * limit;
    const floorer = Math.floor( multiplier );

    console.log(`Limit: ${ limit }`)
    console.log(`Random: ${ randomNum }`)
    console.log(`times: ${ multiplier }`)
    console.log(`floor: ${ floorer }`)
}
randomize();