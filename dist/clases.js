"use strict";
// Para un sistema de información, que campus necesita desarrollar, ha encargado a sus campers que construyan el respectivo programa en el 
// lenguajedeprogramaciónTypescriptyutilizandopoo, Campus necesita automatizar las consultas acerca del “nivel” en que cada 
// camper se encuentradentro de la rutaa laque pertenece (enviar el nombre del camper y obtener su nivel). Gestionar las siguientes especificaciones, 
// usando libremente la lógica deseada, usando diversos métodos dentro de la clasequeresuelvancadaparticularidad:
Object.defineProperty(exports, "__esModule", { value: true });
// let input1:number = Number(readlineSync.question('Ingresa un numero: '));
class Centro {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Ruta {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Nivel {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
class Camper {
    constructor(nombre, contratoRemoto) {
        this.nombre = nombre;
        this.contratoRemoto = contratoRemoto;
    }
    obtenerNivel() {
        return new Nivel("Nivel obtenido");
    }
}
class Contrato {
    constructor(camper, nivel) {
        this.camper = camper;
        this.nivel = nivel;
    }
    contratar() {
        console.log(`${this.camper.nombre} ha sido contratado para el nivel ${this.nivel.nombre}`);
    }
}
// Instanciar objetos
const centros = [
    new Centro("Centro A"),
    new Centro("Centro B"),
    new Centro("Centro C"),
    new Centro("Centro D"),
    new Centro("Centro E")
];
const rutas = [
    new Ruta("Ruta 1"),
    new Ruta("Ruta 2"),
    new Ruta("Ruta 3"),
    new Ruta("Ruta 4"),
    new Ruta("Ruta 5"),
    new Ruta("Ruta 6"),
    new Ruta("Ruta 7")
];
const niveles = [
    new Nivel("Nivel 1"),
    new Nivel("Nivel 2"),
    new Nivel("Nivel 3"),
    new Nivel("Nivel 4"),
    new Nivel("Nivel 5"),
    new Nivel("Nivel 6"),
    new Nivel("Nivel 7")
];
function generatePuesto() {
    return Boolean((Math.floor(Math.random() * 2)) - 1);
}
const campers = [
    new Camper("Camper 1", generatePuesto()),
    new Camper("Camper 2", generatePuesto()),
    new Camper("Camper 3", generatePuesto()),
    new Camper("Camper 4", generatePuesto()),
    new Camper("Camper 5", generatePuesto()),
    new Camper("Camper 6", generatePuesto()),
    new Camper("Camper 7", generatePuesto())
];
const contratos = [];
// Gestionar contrataciones
campers.forEach(camper => {
    const nivel = camper.obtenerNivel();
    const contrato = new Contrato(camper, nivel);
    contratos.push(contrato);
    if (camper.contratoRemoto) {
        console.log(`${camper.nombre} ha obtenido contrato remoto`);
    }
    else {
        console.log(`${camper.nombre} ha obtenido contrato presencial`);
    }
});
// Encontrar centro con mayor y menor cantidad de campers
const conteoCentros = {};
campers.forEach(camper => {
    const centro = centros[Math.floor(Math.random() * centros.length)].nombre;
    if (!conteoCentros[centro]) {
        conteoCentros[centro] = 1;
    }
    else {
        conteoCentros[centro]++;
    }
});
let mayorCantidad = -1;
let menorCantidad = Number.MAX_SAFE_INTEGER;
let centroMayor = "";
let centroMenor = "";
for (const centro in conteoCentros) {
    if (conteoCentros[centro] > mayorCantidad) {
        mayorCantidad = conteoCentros[centro];
        centroMayor = centro;
    }
    if (conteoCentros[centro] < menorCantidad) {
        menorCantidad = conteoCentros[centro];
        centroMenor = centro;
    }
}
console.log(`El centro con mayor cantidad de campers es ${centroMayor}`);
console.log(`El centro con menor cantidad de campers es ${centroMenor}`);
