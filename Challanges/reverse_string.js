const string = "This is a string";

// method 1 - for method
const reverse_for = string => {
    let reversed = "";
    for (let i = 0; i > -string.length; i--) {
        reversed += string.at((i) - 1);
    }
    console.log(reversed);
};
reverse_for(string);


// method 2 - reverse-join method
const reverse_split = string => {
    const reversed = string.split("").reverse().join("");
    console.log(reversed);
};
reverse_split(string);


// method 3 - reverse-reduce method
const reverse_reduce = string => {
    const reversed = string.split("").reverse().reduce( (accum, curr) => accum + curr, '' );
    console.log(reversed);
};
reverse_reduce(string);