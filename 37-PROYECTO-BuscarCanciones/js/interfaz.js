export const formulario=document.querySelector("#formulario-buscar");
export const buscar=document.querySelector("#buscar");
export const mensajes=document.querySelector("#mensajes");
export const resultado=document.querySelector("#resultado");
export const titulo=document.querySelector(".letra-resultado h2");

export function  imprimirAlerta(msj,tipo){
     const div=document.createElement("div");
     div.textContent=msj;
     switch(tipo){
          case 'error':
               div.classList.add("error");
               break;
          case 'correcto':
               div.classList.add("");
               break;
     }
     mensajes.appendChild(div);
     setTimeout(()=>{div.remove()},3000);
}