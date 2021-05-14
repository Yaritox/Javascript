const suma = (a,b,c) => a+b+c;

console.log("curring es dividir función en partes");
const paracial = (a)=>(b,c)=>suma(a,b,c);


const primerNumero= paracial(5);
const resultado = primerNumero(5,5);

console.log(resultado);

const resultado2 = paracial(10)(10,10);

console.log(resultado2);