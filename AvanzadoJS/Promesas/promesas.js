let promesa=new Promise(
     (resolver)=>{
          //console.log("inicio promesa");
          setTimeout(()=>resolver("Saludos con promesa y time out"),3000);
          //console.log("termino promesa");
     }

);


//se convierte una función en promesa ! 
async function miFuncionConPromesa(){
     return 'saludos con promesa y asyn';
}

//miFuncionConPromesa().then(valor=>console.log(valor));
//uso de await 

async function funcionPromesaAwait(){
     let promesas=new Promise(
          resolver=>{resolver("promesa con await");}
     );
     console.log(await promesas);
}

funcionPromesaAwait();