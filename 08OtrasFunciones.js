const paisesDisponibles = ["micho","micho","micho","micho"]

paisesDisponibles.length; // es una propiedad, no una funcion

// eliminar al inicio
ciudadesDisponibles.shift();

// eliminar al final
ciudadesDisponibles.pop();

//filtrar elementos
const ciudadesFiltradas = ciudadesDisponibles.filter((e) => e == 'Brasil');

// devuelve un string con "-"
console.log(paisesDisponibles.join("-"));

paisesDisponibles.sort(); // Los ordena

// conociendo la posiciòn$
console.log(`Peru esta en la posicion: $ {paisesDisponibles.indexOf("Peru")}`);

// unificar dos listas
const otroArray = new Array();

paisesDisponibles.concat(otroArray)
