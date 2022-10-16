/** In navigator */

console.log(window);    
// Window {window: Window, self: Window, document: document, …}
console.log(self);      
// Window {window: Window, self: Window, document: document, …}
console.log(frames);    
// Window {window: Window, self: Window, document: document, …}
console.log(this);      
// Window {window: Window, self: Window, document: document, …}

/** In Node.js */

console.log(window);    
// window is not defined

console.log(globalThis);
// Object [global] {
//     global: [Circular],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function]
//     },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(nodejs.util.promisify.custom)]: [Function]
//     }
//   }