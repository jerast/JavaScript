function greetings() {
    let username = 'Joseph';

    function displayUserName() {
        return `Hola ${username}`;
    }

    return displayUserName;
}

const g = greetings();

console.log(g); // [Function: displayUserName]
console.log(g()); // Hola Joseph