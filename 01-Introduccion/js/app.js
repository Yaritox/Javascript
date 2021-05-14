console.time("hola");

const nombre=prompt("Cuál es tu nombre");

document.querySelector('.contenido').innerHTML=`${nombre} esta aprendiendo JS moderno`;

//para imprimir objetos
let persona={
     nombre: "Jordi", 
     apellido: "Cruz", 
     correo: "jordi.crume@gmail.com"
};
console.table([1,2,3,4,5,]);
console.table(persona);

console.error("Hubo un error");

console.warn("Advertencias");

console.timeEnd("hola");