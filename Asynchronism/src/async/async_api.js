import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const getData = async (urlApi) => {
     const response = fetch(urlApi);
     const data = (await response).json();
     return data;
}

const getProducts = async () => {
     try {
          const products = await getData(`${API}/products`);
          const product = await getData(`${API}/products/${products[0].id}`);
          const category = await getData( `${API}/categories/${product.category.id}`);

          console.log(products);
          console.log(product.title);
          console.log(category.name);
     } catch {
          console.error(error);
     }
}

getProducts();
