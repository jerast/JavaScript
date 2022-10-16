const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replaced1 = string.replace("JavaScript", "Python");
const replaced2 = string.replaceAll("JavaScript", "Python");

console.log(replaced1);
// "Python es maravilloso, con JavaScript puedo crear el futuro de la web."

console.log(replaced2);
// "Python es maravilloso, con Python puedo crear el futuro de la web."
