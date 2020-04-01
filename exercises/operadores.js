/*

SECCIÓN 9: Operadores.

*/


// Operadores de operaciones matemáticas (operadores binarios)

console.log(3 + 2); // Suma.
console.log(50 - 10); //Resta.
console.log(10 * 20); //Multiplicación.
console.log(20 / 2); //División.
console.log("Diego" + " de la Vega"); //Concatenación.

// Operadores lógicos.
console.log(!false); //Negación (operador unitario)
console.log(!-3); //Negación (ver ejemplos de Truely & Falty)

// Operadores de asignación
var a = true; 
var b = false;

// Operadores de comparación
console.log(Boolean(3=="3")); // == significa comparación.
console.log(Boolean(3==="3")); // === significa comparación estrictamente igual.
console.log(5<3); // Caso de menor que.
console.log(5>3); // Caso de mayor que.
console.log(5<=6); // Caso de menor o iqual que.
console.log(5>=6); // Caso de menor o iqual que.


console.log(Boolean(a&&b)); // && significa "Y"
console.log(Boolean(a||b)); // || significa "O"

// Operadores incrementales
var edad = 40;
edad++; // ++ incrementa en una unidad.
console.log(edad); 

var edad = 40;
edad+=5; // += incrementa en tantas unidades.
console.log(edad); 