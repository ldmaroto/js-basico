//Metodos que nos ayudan mutar un array.

var frutas = ["Manzana", "Banano", "Cereza", "Fresa"];
console.log(frutas);
console.log("El Array Frutas tiene: " + frutas.length + " elementos.");

// Metodo Push : Nos permite agregar un elemento en la última posición.
var masFrutas = frutas.push("Uvas");
console.log(frutas);

// Metodo Pop : Nos permite eliminar el último elemento de un array.
var ultimo = frutas.pop();
console.log(frutas);

// Metodo Unshift : Nos permite agregar un elemento en la primera posición.
var frutaEspecial = frutas.unshift("Kiwi");
console.log(frutas);

// Metodo Shift : Nos permite eliminar el primer elemento de un array.
var borraopcion = frutas.shift();
console.log(frutas);

// Metodo indexOf : Nos permite saber la posición de un elemento.
var posicion = frutas.indexOf("Cereza");
console.log("La Cereza está en la posición: " + posicion);