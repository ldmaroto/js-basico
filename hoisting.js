/*
Cuando las variales y las funciones se declaran antes que se procese el cualquier tipo de código.
Sucede en ECMAScrip 5 para abajo, y en ECMAScrip 6 en adelante no sucede, solo ocurren con dos palabras claves, VAR y FUNCTION.

En ECMAScrip 6 presentan dos nuevas palabras: LET y CONST.
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

