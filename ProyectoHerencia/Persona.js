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
          return 'id: '+this._idPersona+'nombre: '+this._nombre+' apellido'+this._apellido+' email'+this._email;
     }

}

