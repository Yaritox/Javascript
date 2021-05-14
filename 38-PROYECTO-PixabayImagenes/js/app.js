const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginacion = document.querySelector("#paginacion");

const xPagina=50;

let totalPaginas;
let iterador;
let paginaActual=1;

window.onload=()=>{

     formulario.addEventListener("submit",validarFormulario);

}

function validarFormulario(evt){
     evt.preventDefault();

     const termino = document.querySelector("#termino").value;

     if(termino===''){
          imprimirAlerta("Agregue termino de busqueda","error");
          return;
     }

     buscarImagenes();
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

function buscarImagenes(){
     const termino = document.querySelector("#termino").value;
     const id = "21470489-882b1bd342cc3ec58213f1ca0";
     const url = `https://pixabay.com/api/?key=${id}&q=${termino}&per_page=${xPagina}&page=${paginaActual}`;

     fetch(url)
     .then(resultado=>resultado.json())
     .then(imagenes=>{
          totalPaginas=calcularPaginas(imagenes.totalHits);
          console.log(totalPaginas);
          mostrarImagenes(imagenes.hits);
     });
}

function *crearPaginador(total){
     for(let i=1; i<=total;i++){
          yield i;
     }
}
function mostrarImagenes(imagenes){
     limpiarHTML(resultado);
     console.log(imagenes);
     imagenes.forEach(({previewURL,likes, views,largeImageURL}) => {
          resultado.innerHTML+=`
          <div class='w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4'>
               <div class='bg-white'>
                    <img class='w-full' src='${previewURL}'>
                    <div class='p-4'>
                      <p class='font-bold'>${likes} <span class='font-light'>  Me gusta </span></p>
                      <p class='font-bold'>${views} <span class='font-light'>  vista </span></p>
                      <a class='block w-full bg-blue-800 hover:bg-blue-50 text-white text-center mt-5 p-1 uppercase font-bold rounded'
                         href='${largeImageURL}' target='_blank'>Ver imagen</a>
                    </div>
               </div>
          </div>`;
     });
     limpiarHTML(paginacion);
     imprimirPaginador();
}

function imprimirPaginador(){
     iterador=crearPaginador(totalPaginas);
     while(true){
          
          const {value,done}=iterador.next();
          
          if(done)return;

          const boton=document.createElement("a");
          boton.href="#"
          boton.dataset.pagina=value;
          boton.textContent=value;
          boton.classList.add('siguiente','bg-yellow-400','px-4','py-1','mr-2','font-bold','mb-4','uppercase','rounded');
          boton.onclick=()=>{
               paginaActual=value;
               buscarImagenes();
          };

          paginacion.appendChild(boton);


     }
}


function limpiarHTML(div){
     while(div.firstChild){
          div.removeChild(div.firstChild);
     }
}
function calcularPaginas(total){
     return (Math.ceil(total/xPagina));
}