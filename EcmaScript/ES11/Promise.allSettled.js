const promise1 = new Promise((resolve, reject) => reject('rejected 1'));
const promise2 = new Promise((resolve, reject) => resolve('resolved 2'));
const promise3 = new Promise((resolve, reject) => resolve('resolved 3'));

let promises = [promise1, promise2, promise3]


Promise.all(promises)
    .then(response => console.log(response));
// rejected 1
// error : Unhandled promise rejection. 


Promise.allSettled(promises)
    .then(response => console.log(response));
// [
//     { status: 'rejected', reason: 'rejected 1' },
//     { status: 'fulfilled', value: 'resolved 2' },
//     { status: 'fulfilled', value: 'resolved 3' }
// ]