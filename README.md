# js-basico 🤓
Javascript Basic Reference Blog - Referencia rápida de Javascript | Notas personales del Curso de platzi.com | Versión: Desarrollo (20200401)

## Contenido
* [Qué es Javascript?.](https://github.com/ldmaroto/js-basico#qu%C3%A9-es-javascript)
* [Porqué estudiar Javascript?.](https://github.com/ldmaroto/js-basico#porqu%C3%A9-estudiar-javascript)
* [Elementos de programación.](https://github.com/ldmaroto/js-basico#elementos-de-programaci%C3%B3n)
* [Variables.](https://github.com/ldmaroto/js-basico#variables)
* [Funciones.](https://github.com/ldmaroto/js-basico#funciones)
* [Scope.](https://github.com/ldmaroto/js-basico#scope)
* [Hoisting.](https://github.com/ldmaroto/js-basico#hoisting)
* [Coerción.](https://github.com/ldmaroto/js-basico#coerci%C3%B3n)
* [Falso y verdadero.](https://github.com/ldmaroto/js-basico#falso-y-verdadero)
* [Operadores.](https://github.com/ldmaroto/js-basico#operadores)
* [Condicionales.](https://github.com/ldmaroto/js-basico#condicionales)
* [Switch.](https://github.com/ldmaroto/js-basico#switch)
* [Arreglos.](https://github.com/ldmaroto/js-basico#arreglos)
* [Loops: For y For...of](https://github.com/ldmaroto/js-basico#loops-for-y-forof)
* [Loops: While](https://github.com/ldmaroto/js-basico#loops-while)
* [Objetos.](https://github.com/ldmaroto/js-basico#objetos)
* [Función Constructor.](https://github.com/ldmaroto/js-basico#funci%C3%B3n-constructor)
* [Recorrido de Arreglos 1.](https://github.com/ldmaroto/js-basico#recorrido-de-arreglos-1)
* [Recorrido de Arreglos 2.](https://github.com/ldmaroto/js-basico#recorrido-de-arreglos-2)

## Qué es Javascript?.
Es un lenguaje que nace en la WEB, ante la necesidad de generar dinamismo, interacción con el usuario. Es un lenguaje orientado a generar páginas interactivas que más tarde se convierten en apliaciones WEB.
Como lenguaje es: interpretado, orientado a objetos, débilmente tipado y dinámico. <p></p>
[:back:](https://github.com/ldmaroto/js-basico#contenido)

### Lenguajes Backwards y Forwards
Un lenguaje forward es aquel que es compatible con versiones futuras, es decir que incluye una adición al lenguaje en un programa y no causaría que se rompa si se ejecua en un motor de JS anterior.
JS no es compatible con versiones futuras. Si tiene un codigo de JS, que no es compatible en los nuevos motores de JS, se puede usar herramientas como "Babel JS Compilator". <p></p>
[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Porqué estudiar Javascript?
Tiene una comunidad muy grande que te puede ayudar a desarrollar diferentes cosas como: aplicaciones Web, aplicaciones nativas, aplicaciones para escritorio, productos Back-end / IOT. <p></p>
[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Elementos de programación
Tenemos dos componentes pricipales: 

1. datos o valores que guardamos en memoria.
2. tareas (funciones), que utilizará los datos. 

Los tipos de valores que veremos en Javascript son:

* tipo "number": 40 
* de tipo "string": "Diego de la Vega" 
* de tipo "boolean": TRUE | FALSE
* de tipo "null": NULL
* de tipo "undefined": UNDEFINED (el cual es un tipo primitivo en Javascript)
* de tipo "object": [1,2,3] | {nombre: "Diego"}

<p></p>

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Variables
Es la representación de algun lugar en memoria, donde vamos a guardar un valor.
En Javascript, "var" es una palabra reservada para guardar un valor en memoria. El ";" nos permite indicar que termina una sentencia. Las variales tienen dos estados: declarado e inicializado.
[Ver: Ejemplo de Variables.](https://github.com/ldmaroto/js-basico/blob/master/exercises/variables.js)

``` javascript
var nombre = "Diego"; // valor declarado e iniciado.
var apellido; // valor solo declarado.
apellido = "Perez"; // valor solo iniciado.
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Funciones
Las funciones son un conjunto de sentencias, que utilizamos para realizar acciones con valores que guardamos en las variables. Funciones son como procedimientos o tares.
[Ver: Ejemplo de Funciones.](https://github.com/ldmaroto/js-basico/blob/master/exercises/funciones.js)

### Llamando una función
Para llamar una función, se coloca el bombre de la función, seguido de "()". El "()" le dice a JS que hay mismo se llama la función. Dentro de "()", se indican los parámetros.
function() es una función anónima porque no tiene nombre.

```javascript
miFuncion1(); // El "()" invoca a la función.
miFuncion2();
miFuncion3(1,2);
```

### Tipos de funciones
**Funciones Declarativas:** Son las funciones donde utilizamos la palabra reservada "function" al inicio para poder declarar la función.

```javascript
function saludar(nombre) {
	console.log(`Hola ${nombre}`);
}
saludar('Diego');
```

**Expresión de función:** Donde la declaración se inicia con la palabra reservada var, y se generará una variable que guardará un función anónima.

```javascript
var saludar = function(nombre){
    console.log(`Hola ${nombre}`)
}

saludar(‘Diego’);
```

**Expresión de función con parámetros:** Similar al caso anterior, pero con parámetros.

```javascript
var miFuncion = function(a,b){
    return a + b;
}
```

**Diferencias entre Funciones Declarativas y de Expresión:** A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

<p></p>

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Scope
En JS, hay dos tipos de Scope: 
* Scope Global.
* Scope Local.

El Scope define la visibilidad de estas variables. Variables definidas dentro de una función no son visibles desde fuera de la misma.
[Ver: Ejemplo de Scope.](https://github.com/ldmaroto/js-basico/blob/master/exercises/scope.js)

````javascript
var nombre = "Diego"; // Variable en el Scope Global

console.log(fun(nombre));

function fun(){
    var apellido = "De Granda";  // Variable en el Scope Local
    return nombre + " " + apellido;
````

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Hoisting
Es cuando las variales y las funciones se declaran antes que se procese cualquier tipo de código.
Sucede en ECMAScrip 5 para abajo, y en ECMAScrip 6 en adelante, el Hoisting ya no sucede, solo ocurren con dos palabras claves: VAR y FUNCTION.
En ECMAScrip 6 presentan dos nuevas palabras: LET y CONST, las cuales no tendrán ningun tipo de Hoisting.
[Ver: Ejemplo de Hoisting.](https://github.com/ldmaroto/js-basico/blob/master/exercises/hoisting.js)

<p></p>

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Coerción
Hay dos tipos de coerciones: implicitas y explicitas.
[Ver: Ejemplo de Coerción.](https://github.com/ldmaroto/js-basico/blob/master/exercises/coercion.js)

```javascript
// Ejemplo de coerción Implícita
var a = 4 + "7"
console.log(a + " --> " + typeof(a)); // Lo que ocurre es una concatenación.

var b = 4 * "7"
console.log(b + " --> " + typeof(b)); // Lo que ocurre es una multiplicación.

 
// Ejemplo de coerción Explícita
var n1 = 20; // número
var s1 = n1 + "" // cadena

var s2 = String(n1); // cadena
console.log(s2 + " --> " + typeof(s2)); // Coerción explicita.

var n2 = Number(s1); // número
console.log(n2 + " --> " + typeof(n2)); // Coerción explicita.
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Falso y verdadero
[Ver: Ejemplo de Falso y verdadero.](https://github.com/ldmaroto/js-basico/blob/master/exercises/truthyfalsy.js)

```javascript
// Valores verdaderos
var t1 = Boolean(".");
var t2 = Boolean(" ");
var t3 = Boolean(1);
var t4 = Boolean([]);
var t5 = Boolean({});
var t6 = Boolean(function(){});
var t7 = Boolean(true);
```

```javascript
// Valores falsos
var f1 = Boolean();
var f2 = Boolean(0);
var f3 = Boolean(null);
var f4 = Boolean(NaN);
var f5 = Boolean(undefined);
var f6 = Boolean(false)
var f7 = Boolean("");
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Operadores
[Ver: Ejemplo de Operadores.](https://github.com/ldmaroto/js-basico/blob/master/exercises/operadores.js)

### Operadores de operaciones matemáticas (operadores binarios).

```javascript
console.log(3 + 2); // Suma.
console.log(50 - 10); // Resta.
console.log(10 * 20); // Multiplicación.
console.log(20 / 2); // División.
console.log("Diego" + " de la Vega"); // Concatenación.
```

### Operadores lógicos.
```javascript
console.log(!false); // Negación (operador unitario)
console.log(!-3); // Negación (ver ejemplos de Truely & Falty)
```

### Operadores de asignación.

```javascript
var a = true; 
var b = false;
```

### Operadores de comparación.

```javascript
console.log(Boolean(3=="3")); // == significa comparación.
console.log(Boolean(3==="3")); // === significa comparación estrictamente igual.
console.log(5<3); // Caso de menor que.
console.log(5>3); // Caso de mayor que.
console.log(5<=6); // Caso de menor o iqual que.
console.log(5>=6); // Caso de menor o iqual que.
console.log(Boolean(a&&b)); // && significa "Y"
console.log(Boolean(a||b)); // || significa "O"
```

### Operadores incrementales.

```javascript
var edad = 40;
edad++; // ++ incrementa en una unidad.
console.log(edad); 

var edad = 40;
edad+=5; // += incrementa en tantas unidades.
console.log(edad); 
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Condicionales
Las condicionales son reglas, para poder validar si algo es verdadero o falso, y generar ciertas acciones.
[Ver: Ejemplo de condicionales.](https://github.com/ldmaroto/js-basico/blob/master/exercises/if.js)

```javascript
// Ejemplo 1

var prueba1 = true;

if(prueba1){
    console.log("Soy verdadero.");
} else {
    console.log("Soy falso.")
}
```

``` javascript
// Ejemplo 2

var edad = 18;

if(edad===18){
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18){
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aun no puedes votar.")
}
```

```javascript
// Ejemplo 3: Operador ternario
// <condición> ? <verdadero> : <falso>

var numero = 1;
var resultado = numero === 1 ? "Sí soy un Uno" : "No, no soy uno";
console.log(resultado);
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Switch
[Ver: Ejemplo de Switch.](https://github.com/ldmaroto/js-basico/blob/master/exercises/switch.js)

```javascript
var numero = 11;

switch (numero) {
    case 1:
        console.log("Soy uno!!!");
        break;
    case 10:
        console.log("Soy un 10!!!");
        break;
    case 100:
        console.log("Soy un 100!!!");
        break;
    default:
        console.log("No soy nada");
}
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Arreglos
Un arreglo o un array, es una estructura de datos que se almacena bajo el mismo nombre a una colección de datos. Conoceremos los metodos que nos ayudan a mutar a un arreglo:
* Metodo Push : Nos permite agregar un elemento en la última posición.
* Metodo Pop : Nos permite eliminar el último elemento de un array.
* Metodo Unshift : Nos permite agregar un elemento en la primera posición.
* Metodo Shift : Nos permite eliminar el primer elemento de un array.
* Metodo indexOf : Nos permite saber la posición de un elemento.
[Ver: Ejemplos de Arreglos](https://github.com/ldmaroto/js-basico/blob/master/exercises/arrays.js)

```javascript
// Ejemplo de arreglo
var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
console.log(frutas);
console.log("El Array Frutas tiene: " + frutas.length + " elementos.");
```

```javascript
// Metodo Push : Nos permite agregar un elemento en la última posición.
var masFrutas = frutas.push("Uvas");
console.log(frutas);
```

```javascript
// Metodo Pop : Nos permite eliminar el último elemento de un array.
var ultimo = frutas.pop();
console.log(frutas);
```

```javascript
// Metodo Unshift : Nos permite agregar un elemento en la primera posición.
var frutaEspecial = frutas.unshift("Kiwi");
console.log(frutas);
```

```javascript
// Metodo Shift : Nos permite eliminar el primer elemento de un array.
var borraopcion = frutas.shift();
console.log(frutas);
```

```javascript
// Metodo indexOf : Nos permite saber la posición de un elemento.
var posicion = frutas.indexOf("Cereza");
console.log("La Cereza está en la posición: " + posicion);
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Loops: For y For...of
[Ver: Ejemplo de Loops For y For..of](https://github.com/ldmaroto/js-basico/blob/master/exercises/loops.js)

```javascript
// Ejemplo del loop: FOR

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`)
}

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}
```

```javascript
// Ejemplo de loop: FOR...of

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`)
}

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Loops: While
[Ver: Ejemplo de Loop While.](https://github.com/ldmaroto/js-basico/blob/master/exercises/while.js)

```javascript
//Ejemplo de Loop: While

var estudiantes = ["Maria", "Segio", "Diana", "Rosa"]

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Objetos.
[Ver: Ejemplo de Objetos.](https://github.com/ldmaroto/js-basico/blob/master/exercises/objetos.js)

```javascript
// Ejemplo de definición de un objeto

var miAuto = {
    marca: "Toyota",
    modelo: "Corrolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

console.log(miAuto); // Presentando un objeto
console.log(miAuto.marca); // Presentando el valor del atributo Marca.

miAuto.detalleDelAuto(); // Llamando un método de un objeto.
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Función Constructor.
Una forma de automatizar la creación de objetos, es mediante una funcción constructora, en donde vamos hacer una plantilla de un objeto, con ciertas opciones que seran sus parámetros y sus propiedades.
[Ver: Ejemplo de Constructor #1.](https://github.com/ldmaroto/js-basico/blob/master/exercises/constructor.js)

```javascript
// Definiendo una función constructor.

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Haciendo un objeto nuevo en relación con la función constructor. La palabra
// "new" va a generar una nueva instancia de nuestra función constructor.
// Una instancia es un objeto que deriva de otro objeto.

var carroNuevo = new auto("Tesla", "Model 3", 2020);
var carroNuevo2 = new auto("Tesla", "Model X", 2018);
var carroNuevo3 = new auto("Toyota", "Corola", 2020);

console.log(carroNuevo);
console.log(carroNuevo2);
console.log(carroNuevo3);
```

[Ver: Ejemplo de Constructor #2.](https://github.com/ldmaroto/js-basico/blob/master/exercises/constructor-2.js)

```javascript
// Definiendo una función constructor mediante una Clase.

class auto {
    constructor(marca, modelo, annio) {
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
    }
}

// Haciendo un objeto nuevo en relación con la función constructor. La palabra
// "new" va a generar una nueva instancia de nuestra función constructor.
// Una instancia es un objeto que deriva de otro objeto.

var carroNuevo = new auto("Tesla", "Model 3", 2020);
var carroNuevo2 = new auto("Tesla", "Model X", 2018);
var carroNuevo3 = new auto("Toyota", "Corola", 2020);

console.log(carroNuevo);
console.log(carroNuevo2);
console.log(carroNuevo3);
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Recorrido de Arreglos 1.
[Ver: Ejemplo de recorrido de arreglo #1.](https://github.com/ldmaroto/js-basico/blob/master/exercises/runarray1.js)

```javascript
// Creando una objeto llamado "articulos".

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 250},
    { nombre: "Audifono", costo: 1700}
]

// Utilizando el método: "filter"

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

console.log(articulosFiltrados);
```

```javascript
// Creando una objeto llamado "articulos".

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 250},
    { nombre: "Audifono", costo: 1700}
]

//Utilizando el método: "map"

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)

## Recorrido de Arreglos 2.
[Ver: Ejemplo de recorrido de arreglo #2.](https://github.com/ldmaroto/js-basico/blob/master/exercises/runarray2.js)

```javascript
// Creando una objeto llamado "articulos".

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 250},
    { nombre: "Audifono", costo: 1700}
]

// Utilizando el método: "find" 

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);
```

```javascript
// Creando una objeto llamado "articulos".

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 250},
    { nombre: "Audifono", costo: 1700}
]

// Utilizando el método: "find" 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})
```

```javascript
// Creando una objeto llamado "articulos".

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 250},
    { nombre: "Audifono", costo: 1700}
]

// Utilizando el método: "some"

var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articuloBaratos);
```

[:back:](https://github.com/ldmaroto/js-basico#contenido)
