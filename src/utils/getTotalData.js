let url = "https://rickandmortyapi.com/api/character"
let fetch = require("node-fetch")

//quiero obtener todos los datos

//necesito la url de cada pagina
//me pregunto si tiene siguiente pagina si si guardar todos los resultados, sino parar de buscar
// los resultados los quiero guardar dentro de una lista

function getData(url){
   return fetch(url)
            .then(res => res.json())
            .catch(error => console.log(error))
}


async function getTotalData(url){
   totalResult = []
   data = await getData(url).then(data => {console.log(data.info.prev)})
   return totalResult
}

x = getTotalData(url).then (x =>console.log("hellos"))

