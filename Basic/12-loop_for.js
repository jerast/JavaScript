/**
 *  Los bucles pueden ejecutar un bloque de código varias veces. 
 * JavaScript admite diferentes tipos de bucles:
 * 
 *  1. for - recorre un bloque de código varias veces
 *  2. for/in - recorre las propiedades de un objeto
 *  3. for/of - recorre los valores de un objeto iterable
 *  4. while - recorre un bloque de código mientras se cumple una condición específica
 *  5. do/while - recorre un bloque de código mientras se cumple una condición específica
 */

var students = ['Mary', 'Sergio', 'Rose', 'Daniel']

for (let index = 0; index < students.length; index++) {
    console.log(`Hola, ${students[index]}`)
}

for (const student in students) {
    console.log(`Hola, ${student}`)
}

for (const student of students) {
    console.log(`Hola, ${student}`)
}

// Hola, Mary
// Hola, Sergio
// Hola, Rose
// Hola, Daniel