// Operadores de comparación
const ciudadDestino = "Bogotá";
const ciudadesDisponibles = new Array ("Bogotá", "Rosario");

if (ciudadesDisponibles.indexOf(ciudadDestino) >= 0){
    console.log("Está");
}else{
    console.log("No está");
}
// == no verifica tipo de dato
const valorPasaje  = "1000";
if (valorPasaje == 1000){
    console.log( "vale mil");
}

// === verifica tipo de dato
if (valorPasaje === 1000){
    console.log( "vale mil");
} else {
    console.log ("distinto dato");
}


//////////
// AND = &&
// OR  = ||
// NOT    !
