class Persona{
     
     constructor(nombre, apellido){
          this._nombre=nombre;
          this._apellido=apellido;
     }
     get nombre(){
           return this._nombre;
     }
     get apellido(){
           return this._apellido;
     }

     set nombre(nombre){
          this._nombre=nombre;
     }

     set apellido(apellido){
          this._apellido=apellido;
     }


}
//instanciar 
let yo=new Persona('Jordi', 'Cruz');

console.log(yo.nombre);

yo.nombre="Jordi Jaromil";

console.log(yo.nombre);


let novio=new Persona('Kevin','Meza');

console.log(novio);
