const formulario = document.querySelector("#formulario");
const resultado  = document.querySelector("#resultado");


document.addEventListener("DOMContentLoaded",()=>{

     formulario.addEventListener("submit",validarBusqueda);

});


function validarBusqueda(evt){

     evt.preventDefault();
     const busqueda = document.querySelector("#busqueda").value;

     if(busqueda===''){
          imprimirAlerta("Ingrese una palabra para comenzar la busqueda","error");
          return;
     }

     consultarApi(busqueda);

}

function consultarApi(busqueda){
     const gitUrl=`https://jobs.github.com/positions.json?search=${busqueda}`;
     const url=`https://api.allorigins.win/get?url=${ encodeURIComponent(gitUrl) }`;
     axios.get(url)
          .then(respuesta=>mostrarVacantes(JSON.parse(respuesta.data.contents)));
}
function mostrarVacantes(vacantes){
     limpiarHTML(resultado);

     if(vacantes.length>0){
          resultado.classList.add('grid');
          
          vacantes.forEach(({company,title,type,url}) => {
               resultado.innerHTML+=`
                <div class="shadow bg-white p-6 rounded">
                    <h2 class="text-2xl font-light mb-4">${title}</h2>
                    <p class="font-bold uppercase">Compañia:  <span class="font-light normal-case">${company} </span></p>
                    <p class="font-bold uppercase">Tipo de Contrato:   <span class="font-light normal-case">${type} </span></p>
                    <a class="bg-teal-500 max-w-lg mx-auto mt-3 rounded p-2 block uppercase font-xl font-bold text-white text-center" href="${url}">Ver Vacante</a>
                </div>`;
          });
     }else{

          imprimirAlerta("No se encontraron ofertas con esa palabra","error");
     }


}
function  imprimirAlerta(msj,tipo){
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
     formulario.appendChild(div);
     setTimeout(()=>{div.remove()},3000);
}

function limpiarHTML(div){
     while(div.firstChild){
          div.removeChild(div.firstChild);
     }
}