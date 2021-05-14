class DispositivoEntrada{

     constructor(tipoEntrada, marca){
          
          this._tipoEntrada=tipoEntrada;
          this._marca=marca;

     }

     get tipoEntrada(){
          return this._tipoEntrada;
     }

     set tipoEntrada(tipoEntrada){
          this._tipoEntrada=tipoEntrada
     }

     get marca(){
          return this._marca;
     }

     set marca(marca){
          this._marca=marca
     }

}
class Raton extends DispositivoEntrada{

     static contadorRatones=0;
     constructor(tipoEntrada, marca){

          super(tipoEntrada, marca);
          this._idRaton=++Raton.contadorRatones;

     }

     toString(){
          return `Raton{ idRaton: ${this._idRaton} marca: ${this._marca} tipo entrada: ${this._tipoEntrada} }`;
     }

}

class Teclado extends DispositivoEntrada{

     static contadorTeclados=0;
     constructor(tipoEntrada, marca){

          super(tipoEntrada, marca);
          this._idTeclado=++Teclado.contadorTeclados;

     }

     toString(){
          return `Teclado{ idTeclado: ${this._idTeclado} marca: ${this._marca} tipo entrada: ${this._tipoEntrada} }`;
     }

}

class Monitor{

     static contadorMonitores=0;

     constructor(tam, marca){

          this._idMonitor=++Monitor.contadorMonitores;               
          this._tam=tam;
          this._marca=marca;

     }

     get idMonitor(){
          return this._idMonitor;
     }

     set idMonitor(idMonitor){
          this._idMonitor=idMonitor
     }

     get tam(){
          return this._tam;
     }

     set tam(tam){
          this._tam=tam
     }

     get marca(){
          return this._marca;
     }

     set marca(marca){
          this._marca=marca
     }

     toString(){
          return `Monitor{ idMonitor: ${this._idMonitor} marca: ${this._marca} Tamaño: ${this._tam} }`;
     }
}

class Computadora{
     static contadorComputadoras=0;
     
     constructor(nombre, raton, teclado, monitor){
          this._idComputadora=++Computadora.contadorComputadoras;
          this._nombre=nombre;
          this._raton=raton;
          this._teclado=teclado;
          this._monitor=monitor;
     }

     get nombre(){
          return this._nombre;
     }

     set nombre(nombre){
          this._nombre=nombre
     }

     get idComputadora(){
          return this._idComputadora;
     }

     set idComputadora(idComputadora){
          this._idComputadora=idComputadora
     }

     get raton(){
          return this._raton;
     }

     set raton(raton){
          this._raton=raton
     }
     get teclado(){
          return this._teclado;
     }

     set teclado(teclado){
          this._teclado=teclado
     }

     get monitor(){
          return this._monitor;
     }

     set monitor(monitor){
          this._monitor=monitor
     }

     toString(){
          return `Computadora 
          id: ${this._idComputadora}
          nombre: ${this._nombre}
          raton: ${this._raton}
          teclado: ${this._teclado}
          monitor: ${this._monitor}}`;
     }

}

let  raton=new Raton('Bluethooth','Apple');
let  teclado=new Raton('Bluethooth','Apple');
let  monitor=new Monitor('Grande','Apple');
let  computadora=new Computadora('MacbookPro', raton, teclado, monitor);

console.log(computadora.toString());

console.log(computadora instanceof Computadora);