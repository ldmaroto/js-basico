var opciones = ['Piedra', 'Papel', 'Tijera'];
var eleccionTuya = Math.floor(Math.random()*3);

function play(i){
    var eleccionMaquina = Math.floor(Math.random()*3);
    console.log("Tu elección: " + i[eleccionTuya]);
    console.log("Maquina elije: " + i[eleccionMaquina]);
    console.log("--------------------------");

    if (eleccionMaquina === eleccionTuya) {
        console.log("Resultado: Empate, siga intentando...");
    } else if ( ((eleccionTuya === 0) && (eleccionMaquina === 2)) || ((eleccionTuya === 1) && (eleccionMaquina === 0)) || ((eleccionTuya === 3) && (eleccionMaquina === 2)) ){
        console.log("Resultado: Ganaste, felicidades !!!");
    } else {
        console.log("Resultado: Lo siento, perdiste :-(");
    }
}

play(opciones);