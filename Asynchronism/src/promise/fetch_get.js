import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// const getData = (urlApi) => {
//      return fetch(urlApi);
// };

// getData(`${API}/products`)
//      .then(response => response.json())
//      .then(products => {
//           console.log(products);
//           return getData(`${API}/products/${products[0]?.id}`)
//                .then(response => response.json())
//                .then(product => {
//                     console.log(product);
//                     return getData(`${API}/categories/${product?.category?.id}`)
//                          .then(response => response.json())
//                          .then(category => {
//                               return console.log(category.name);
//                          })
//                })
//      })
//      .catch(error => console.log(error))
//      .finally(() => console.log('Finally!'));

const getData = (urlApi, product_id) => {
     return fetch(`${urlApi}/${product_id}`);
};

getData(`${API}/products`, 219)
     .then(response => response.json())
     .then(product => console.log(product));