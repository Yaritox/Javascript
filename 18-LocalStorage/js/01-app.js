console.log("Crear localstorage");
localStorage.setItem('nombre','Jordi Jaromil Cruz Medrano');

console.log("convertir objeto a STRING")
const producto={
     nombre: "Macbook",
     precio: 400
}

const stringProducto=JSON.stringify(producto);
console.log(stringProducto);
console.log("localStorage no acepta más que strings");
localStorage.setItem("producto",stringProducto);


const meses=["enero","febrero","abril","mayo","junio"];
localStorage.setItem("meses",JSON.stringify(meses));

console.log("como obtener un localStorage");
console.log(localStorage.getItem("meses"));
const meses2=JSON.parse(localStorage.getItem("meses"));
console.log(meses2);


console.log("como eliminar localStorge");
localStorage.removeItem("nombre");


console.log("para actualizar un registro");
meses2.push("nuevo mes");
localStorage.setItem("meses",JSON.stringify(meses2));
