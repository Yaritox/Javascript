'use strict';

try{
     throw 'Mi error';
     //let x=10;
     x=20
    console.log(x);
    
}catch(error){
     console.log(error);
}finally{
     console.log("termina la revisión de errores");
}

console.log('continuamos...');