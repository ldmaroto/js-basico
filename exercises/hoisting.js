/*

SECCIÓN 6: Hoisting.

*/

// var miNombre = undefined;
console.log(miNombre);
var miNombre = "Diego";

// Tanto las funciones como las variables VAR se declaran antes que se procese el código.

hey();

function hey() {
    console.log("Hola " + tuNombre);
}
var tuNombre = "Diegito";