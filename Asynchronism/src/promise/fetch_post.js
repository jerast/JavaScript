import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

// https://platzi.com/cursos/api/
// https://platzi.com/cursos/api-practico/
// https://platzi.com/cursos/api-profesional/

const postData = (urlApi, data) => {
     const response = fetch(urlApi, {
          method: 'POST',
          mode: 'cors',
          credentials: 'same-origin',
          headers: {
               'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
     });
     return response;
};

const data = {
     "title": "Jerast Sticker",
     "price": 3.5,
     "description": "An incredible sticker to paste in your books, laptop, notebooks. You can paste it anywhere!",
     "categoryId": 1,
     "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
     .then(response => response.json())
     .then(data => console.log(data));