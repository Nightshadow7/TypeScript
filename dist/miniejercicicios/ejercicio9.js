"use strict";
// 9. N atletas han pasado a finales en salto triple en los juegos olímpicos femenino de 2022. Diseñe un programa que pida por 
// teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta 
// campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord 
// esta en 15,50 metros.
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readlineSync = __importStar(require("readline-sync"));
const alert_1 = __importDefault(require("alert"));
let atletas = [];
let cantidadFinalistas = Number(readlineSync.question(`Dijite la cantidad de finalistas del salto triple: `));
for (let i = 0; i < cantidadFinalistas; i++) {
    let nombre = readlineSync.question(`Dijite el nombre del finalista: `);
    nombre = nombre.replace(/\b\w/g, l => l.toUpperCase());
    let marca = parseFloat(readlineSync.question(`Dijite la marca de ${nombre} en el salto triple `));
    let newAtleta = {
        nombre,
        marca
    };
    atletas.push(newAtleta);
}
let finalistaMarca = atletas.reduce(function (a, b) {
    return (a.marca > b.marca) ? a : b;
});
if (finalistaMarca.marca > 15.5) {
    (0, alert_1.default)(`
    La finalista ${finalistaMarca.nombre} rompió el récord de 15.50 metros con una marca de ${finalistaMarca.marca} metros. 
    ¡Ganó la medalla de oro!`);
}
else {
    (0, alert_1.default)(`
    Nadie rompió la meta de 15.5 metros.
    El atleta con mayor marca es ${finalistaMarca.nombre} con una marca de ${finalistaMarca.marca} metros`);
}
