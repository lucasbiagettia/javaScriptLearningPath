const ciudadesDisponibles = new Array ('micho', 'tito', 'lucas');
const precioCiudad =  new Array ('100', '322', '232', '232');
const presupuestoDisponible = 300;

const datos =[
{
    'ciudad':'Bogotá',
    'precio': 500
},
{
    'ciudad':'Lima',
    'precio': 300
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

let i = 0;
while (datos[i].precio < presupuestoDisponible && i< datos.length){
    console.log("Puedes viajar a " + datos[i].ciudad);
    i++;
}

