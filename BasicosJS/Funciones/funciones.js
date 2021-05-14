//Hoisting es la propiedad de las funciones 
//que permite que la declaración pueda ser antes o desp 
//del llamado de una función 
// como globo de gas de manera automática js sube las func 
//antes de compilar 


//creación de función 
function miFuncion(a,b){
    return a+b; 
}

//llamado de función 
let suma=miFuncion(40,2);
console.log(suma);

//función tipo flecha 
const sumaFlecha=(a,b)=>a+b;

console.log(sumaFlecha(4,3));

//declaración funciones de tipo de expresión 
let sumar=function(a,b){
     return a+b; 
};

resultado=sumar(1,2);
console.log(resultado);


//declaración de funciones self invoking (función 'anonima')

(function(a,b){
     console.log(a+b);
})(4,5);