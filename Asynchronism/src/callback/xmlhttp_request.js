const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; // llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1';


// funcion para obtener la información como objeto
const fetchData = (urlApi, callback) => { 

     // crear un objeto de tipo XMLHttpRequest
     let xhttp = new XMLHttpRequest(); 

     // .open : método de petición de apertura de la comunicación (metodo 'GET' o 'POST', enviamos la URL, si es asincrono 'true' o si no 'false', usuario, contraseña)
     xhttp.open('GET', urlApi, true); 

     // .onreadystatechange : método que ejecuta una función cuando el objeto XMLHttpRequest cambie de estado
     xhttp.onreadystatechange = (event) => {

          //el atributo readyState define el estado del objeto XMLHttpRequest
          //0 No inicializado
          //1 Loading
          //2 ejecutado
          //3 interactuando
          //4 completado
          if (xhttp.readyState === 4) { 

               //si la respuesta de la API es exitosa (200 Ok)
               if (xhttp.status === 200) {

                    // se ejecuta el callback, y transforma la respuesta de texto plano a objeto con formato JSON (DOMString)
                    callback(null, JSON.parse(xhttp.responseText))
               } else {

                    // crear un objeto de tipo Error para mostrar
                    const error = new Error(`Error ${urlApi}`);
     
                    // se ejecuta el callback con el error, y el null debido a que no se pudo obtener el objeto JSON
                    return callback(error, null);
               }
          // Si la respuesta de la API no es exitosa se captura el error
          } 
     }

     // .send : método para enviar la petición al servidor
     xhttp.send();
}

// llamado de la función fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
fetchData(`${API}/products`, (error1, data1) => {

     if (error1) return console.error(error1);
     fetchData(`${API}/products/${data1[0]?.id}`, (error2, data2) => {

          if (error2) return console.error(error2);
          fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {

               if (error3) return console.error(error3);
               console.log(data1[0]);
               console.log(data2.title);
               console.log(data3.name);
          });  
     });
});