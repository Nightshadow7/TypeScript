// Para un sistema de información, que campus necesita desarrollar, ha encargado a sus campers que construyan el respectivo programa en el 
// lenguajedeprogramaciónTypescriptyutilizandopoo, Campus necesita automatizar las consultas acerca del “nivel” en que cada 
// camper se encuentradentro de la rutaa laque pertenece (enviar el nombre del camper y obtener su nivel). Gestionar las siguientes especificaciones, 
// usando libremente la lógica deseada, usando diversos métodos dentro de la clasequeresuelvancadaparticularidad:

// 1. CrearClases: Centro, Ruta, Nivel, Camper y Contrato.
// 2. Instanciar entre 5 y 7 objetos de cadaclase.
// 3. Gestionar la contratación del camper que solamente a terminado cada niveldelaruta.
// 4. Reportar campers que obtuvieron contrato remoto y campers que obtuvieron contrato presencial,
// 5. Centro de entrenamiento con mayor cantidad de campers y con menor cantidaddecampers.
import * as readlineSync from 'readline-sync';
// let input1:number = Number(readlineSync.question('Ingresa un numero: '));

class Centro {
  constructor(public nombre: string) {}
}

class Ruta {
  constructor(public nombre: string) {}
}

class Nivel {
  constructor(public nombre: string) {}
}

class Camper {
  constructor(public nombre: string, public contratoRemoto: boolean) {}

  obtenerNivel(): Nivel {
    return new Nivel("Nivel obtenido");
  }
}

class Contrato {
  constructor(public camper: Camper, public nivel: Nivel) {}

  contratar(): void {
    console.log(`${this.camper.nombre} ha sido contratado para el nivel ${this.nivel.nombre}`);
  }
}

// Instanciar objetos
const centros: Centro[] = [
  new Centro("Centro A"),
  new Centro("Centro B"),
  new Centro("Centro C"),
  new Centro("Centro D"),
  new Centro("Centro E")
];

const rutas: Ruta[] = [
  new Ruta("Ruta 1"),
  new Ruta("Ruta 2"),
  new Ruta("Ruta 3"),
  new Ruta("Ruta 4"),
  new Ruta("Ruta 5"),
  new Ruta("Ruta 6"),
  new Ruta("Ruta 7")
];

const niveles: Nivel[] = [
  new Nivel("Nivel 1"),
  new Nivel("Nivel 2"),
  new Nivel("Nivel 3"),
  new Nivel("Nivel 4"),
  new Nivel("Nivel 5"),
  new Nivel("Nivel 6"),
  new Nivel("Nivel 7")
];

const campers: Camper[] = [
  new Camper("Camper 1", true),
  new Camper("Camper 2", false),
  new Camper("Camper 3", true),
  new Camper("Camper 4", false),
  new Camper("Camper 5", true),
  new Camper("Camper 6", false),
  new Camper("Camper 7", true)
];

const contratos: Contrato[] = [];

// Gestionar contrataciones
campers.forEach(camper => {
  const nivel = camper.obtenerNivel();
  const contrato = new Contrato(camper, nivel);
  contratos.push(contrato);
  if (camper.contratoRemoto) {
    console.log(`${camper.nombre} ha obtenido contrato remoto`);
  } else {
    console.log(`${camper.nombre} ha obtenido contrato presencial`);
  }
});

// Encontrar centro con mayor y menor cantidad de campers
const conteoCentros: { [nombre: string]: number } = {};

campers.forEach(camper => {
  const centro = centros[Math.floor(Math.random() * centros.length)].nombre;
  if (!conteoCentros[centro]) {
    conteoCentros[centro] = 1;
  } else {
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


