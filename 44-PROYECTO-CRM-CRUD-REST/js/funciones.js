export function  imprimirAlerta(msj,tipo){
     const div=document.createElement("div");
     div.textContent=msj;
     switch(tipo){
          case 'error':
               div.classList.add("bg-red-100","border-red-400","text-red-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center");
               break;
          case 'correcto':
               div.classList.add("bg-green-100","border-green-400","text-green-700","px-4","py-3","rounded","max-w-md","mx-auto","mt-6","text-center");
               break;
     }
     const formulario = document.querySelector("#formulario");
     formulario.appendChild(div);
     setTimeout(()=>{div.remove()},3000);
}

export function limpiarHTML(div){
     while(div.firstChild){
          div.removeChild(div.firstChild);
     }
}