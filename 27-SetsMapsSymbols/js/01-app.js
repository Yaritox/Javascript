console.log("Los set no permiten duplciados en arrays");
const carrito=new Set();

carrito.add("camisa");
carrito.add("disco");
carrito.add("disco");


console.log(carrito);

console.log(carrito.size);


console.log(carrito.has("camisa"));

console.log(carrito.delete("camisa"));

console.log(carrito.delete("guitarra"));

carrito.add("iphone");
carrito.add("mac");

carrito.forEach(producto => {
     console.log(producto);
     
});

carrito.clear();

console.log(carrito);

console.log("Set debil, es te solo acepta objetos (no tiene size ni se puede usar foreach)");
const cliente={
     nombre:"jordi",
     saldo:3000
}
const debil=new WeakSet();
debil.add(cliente);

console.log(debil);

console.log(debil.has(cliente));

debil.delete(cliente);

console.log(debil);


console.log("Qué son los maps");

const map=new Map([["paterno", "Cruz"], ["materno","Medrano"]]);

map.set("nombre","Jordi");
map.set("saldo",5000);
map.set("vigente",true);

console.log(map);

console.log(map.size);

console.log(map.has("nombre"));


console.log(map.get("nombre"));

map.forEach((valor,index) => {
     console.log(`El index es ${index} con el valor ${valor}`);
});

map.clear();
console.log(map);



console.log("Qué son los maps debiles (no tiene size ni se puede usar foreach)");

const producto={
     id:10
}

const mapDebil=new WeakMap();
mapDebil.set(producto, 'Monitor');
console.log(mapDebil);


console.log("Qué son los symbols");



const sym=Symbol('1');
const sym2=Symbol('1');

console.log("son 2 simbol exactamente iguales");
console.log(sym);
console.log(sym2);

console.log("mas para js cada Symbol es diferente auque contengan el mismo valor ");
if(sym == sym2){
     console.log("son iguales");
}else{
     console.log("son diferentes");
}

const nombre=Symbol('nombre del cliente');

const persona={};

persona[nombre]="Jordi";
persona.apellido="Cruz";

console.log(persona);

console.log(persona.nombre);
console.log(persona[nombre]);


for(let i in persona)
     console.log(i);


console.log("Crear un  iterador");
function crearIterador(album){
     let indice=0;
     return {
          siguiente:()=>{
               const fin=(indice>=album.length);
               const valor = !fin ? album[indice++]: undefined;

               return{
                    fin,
                    valor
               } 
          }
     };
}
const album=["Me cuesta tanto olvidarte", "Mujer contra mujer", "7 de septiembre"];

const recorrerAlbum=crearIterador(album);

console.log(recorrerAlbum.siguiente());
console.log(recorrerAlbum.siguiente());
console.log(recorrerAlbum.siguiente());


console.log("Crear un generador");

function *crearGenerador(){
     yield 1;
     yield "Juan";
     yield 3+3;
     yield true;

}

const iterador=crearGenerador();

console.log(iterador);
console.log(iterador.next());
console.log(iterador.next().value);




function *generadorMarcas(marcas){
     for(let i=0; i<marcas.length;i++){
          yield marcas[i];
     }
}


const marcas=["iphone","samsung","motorola","sony"];

const iterador2=generadorMarcas(marcas);

console.log(iterador2);
console.log(iterador2.next());
console.log(iterador2.next().value);


console.log("Otros iteradores");
const ciudades=["puebla","cdmx","guadalajara"];
const ordenes=new Set([1,45,22,55,823]);
const datos=new Map([["profesion","web"],["experiencia",3]]);

for(let entry of ciudades.entries()){
     console.log(entry);
}

for(let entry of ordenes.entries()){
     console.log(entry);
}

for(let entry of datos.entries()){
     console.log(entry);
}



for(let value of ciudades.values()){
     console.log(value);
}

for(let value of ordenes.values()){
     console.log(value);
}
for(let value of datos.values()){
     console.log(value);
}



for(let key of ciudades.keys()){
     console.log(key);
}

for(let key of ordenes.keys()){
     console.log(key);
}
for(let key of datos.keys()){
     console.log(key);
}


for(let ciudad of ciudades){
     console.log(ciudad);
}

for(let orden of ordenes){
     console.log(orden);
}
for(let dato of datos){
     console.log(dato);
}
