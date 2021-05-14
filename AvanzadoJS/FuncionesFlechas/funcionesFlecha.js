'use strict';
// let miFuncion=()=>{
//      console.log('Saludo desde mi función flecha');
// }

//let miFuncion=()=>console.log("saludos funcion flecha");

let miFuncion=()=>'Saludos desde aca';
console.log(miFuncion());

let regresarObjeto=()=>({nombre:'jordi'});

console.log(regresarObjeto());

let resivirParametro=mensaje=>console.log(mensaje);

resivirParametro('kionda');

let suma=(numero1,numero2)=>numero1+numero2;
console.log(suma(9,9));