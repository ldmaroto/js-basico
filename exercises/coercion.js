/*

SECCIÓN 7: Coerción.

*/

// Ejemplo de coerción Implícita
var a = 4 + "7"
console.log(a + " --> " + typeof(a)); // Lo que ocurre es una concatenación.

var b = 4 * "7"
console.log(b + " --> " + typeof(b)); // Lo que ocurre es una multiplicación.

 
// Ejemplo de coerción Explícita
var n1 = 20; // número
var s1 = n1 + "" // cadena

var s2 = String(n1); // cadena
console.log(s2 + " --> " + typeof(s2)); // Coerción explicita.

var n2 = Number(s1); // número
console.log(n2 + " --> " + typeof(n2)); // Coerción explicita.