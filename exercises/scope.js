/*

SECCIÓN 6: Scope.

*/

var nombre = "Diego"; // Variable en el Scope Global

console.log(fun(nombre));

function fun(){
    var apellido = "De Granda";  // Variable en el Scope Local
    return nombre + " " + apellido;
}

