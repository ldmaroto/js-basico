var opciones = ['Piedra', 'Papel', 'Tijera'];
var eleccionTuya = Math.floor(Math.random() * 3);

function play(i) {
    var eleccionMaquina = Math.floor(Math.random() * 3);
    console.log("Tu elección: " + i[eleccionTuya]);
    console.log("Maquina elije: " + i[eleccionMaquina]);
    console.log("--------------------------");

    switch (eleccionTuya) {
        case 0:
            switch (eleccionMaquina) {
                case 0:
                    console.log("Resultado: Empate, siga intentando...");
                    break;
                case 1:
                    console.log("Resultado: Lo siento, perdiste :-(");
                    break;
                case 2:
                    console.log("Resultado: Ganaste, felicidades !!!");
                    break;
            }
            break;
        case 1:
            switch (eleccionMaquina) {
                case 0:
                    console.log("Resultado: Ganaste, felicidades !!!");
                    break;
                case 1:
                    console.log("Resultado: Empate, siga intentando...");
                    break;
                case 2:
                    console.log("Resultado: Lo siento, perdiste :-(");
                    break;
            }
            break;
        case 2:
            switch (eleccionMaquina) {
                case 0:
                    console.log("Resultado: Lo siento, perdiste :-(");
                    break;
                case 1:
                    console.log("Resultado: Ganaste, felicidades !!!");
                    break;
                case 2:
                    console.log("Resultado: Empate, siga intentando...");
                    break;
            }
            break;
    }
}

play(opciones);