let a=3;
let b=2;

let z=a+b;
console.log("El resultado de la suma: "+z);

z=a-b;
console.log("El resultado de la resta: "+z);

z=a*b;
console.log("El resultado de la multiplicación: "+z);

z=a/b;
console.log("El resultado de la división: "+z);

z=a%b;
console.log("El resultado de residuo: "+z);

z=a**b; //3^2
console.log("El resultado del exponente: "+z);

//___________________________________________OPERACIONES DE ASIGNACIÓN 
z+=3
console.log("El resultado asignación con suma: "+z);

z-=3
console.log("El resultado asignación con resta: "+z);

z*=3
console.log("El resultado asignación con multiplicación: "+z);

z/=9;
console.log("El resultado asignación con división: "+z);


//___________________________________________OPERACIONES DE COMPARACIÓN
let x=3, y=2, w="3";

//___________________________________________________________IGUAL QUE 

//El doble igual compara los valores sin importar los tipos 
z=(a==b);
console.log(z);

z=(a==c);
console.log(z);

//El triple igual revisa los valores y los tipos de las variables

z=(a===b);
console.log(z);

z=(a===c);
console.log(z);

b=3;

//Como ya son del mismo tipo y con el mismo valor da true 
z=(a===b);
console.log(z);

//___________________________________________________________DIFERENTE QUE 
//El doble igual compara los valores sin importar los tipos 
z=(a!=b);
console.log(z);

z=(a!=c);
console.log(z);

//El triple igual revisa los valores y los tipos de las variables

z=(a!==b);
console.log(z);

z=(a!==c);
console.log(z);

b=3;

//Como ya son del mismo tipo y con el mismo valor da true 
z=(a!==b);
console.log(z);