// let url = "https://rickandmortyapi.com/api/character/"
let fetch = require("node-fetch")


//obtengo la data de una sola pagina
function getData (url_data){
   let data = fetch(url_data)
            .then(resp=> resp.json())
            .then(data=> data)
            .catch(error=> console.error(error))
   return data
}


//obtengo todos los resultados de una sola pagina
async function getResults (url){
   let data = await getData(url)
   let results = data.results
   return results
}



 //obtengo el siguiente link, gracias a la data
async function nextLink(url){
   console.log(url);
   let data = await getData(url)
   console.log(data);
   nextLink = data.info.next
   console.log(nextLink);
//    if (nextLink == null){
//       console.log("debo crear una función que no permita darle más click al boton de siguiente");
//    }else{
//       return nextLink
//    }
}

 //obtengo el link anterior
async function previousLink(url){
   let data = await getData(url)
   let previousLink = data.info.prev
   
   if(!previousLink===null){
      return previousLink
   }else{
      //TODO debo realizar una función
      console.log("debo hacer una función que no permita darle más click al botón");
      //debo tener cuidado, proque esto no retorna nada
   }
}



// export{getData, getResults, nextLink, previousLink}

