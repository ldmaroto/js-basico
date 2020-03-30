/*
Las condicionales son reglas, para poder validar si algo es verdadero o falso, y generar ciertas acciones.
*/

var prueba1 = true;

if(prueba1){
    console.log("Soy verdadero.");
} else {
    console.log("Soy falso.")
}


var edad = 18;

if(edad===18){
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18){
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aun no puedes votar.")
}


// Operador ternario
// <condición> ? <verdadero> : <falso>
var numero = 1;
var resultado = numero === 1 ? "Sí soy un Uno" : "No, no soy uno";
console.log(resultado);