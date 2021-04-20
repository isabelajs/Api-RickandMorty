
let url = "https://rickandmortyapi.com/api/character"
let fetch = require("node-fetch")

class DataBase{
  constructor (url){
    this.urlBase = url;
    this.dataBase = this.getData();
    this.filter = { status: ["Alive", "Dead"],
                    species: ["Human"],
                    gender: ["Male","Female"], 
                    origin: null,
                    location:["Earth (Replacement Dimension)", "Earth (C-137)"],
                    episode: ["1", "2"],
                    }
  };

  async getData (){
    let results = []
    let urlNext = this.urlBase
    
    while (urlNext){ 
        let res = await fetch(urlNext)
        let data = await res.json()
        results.push(...data.results)
        urlNext = data.info.next
      }
    
      
    return results
  }
  
  async order(tipoOrdenamiento){
    let characters = await this.dataBase

    if(tipoOrdenamiento == "ascendente"){
      characters.sort(function (a,b){
        if(a.name > b.name){
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      }) 
      return characters
    } else if (tipoOrdenamiento == "descendente") {
      characters.sort(function (a,b){
        if(a.name > b.name){
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } else {
          return 0;
        }
      }) 
      return characters
    }
  }

  async filtrar (){
    let characters = await this.dataBase;
    let filteredStatusCharacteres = this.filterStatus(characters)    
    let filteredSpeciesCharacteres = this.filterSpecies(filteredStatusCharacteres)
    let filteredGendercharacteres = this.filterGender(filteredSpeciesCharacteres)
    let filteredOriginCharacters = this.filterOrigin(filteredGendercharacteres)
    let filteredLocationCharacters = this.filterLocation(filteredOriginCharacters)
    let filteredEpisodesCharacters = this.filterEpisodes(filteredLocationCharacters)
    return filteredEpisodesCharacters

  }


  filterStatus (characters){
    let status = this.filter.status
    let filteredCharacters =[]
    
    if ( status !== null){
      characters.forEach( character => {
        if (status.includes(character.status)){
          filteredCharacters.push(character)
        }
      })
      return filteredCharacters
    }else{
      return characters
    }
  }

  filterSpecies (characters){
    let species = this.filter.species
    let filteredCharacters = []

    if (species !== null){
      characters.forEach(character=>{
        if(species.includes(character.species)){
          filteredCharacters.push(character)
        }
      })
      return filteredCharacters
    }else{
      return characters
    }
  }

  filterGender(characters){
    let gender = this.filter.gender
    let filteredCharacters = []

    if (gender !== null){
      characters.forEach(character => {
        if(gender.includes(character.gender)){
          filteredCharacters.push(character)
        }
      });
      return filteredCharacters
    } else{
      return characters
    }

  }

  filterOrigin(characters){
    let origin = this.filter.origin
    let filteredCharacters = []

    if (origin !== null){
      characters.forEach(character => {
        if (origin.includes(character.origin.name)){
          filteredCharacters.push(character)
        }
      })
      return filteredCharacters
    }else {
      return characters
    }
  }

  filterLocation(characters){
    let location = this.filter.location
    let filteredCharacters = []

    if (location !== null){
      characters.forEach(character => {
        if (location.includes(character.location.name)){
          filteredCharacters.push(character)
        }
      })
      return filteredCharacters
    }else {
      return characters
    }
  }

  filterEpisodes (characters){
    let episodes = this.filter.episode
    let filteredCharacters = []

    if (episodes !== null){
      characters.forEach(character=>{

        let episodeList = character.episode

        if(episodeList.length > 1){
          episodeList.forEach(episode =>{
            let urlEpisode = episode.split("/")

            if(episodes.includes(urlEpisode[urlEpisode.length-1])){
              if(!filteredCharacters.includes(character)){
                filteredCharacters.push(character)
              }
              
            }
            
          })
        }else{
          let urlEpisode = episodeList[0].split("/")
          if(episodes.includes(urlEpisode[urlEpisode.length-1])){
            filteredCharacters.push(character)
          }
        }

        })
      return filteredCharacters
    }else{
      return characters
    }
    
  }

}








let dataCharacters = new DataBase(url)
export {dataCharacters}

// async function print (){
//   let x = await dataCharacters.filtrar();
//   console.log(x);
// }

// print()







































// // async function getFirstPage (url){
// //   characters = await getData(url)
// //   page = characters[0]
// //   return page
// // }

// // async function getStatus (url, status){
// //   let results = await getData(url)
// //   let alive = [];
// //   let dead = [];
// //   let unknown = [];

// //   results.forEach(character => {
// //     switch (character.status){
// //       case "Alive":
// //         alive.push(character);
// //         break;
// //       case "Dead":
// //         dead.push(character);
// //         break;
// //       case "unknown":
// //         unknown.push(character);
// //         break;
// //     }
    
    
// //   });
  
// //   switch (status){
// //     case "alive":
// //       return alive;
// //       break;
// //     case "dead":
// //       return dead;
// //       break;
// //     case "unknown":
// //       return unknown;
// //       break;
// //   }

// // }


// async function getSpecies (url){
//   characters = await getData(url)
//   let species = new Set()

//   characters.forEach(characters=> {
//     species.add(characters.type)
//   });

//   return species
// }



// async function print (url){
//   x = await getSpecies(url)
//   console.log(x);
// }


// print(url)
