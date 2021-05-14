class Persona{

     static contadorPersonas=0;
     constructor(nombre, apellido, email){
          this._idPersona=++Persona.contadorPersonas;
          this._nombre=nombre;
          this._apellido=apellido;
          this._email=email;

     }

     get idPersona(){     
          return this._idPersona;
     }

     set idPersona(idPersona){
          this._idPersona=idPersona;
     }
     
     get nombre(){     
          return this._nombre;
     }

     set nombre(nombre){
          this._nombre=nombre;
     }

     get apellido(){     
          return this._apellido;
     }

     set apellido(apellido){
          this._apellido=apellido;
     }
     get email(){     
          return this._email;
     }

     set email(email){
          this._email=email;
     }

     toString(){
          return 'id: '+this._idPersona+' nombre: '+this._nombre+' apellido: '+this._apellido+' email: '+this._email;
     }

}

class Empleado extends Persona{

     static contadorEmpleados=0;

     constructor(nombre, apellido,email,sueldo){
          super(nombre, apellido,email);
          this._idEmpleado=++Empleado.contadorEmpleados;
          this._sueldo=sueldo;

     }

     get idEmpleado(){     
          return this._idEmpleado;
     }

     set idEmpleado(idEmpleado){
          this._idEmpleado=idEmpleado;
     }

     get sueldo(){     
          return this._sueldo;
     }

     set sueldo(sueldo){
          this._sueldo=sueldo;
     }

     toString(){
          return super.toString()+' idEmpleado: '+this._idEmpleado+' sueldo: '+this._sueldo;
     }
}
class Cliente extends Persona{

     static contadorClientes=0;

     constructor(nombre, apellido,email,fechaRegistro){
          super(nombre, apellido,email);
          this._idCliente=++Cliente.contadorClientes;
          this._fechaRegistro=fechaRegistro;

     }

     get idCliente(){     
          return this._idCliente;
     }

     set idCliente(idCliente){
          this._idCliente=idCliente;
     }

     get fechaRegistro(){     
          return this._fechaRegistro;
     }

     set fechaRegistro(fechaRegistro){
          this._fechaRegistro=fechaRegistro;
     }

     toString(){
          return super.toString()+' idCliente: '+this._idCliente+' fechaRegistro: '+this._fechaRegistro;
     }

}

let persona=new Persona('Jordi','Cruz','jordi@mail.com');
console.log(persona.toString());

let empleado=new Empleado('Jordi','Cruz','jordi@mail.com',15000);
console.log(empleado.toString());

let cliente=new Cliente('Jordi','Cruz','jordi@mail.com',new Date());
console.log(cliente.toString());