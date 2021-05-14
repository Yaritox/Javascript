//Evita malas practicas de JS
'use strict'

const producto5={
     nombre: "Apple watch",
     precio: 15000,
     disponible: true
}
Object.seal(producto5);

console.log(Object.isSealed(producto5));

//AUN SIENDO CONST SE PUEDEN MODIFICAR LOS ATRIBUTOS 
producto5.disponible=false;
console.table(producto5);