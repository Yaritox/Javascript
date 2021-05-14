console.log("first-class");
console.log("Programación funcional");

const suma = (a,b)=> a+b;
const multiplicacion = (a,b)=> a*b;


const sumarMultiplicar = fn => fn(10,20);

console.log(sumarMultiplicar(suma));
console.log(sumarMultiplicar(multiplicacion));