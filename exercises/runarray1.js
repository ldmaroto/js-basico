/*

SECCIÓN 18: Recorrido de Arreglos 1.

*/

// Creando una objeto llamado "articulos".

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 2000},
    { nombre: "Teclado", costo: 250},
    { nombre: "Audifono", costo: 1700}
]

// Utilizando el método: "filter"

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

console.log(articulosFiltrados);

//Utilizando el método: "map"

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

console.log(nombreArticulos);
