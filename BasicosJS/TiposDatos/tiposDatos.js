//Es una variable de tipo STRING 
var nombre="Jordi";
console.log(nombre);

console.log(typeof nombre);
//Es una variable de tipo numerico 
var numero=123;
console.log(numero);

//variable de tipo boolean
var bandera=true;
console.log(bandera);
bandera=false;
console.log(bandera);

//variable de tipo SYMBOL son constantes en JS
var simbolo=Symbol("mi simbolo");
console.log(simbolo);

//var undefined es cuando la variable no tiene ni tipo ni valor 
var indefinido;
console.log(indefinido);

//null significa ausencia de valor 
//(es tipo obj por que se creía que puede tomar cualquier valor por lo que se le asigna por default uno complejo)
var nulo=null;
console.log(nulo);

//JS en un lenguaje de variable dinamicas 
//eso quiere decir que una variable se le puede cambiar de valor 
//y eso solo generaría un cambio de tipo y valor 
nombre=130;
console.log(nombre);

//Como se muestra la variable nombre era String y ahora es number 

console.log(typeof nombre);

//typeof nos permite saber que tipo tiene en ese momento !

//en JS una función tmbien es un tipo de dato 
function myFuncion(){}
console.log(myFuncion);
console.log(typeof myFuncion);


//tipo de dato objeto
var objeto={
    nombre:"Jordi",
    apellido:"Cruz",
    telefono:2481308139
}

console.log(objeto);


//tipo de dato clase 
class Persona{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(Persona);

//array un arreglo es de tipo object
var autos=["bmw","audi","volvo"];
console.log(autos);
console.log(typeof autos);

// una cadena vacia no es nulo ni indefinida 
var vacio='';
console.log(vacio);
console.log(typeof vacio);

//El espacio si es un caracter 
var vacio=' ';
console.log(vacio);
console.log(typeof vacio);