const carritoDiv=document.querySelector("#carrito");
const listaCursos=document.querySelector("#lista-cursos");
const contenedorCarritos=document.querySelector("#lista-carrito tbody");
const vaciar=document.querySelector("#vaciar-carrito");
let carrito=[]; 

cargarEventListeners();

function cargarEventListeners(){
     document.addEventListener("DOMContentLoaded",()=>{
          carrito=JSON.parse(localStorage.getItem("carrito")) || [];
          muestraCarrito();
     });

     listaCursos.addEventListener("click",agregarCurso);
     carritoDiv.addEventListener("click",eliminarCursoCarrito);
     vaciar.addEventListener("click",vaciarCarrito);
}


function agregarCurso(evt){
     //evita el href #
     evt.preventDefault();
     //Acceder solo al botón
     if(evt.target.classList.contains("agregar-carrito")){
          leerDatosCurso(evt.target.parentElement.parentElement);
     }
}

function leerDatosCurso(div){

     console.log(div);
     //crear objeto del curso
     const curso={
          imagen: div.querySelector("img").src,
          titulo: div.querySelector("h4").textContent,
          precio: div.querySelector(".precio span").textContent, 
          id: div.querySelector("a").getAttribute("data-id"),
          cantidad:1

     }
     //busca duplicidad
     const existe=carrito.some(cursoS=>cursoS.id === curso.id)
     if(existe){
          //map crea un nuevo array
          const cursos=carrito.map(cursoM=>{

               if(cursoM.id === curso.id){
                    cursoM.cantidad++;
                    return cursoM;
               }else{
                    return cursoM;
               }
          });

          carrito=[...cursos];

     }else{
          //agregando elementos al carrito(similar a push)
          carrito=[...carrito, curso];
     }
     muestraCarrito();

}

function muestraCarrito(){
     //Limpiar HTML 
     limpiarContenedorCarritos();

     //recorre carrito y crea HTML 
     carrito.forEach(curso=>{

          //divide el objeto
          const {imagen,titulo, precio, cantidad, id}=curso;

          const tr=document.createElement("tr");
          tr.innerHTML=`
          <td>
               <img src='${imagen}' width='100'>
          </td>
          
          <td>
               ${titulo}

          </td>
          
          <td>
               ${precio}
          </td>

          <td>
               ${cantidad}
          </td>

          <td>
              <a href='#' class="borrar-curso" data-id='${id}'>x</a>
          </td>
          `;
          //agregar html del carrito en el tbody
          contenedorCarritos.appendChild(tr);
     });

     storageCarrito();
     
}

function limpiarContenedorCarritos(){
     contenedorCarritos.innerHTML="";
}

function vaciarCarrito(evt){
     evt.preventDefault();
     carrito=[];
     muestraCarrito();
}


function eliminarCursoCarrito(evt){
     if(evt.target.classList.contains("borrar-curso")){
          const cursoID=evt.target.getAttribute("data-id");
          carrito=carrito.filter(curso=>curso.id!==cursoID);
     }
     muestraCarrito();
}

function  storageCarrito(){
     localStorage.setItem("carrito",JSON.stringify(carrito));
}