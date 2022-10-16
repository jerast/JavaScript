// const promise = new Promise((resolve, reject) => {
//      resolve('Hey!');
// });

// promise
//     .then(response => console.log(response))
//     .catch(error => console.log(error));


const cows = 15;

const countCows = new Promise((resolve, reject) => {
     (cows > 10) 
          ? resolve(`We have ${cows} cows on the farm`)
          : reject(`There is no cows on the farm`);
})

countCows
     .then((response) => console.log(response))
     .catch((error) => console.log(error))
     .finally(() => console.log('Fin!'));