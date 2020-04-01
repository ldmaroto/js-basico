/*

SECCIÓN 13: Loops: For y For...of

*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiantes){
    console.log(`Hola, ${estudiantes}`)
}

// Caso For.

for(var i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i])
}

console.log("")


// Caso For...of

for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante)
}