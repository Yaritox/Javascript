//expresion de declaracion (funtion declaration)
//estas permiten el hoisting 
function sumar(){
     console.log(2+2);
}

sumar();


//expresion de funcion (funtion expresion)
//no permite el hoisting 
const sumar2=function(){
     console.log(3+3);
}
sumar2();


console.log("algunas funciones nativas de JS");

//alert("Mensaje");

//const nombre=prompt("Cual es tu nombre");
console.log(parseInt("100"));

console.log("DIF metodos y funciones");
const numero=20;
const numero2="20";

console.log(parseInt(numero2));//funcion 
console.log(numero.toString());//método 


console.log("Parametros y argumentos");

//los parametros serían 2 valores (a y b )
function sumar2num(a,b){
     console.log(a+b);
}


//argumentos son los valores que obtendrán los parametors 
//las funciones serían 5 y 3 
sumar2num(5,3);

console.log("parametros por default");
function saludar(nombre="Desconocido",apellido="Desconocido"){
     console.log(`Hola mi nombre es ${nombre} y me apellido ${apellido}`);
}
saludar();

console.log("Cómunicacion entre funciones");


iniciarApp();

function iniciarApp(){
     
     console.log("Inicio la app");
     segunda();
}

function segunda(){

     console.log("desde la 2da funcion");
}

console.log("Funciones que se pasan valores");

function sumale(a,b){
     return a+b;
}

const resultado=sumale(8,9);
console.log(resultado);


let total=0;
function agregarCarrito(precio){
     return total+=precio;
}
function calcularImpuestos(total){
     return total*1.16;
}

total=agregarCarrito(100);
total=agregarCarrito(100);
total=agregarCarrito(100);
const pagar=calcularImpuestos(total);
console.log(total);
console.log(pagar);

console.log("funciones métodos");

const reproductor={
     reproducir: function(id=1){
          console.log(`Reproducción canción con el id ${id}`);
     },

     pausar: function(){
          console.log(`pausando`);
     }, 

     borrar: function(id){
          console.log(`La canción con el id ${id} ya fue eliminada`);
     }, 
     crearPlaylist: function(nombre="Desconocido"){
          console.log(`Creando playlist ${nombre}`);
     }
}

reproductor.reproducir();
reproductor.pausar();
reproductor.borrar(1);
reproductor.crearPlaylist("Perreo duro");

console.log("Arrow functions");

console.log("Funcion normal");

const aprendiendo=function(tecnologia){
     console.log(`Aprendiendo arrow functions ${tecnologia}`);
}

aprendiendo("JS");

console.log("Arrow function");


// en el caso de ser una linea suceden 2 cosas 
//no necesita llaves 
//el return es implicito
//si solo necesita un parametro no es necesario los parentesis 
const aprendiendo2=tecnologia=> `Aprendiendo arrow function2  con ${tecnologia}`;
console.log(aprendiendo2("js"));

console.log("foreach con arrow functions");



const reproductor2={

     cancion:'',

     reproducir: (id=1)=>console.log(`Reproducción canción con el id ${id}`),

     pausar: ()=> console.log(`pausando`), 

     borrar: id=>console.log(`La canción con el id ${id} ya fue eliminada`),
     
     crearPlaylist: (nombre="Desconocido")=>console.log(`Creando playlist ${nombre}`),

     set nuevaCancion(cancion){
          this.cancion=cancion
     },
     get obtenerCancion(){
          return this.cancion;
     }
}

reproductor2.crearPlaylist("Megadeth");
reproductor2.nuevaCancion="Tornado of soul";
console.log(reproductor2.obtenerCancion);
