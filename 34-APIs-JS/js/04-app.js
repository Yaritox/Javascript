const btnAbrir=document.querySelector("#abrir-pantalla-completa");
const btnSalir=document.querySelector("#salir-pantalla-completa");

btnAbrir.addEventListener("click",pantallaCompleta);
btnSalir.addEventListener("click",salirCompleta);

function pantallaCompleta(){
     document.documentElement.requestFullscreen();
}

function salirCompleta(){
     document.exitFullscreen();
}
