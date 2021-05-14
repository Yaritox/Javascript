const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre', 'Octubre']
const meses3=['Noviembre', 'Diciembre'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 100 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Audifonos inalambricos', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

console.log("Comprovar si un valor existe en un array sin obj");

const resultado=meses.includes("Enero");
console.log(resultado);

const resultado2=meses.some(mes=>mes==='Enero');
console.log(resultado2);

console.log("Comprovar si un valor existe en un obj");
const producto=carrito.some(producto=>producto.nombre==="Iphone");
console.log(producto);

console.log("Buscar indices");
const indice =meses.findIndex(mes=>mes==="Diciembre");
console.log(indice);

const indice2=carrito.findIndex(producto=>producto.nombre==="Tablet");
console.log(indice2);

console.log("Funcion reductora");
let total= carrito.reduce((total, producto)=>total+producto.precio,0);
console.log(total);

console.log("Nuevo arreglo con el parametro seleccionado");
const nuevoArreglo=carrito.filter(producto=>producto.precio===100);
console.log(nuevoArreglo);


console.log("Crear nuevo arreglo con el parametro de busqueda 1");
const busca=carrito.find(producto=>producto.precio===100);
console.log(busca);


console.log("Todos los elementos deben de cumplir en todos los objetos para regresar true");

const validacion=carrito.every(producto=>producto.precio>0);
console.log(validacion);


console.log("Unir arreglos");
const mesesFinales=meses.concat(meses2,meses3,"El tercer mes");
console.log(mesesFinales);


//Forma declarativa 
const mesesFinales2=[...meses,...meses2,...meses3,"El tercer mes"];
console.log(mesesFinales2);
