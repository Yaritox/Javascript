const expRegular=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const btnEnviar=document.querySelector("#enviar");
const btnReset=document.querySelector("#resetBtn");
const para=document.querySelector("#email");
const asunto=document.querySelector("#asunto");
const mensaje=document.querySelector("#mensaje");
const formulario=document.querySelector("#enviar-mail");

eventListeners();

function  eventListeners(){

     document.addEventListener("DOMContentLoaded",iniciarApp);
     para.addEventListener("blur",validar);
     asunto.addEventListener("blur",validar);
     mensaje.addEventListener("blur",validar);
     formulario.addEventListener("submit",enviarEmail);
     btnReset.addEventListener("click",resetearFormulario);
     
}

function iniciarApp(){
     btnEnviar.style.display="none";
}

function validar(evt){

     if(evt.target.type==="email"){
          
          if(expRegular.test(evt.target.value)){
               eliminarErrores();
               evt.target.classList.remove('border','border-red-500');
               evt.target.classList.add('border','border-green-500');
          }else{
               evt.target.classList.add('border','border-red-500');
               mostrarError("El correo es invalido");
          }
     }
          

     if(evt.target.value.length>0){
          eliminarErrores();
          evt.target.classList.remove('border','border-red-500');
          evt.target.classList.add('border','border-green-500');
     }else{
          evt.target.classList.remove('border','border-green-500');
          evt.target.classList.add('border','border-red-500');
          mostrarError("Todos los campos son obligatorios");
     }

     if(expRegular.test(email.value) && asunto.value!=='' && mensaje.value!==''){
          console.log("validado");
          btnEnviar.style.display="block";
     }


}

function mostrarError(mensaje){
     const msj=document.createElement('p');
     msj.textContent=mensaje;
     msj.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

     const errores=document.querySelectorAll('.error');
     if(errores.length===0)
          formulario.appendChild(msj);
}

function eliminarErrores(){
     const errores=document.querySelector('.error');
     if(errores)
          errores.remove();
}

function enviarEmail(evt){
     evt.preventDefault();
     const spinner=document.querySelector("#spinner");
     spinner.style.display="flex";

     setTimeout(()=>{
          const msj=document.createElement('p');
          msj.textContent="Se ha enviado correctamente el correo";
          msj.classList.add('border', 'border-green-500', 'background-green-100', 'text-green-500', 'p-3', 'mt-5', 'text-center', 'success');
          formulario.appendChild(msj);
          spinner.style.display="none";

          setTimeout(()=>{
               formulario.reset();
               msj.remove();
          },5000);


     },3000);

     
}

function resetearFormulario(){
     para.classList.remove('border','border-green-500');
     asunto.classList.remove('border','border-green-500');
     mensaje.classList.remove('border','border-green-500');
     formulario.reset();
     iniciarApp();
     

}