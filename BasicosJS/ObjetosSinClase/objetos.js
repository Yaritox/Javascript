//Creación de Objeto 
let persona={
     nombre:"Jordi", 
     apellido:"Cruz", 
     edad: 28,
     correo:"jordi.crume@gmail.com", 
     nombreCompleto:function(){

          return this.nombre+' '+this.apellido;
     }
}

//Acceder a los atributos
console.log(persona.apellido);
console.log(persona['apellido']);

//Agregar nueva propiedad 
persona.grado="Maestría";

//Actualizar una propiedad 
persona.grado="Doctorado";

console.log(persona);

//Eliminar una propiedad 
delete persona.grado;

console.log(persona);

//foreach 
for(propiedad in persona){

     console.log(propiedad);
     console.log(persona[propiedad]);
}


//Acceder a los métodos 
console.log(persona.nombreCompleto());


//Nueva forma de crear objeto 
let persona2 =new Object();
persona2.nombre="Kevin";
persona2.apellido="Meza";

//formas de imprimir un objeto 
console.log(persona2);
console.log(persona2.toString());

//convierte el objeto en array 
console.log(Object.values(persona2));

//convierte el objeto en json 
console.log(JSON.stringify(persona2));