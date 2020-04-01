/*

SECCIÓN 16: Función Constructor.

*/

// Definiendo una función constructor.

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Haciendo un objeto nuevo en relación con la función constructor. La palabra
// "new" va a generar una nueva instancia de nuestra función constructor.
// Una instancia es un objeto que deriva de otro objeto.

var carroNuevo = new auto("Tesla", "Model 3", 2020);
var carroNuevo2 = new auto("Tesla", "Model X", 2018);
var carroNuevo3 = new auto("Toyota", "Corola", 2020);

console.log(carroNuevo);
console.log(carroNuevo2);
console.log(carroNuevo3);