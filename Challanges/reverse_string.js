const string = "This is a string";

// method 1
const reverse_for = string => {
    let reversed = "";
    for (let i = 0; i > -string.length; i--) {
        reversed += string.at((i) - 1);
    }
    console.log(reversed);
};
reverse_for(string);


// method 2
const reverse_split = string => {
    const reversed = string.split("").reverse().join("");
    console.log(reversed);
};
reverse_split(string);