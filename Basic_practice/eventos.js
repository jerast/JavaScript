const funcion = () => { /* ... code ... */ }

ITEM.addEventListener('click' , funcion);
ITEM.onclick = funcion;

ITEM.addEventListener('click' , () => { /* ... code ... */ });
ITEM.onclick = () => { /* ... code ... */ };

ITEM.addEventListener('keydown', event => console.log(event.key));
ITEM.onkeydown = (event) => console.log(event.key);