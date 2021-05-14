class Persona{
     
     static contadorPersonas=0;
     
     //valor constante estatico 
     static get MAX_OBJ(){
          return 10;
     }

     constructor(nombre, apellido){
          this._nombre=nombre;
          this._apellido=apellido;
          this._idPersona=++Persona.contadorPersonas;
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

     nombreCompleto(){
          return this._nombre+' '+this._apellido;
     }
}

class Empleado extends Persona{

     

     constructor(departamento, nombre, apellido){

          super(nombre,apellido);
          this._departamento=departamento;

          
     }

     get departamento(){
          return this._departamento;
     }

     set departamento(departamento){
          this._departamento=departamento
     }

     //sobreescritura 
     nombreCompleto(){
          return this._departamento+' '+super.nombreCompleto();
     }

     toString(){
          return this.nombreCompleto();
     }

     static Saludar(){
          return "Hola buenos días";
     }
}

let gerente=new Empleado('Gerente','Daniel','Cruz');
console.log(gerente);

let psicologo=new Empleado('Psicologo','Kevin','Meza');
console.log(psicologo);
//Static refiere que es un atributo/método de la clase
console.log(Empleado.Saludar());
console.log(Persona.contadorPersonas);