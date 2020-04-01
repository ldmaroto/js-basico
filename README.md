# js-basico
Javascript 101 Reference Blog - Referencia rápida de Javascript | Notas personales del Curso de platzi.com | Versión: Desarrollo (20200331)

## Contenido
* Qué es Javascript?
* Porqué estudiar Javascript?
* Elementos de programación.
* Variables.
* Funciones.
* Scope.
* Hoisting.
* Coerción.
* Falso y verdadero.
* Operadores.
* Condicionales.
* Switch.
* Arreglos.
* Loops: For y For...of
* Loops: While
* Objetos
* Función Constructora
* Recorrido de Arreglos 1
* Recorrido de Arreglos 2


## Qué es Javascript.
Es un lenguaje que nace en la WEB, ante la necesidad de generar dinamismo, interacción con el usuario. Es un lenguaje orientado a generar páginas interactivas que más tarde se convierten en apliaciones WEB.
Como lenguaje es: interpretado, orientado a objetos, débilmente tipado y dinámico.

### Lenguajes Backwards y Forwards
Un lenguaje forward es aquel que es compatible con versiones futuras, es decir que incluye una adición al lenguaje en un programa y no causaría que se rompa si se ejecua en un motor de JS anterior.
JS no es compatible con versiones futuras. Si tiene un codigo de JS, que no es compatible en los nuevos motores de JS, se puede usar herramientas como "Babel JS Compilator".

## Porqué estudiar Javascrip?
Tiene una comunidad muy grande que te puede ayudar a desarrollar diferentes cosas como: aplicaciones Web, aplicaciones nativas, aplicaciones para escritorio, protuctos Back-end / IOT.

## Elementos de programación
Tenemos dos componentes pricipales: 1. datos o valores que guardamos en memoria y 2. tareas (funciones), que utilizará los datos. Los tipos de valores que veremos en Javascript son:

* tipo "number": 40 
* de tipo "string": "Diego de la Vega" 
* de tipo "boolean": true
* de tipo "null": NULL
* de tipo "undefined", el cual es un tipo primitivo en Javascript
* de tipo "object": [1,2,3] | {nombre: "Diego"}

## Variables
Es la representación de algun lugar en memoria, donde vamos a guardar un valor.
EN JS, "var" es una palabra reservada para poder guardar un valor en memoria. El ";" nos permite indicar que termina una sentencia. Las variales tienen dos estados: declarado e inicializado.
[Ver: Ejemplo de Variables.](https://github.com/ldmaroto/js-basico/blob/master/variables.js)


## Funciones
Las funciones son un conjunto de sentencias, que utilizamos para realizar acciones con valores que guardamos en las variables. Funciones son como procedimientos o tares.
[Ver: Ejemplo de Funciones.](https://github.com/ldmaroto/js-basico/blob/master/funciones.js)

### Llamando una función
Para llamar una función, se coloca el bombre de la función, seguido de "()". El "()" le dice a JS que hay mismo se llama la función. Dentro de "()", se indican los parámetros.
function() es una función anónima porque no tiene nombre.

### Tipos de funciones
**Funciones Declarativas:** Son las funciones donde utilizamos la palabra reservada "function" al inicio para poder declarar la función.

**Expresión de función:** Donde la declaración se inicia con la palabra reservada var, y se generará una variable que guardará un función anónima.

**Diferencias entre Funciones Declarativas y de Expresión:** A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

## Scope
En JS, hay dos tipos de Scope: 
* Scope Global.
* Scope Local.

El Scope define la visibilidad de estas variables. Variables definidas dentro de una función no son visibles desde fuera de la misma.
[Ver: Ejemplo de Scope.](https://github.com/ldmaroto/js-basico/blob/master/scope.js)

## Hoisting
Es cuando las variales y las funciones se declaran antes que se procese cualquier tipo de código.
Sucede en ECMAScrip 5 para abajo, y en ECMAScrip 6 en adelante, el Hoisting ya no sucede, solo ocurren con dos palabras claves: VAR y FUNCTION.
En ECMAScrip 6 presentan dos nuevas palabras: LET y CONST, las cuales no tendrán ningun tipo de Hoisting.
[Ver: Ejemplo de Hoisting.](https://github.com/ldmaroto/js-basico/blob/master/hoisting.js)

## Coerción
Hay dos tipos de coerciones: implicitas y explicitas.
[Ver: Ejemplo de Coerción.](https://github.com/ldmaroto/js-basico/blob/master/coercion.js)

## Falso y verdadero
[Ver: Ejemplo de Falso y verdadero.](https://github.com/ldmaroto/js-basico/blob/master/truthyfalsy.js)

## Operadores
[Ver: Ejemplo de Operadores.](https://github.com/ldmaroto/js-basico/blob/master/operadores.js)

### Operadores de operaciones matemáticas (operadores binarios).
### Operadores lógicos.
### Operadores de asignación.
### Operadores de comparación.
### Operadores incrementales.

## Condicionales
Las condicionales son reglas, para poder validar si algo es verdadero o falso, y generar ciertas acciones.
[Ver: Ejemplo de condicionales.](https://github.com/ldmaroto/js-basico/blob/master/if.js)

## Switch
[Ver: Ejemplo de Switch.](https://github.com/ldmaroto/js-basico/blob/master/switch.js)

## Arreglos
Un arreglo o un array, es una estructura de datos que se almacena bajo el mismo nombre a una colección de datos. Conoceremos los metodos que nos ayudan a mutar a un arreglo:
* Metodo Push : Nos permite agregar un elemento en la última posición.
* Metodo Pop : Nos permite eliminar el último elemento de un array.
* Metodo Unshift : Nos permite agregar un elemento en la primera posición.
* Metodo Shift : Nos permite eliminar el primer elemento de un array.
* Metodo indexOf : Nos permite saber la posición de un elemento.
[Ver: Ejemplos de Arreglos](https://github.com/ldmaroto/js-basico/blob/master/arrays.js)

## Loops: For y For...of
[Ver: Ejemplo de Loops For y For..of](https://github.com/ldmaroto/js-basico/blob/master/loops.js)

## Loops: While
[Ver: Ejemplo de Loop While.](https://github.com/ldmaroto/js-basico/blob/master/while.js)

## Objetos
[Ver: Ejemplo de Objetos.](https://github.com/ldmaroto/js-basico/blob/master/objetos.js)

## Función Constructora
Una forma de automatizar la creación de objetos, es mediante una funcción constructora, en donde vamos hacer una plantilla de un objeto, con ciertas opciones que seran sus parámetros y sus propiedades. 

## Recorrido de Arreglos 1


## Recorrido de Arreglos 2
