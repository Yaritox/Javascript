//CONCATENAR CADENAS 
var nombre= "Juan";
var apellido="Perez";
var nombreCompleto=nombre+' '+apellido;

console.log(nombreCompleto);

var nombre2="Kevin "+"Meza"
console.log(nombre2);


//convierte el número en String 
var numero=333;
//las evaluaciones de js de izq a derecha si encuentra primero un String 
//trata las demas variables como String 
var concatenarNumero=nombre+numero;
console.log(concatenarNumero);

concatenarNumero=numero/3+nombre;
console.log(concatenarNumero);

//la evaluación de todas maneras cuenta con una jerarquía 
// hace primero la división 
//posteriormente va de izq a derecha 
var jerarquia=nombre+(numero/3);
console.log(jerarquia);
