//10. Desarrolle un programa cíclico que capture un dato numérico cada vez, y los vaya acumulando. El programa se detiene cuando
// el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES
// FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR.

import * as readlineSync from 'readline-sync';
import alert from 'alert';

let numbers: any[] = [];
while (true) {
  let numero: number = Number(readlineSync.question(`
    Dijite 0 para detener el proceso:
    Dijite un numero cualquiera: 
  `));
  if (numero === 0) {
    break;
  } else {
    let NewNumber : {
      numero: number
    } = {
      numero
    };
    numbers.push(NewNumber);
  };
};
let mayorValor = numbers.reduce(function(a, b) {
  return (a > b) ? a : b;
});
let menorValor = numbers.reduce(function(a, b) {
  return (a < b) ? a : b;
});
let cantidad: number = numbers.length;
let suma: number = numbers.reduce(function(a, b) {
  return a + b;
});
let promedio: number = suma / cantidad;
console.log(numbers);
console.log(`La sumatoria de los ${cantidad.toLocaleString()} valores ingresados es: ${suma.toLocaleString()}`);
console.log(`El valor promedio de los valores ingresados es ${promedio.toLocaleString()} `);
console.log(`Se digitaron un total de ${cantidad} valores `);
console.log(`El mayor número digitado es: ${mayorValor}`);
console.log(`El menor número digitado es: ${menorValor}`);
