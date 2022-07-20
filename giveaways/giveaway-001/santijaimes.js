/**
* 
* [Problema]
* Dandote un par de listas que contienen numeros y debemos retornar la suma de todos los numeros dentro de nuestras listas.
* Debes asumir que los numeros siempre seran >= 0
*
* [Contenido del problema]
* lista 1 = [5,42,12,59]
* lista 2 = [86,43,23,54,21,65] 
*/

// // Ejemplo
// const lista1 = [5,42,12,59];
// const lista2 = [86,43,23,54,21,65];

// // Codigo..

// Declaro las listas
const lista1 = [5,42,12,59];
const lista2 = [86,43,23,54,21,65];
let sum1 = 0;
let sum2 = 0;



// Declaro el bucle que hace la operación
for (let i = 0; i < lista1.length; i++) {
  sum1 += lista1[i];
}

for (let i = 0; i < lista2.length; i++) {
  sum2 += lista2[i];
}

const res1 = sum1;
const res2 = sum2;

console.log(res1);
console.log(res2);
