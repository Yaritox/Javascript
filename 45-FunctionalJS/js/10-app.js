console.log("que es compocision ?");

const obtenerNombre= info =>({
     mostrarNombre(){
          console.log(`Nombre: ${info.nombre} `);
     }
});

function Cliente(nombre,email,empresa){
     let info={
          nombre,
          email,
          empresa
     }

     return Object.assign(
          info,
          obtenerNombre(info)
     )
}

function Empleado(nombre,email,puesto){
     let info={
          nombre,
          email,
          puesto
     }
}

const cliente =  Cliente("kevin","meza@hotmail.com","UPTLAX");
cliente.mostrarNombre();
const empleado =  Empleado("Jordi","jordi@hotmail.com","UPPUEBLA");
