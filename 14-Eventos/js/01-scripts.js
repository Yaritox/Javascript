console.log("1");
console.log("Eventos al cargar la pagina");
document.addEventListener("DOMContentLoaded",()=>{
     console.log("2");
});

console.log("3");

console.log("Eventos del mouse");
const nav=document.querySelector(".navegacion");
nav.addEventListener("mouseenter",()=>{
     console.log("mouse en el nav");
     nav.style.backgroundColor="transparent";
});

nav.addEventListener("mouseout",()=>{
     console.log("mouse saliendo del nav");
     nav.style.backgroundColor="white";
});

nav.addEventListener("click",()=>{
     console.log("mouse saliendo del nav");
     nav.style.backgroundColor="green";
});

nav.addEventListener("dblclick",()=>{
     console.log("mouse saliendo del nav");
     nav.style.backgroundColor="red";
});

console.log("Eventos con el teclado");

const busqueda=document.querySelector(".busqueda");

busqueda.addEventListener("keydown",()=>{
     console.log("escribiendo...");
});

busqueda.addEventListener("blur",()=>{
     console.log("fuera del buscador");
});

busqueda.addEventListener("copy",()=>{
     console.log("copianding");
});

busqueda.addEventListener("cut",()=>{
     console.log("cortanding");
});
busqueda.addEventListener("paste",()=>{
     console.log("peganding");
});

busqueda.addEventListener("input",(evt)=>{
     console.log(evt.type);
     console.log(evt.target.value);
});


console.log("Evento SUBMIT ");

const formulario=document.querySelector('#formulario');

formulario.addEventListener("submit",probarFormulario);

function probarFormulario(evt){
     evt.preventDefault();
     console.log(evt);
     console.log(evt.target.method);

}

console.log("Eventos del scroll del mouse");

window.addEventListener("scroll",()=>{
     console.log("scrolling");
});


console.log("Evento que se propagan como burbuja");

const cardDiv=document.querySelector(".card");
const infoDiv=document.querySelector(".info");
const titulo=document.querySelector(".titulo");

cardDiv.addEventListener("click",e=>{
     e.stopPropagation();
     console.log("click en card");
});
infoDiv.addEventListener("click",e=>{
     e.stopPropagation();
     console.log("click en info");
});
titulo.addEventListener("click",e=>{
     e.stopPropagation();
     console.log("click en titulo");
});