class Producto{
     static contadorProductos=0;

     constructor(nombre,precio){

          this._idProducto=++Producto.contadorProductos;
          this._nombre=nombre;
          this._precio=precio;
     }

     get nombre(){
          return this._nombre;
     }
     set nombre(nombre){
          this._nombre=nombre;
     }
     get idProducto(){
          return this._idProducto;
     }
     set idProducto(idProducto){
          this._idProducto=idProducto;
     }
     get precio(){
          return this._precio;
     }
     set precio(precio){
          this._precio=precio;
     }

     toString(){
          return `
               idProducto: ${this._idProducto} 
               nombre:  ${this._nombre}
               precio: ${this._precio} 
          `;

     }
}
class Orden{
     static contadorOrdenes=0;
     
     constructor(){
          this._idOrden=++Orden.contadorOrdenes;
          this._contadorProductosAgregados=0;
          this._productos=[];

     }

     agregarProducto(producto){
          this._productos.push(producto);
          this._contadorProductosAgregados++;
     }

     calcularTotal(){
          let total=0;
          for(let producto of this._productos){
             total+=Number(producto.precio);
          }
          return total;
     }

     mostrarOrden(){
          for(let producto of this._productos){
             console.log(producto.toString());
          }
          console.log(`Numero Orden:  ${this._idOrden} Total a pagar $${this.calcularTotal()}`);
     }

     toString(){
          return `Orden{ 
               idOrden: ${this.__idOrden} 
               productos:  ${this._productos}
          }`;
     }
}
let iphone=new Producto('iphone',16000);
console.log(iphone.toString());

let airpods=new Producto('airpods',3999);

let orden=new Orden();
orden.agregarProducto(iphone);
orden.agregarProducto(airpods);

console.log(orden.toString());

console.log(orden.calcularTotal());

orden.mostrarOrden();