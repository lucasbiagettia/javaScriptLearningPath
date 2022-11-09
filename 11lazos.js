const ciudadesDisponibles = new Array ('micho', 'tito', 'lucas');
const precioCiudad =  new Array ('100', '322', '232', '232');
const presupuestoDisponible = 300;
let i = 0;
while (precioCiudad[i] < presupuestoDisponible){
    console.log("Puedes viajar a " + ciudadesDisponibles  [i]);
    i++;
}
