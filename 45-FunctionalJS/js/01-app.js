console.log("first-class");
console.log("significa que se puede pasar funcion como parametro");
function suma(a,b){
     return a+b;
}

const resultado = suma;

console.log(resultado(1,3));