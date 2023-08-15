"use strict";
let goleadores = ['joel', 'phidolly', 'akio'];
let goles = [0, -1, 6];
console.log(`Goleadores: ${goleadores}`);
console.log(`Goles: ${goles}`);
let corners = [];
// Metodo Alternatico para definir arrays en TypeScript
let penalties = [true];
console.log(`Joel desperdicio 2 penalties: ${penalties}`);
// Autocompletar con Metodos aplicables segun tipo de dato del array
console.log(goles.map(ale => ale.toString()));
// Object
let goleadoresId = [7, 10, 17, 9, 11];
goleadoresId.push(+'1', +'101', +'1aa');
console.log(goleadoresId);
// Objetos
const Song = {
    id: 1,
    name: 'Follow You',
    author: 'Bring me horizon'
};
console.log(Song);
