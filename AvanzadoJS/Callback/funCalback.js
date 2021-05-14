function miFuncion1(){
     console.log('funcion 1');
}

function miFuncion2(){
     console.log('funcion 2');
}

function imprimir(mensaje){
     console.log(mensaje);
}

//función callback 
function sumar(op1,op2,funcionCallback){
     let resultado;
     resultado= op1+op2;
     funcionCallback(resultado)
}

//llamadas asincronas
function miFuncionCallback(){
     console.log('Saludo asincrono después de 3 segundos');
}


//ejecución asincrona 
setTimeout(miFuncionCallback,3000);

sumar(10,90,imprimir);

//ejecución secuencial (sincronos)
miFuncion1();
miFuncion2();

