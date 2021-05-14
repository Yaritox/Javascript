console.log("funciones que llaman otras funciones");
const obtenerCliente =()=>()=>console.log("Jordi");


const fn = obtenerCliente();

fn();