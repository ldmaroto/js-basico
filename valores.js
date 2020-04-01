/*

SECCIÓN 3: Tipos de valores.

*/

var numero1 = 40;                   // de tipo "number"
var cadena1 = "Hola Mundo";         // de tipo "string"
var boleano1 = true;                // de tipo "boolean"
var boleano2 = false;               // de tipo "boolean"
var indefinido1;                    // de tipo "undefined"
var arreglo1 = [1,2,3];             // de tipo "object"
var objeto1 = { nombre: "Diego"};   // de tipo "object"

presentar(numero1);
presentar(cadena1);
presentar(boleano1);
presentar(boleano2);
presentar(indefinido1);
presentar(arreglo1);
presentar(objeto1);

// TYPEOF: "Typeof" es un comando para obtener el tipo de variable de un determinado valor.

function presentar(i){
    console.log("Valor: " + i + " | Tipo: " + typeof(i))
}