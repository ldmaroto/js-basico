/*
Hay dos tipos de coerciones: implicitas y explicitas.
*/

// Ejemplo de coerción Implicita
var a = 4 + "7"
console.log(a + " --> " + typeof(a)); // Lo que ocurre es una concatenación.

var b = 4 * "7"
console.log(b + " --> " + typeof(b)); // Lo que ocurre es una multiplicación.

 
// Ejemplo de coerción Explicita
var n1 = 20; // numero
var s1 = n1 + "" // cadena

var s2 = String(n1); // cadena
console.log(s2 + " --> " + typeof(s2)); // Coerción explicita.

var n2 = Number(s1); // numero
console.log(n2 + " --> " + typeof(n2)); // Coerción explicita.