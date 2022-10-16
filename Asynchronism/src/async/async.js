const func = () => {
     return new Promise((resolve, reject) => {
          (true) 
               ? setTimeout(() => resolve('Async!!'), 2000) // 3
               : reject(new Error('Failed!'));
     });
}

const anotherFunc = async () => {
     const some = await func();
     console.log(some); // 3
     console.log('Hello!'); // 4
}

console.log('Before'); // 1
anotherFunc();
console.log('After'); // 2