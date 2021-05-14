console.log("Clausuras");
console.log("Es la forma mediante una funcion en la que puedes");
console.log("acceder a una variable que pertenece al scope de la fun");

const obtenerCliente = ()=>{

     const cliente = "Jordi";
     function muestraNombre(){
          console.log(cliente);
     }

     return muestraNombre;

}

const cliente = obtenerCliente();

cliente();