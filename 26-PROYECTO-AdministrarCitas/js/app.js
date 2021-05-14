const inputMascota=document.querySelector("#mascota");
const inputPropietario=document.querySelector("#propietario");
const inputTelefono=document.querySelector("#telefono");
const inputFecha=document.querySelector("#fecha");
const inputHora=document.querySelector("#hora");
const inputSintomas=document.querySelector("#sintomas");
const formulario=document.querySelector("#nueva-cita");
const contenedorCitas=document.querySelector("#citas");


let editando;
eventListeners();

function eventListeners(){

     inputMascota.addEventListener("input",datosCita);
     inputTelefono.addEventListener("input",datosCita);
     inputPropietario.addEventListener("input",datosCita);
     inputFecha.addEventListener("input",datosCita);
     inputHora.addEventListener("input",datosCita);
     inputSintomas.addEventListener("input",datosCita);

     formulario.addEventListener("submit",agregarCita);
}
class Cita{
     constructor(){
          this.citas=[];
     }

     agregarCita(cita){
          this.citas=[...this.citas,cita];
     }
     eliminarCita(id){
          
          this.citas=this.citas.filter(cita=>cita.id!==id);
          console.log(this.citas);

     }
     editarCita(citaActualizada){
          //map crea un nuevo arreglo 
          this.citas=this.citas.map(cita=>cita.id===citaActualizada.id?citaActualizada:cita);
     }

}

class UI{
     imprimirAlerta(msj,tipo){
          const div=document.createElement("div");
          div.classList.add("text-center", "alert","d-block","col-12");
          div.textContent=msj;
          switch(tipo){
               case 'error':
                    div.classList.add("alert-danger");
                    break;
               case 'correcto':
                    div.classList.add("alert-success");
                    break;
          }
          document.querySelector("#contenido").insertBefore(div,document.querySelector(".agregar-cita"));
          setTimeout(()=>{div.remove()},3000);
     }

     imprimirCitas({citas}){
          contenedorCitas.innerHTML="";
          citas.forEach(cita => {
               const{mascota,propietario,telefono,fecha,hora,sintomas,id}=cita;
               const div=document.createElement("div");
               div.classList.add("cita","p-3");
               div.dataset.id=id;

               const parrafoMascota=document.createElement("h2");
               parrafoMascota.classList.add("card-title","font-weight-bolder");
               parrafoMascota.textContent=mascota;
               
               const parrafoPropietario=document.createElement('p');
               parrafoPropietario.innerHTML=`
                    <span style='font-weight-bolder' >Propietario: </span>${propietario}

               `
               const parrafoTelefono=document.createElement('p');
               parrafoTelefono.innerHTML=`
                    <span style='font-weight-bolder' >Telefono: </span>${telefono}

               `
               const parrafoFecha=document.createElement('p');
               parrafoFecha.innerHTML=`
                    <span style='font-weight-bolder' >Fecha: </span>${fecha} ${hora}

               `
               const parrafoSintomas=document.createElement('p');
               parrafoSintomas.innerHTML=`
                    <span style='font-weight-bolder' >Sintomas: </span>${sintomas}

               `
               const btnEliminar=document.createElement("button");
               btnEliminar.classList.add("btn", "btn-danger","mr-2");
               btnEliminar.innerHTML=`Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`;

               btnEliminar.onclick=()=>eliminarCita(id);

               const btnEditar=document.createElement("button");
               btnEditar.classList.add("btn", "btn-info","mr-2");
               btnEditar.innerHTML=`Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>`;

               btnEditar.onclick=()=>cargarCita(cita);

               div.appendChild(parrafoMascota);
               div.appendChild(parrafoPropietario);
               div.appendChild(parrafoFecha);
               div.appendChild(parrafoTelefono);
               div.appendChild(parrafoSintomas);
               div.appendChild(btnEliminar);
               div.appendChild(btnEditar);
               


               contenedorCitas.appendChild(div);
          });

     }

}

const ui=new UI();
const cita=new Cita();

const objCita={
     mascota:'',
     propietario:'',
     telefono:'',
     fecha:'',
     hora:'',
     sintomas:''
}

function datosCita(evt){
     objCita[evt.target.name]=evt.target.value;
}

function agregarCita(evt){
     evt.preventDefault();
     const{mascota,propietario,telefono,fecha,hora,sintomas}=objCita;
     if(mascota==='' || propietario==='' || telefono==='' || fecha==='' || hora==='' || sintomas===''){
          ui.imprimirAlerta("Todos los elementos son obligatorios", "error");
          return;
     }
     if(editando){

          cita.editarCita({...objCita});
          ui.imprimirAlerta("Se edito correctamente", "correcto");
          formulario.reset();
          editando=false;
          formulario.querySelector("button[type='submit']").textContent="Crear cita";

     }else{
          objCita.id=Date.now();
          cita.agregarCita({...objCita});
          ui.imprimirAlerta("Se agrego correctamente", "correcto");
     }
     formulario.reset();
     limpiarObjt();
     ui.imprimirCitas(cita);


}

function eliminarCita(id){

     cita.eliminarCita(id);
     ui.imprimirAlerta("Se ha eliminado correctamente la cita", "correcto");
     ui.imprimirCitas(cita);


}

function cargarCita(cita){
     const{id,mascota,propietario,telefono,fecha,hora,sintomas}=cita;
     inputMascota.value=mascota;
     inputPropietario.value=propietario;
     inputTelefono.value=telefono;
     inputFecha.value=fecha;
     inputHora.value=hora;
     inputSintomas.value=sintomas;

     objCita.mascota=mascota;
     objCita.propietario=propietario;
     objCita.telefono=telefono;
     objCita.fecha=fecha;
     objCita.hora=hora;
     objCita.sintomas=sintomas;
     objCita.id=id;

     formulario.querySelector("button[type='submit']").textContent="Guardar cambios";
     editando=true;

}

function limpiarObjt(){

     objCita.mascota='';
     objCita.propietario='';
     objCita.telefono='';
     objCita.fecha='';
     objCita.hora='';
     objCita.sintomas='';
}