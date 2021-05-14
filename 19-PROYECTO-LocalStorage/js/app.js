const formulario=document.querySelector("#formulario");
const listaTweets=document.querySelector("#lista-tweets");
let tweets=[];

eventListener();

function eventListener(){
     
     document.addEventListener("DOMContentLoaded",()=>{

          // si no tiene nada lo asigna como un arreglo vacio
          tweets=JSON.parse(localStorage.getItem("tweets")) || [];
          mostrarTweets();
     });

     formulario.addEventListener("submit",agregarTweet);

}

function agregarTweet(evt){

     evt.preventDefault();
     const tweet=document.querySelector("#tweet").value;
     if(tweet===''){
          mostrarError("Un tweet no puede ir vacio");
          return; //evita que se siga ejecuntado la función
     }
     const objTweet={
          id: Date.now(),
          tweet //como el atributo se llama igual que la variable se pasa solo uno
     }

     tweets=[...tweets,objTweet];
     mostrarTweets();
     formulario.reset();

}

function mostrarError(msj){

     const msjError=document.createElement("p");
     msjError.textContent=msj;
     msjError.classList.add("error");

     const contenido=document.querySelector("#contenido");
     contenido.appendChild(msjError);

     setTimeout(()=>{
          msjError.remove();
     },3000);

}

function mostrarTweets(){
     listaTweets.innerHTML="";
     if(tweets.length>0){
          tweets.forEach(tweet=>{ 
               const btnEliminar=document.createElement("a");
               btnEliminar.classList.add("borrar-tweet");
               btnEliminar.textContent="x";
               
               btnEliminar.onclick=()=>{
                    borrarTweet(tweet.id);
               };

               const li=document.createElement("li");
               li.textContent=tweet.tweet;
               li.appendChild(btnEliminar);
               

               listaTweets.appendChild(li);
          });
     }

     sincronizarStorage();
}

function sincronizarStorage(){
     localStorage.setItem("tweets",JSON.stringify(tweets));
}

function borrarTweet(id){

     tweets=tweets.filter(tweet=> tweet.id!==id);
     mostrarTweets();
     
}