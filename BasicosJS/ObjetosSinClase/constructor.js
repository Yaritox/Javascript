function Persona(nombre,apellido, email){
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;

    this.nombreCompleto=function(){
        return this.nombre+' '+this.apellido;
    }
}

//PROTOTYPE sirve para agregar atributo o método a todos los objetos 
Persona.prototype.vivo=true;

let yo=new Persona('Jordi', 'Cruz', 'crume@gmail.com');
console.log(yo.nombreCompleto());

let novio=new Persona('Kevin','Meza','kevsbb@gmail.com');
console.log(novio.nombreCompleto());

console.log(novio.vivo);