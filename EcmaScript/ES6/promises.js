const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('Hello'))
    .catch(error => console.log(error));