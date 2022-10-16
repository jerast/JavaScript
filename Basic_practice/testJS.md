# Test de JavaScript

![](https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/240px-JavaScript-logo.png)

**Contenido**

[TOCM]

## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas:

* ¿Qué es una variable y para qué sirve?

> R: Un espacio en la memoria en la que podemos introducir valores. en JS hay tres tipos de variables. **var**, **let** y **const**.

* ¿Cuál es la diferencia entre declarar e inicializar una variable?

> R: Declarar es reservar un espacio en la memoria, dándole un nombre, mientras que inicializar es asignarle un valor inicial, un primer valor.

* ¿Cuál es la diferencia entre sumar números y concatenar strings?

> R: La diferencia radica en el resultado. Al "sumar" números se realiza una operación matemática, y el resultado es de tipo **Number**, pero al concatenar cadenas de texto se realiza una "unión" de las cadenas, el resultado arroja un valor **String**.

* ¿Cuál operador me permite sumar o concatenar?

> R: El operador de suma (+)

### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

* Nombre
* Apellido
* Nombre de usuario en Platzi
* Edad
* Correo electrónico
* Mayor de edad
* Dinero ahorrado
* Deudas

**Respuesta:**

| Nombre de dato              | Tipo de dato |
| :-------------------------- | :----------- |
| Nombre                      | *String*     |
| Apellido                    | *String*     |
| Nombre de usuario en Platzi | *String*     |
| Edad                        | *Number*     |
| Correo electrónico          | *String*     |
| Mayor de edad               | *Boolean*    |
| Dinero ahorrado             | *Number*     |
| Deudas                      | *Number*     |

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior.

```JavaScript
let user_name = "Jose";
let user_surname = "Romero";
let user_username = "Jerast";
let user_age = 26;
let user_email = "jose.romero.9602@outlook.com";
let user_adult = true;
let user_savedMoney = 65000;
let user_debts = 45000;
```

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior: 

* Nombre completo (nombre y apellido)

```JavaScript
let user_name = "Jose";
let user_surname = "Romero";
let user_fullname = `${user_name} ${user_surname}`;

console.log(`Mi nombre es ${user_fullname}`);
```
> Output: "Mi nombre es Jose Romero"

* Dinero real (dinero ahorrado menos deudas)

```JavaScript
let user_savedMoney = 65000;
let user_debts = 45000;
let user_money = user_savedMoney - user_debts;

console.log(`Tienes actualmente $${user_money}`);
```
> Output: "Tienes actualmente $20000"


## Funciones

### 1️⃣ Responde las siguientes preguntas:

* ¿Qué es una función?

> R: Es un bloque de código, que me permite llevar a cabo una tarea específica.

* ¿Cuándo me sirve usar una función en mi código?

> R: Cuando tengo que ejecutar una tarea varias veces. Para no copiar el código de la acción varias veces "redundando", se crea una función que contenga la acción en concreto, y se invoca las veces que sea necesarias.

* ¿Cuál es la diferencia entre parámetros y argumentos de una función?

> R: Los parámetros son los valores que una función espera recibir cuando sea llamada, mientras que los argumentos son los valores que se otorgan en el llamado de dicha función. Por ejemplo:

```JavaScript
function greetings (param) { // Parámetro 'param' que la función espera recibir.
     // ...
}

greetings(argum); // Argumento 'argum' que será asignado al paramentro 'param'
```

### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:


```JavaScript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

**Respuesta:**

```JavaScript
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = `${name} ${lastname}`;
const nickname = "juandc";

const greetings = (fullname, username) => {
     return console.log(`Mi nombre es ${fullname}, pero prefiero que me digas ${username}.`);
}

greetings(completeName, nickname);
```
> Output: "Mi nombre es Juan David Castro Gallego, pero prefiero que me digas juandc"


## Condicionales

### 1️⃣ Responde las siguientes preguntas:

* ¿Qué es un condicional?

> R: Es un segmento de control que me permite cambiar el flujo de ejecución de un código, si una condición se cumple (true) o no (false).

* ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?

> + if
>    - else
>    - else if 
> + switch
> + ternary operator (?)

* ¿Puedo combinar funciones y condicionales?

> R: Sí, se pueden usar funciones dentro de condicionales, y viceversa.

### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```JavaScript
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

**Respuesta:**

```JavaScript
const subscriptionType = "Basic";

if (subscriptionType === "Free")
     console.log("Solo puedes tomar los cursos gratis");
if (subscriptionType === "Basic")
     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
if (subscriptionType === "Expert")
     console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
if (subscriptionType === "ExpertPlus")
     console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
```
> Output: "Puedes tomar casi todos los cursos de Platzi durante un mes"

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

*"Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏"*

```JavaScript
mySub = "Expert";

const subscriptionType = [
     "Free",
     "Basic",
     "Expert",
     "ExpertDuo"
]
const subscriptionInfo = [
     "Solo puedes tomar los cursos gratis", 
     "Puedes tomar casi todos los cursos de Platzi durante un mes",
     "Puedes tomar casi todos los cursos de Platzi durante un año", 
     "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
]

subscriptionType[mySub]
     ? console.log( subscriptionInfo[subscriptionType.indexOf(mySub)] ) 
     : console.warn("Platzi no posee este plan");
```

```JavaScript
const subscriptions = {
     Free: "Solo puedes tomar los cursos gratis",
     Basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
     Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
     Expertduo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
}

subscriptions[mySub]
     ? console.log( subscriptions[mySub] ) 
     : console.warn("Platzi no posee este plan");
```
> Output: "Puedes tomar casi todos los cursos de Platzi durante un año"

## Ciclos

### 1️⃣ Responde las siguientes preguntas:

* ¿Qué es un ciclo?

> R: Un ciclo es una estructura de control que permite repetir un bloque de código una o más veces.

* ¿Qué tipos de ciclos existen en JavaScript?

> + for
>    - for-in
>    - for-of
>    - for-each
> + while
>    - do / while

* ¿Qué es un ciclo infinito y por qué es un problema?

> R: Un ciclo infinito es un ciclo donde su condición para finalizar nunca se cumple, por ende, se repite sin parar. Por ejemplo:

```JavaScript
for (let i = 0; i < i + 1; i++) {
     // ...
}
```
> En este código, la variable i se incrementará continuamente, lo que significa que el bucle nunca se detendrá.

> Al no tener fin, poco a poco consumirá todos los recursos que tiene el computador para poder cumplir las repeticiones, haciendo el navegador se bloquee y deje de responder.

* ¿Puedo mezclar ciclos y condicionales?

> R: Sí, puedo evaluar una condición para que inicie (o no) un ciclo, así como iniciar un ciclo que evalue una condición repetidas veces.

### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```Javascript
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
```

**Respuesta:**


```Javascript
let i = 0;
while (i < 5) {
     console.log("El valor de i es: " + i);
     i++;
}
```
> Output:
>
> El valor de i es: 0
> El valor de i es: 1
> El valor de i es: 2
> El valor de i es: 3
> El valor de i es: 4


```JavaScript
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

**Respuesta:**


```Javascript
let i = 10;
while (i >= 2) {
     console.log("El valor de i es: " + i);
     i--;
}
```
> Output:
>
> El valor de i es: 10
> El valor de i es: 9
> El valor de i es: 8
> El valor de i es: 7
> El valor de i es: 6
> El valor de i es: 5
> El valor de i es: 4
> El valor de i es: 3
> El valor de i es: 2


### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

*"Pista: puedes usar la función prompt de JavaScript."*

```JavaScript
do {
     answer = Number(prompt("¿Cuánto es 2 + 2?"));
} while (answer !== 4)
```

## Listas

### 1️⃣ Responde las siguientes preguntas:

* ¿Qué es un array?

> R: Es un tipo de estructura de datos, que permite almacenar varios elementos con en una sola variable. Para acceder a los elementos en su interior se utiliza el índice o posición del elemento.

* ¿Qué es un objeto?

> R: Es un tipo de estructura de datos, es similar al array pero se compone de claves y valores. Los elementos se guardan como valores, y para acceder a estos se utiliza la clave del elemento.

* ¿Cuándo es mejor usar objetos o arrays?

> R: Depende según la situación, Los objetos suelen ser mejores cuando se necesita almacenar datos de una manera estructurada y ordenada. Los arrays son mejores cuando se necesita una lista de datos sin un orden específico y fácil de recorrer.

* ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?

> R: Sí, se puede tener un array con varios objetos en su interior para recorrerlos, así como tener un objeto que posea arrays, asignados a claves.

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```JavaScript
let array = [5, 71, 3, 46, 13];

const printFirstElement = arr => console.log(arr[0]);
printFirstElement();
```
> Output: 5

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```JavaScript
let array = [5, 71, 3, 46, 13];

const printItemByItem = arr => {
     arr.forEach(item => console.log(item));
}
printItemByItem(array);
```
> Output:
>
> 5
> 71
> 3
> 46
> 13


### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```JavaScript
let user = {
     name: "Jose Romero",
     age: 26,
     nick: "Jerast",
};

for (key in user) {
     console.log(`${key}: ${user[key]}`);
}
```
> Output:
>
> name: Jose Romero
> age: 26 
> nick: Jerast

## End