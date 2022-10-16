const string = 'hello';
// 'hello'.length = 5;

console.log(string.padStart(7, 'hi')); // hihello
// 'hi'.length = 2;
// 5 + 2 = 7

console.log(string.padEnd(10, '-----')); // hello-----
// '-----'.length = 5;
// 5 + 5 = 10