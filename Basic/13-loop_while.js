var students = ['Mary', 'Sergio', 'Rose', 'Daniel'];

while (students.length > 0) {
    console.log(students);
    var student = students.shift();
    console.log(`Hola, ${student}`);
}

// ['Mary', 'Sergio', 'Rose', 'Daniel']
// Hola, Mary

// ['Sergio', 'Rose', 'Daniel']
// Hola, Sergio

// ['Rose', 'Daniel']
// Hola, Rose

// ['Daniel']
// Hola, Daniel