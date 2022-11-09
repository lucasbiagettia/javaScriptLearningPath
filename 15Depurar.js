const ciudadesDisponibles = new Array ('micho', 'tito', 'lucas');
const precioCiudad =  new Array ('100', '322', '232', '232');
const presupuestoDisponible = 400;

const datos =[
{
    'ciudad':'Bogotá',
    'precio': 500
},
{
    'ciudad':'Lima',
    'precio': 301
},
{
    'ciudad':'Santiago',
    'precio': 320
},
{
    'ciudad':'BuenosAires',
    'precio': 530
}
]

// let i = 0;
// while (i< datos.length && datos[i].precio > presupuestoDisponible ){
//     console.log("Puedes viajar a " + datos[i].ciudad);
//     i++;
// }
let ciudadSeleccionada = new String();
let i = 0;
do {
    if (datos[i].precio > presupuestoDisponible ){
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++;
}
while(i<datos.length && ciudadSeleccionada !='') 

console.log(ciudadSeleccionada);