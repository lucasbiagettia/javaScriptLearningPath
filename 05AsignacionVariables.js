// no siempre varían aunque se llamen variables
// variable es el espacio de memoria, puede o no cambiar en el tiempo
// const, let y var
// const, espacio de memoria que no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

const nombrePasajero = "Leonardo";
const apellidoPasajero = "lacruz";
nombrePasajero = nombrePasajero + " " + apellidoPasajero
// esto da error porque nombrePasajero era constante


// let, espacio de memoria que puede cambiar durante la ejecución del programa
let nombreCompletoPasajero = nombrePasajero + " " + apellidoPasajero

// var: está en desuso
// var, puede cambiar en memoria, y el alcance es global, es accesible en todo el programa

// Bloque
{
    //palabra let
    let nombreCompletoPasajero2 = "pedro"
    console.log(nombreCompletoPasajero2); // lo imprime

    var nombreVar = "lucas";
    console.log(nombreVar); // lo imprime
}

console.log(nombreCompletoPasajero2); // no lo imprime porque està fuera de scope
console.log(nombreVar); // lo imprime porque es agnostico al scope