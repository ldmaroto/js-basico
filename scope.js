/*
En JS, hay dos tipos de Scope: 
1. Scope Global.
2. Scope Local.

El Scope define la visibilidad de estas variables. Variables definidas dentro de una función no son visibles desde fuera de la misma.

*/

//Scope Global

var nombre = "Diego";

console.log(fun(nombre));

function fun(){
    var apellido = "De Granda";
    return nombre + " " + apellido;
}

