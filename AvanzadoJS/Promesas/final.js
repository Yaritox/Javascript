async function funcion() {

     console.log("inicio de la función");
     let promesa=new Promise(
          resolver=>{
               setTimeout(()=>resolver("Promesa con await y time out"), 300);
          }
     );
     
     console.log(await promesa);
     console.log("fin de la función");
}

funcion();