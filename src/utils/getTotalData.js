let url = "https://rickandmortyapi.com/api/character"
let fetch = require("node-fetch")

//obtengo todos los personajes
async function getData (url){
   let results = []
   let urlNext = url
   
   while (urlNext){ 
      let res = await fetch(urlNext)
      let data = await res.json()
      results.push(...data.results)
      urlNext = data.info.next
   }
   
   return results
}
//quiero obtener los generos que existen
async function getGender (url){
   let gender = [];
   results = await getData(url);
   results.forEach((personaje) => {
      if(!gender.includes(personaje.gender)){
         gender.push(personaje.gender)
      }
   });
   return gender;
}
async function getSpecies(url){
   let species = new Set();
   results = await getData(url)
   results.forEach(character=>{species.add(character.species)})
   return species
}

x = async (url)=>{
   m = await getSpecies(url)
   console.log(m);
}

x(url)