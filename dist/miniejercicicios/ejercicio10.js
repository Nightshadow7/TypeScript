"use strict";
//10. Desarrolle un programa cíclico que capture un dato numérico cada vez, y los vaya acumulando. El programa se detiene cuando
// el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES
// FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
let numbers = [];
while (true) {
    let numero = Number(readlineSync.question(`
    Dijite 0 para detener el proceso:
    Dijite un numero cualquiera: 
  `));
    if (numero === 0) {
        break;
    }
    else {
        let NewNumber = {
            numero
        };
        numbers.push(NewNumber);
    }
    ;
}
;
let mayorValor = numbers.reduce(function (a, b) {
    return (a > b) ? a : b;
});
let menorValor = numbers.reduce(function (a, b) {
    return (a < b) ? a : b;
});
let cantidad = numbers.length;
let suma = numbers.reduce(function (a, b) {
    return a + b;
});
let promedio = suma / cantidad;
console.log(numbers);
console.log(`La sumatoria de los ${cantidad.toLocaleString()} valores ingresados es: ${suma.toLocaleString()}`);
console.log(`El valor promedio de los valores ingresados es ${promedio.toLocaleString()} `);
console.log(`Se digitaron un total de ${cantidad} valores `);
console.log(`El mayor número digitado es: ${mayorValor}`);
console.log(`El menor número digitado es: ${menorValor}`);
