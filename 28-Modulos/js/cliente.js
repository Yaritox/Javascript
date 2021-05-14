/*console.log(nombre);
console.log(edad);
console.log(apellido);*/


//modulos

export const nombreCliente="Jordi";

export const ahorro=200;

export function mostrarInformacion(nombre,ahorro){
     return`Tu nombre es: ${nombre} y tienes un ahorro de ${ahorro}`;
}


export class Cliente{
     constructor(nombre,ahorro){
          this.nombre=nombre;
          this.ahorro=ahorro;
     }

     mostrarInformacion(){
        return`Tu nombre es: ${this.nombre} y tienes un ahorro de ${this.ahorro}`;  
     }
}

//solo existe uno 
export default function(){
     console.log("este es el exportDefautl");
}