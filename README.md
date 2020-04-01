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
* [Función Constructora.](https://github.com/ldmaroto/js-basico#funci%C3%B3n-constructora)
* [Recorrido de Arreglos 1.](https://github.com/ldmaroto/js-basico#recorrido-de-arreglos-1)
* [Recorrido de Arreglos 2.](https://github.com/ldmaroto/js-basico#recorrido-de-arreglos-2)

## Qué es Javascript?.
Es un lenguaje que nace en la WEB, ante la necesidad de generar dinamismo, interacción con el usuario. Es un lenguaje orientado a generar páginas interactivas que más tarde se convierten en apliaciones WEB.
Como lenguaje es: interpretado, orientado a objetos, débilmente tipado y dinámico. 
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

### Lenguajes Backwards y Forwards
Un lenguaje forward es aquel que es compatible con versiones futuras, es decir que incluye una adición al lenguaje en un programa y no causaría que se rompa si se ejecua en un motor de JS anterior.
JS no es compatible con versiones futuras. Si tiene un codigo de JS, que no es compatible en los nuevos motores de JS, se puede usar herramientas como "Babel JS Compilator".
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Porqué estudiar Javascript?
Tiene una comunidad muy grande que te puede ayudar a desarrollar diferentes cosas como: aplicaciones Web, aplicaciones nativas, aplicaciones para escritorio, productos Back-end / IOT.
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

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

<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Variables
Es la representación de algun lugar en memoria, donde vamos a guardar un valor.
En Javascript, "var" es una palabra reservada para guardar un valor en memoria. El ";" nos permite indicar que termina una sentencia. Las variales tienen dos estados: declarado e inicializado.
[Ver: Ejemplo de Variables.](https://github.com/ldmaroto/js-basico/blob/master/exercises/variables.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Funciones
Las funciones son un conjunto de sentencias, que utilizamos para realizar acciones con valores que guardamos en las variables. Funciones son como procedimientos o tares.
[Ver: Ejemplo de Funciones.](https://github.com/ldmaroto/js-basico/blob/master/exercises/funciones.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

### Llamando una función
Para llamar una función, se coloca el bombre de la función, seguido de "()". El "()" le dice a JS que hay mismo se llama la función. Dentro de "()", se indican los parámetros.
function() es una función anónima porque no tiene nombre.
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

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
var nombre = function(nombre){
    console.log(`Hola ${nombre}`)
}

nombre(‘Diego’);
```

**Diferencias entre Funciones Declarativas y de Expresión:** A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Scope
En JS, hay dos tipos de Scope: 
* Scope Global.
* Scope Local.

El Scope define la visibilidad de estas variables. Variables definidas dentro de una función no son visibles desde fuera de la misma.
[Ver: Ejemplo de Scope.](https://github.com/ldmaroto/js-basico/blob/master/exercises/scope.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Hoisting
Es cuando las variales y las funciones se declaran antes que se procese cualquier tipo de código.
Sucede en ECMAScrip 5 para abajo, y en ECMAScrip 6 en adelante, el Hoisting ya no sucede, solo ocurren con dos palabras claves: VAR y FUNCTION.
En ECMAScrip 6 presentan dos nuevas palabras: LET y CONST, las cuales no tendrán ningun tipo de Hoisting.
[Ver: Ejemplo de Hoisting.](https://github.com/ldmaroto/js-basico/blob/master/exercises/hoisting.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Coerción
Hay dos tipos de coerciones: implicitas y explicitas.
[Ver: Ejemplo de Coerción.](https://github.com/ldmaroto/js-basico/blob/master/exercises/coercion.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Falso y verdadero
[Ver: Ejemplo de Falso y verdadero.](https://github.com/ldmaroto/js-basico/blob/master/exercises/truthyfalsy.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Operadores
[Ver: Ejemplo de Operadores.](https://github.com/ldmaroto/js-basico/blob/master/exercises/operadores.js)

### Operadores de operaciones matemáticas (operadores binarios).
### Operadores lógicos.
### Operadores de asignación.
### Operadores de comparación.
### Operadores incrementales.
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Condicionales
Las condicionales son reglas, para poder validar si algo es verdadero o falso, y generar ciertas acciones.
[Ver: Ejemplo de condicionales.](https://github.com/ldmaroto/js-basico/blob/master/exercises/if.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Switch
[Ver: Ejemplo de Switch.](https://github.com/ldmaroto/js-basico/blob/master/exercises/switch.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Arreglos
Un arreglo o un array, es una estructura de datos que se almacena bajo el mismo nombre a una colección de datos. Conoceremos los metodos que nos ayudan a mutar a un arreglo:
* Metodo Push : Nos permite agregar un elemento en la última posición.
* Metodo Pop : Nos permite eliminar el último elemento de un array.
* Metodo Unshift : Nos permite agregar un elemento en la primera posición.
* Metodo Shift : Nos permite eliminar el primer elemento de un array.
* Metodo indexOf : Nos permite saber la posición de un elemento.
[Ver: Ejemplos de Arreglos](https://github.com/ldmaroto/js-basico/blob/master/exercises/arrays.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Loops: For y For...of
[Ver: Ejemplo de Loops For y For..of](https://github.com/ldmaroto/js-basico/blob/master/exercises/loops.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Loops: While
[Ver: Ejemplo de Loop While.](https://github.com/ldmaroto/js-basico/blob/master/exercises/while.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Objetos.
[Ver: Ejemplo de Objetos.](https://github.com/ldmaroto/js-basico/blob/master/exercises/objetos.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Función Constructora.
Una forma de automatizar la creación de objetos, es mediante una funcción constructora, en donde vamos hacer una plantilla de un objeto, con ciertas opciones que seran sus parámetros y sus propiedades.
[Ver: Ejemplo de Constructor #1.](https://github.com/ldmaroto/js-basico/blob/master/exercises/constructor.js)
[Ver: Ejemplo de Constructor #2.](https://github.com/ldmaroto/js-basico/blob/master/exercises/constructor-2.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Recorrido de Arreglos 1.
[Ver: Ejemplo de recorrido de arreglo #1.](https://github.com/ldmaroto/js-basico/blob/master/exercises/runarray1.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>

## Recorrido de Arreglos 2.
[Ver: Ejemplo de recorrido de arreglo #2.](https://github.com/ldmaroto/js-basico/blob/master/exercises/runarray2.js)
<p>[Regresar a Contenido.](https://github.com/ldmaroto/js-basico#contenido)</p>
