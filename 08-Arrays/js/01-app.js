const numeros=[1,2,3,45,33];

const meses = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo","Junio");


console.table(numeros);
console.table(meses);


const deTodo=["hola", 12, {nombre:"jordi"}];

console.table(deTodo);


console.log("Acceder a los valores de un arreglo ");
console.log(numeros[4]);

console.log("Saber el tamaño del arreglo ");
console.log(meses.length);

console.log("como recorrer un array ");
for(let mes of meses){
     
     console.log(mes);

}

console.log("agregar un nuevo valor al arreglo ");
console.log("insertar de forma imperativa ");
meses.push("Julio");


console.table(meses);

console.log("agregar valor ");
meses[12]="Diciembre";
console.table(meses);
console.log("quitar ");
meses.pop();
meses.pop();
meses.pop();
meses.pop();
meses.pop();
meses.pop();
console.table(meses);
console.log("inserta adelante del arreglo ");
numeros.unshift(0);
console.table(numeros);
console.log("eliminar adelante del arreglo ");
numeros.shift();
console.table(numeros);

console.log("eliminar de n posición ");
numeros.splice(2,1);
console.table(numeros);


const producto={
     nombre: "Tennis",
     precio: 200
}
const producto2={
     nombre: "Playera",
     precio: 150
}
const producto3={
     nombre: "Sudadera",
     precio: 500
}

console.log("forma imperactiva ");
const imperactivo=[];
imperactivo.push(producto);
imperactivo.push(producto2);
imperactivo.push(producto3);
console.table(imperactivo);

console.log("forma declarativa ");
const carrito=[]
let declarativa;
declarativa=[...carrito,producto];
declarativa=[...declarativa,producto2];
declarativa=[producto3,...declarativa];
console.table(declarativa);

console.log("destructing de un array");
const [primero]=numeros;
console.log("El primer elemento");
console.log(primero);

console.log("los primeros 3 elementos");
const [one,two,tree]=numeros;
console.log(one);
console.log(two);
console.log(tree);

console.log("solo el tercero");
const [,,unico]=numeros;
console.log(unico);

console.log("el primero en variable y los demas en un array sobrante");
const [uno,...sobrantes]=numeros;
console.log(uno);
console.table(sobrantes);

console.log("recorrer array de objetos");
for(let prod of imperactivo)
     console.log(prod.nombre);

console.log("uso de foreach");
imperactivo.forEach(prod => {
     console.log(`El producto ${prod.nombre} y su precio es de ${prod.precio}`);
});

console.log("uso de map");
imperactivo.map(prod=>{
     console.log(`El producto ${prod.nombre} y su precio es de ${prod.precio}`);
});
