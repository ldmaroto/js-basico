/*

SECCIÓN 17: Ejemplo de Objeto.

Aquí definimos un solo objeto, es un Auto.
Recordando, un "Atributo" de un objeto es a una "Variable", como un "Método" de un objeto es a una "Función".

*/

var miAuto = {
    marca: "Toyota",
    modelo: "Corrolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

console.log(miAuto); // Presentando un objeto
console.log(miAuto.marca); // Presentando el valor del atributo Marca.

miAuto.detalleDelAuto(); // Llamando un método de un objeto. 
