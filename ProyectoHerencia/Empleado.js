class Empleado extends Persona{

     static contadorEmpleados=0;

     constructor(sueldo,nombre, apellido,email){
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