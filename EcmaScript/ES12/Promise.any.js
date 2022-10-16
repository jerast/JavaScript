const promise1 = new Promise((resolve, reject) => reject('rejected 1'));
const promise2 = new Promise((resolve, reject) => resolve('resolved 2'));
const promise3 = new Promise((resolve, reject) => resolve('resolved 3'));

let promises = [promise1, promise2, promise3]

Promise.any(promises)
    .then(response => console.log(response));
// resolved 2