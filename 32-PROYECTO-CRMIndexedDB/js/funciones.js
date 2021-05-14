function imprimirAlerta(msj,tipo){
     const alerta=document.querySelector(".alerta");
     if(!alerta){
          const div=document.createElement("div");
          div.classList.add("px-4","py-3","rounded","max-w-lg","mx-auto","mt-6","text-center","border","alerta");
          div.textContent=msj;
          switch(tipo){
               case 'error':
                    div.classList.add("bg-red-100","border-red-100","text-red-700");
                    break;
               case 'correcto':
                    div.classList.add("bg-green-100","border-green-100","text-green-700");
                    break;
          }
          formulario.appendChild(div);
          setTimeout(()=>{div.remove()},3000);
     }
     
}
