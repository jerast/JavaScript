// es5
function func(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'CO';
    return name, age, country;
}

// es6
const newFunc = (name = 'Jose', age = 32, country = 'CO') => {
    console.log(name, age, country);
};