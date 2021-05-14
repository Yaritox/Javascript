const url = "http://localhost:4001/clientes";

export const nuevoCliente = async cliente =>{

     
     try{
          await fetch(url,{
               method: 'POST',
               body: JSON.stringify(cliente),
               headers: {
                    'Content-Type':'application/json'
               }
          });
          window.location.href="index.html";

     }catch(error){
          
          console.error(error);

     }
     window.location.href="index.html";
};

export const editarCliente = async cliente =>{

     
     try{
          await fetch(`${url}/${cliente.id}`,{
               method: 'PUT',
               body: JSON.stringify(cliente),
               headers: {
                    'Content-Type':'application/json'
               }
          });
          window.location.href="index.html";

     }catch(error){
          
          console.error(error);

     }
     window.location.href="index.html";
};

export const obtenerClientes = async ()=>{
     try{
          const respuesta = await fetch(url);
          const clientes = await respuesta.json();
          return clientes;
          

     }catch(error){
          console.error(error);
     }
};

export const obtenerClientesxId = async id=>{
     try{
          const respuesta = await fetch(`${url}/${id}`);
          const cliente = await respuesta.json();
          return cliente;
          

     }catch(error){
          console.error(error);
     }
};

export const eliminarCliente= async id=>{
     try{
          await fetch(`${url}/${id}`,{
               method: 'DELETE'
          });
     }catch(error){
          
          console.error(error);

     }
}