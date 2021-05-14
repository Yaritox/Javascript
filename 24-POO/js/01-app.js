class Cliente{
     
     #nombre;
     #saldo;
     constructor(nombre,saldo){
          this.#nombre=nombre;
          this.#saldo=saldo;
     }

     set setNombre(nombre){
          this.#nombre=nombre;
     }

     get getNombre(){
          return this.#nombre;
     }

     set setSaldo(saldo){
          this.#saldo=saldo;
     }

     get getSaldo(){
          return this.#saldo;
     }
     mostrarInfo(){
          return `Cliente: ${this.nombre} Saldo: ${this.saldo}`;
     }

     static saludo(){
          
          return `Bienvenido al cajero`;
     }

}
console.log(Cliente.saludo());
const cliente=new Cliente('Jordi',500);
console.log(cliente.mostrarInfo());

class Empresa extends Cliente{

     constructor(nombre,saldo,telefono,tipo){
          super(nombre,saldo);
          this.telefono=telefono;
          this.tipo=tipo;
     }

     set setNombre(nombre){
          this.nombre=nombre;
     }

     mostrarInfo(){
          return `Cliente: ${this.nombre} Saldo: ${this.saldo} Telefono: ${this.telefono} Tipo: ${this.tipo}`;
     }

     static saludo(){
          
          return `Bienvenido al cajero de la empresa`;
     }

}

console.log(Empresa.saludo());
const empresa=new Empresa('Udemy',1300,'2481308139','Web');
console.log(empresa.mostrarInfo());


