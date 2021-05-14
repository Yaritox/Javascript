let elemento;
elemento=document.head;
console.log(elemento);

elemento=document.body;
console.log(elemento);

elemento=document.domain;
console.log(elemento);


elemento=document.forms;
console.log(elemento);

console.log("Seleccionar elementos por su clase");
const header=document.getElementsByClassName("contenedor");
console.log(header);


//el get element by id solo va a seleccionar el primero 
console.log("Seleccionar por el id");
const formulario=document.getElementById("formulario");
console.log(formulario);

//el query solo regresa el primero que encuentra (se usa css para buscar)
console.log("Como funciona querySelector");
const card= document.querySelector('.card');
console.log(card);

//el query  regresa todos 
console.log("Como funciona querySelectorAll");
const card2= document.querySelectorAll('.card');
console.log(card2);
//(se usa css para buscar)
const premium=document.querySelector(".premium .info h3 ");
console.log(premium);


//modificar elementos de JS 
const h1=document.querySelector(".contenido-hero h1");
console.log(h1);

//no encuentra hidden 
console.log(h1.innerText);
//si encuentra hidden 
console.log(h1.textContent);

//trae el HTML 
console.log(h1.innerHTML);


const titulo=document.querySelector(".contenido-hero h1").innerHTML;
console.log(titulo);

console.log("cambiar el titulo");
document.querySelector(".contenido-hero h1").innerHTML="El nuevo titulo de Jordi Cruz";

console.log("cambiar imagen");
const imagen=document.querySelector(".card img");
console.log(imagen);
imagen.src="img/hacer3.jpg";

console.log("cambiar css");
h1.style.backgroundColor="red";
h1.style.fontFamily="Arial";
h1.style.textTransform="uppercase"



console.log("traversing del DOM");
const navegacion=document.querySelector("nav");
console.log(navegacion);
//los espacios en blancos son elementos
console.log(navegacion.childNodes);

//divide los tipos
console.log(navegacion.children);


console.log("traversing del DOM2");
//Accedo al div 
//después al titulo
card.children[1].children[1].innerHTML="Comida vegana";


console.log("Pasar al siguiente card");
console.log(card.nextElementSibling);

console.log("Pasar al último card");
console.log(document.querySelector(".card:nth-child(4)"));

console.log("Pasar al anterior card");
console.log(document.querySelector(".card:nth-child(4)").previousElementSibling);

console.log("Eliminar elementos ");
const primerEnlace=document.querySelector("a");
console.log(primerEnlace);
primerEnlace.remove();

const padre=document.querySelector(".navegacion");
console.log(padre.children);
padre.removeChild(padre.children[0]);


console.log("Agregar HTML desde JS");
const nuevoEnlace=document.createElement('a');
nuevoEnlace.textContent="Nuevo Enlace";
nuevoEnlace.href="http://google.com";
nuevoEnlace.target="_blank";

padre.appendChild(nuevoEnlace);

padre.insertBefore(nuevoEnlace,padre.children[0]);


const parrafo1=document.createElement('p');
parrafo1.textContent="Concierto";
parrafo1.classList.add("categoria", "concierto");


const parrafo2=document.createElement('p');
parrafo2.textContent="Concierto de caifanes";
parrafo2.classList.add("titulo");


const parrafo3=document.createElement('p');
parrafo3.textContent="$1000 x persona";
parrafo3.classList.add("precio");

const div=document.createElement("div");
div.classList.add('info');
div.appendChild(parrafo1);
div.appendChild(parrafo2);
div.appendChild(parrafo3);

const nuevaImagen=document.createElement("img");
nuevaImagen.src="img/hacer1.jpg"


const cardNuevo=document.createElement("div");
cardNuevo.classList.add("card");
cardNuevo.appendChild(nuevaImagen);
cardNuevo.appendChild(div);

const insertar=document.querySelector(".hacer .contenedor-cards");

insertar.appendChild(cardNuevo);

console.log(insertar);


const flotante=document.querySelector(".btn-flotante");
const footer=document.querySelector(".footer");
/*
flotante.addEventListener('click',()=>{
     console.log("Le diste click en el boton");
});
*/
flotante.addEventListener('click',mostrarOcultarFooter);

function mostrarOcultarFooter(){
     if(footer.classList.contains("activo")){
          footer.classList.remove("activo");
          this.classList.remove("activo");
          this.innerHTML="Idioma y Moneda";
     }else{
          footer.classList.add("activo");
          this.classList.add("activo");
          this.innerHTML="Cerrar x";
     }
     
}