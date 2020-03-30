/*
Las funciones son un conjunto de sentencias, que utilizamos para realizar acciones con valores que guardamos en las variables.
Funciones son como procedimientos o tares.

Para llamar una función, se coloca el bombre de la función, seguido de "()". El "()" le dice a JS que hay mismo se llama la función.
Dentro de "()", se indican los parámetros.

function() es una función anónima porque no tiene nombre.

Funciones Declarativas:
Son las funciones donde utilizamos la palabra reservada "function" al inicio para poder declarar la función.

Expresión de función:
Donde la declaración se inicia con la palabra reservada var, y se generará una variable que guardará un función anónima.

Diferencias entre Funciones Declarativas y de Expresión:
A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.
Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

*/

//Declatativas
function miFuncion1(){
    return;
}

//De expresion
var miFuncion2 = function(){
    return;
}

//De expresión con parámetros
var miFuncion3 = function(a,b){
    return a + b;
}

//Llamando una función.
miFuncion1();
miFuncion2();
miFuncion3(1,2);


//Uso de parámetros de una función.
var estudiante = "Diego"

holaEstudiante1(estudiante);
holaEstudiante2(estudiante);

function holaEstudiante1(estudiante){
    console.log(`Hola ${estudiante}`);
}

function holaEstudiante2(estudiante){
    console.log("Hola " + estudiante);
}

//Uso de parámetro de una función con return

var num1 = 10;
var num2 = 25;

console.log("Resultado: " + calcular(num1,num2));

function calcular(x,y){
    var resultado = x + y;
    return resultado;
}