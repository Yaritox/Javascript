'use strict';
let x=-12;
try{
     if(isNaN(x)) throw 'No es un numero';
     if(x===' ')throw'Es cadena vacia';
     if(x<0)throw'Es un número negativo';
}catch(error){
     console.log(error);
     
}