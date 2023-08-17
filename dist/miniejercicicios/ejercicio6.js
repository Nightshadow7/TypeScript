"use strict";
// 6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y
// la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantas 
// mujeres.
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
let estudiantes = [];
let cantidadHombres = 0;
let cantidadMujeres = 0;
let cantidadEstudiantes = Number(readlineSync.question('Digite la cantidad de estudiantes que desea registrar: '));
for (let i = 0; i < cantidadEstudiantes; i++) {
    let nombre = readlineSync.question(`Digite el nombre del estudiante ${i + 1}: `);
    nombre = nombre.replace(/\b\w/g, l => l.toUpperCase());
    let sexo = readlineSync.question(`Digite el sexo del estudiante ${i + 1} ( M / F ): `);
    while ((sexo !== "M" && sexo !== "m") && (sexo !== "F" && sexo !== "f")) {
        sexo = readlineSync.question(`Digite un sexo válido para el estudiante ${i + 1} ( M / F ) o ( m / f ) : `);
    }
    let nota = Number(readlineSync.question(`Digite la nota definitiva del estudiante ${i + 1}: `));
    sexo = sexo.toUpperCase();
    let NewEstudiante = {
        nombre,
        sexo,
        nota
    };
    estudiantes.push(NewEstudiante);
    if (sexo === "M") {
        cantidadHombres++;
    }
    else {
        cantidadMujeres++;
    }
}
let estudianteMayorNota = estudiantes.reduce(function (a, b) {
    return (a.nota > b.nota) ? a : b;
});
let estudianteMenorNota = estudiantes.reduce(function (a, b) {
    return (a.nota < b.nota) ? a : b;
});
(0, alert_1.default)(`El estudiante con la mayor nota es ${estudianteMayorNota.nombre} con una nota de ${estudianteMayorNota.nota}`);
(0, alert_1.default)(`El estudiante con la menor nota es ${estudianteMenorNota.nombre} con una nota de ${estudianteMenorNota.nota}`);
(0, alert_1.default)(`La cantidad de Hombres es ${cantidadHombres} y la cantidad de Mujeres es ${cantidadMujeres}`);
