/* 
VALORES:

Valor <40> es de tipo "number"
Valor <"Diego de la Vega"> es de tipo "string"
Valor primitivo <true> es de tipo "boolean"
Valor primitivo <false> es de tipo "boolean"
Valor primitivo <NULL> es de tipo "null"
Valor primitivo <> es de tipo "undefined"
Valor <[1,2,3]> es de tipo "object"

Valor <{nombre: "Diego"}> es de tipo "object"

TYPEOF:
"Typeof" es un comando para obtener el tipo de variable de un determinado valor.
*/

var numero1 = 40;
var cadena1 = "Hola Mundo"
var boleano1 = true;
var boleano2 = false;
var indefinido1;
var arreglo1 = [1,2,3];
var objeto1 = { nombre: "Diego"};

presentar(numero1);
presentar(cadena1);
presentar(boleano1);
presentar(boleano2);
presentar(indefinido1);
presentar(arreglo1);
presentar(objeto1);

function presentar(i){
    console.log("Valor: " + i + " | Tipo: " + typeof(i))
}