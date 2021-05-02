
let url = "https://rickandmortyapi.com/api/character"
let urlEpisode = "https://rickandmortyapi.com/api/episode"
let fetch = require("node-fetch")

class DataBase{
  constructor (url, urlEpisode){
    this.urlBase = url;
    this.urlBaseEpisode = urlEpisode;
    this.dataBase = this.changeDataEpisodeCharacters()
    this.dataEpisode = this.getEpisodes()
    
    this.filter = { status: [],
                    species: [],
                    gender: [], 
                    origin: [],
                    location:[],
                    episode: [],
                    };
    this.filterData = this.filtrar()
  };

  async getData (url = this.urlBase){
    let results = [];
    let urlNext = url;
    
    while (urlNext){ 
        let res = await fetch(urlNext)
        let data = await res.json()
        results.push(...data.results)
        urlNext = data.info.next
      }
    
    return results
  }

  async getEpisodes(){
    let episodios = await this.getData(this.urlBaseEpisode)
    let dataEpisodes = []

    episodios.forEach(episodio => {
      dataEpisodes.push([episodio.id, episodio.name])
    });

    return dataEpisodes
  }

  async changeDataEpisodeCharacters(){
    let characters = await this.getData()
    let dataEpisodes = await this.dataEpisode
    
    characters.forEach(character=>{
      let namesEpisodes = []
      let episodeList = character.episode
      

      if(episodeList.length != 1){
        episodeList.forEach(episode=>{
          let number = episode.split("/")[5]
          dataEpisodes.forEach(episodio=>{
            if(episodio[0]==number){
              namesEpisodes.push(episodio[1])
            }
          })
        })
      }else{
        let number = episodeList[0].split("/")[5]
        dataEpisodes.forEach(episode=>{
          if(episode[0]==number){
            namesEpisodes.push(episode[1])
          }
        })
      }
      
      character.episode =namesEpisodes

    })

    return characters
  }

  async filtrar(tipoOrdenamiento){
    let characters = await this.dataBase;
    let filteredStatusCharacteres = this.filterStatus(characters)    
    let filteredSpeciesCharacteres = this.filterSpecies(filteredStatusCharacteres)
    let filteredGendercharacteres = this.filterGender(filteredSpeciesCharacteres)
    let filteredOriginCharacters = this.filterOrigin(filteredGendercharacteres)
    let filteredLocationCharacters = this.filterLocation(filteredOriginCharacters)
    let filteredEpisodesCharacters = this.filterEpisodes(filteredLocationCharacters)
    let filteredAndOrderCharacters = this.order(filteredEpisodesCharacters,tipoOrdenamiento)
    
    this.filterData = filteredAndOrderCharacters
    return filteredEpisodesCharacters

  }

  order(characters, tipoOrdenamiento = null){
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
    }else{
      return characters
    }
  }

  filterStatus (characters){
    let status = this.filter.status
    let filteredCharacters =[]
    
    if ( status.length !== 0){
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

    if (species.length !== 0){
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

    if (gender.length !== 0){
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

    if (origin.length !== 0){
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

    if (location.length !== 0){
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

    if (episodes.length !== 0){
      characters.forEach(character=>{
        let episodeList = character.episode
        episodeList.forEach(episode=>{
          if(episodes.includes(episode)){
            filteredCharacters.push(character)
          }
        })
      })
      return filteredCharacters
    }else{
      return characters
    }
    
  }

  async getOptionsSpecies(){
    const species = new Set()
    let data = await this.getData()
    data.forEach(character=>{
      species.add(character.species)
    })
    return species
  }

  async getOptionsGender(){
    const gender = new Set()
    let data = await this.getData()
    data.forEach(character=>{
      gender.add(character.gender)
    })
    return gender
  }

  async getOptionsOrigin(){
    const origin = new Set()
    let data = await this.getData()
    data.forEach(character=>{
      origin.add(character.origin.name)
    })
    return origin
  }

  async getOptionsLocation(){
    const location = new Set()
    let data = await this.getData()
    data.forEach(character=>{
      location.add(character.location.name)
    })
    return location
  }

  async getOptionsEpisodiosName(){
    let nameEpisodes = []
    let data = await this.getData(this.urlBaseEpisode)
    data.forEach(episode=>{
      nameEpisodes.push(episode.name)
    })
    let newNameEpisodes = nameEpisodes.reverse()
    return newNameEpisodes
  }
}

class DataPage{
  constructor(pageNum,nCharacters,numberOfPages = 0,numberOfPagesInPagination){
    this.pageNumber = pageNum;
    this.initPageBlock = 1;

    if(screen.width < 768){
      this.endPageBlock = 5;
      this.numberOfPagesInPagination =5;
    }
    else{
      this.endPageBlock = 10;
      this.numberOfPagesInPagination =10;

    }

    this.numberCharactersPage = nCharacters;
    this.numberOfPages = numberOfPages;


  }
}




let dataCharacters = new DataBase(url, urlEpisode)
let dataPage = new DataPage(1,20,0)

export {dataCharacters, dataPage}

// async function print (){
//   let x = await dataCharacters.getOptionsEpisodiosName();
//   console.log(x);
// }

// print()




































