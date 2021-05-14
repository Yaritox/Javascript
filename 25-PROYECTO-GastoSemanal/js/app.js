const formulario=document.querySelector("#agregar-gasto");
const gastoListado=document.querySelector("#gastos ul");



class Presupuesto{
     constructor(presupuesto){
          this.presupuesto=Number(presupuesto);
          this.restante=this.presupuesto;
          this.gastos=[];
     }

     agregarGasto(gasto){
          this.gastos=[...this.gastos,gasto];
          this.calcularRestante();
     }
     eliminarGasto(id){
          const resultado=this.gastos.filter(gasto=> gasto.id!==id);
          this.gastos=[...resultado];
          this.calcularRestante();
     }

     calcularRestante(){
          const gastado=this.gastos.reduce((total,gasto)=>total+ gasto.cantidad,0);
          this.restante=this.presupuesto-gastado;
     }
}

class Gasto{
     constructor(nombre, cantidad){
          this.nombre=nombre.toUpperCase()
          ;
          this.cantidad=Number(cantidad);
          this.id=Date.now();
     }
}


class Ui{

     insertarPresupuesto(obj){
          const {presupuesto,restante}=obj;

          document.querySelector("#total").textContent=presupuesto;
          document.querySelector("#restante").textContent=restante;


     }
     actualizarRestante(obj){
          const {presupuesto,restante}=obj;
          const cincuenta=presupuesto/2;//50
          const cuarto=presupuesto/4;//25
          const divRestante=document.querySelector(".restante");
          console.log(cuarto);
          if(cuarto>restante){
               divRestante.classList.remove("alert-success","alert-warning");
               divRestante.classList.add("alert-danger");
          }else if(cincuenta>restante){
               divRestante.classList.remove("alert-success","alert-danger");
               divRestante.classList.add("alert-warning");
               
               
          }else{
               divRestante.classList.remove("alert-danger","alert-warning");
               divRestante.classList.add("alert-success");
          }
         document.querySelector("#restante").textContent=restante;
         if(restante<=0){
              ui.imprimirAlerta("El presupuesto se ha agotado","error");
              document.querySelector("button[type='submit']").style.display="none";

         }else{
              document.querySelector("button[type='submit']").style.display="block";
         }
     }
     imprimirAlerta(msj,tipo){
          const div=document.createElement("div");
          div.classList.add("text-center", "alert");
          div.textContent=msj;
          switch(tipo){
               case 'error':
                    div.classList.add("alert-danger");
                    break;
               case 'correcto':
                    div.classList.add("alert-success");
                    break;
          }
          document.querySelector(".primario").insertBefore(div,formulario);
          setTimeout(()=>{div.remove()},3000);
     }

     mostrarGastos(gastos){
          gastoListado.innerHTML="";
          gastos.forEach(gasto => {
               const{nombre,cantidad,id}=gasto;
               const li=document.createElement("li");
               li.className="list-group-item d-flex justify-content-between align-items-center";
               li.dataset.id=id;
               li.innerHTML=`
                    ${nombre}
                    <span class='badge badge-primary badge-pill'>${cantidad}</span>
               `;
               const btnEliminar=document.createElement("button");
               btnEliminar.classList.add("btn","btn-danger","borrar-gasto");
               btnEliminar.textContent='x';
               btnEliminar.onclick=()=>{
                    eliminarGasto(id);
               };
               li.appendChild(btnEliminar);

               gastoListado.appendChild(li);
               
               
          });

     }
     

}


const ui=new Ui();
let presupuesto;

eventListeners();

function eventListeners(){
     document.addEventListener("DOMContentLoaded",preguntarPresupuesto);
     formulario.addEventListener("submit",agregarGasto);
}


function preguntarPresupuesto(){
     const presupuestoUsuario=prompt("¿Cual es tu presupuesto?");
     if(presupuestoUsuario==='' || presupuestoUsuario===null ||isNaN(presupuestoUsuario) || presupuestoUsuario<=0)
          window.location.reload();

     presupuesto=new Presupuesto(presupuestoUsuario);
     ui.insertarPresupuesto(presupuesto);

}

function agregarGasto(evt){
     evt.preventDefault();
     const inputGasto=document.querySelector("#gasto").value;
     const inputCantidad=document.querySelector("#cantidad").value;

     if(inputGasto==='' || inputCantidad===''){
          
          ui.imprimirAlerta("Todos los campos son obligatorios","error");

     }else if(inputCantidad<=0 || isNaN(inputCantidad)){
          ui.imprimirAlerta("Cantidad no valida","error");

     }
     else{
          presupuesto.agregarGasto(new Gasto(inputGasto,inputCantidad));
          ui.imprimirAlerta("Se agrego un nuevo gasto","correcto"); 
          const {gastos}=presupuesto
          ui.mostrarGastos(gastos);
          formulario.reset();
          ui.actualizarRestante(presupuesto);
     }
}

function eliminarGasto(id){
     presupuesto.eliminarGasto(id);
     ui.imprimirAlerta("Se elimino correctamente su gasto","correcto"); 
     const {gastos}=presupuesto
     ui.mostrarGastos(gastos);
     ui.actualizarRestante(presupuesto);
}