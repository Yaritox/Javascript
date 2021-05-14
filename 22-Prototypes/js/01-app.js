const cliente={
     nombre: "jordi",
     saldo: 500
};

console.log(cliente);

function Cliente(nombre,saldo){

     this.nombre=nombre;
     this.saldo=saldo;

}

const kevin=new Cliente("Kevin",600);

console.log(kevin);


function formatearCliente(cliente){
     const {nombre,saldo}=cliente;

     return `El cliente ${nombre} tiene un saldo de $${saldo}`
}

console.log(formatearCliente(kevin));


function Empresa(nombre,saldo,categoria){

     this.nombre=nombre;
     this.saldo=saldo;
     this.categoria;

}

const empresa=new Empresa("DPW",900,"Web");

console.log("usando prototype");

function Cuenta(nombre,saldo){

     this.nombre=nombre;
     this.saldo=saldo;

}

const cuenta=new Cuenta("Teresita",3000);

Cuenta.prototype.tipoCuenta=function(){
     if(this.saldo>0){
          tipo="credito";
     }
     else{
          tipo="debito";
     }

     return tipo;
};   

Cuenta.prototype.infoCuenta=function(){
     return`El cliente ${this.nombre} con saldo en su cuenta de $${this.saldo} tiene una cuenta de tipo ${this.tipoCuenta()}`;
};
console.log("herencia con prototype")

function CuentaPremium(nombre,saldo,bono){
     Cuenta.call(this,nombre,saldo);
     this.bono=bono;
}
CuentaPremium.prototype=Object.create(Cuenta.prototype);
const cuentaPremium=new CuentaPremium("Lalito",3000,1000);
console.log(cuentaPremium);
console.log(cuentaPremium.infoCuenta());