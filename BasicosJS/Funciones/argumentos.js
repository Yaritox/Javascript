//EN JS la cantidad de parametros
//no debe ser igual a la de argumentos para funcionar


// se le puede asignar valores por default
function miFuncion(a,b=9){
    return a+b; 
}

//llamado de función 
let suma=miFuncion(40,2);
console.log(suma);


suma=miFuncion(30);
console.log(suma);


//Ejemplo 
let resultado=sumarTodo(2,3,5,30,10);

function sumarTodo(){
     let suma=0;
     for(i=0;i<arguments.length;i++){
          suma+=arguments[i];
     }

     return suma;
}

console.log(resultado);