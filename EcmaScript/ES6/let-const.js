{
    var nameVar1 = "soy var"
    let nameLet1 = "soy let"
}
    
console.log(nameVar1) // 'soy var'
console.log(nameLet1) // ReferenceError: nameLet is not defined


// Declaración de variables
var nameVar2 = "soy var";
let nameLet2 = "soy let";
const nameConst2 = "soy const";

// Re-declaración de variables
var nameVar2 = "var soy"; // 'var soy'
let nameLet2 = "let soy"; // SyntaxError: Identifier 'nameLet' has already been declared.
const nameConst2 = "const soy"; //SyntaxError: Identifier 'nameConst' has already been declared.