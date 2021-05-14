//Evita malas practicas de JS
'use strict'

const producto4={
     nombre: "IPHONE",
     precio: 15000,
     disponible: true
}
Object.freeze(producto4);

console.log(Object.isFrozen(producto4));

//AUN SIENDO CONST SE PUEDEN MODIFICAR LOS ATRIBUTOS 
//producto4.disponible=false;
console.table(producto4);