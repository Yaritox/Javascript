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