const btnNotificarme=document.querySelector("#notificar");

btnNotificarme.addEventListener("click",()=>{
     Notification
          .requestPermission()
          .then(resultado =>{
               console.log(`El resultado es ${resultado}`);
          })
});

const btnVerNotificacion=document.querySelector("#verNotificacion");
btnVerNotificacion.addEventListener("click",()=>{
     if(Notification.permission==='granted'){
          const notificacion=new Notification("Está es una nueva notifiación",{
               icon:"img/ccj.png",
               body:"Este es el cuerpo del mensaje"
          });

          notificacion.onclick=()=>{
               window.location.href="https://google.com";
          };
     }
});