/*
(function(){
     console.log("Desde un IFFIFE");
     const apellido="Cruz";
     window.edad =26
})();

const nombre="jordi";
*/
//modulos
import alias,{nombreCliente as nombre,ahorro,mostrarInformacion,Cliente} from './cliente.js';
import{Empresa} from './empresa.js';

alias();

console.log(nombre);
console.log(ahorro);
console.log(mostrarInformacion(nombre,ahorro));

const cliente=new Cliente(nombre,ahorro);
console.table(cliente);
console.table(cliente.mostrarInformacion());

const uber=new Empresa("Uber",500,"Transporte");
console.table(uber);