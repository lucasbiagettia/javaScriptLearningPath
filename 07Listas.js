const ciudad1 = "Bogotá";
const ciudad2 = "Lima";


const ciudadesDisponibles = new Array("Bogotá", "Lima");
// definicion de una lista con tipo de dato alfanumerico
console.log (ciudadesDisponibles);

//Definicion deuna lista con forma abreviada
//Los arreglos no tienen tamaño definido
const paisesDisponibles = ["Colombia", "peru"];

{
    paisesDisponibles.push("uruguay"); // agrega al final
    paisesDisponibles.unshift("Ecuador"); // Inserta al inicio


}

// clase 08

paisesDisponibles[0]; // devuelve el 0

// reemplaza
paisesDisponibles.splice(1,1, "venezuela")

