/*

SECCIÓN 5: Funciones.

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