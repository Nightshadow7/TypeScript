// 6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y
// la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantas 
// mujeres.

import * as readlineSync from 'readline-sync';
import alert from 'alert';

let estudiantes: any[] = [];
let cantidadHombres: number = 0;
let cantidadMujeres: number = 0;



let cantidadEstudiantes: number = Number(readlineSync.question('Digite la cantidad de estudiantes que desea registrar: '));

for (let i = 0; i < cantidadEstudiantes; i++) {
  let nombre: string = readlineSync.question(`Digite el nombre del estudiante ${i+1}: `);
  nombre = nombre.replace(/\b\w/g, l => l.toUpperCase());

  let sexo: string = readlineSync.question(`Digite el sexo del estudiante ${i+1} ( M / F ): `);

  while ((sexo !== "M" && sexo !== "m") && (sexo !== "F" && sexo !== "f")) {
    sexo = readlineSync.question(`Digite un sexo válido para el estudiante ${i+1} ( M / F ) o ( m / f ) : `);
  }

  let nota : number = Number(readlineSync.question(`Digite la nota definitiva del estudiante ${i+1}: `));
  sexo = sexo.toUpperCase();
  
  let NewEstudiante : {
    nombre : string,
    sexo : string,
    nota : number
  } = {
    nombre,
    sexo,
    nota
  }

  estudiantes.push(NewEstudiante);

  if (sexo === "M") {
    cantidadHombres++;
  } else {
    cantidadMujeres++;
  }
}

let estudianteMayorNota = estudiantes.reduce(function(a, b) {
  return (a.nota > b.nota) ? a : b;
});

let estudianteMenorNota = estudiantes.reduce(function(a, b) {
  return (a.nota < b.nota) ? a : b;
});

alert(`El estudiante con la mayor nota es ${estudianteMayorNota.nombre} con una nota de ${estudianteMayorNota.nota}`);
alert(`El estudiante con la menor nota es ${estudianteMenorNota.nombre} con una nota de ${estudianteMenorNota.nota}`);
alert(`La cantidad de Hombres es ${cantidadHombres} y la cantidad de Mujeres es ${cantidadMujeres}`);
