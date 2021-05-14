const texto=document.querySelector("#cargarTxt");

texto.addEventListener("click",obtenerTexto);

function obtenerTexto(){
     fetch('data/datos.txt')
     .then(respuesta=>{
          console.log(respuesta);
          return respuesta.text();
     })
     .then(datos=>{
          console.log(datos);
     })
     .catch(error=>{
          console.log(error);
     });

}