/*

SECCIÓN 6: Scope.

*/

//Scope Global

var nombre = "Diego";

console.log(fun(nombre));

function fun(){
    var apellido = "De Granda";
    return nombre + " " + apellido;
}

