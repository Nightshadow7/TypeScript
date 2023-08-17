// 9. N atletas han pasado a finales en salto triple en los juegos olímpicos femenino de 2022. Diseñe un programa que pida por 
// teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta 
// campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord 
// esta en 15,50 metros.

import * as readlineSync from 'readline-sync';
import alert from 'alert';

let atletas: any[] = [];
let cantidadFinalistas: number = Number(readlineSync.question(`Dijite la cantidad de finalistas del salto triple: `));
for (let i = 0; i < cantidadFinalistas; i++) {
  let nombre: string = readlineSync.question(`Dijite el nombre del finalista: `);
  nombre = nombre.replace(/\b\w/g, l => l.toUpperCase());
  let marca : number = parseFloat(readlineSync.question(`Dijite la marca de ${nombre} en el salto triple `));
  let newAtleta:{
    nombre: string,
    marca: number
  } = {
    nombre,
    marca
  }
  atletas.push(newAtleta);
}
let finalistaMarca = atletas.reduce(function(a, b) {
  return (a.marca > b.marca) ? a : b;
});
if (finalistaMarca.marca > 15.5) {
  alert(`
    La finalista ${finalistaMarca.nombre} rompió el récord de 15.50 metros con una marca de ${finalistaMarca.marca} metros. 
    ¡Ganó la medalla de oro!`
  );
} else {
  alert(`
    Nadie rompió la meta de 15.5 metros.
    El atleta con mayor marca es ${finalistaMarca.nombre} con una marca de ${finalistaMarca.marca} metros`
  );
}
