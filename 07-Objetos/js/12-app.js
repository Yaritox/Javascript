//OBJECT LITERAL 
const producto8={
     nombre: "Apple watch",
     precio: 15000,
     disponible: true
}
//OBJECT CONSTRUCTOR
function Producto(nombre,precio){
     this.nombre=nombre;
     this.precio=precio;
     this.disponible=true;
}

const iphone=new Producto('Iphone 12 ', 18999);
const macbook=new Producto('MacBook Pro', 23999);

console.table(iphone);
console.table(macbook);