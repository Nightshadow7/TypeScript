"use strict";
class Astronauta {
    constructor(id, nombre, record, reward) {
        this.id = id;
        this.nombre = nombre;
        this.record = record;
        this.reward = reward;
    }
    ;
    obtenerRecompensa(record) {
        if (record === 'Artemis') {
            this.reward = 'Felicidades tu ganaste 500.000.000 millones de pesos ፨)';
            return this.reward;
        }
        else {
            this.reward = '¡NO ganaste absolutamente nada, mas exfuerzo para la proxima ፨( !';
            return this.reward;
        }
        ;
    }
    ;
    set recorde(record) {
        let temp = record.toLowerCase();
        temp = temp.replace(/\b\w/g, l => l.toUpperCase());
        this.record = temp;
        this.reward = this.obtenerRecompensa(this.record);
    }
    get recorde() {
        return this.record;
    }
}
;
// via constructor
const astronautaPhidolly = new Astronauta(1, "Phidolly Ojeda", "Santa Marte ፨)");
// setter
astronautaPhidolly.recorde = 'artemis';
console.log(astronautaPhidolly);
astronautaPhidolly.recorde = 'Luna';
console.log(astronautaPhidolly);
astronautaPhidolly.recorde = 'aRTeMiS';
console.log(astronautaPhidolly);
