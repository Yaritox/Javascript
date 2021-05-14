const salida=document.querySelector("#salida");
const microfono=document.querySelector("#microfono");

microfono.addEventListener('click',ejecutarVoz);

function ejecutarVoz(){
     const ejecutarVoz=webkitSpeechRecognition;
     const recognition=new ejecutarVoz();
     recognition.start();
     recognition.onstart=()=>{
          salida.classList.add("mostrar");
          salida.textContent="Escuchando...";
     }
     recognition.onspeechend=()=>{
          salida.textContent="Se dejo de grabar...";
     }

     recognition.onresult=evt=>{
          console.log(evt.results);
          const {confidence,transcript}=evt.results[0][0];
          const parrafo=document.createElement("p");
          parrafo.innerHTML=`Se escucho: ${transcript}`;
          salida.appendChild(parrafo);
     }
}    
