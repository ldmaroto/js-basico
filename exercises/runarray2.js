/*

SECCIÓN 19: Recorrido de Arreglos 2.

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

// Utilizando el método: "find" 

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

console.log(encuentraArticulo);

// Utilizando el método: "forEach" 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})

// Utilizando el método: "some"

var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

console.log(articuloBaratos);