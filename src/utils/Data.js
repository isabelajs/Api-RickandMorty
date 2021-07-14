
let url = "https://rickandmortyapi.com/api/character"
let urlEpisodes = "https://rickandmortyapi.com/api/episode"



//Create dataBase
class DataBase{
  constructor (url, urlEpisodes){
    this.urlBase = url;
    this.urlBaseEpisodes = urlEpisodes;

    this.dataEpisode = this.getEpisodes()     
    this.dataBase = this.changeDataEpisodeCharacters()  //Merge data final
    this.filter = { 
                    search: null,
                    status: [],
                    species: [],
                    gender: [], 
                    origin: [],
                    location:[],
                    episode: [],
                    order: null,
                    };
    this.filterData = this.dataBase
    this.loading = true
    this.subs = []
  };


//fetch data of any link
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

  
  //fetch data of episodes
  async getEpisodes(){
    let episodes = await this.getData(this.urlBaseEpisodes)
    let dataEpisodes = {}
  
    episodes.forEach(episode => dataEpisodes[episode.id] = episode.name)
    return dataEpisodes
  }

  //merge dataCharacters and episodes
  async changeDataEpisodeCharacters(){
    let characters = await this.getData()
    let dataEpisodes = await this.dataEpisode

    let count = 0 //contar cuantos apariciones tienen todos en total son 1038 apariciones entre todos 
    
     // si tenemos 1038 apariciones x 45 episodios para comparar , estoy haciendo haciendo un loop 46710 veces
     //en cambio si por cada aparicion solo debo buscar en un objeto con su key, solo hago 1038 busquedas

    characters.forEach(character=>{

      count = count + character.episode.length
      let episodeList = character.episode
      character.episode = episodeList.map( episode =>{

        let number = episode.split('/')[5]
        return dataEpisodes[number]

      } )
    })


    this.loading = false

    return characters
  }

  //TODO: BUSCAR COMO SE HACE UN PIPE CON ESO PUEDO ENCADENAR VARIAS FUNCIONES AL MISMO DATO
  //option to filter
  async filtrar(){

    let characters = await this.dataBase;
    let groupCharactersSearch = this.search(characters)
    let filteredStatusCharacteres = this.filterBase(groupCharactersSearch,'status')
    let filteredSpeciesCharacteres = this.filterBase(filteredStatusCharacteres,'species')
    let filteredGendercharacteres = this.filterBase(filteredSpeciesCharacteres,'gender')
    let filteredOriginCharacters = this.filterOrigin(filteredGendercharacteres)
    let filteredLocationCharacters = this.filterLocation(filteredOriginCharacters)
    let filteredEpisodesCharacters = this.filterEpisodes(filteredLocationCharacters)
    let filteredAndOrderCharacters = this.order(filteredEpisodesCharacters)

    return filteredAndOrderCharacters

  }

  //find a character
  search(characters){
    let nameSearch = this.filter.search
  
    if (nameSearch !== null){
      return characters.filter((c)=>{
        return c.name.toLowerCase().includes(nameSearch.toLowerCase())
      })
      
    }else{
      return characters
    }
  }

  //character by alphabetical order (A-Z or Z-A)
  order(characters){
    let orderType = this.filter.order

    if(orderType != null){
      if(orderType == "ascendente"){
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
      } else if (orderType == "descendente") {
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
    }else{
      return characters
    }
  }

  //filter base for status,species and gender
  filterBase(data,typeFilter){

    const filterOptions = this.filter[typeFilter]
    
    if(filterOptions.length > 0){
      return data.filter(character => 
        filterOptions.includes(character[typeFilter]) 
      )
    }else{
      return data
    }

  }

  //filtra los personajes segun el origen
  filterOrigin(characters){
    let origin = this.filter.origin

    if (origin.length !== 0){
      return characters.filter(c=>{
        return origin.includes(c.origin.name)
      })
    }else {
      return characters
    }
  }

  //filtra los personajes según su ubicación
  filterLocation(characters){
    let location = this.filter.location

    if (location.length !== 0){
      return characters.filter(c=>{
        return location.includes(c.location.name)
      })
    }else {
      return characters
    }
  }

  filterEpisodes (characters){
    let filterOptions = this.filter.episode

    if(filterOptions.length > 0 ){

      //aplico un filtro a los personajes asi que puedo recorrerlo cada uno e inmediatamente retorno lo que sea que me va a devovler
      //esta funcion filter
      return characters.filter((character)=>{
        return character.episode.some(episode=> filterOptions.includes(episode))
        //esta es la condicional, cuando la condicional sea True entonces el dato (character) se almacena en la lista que devolvera filter
        //nuestra validacion es mediante una funcion llamada some.
        
        //some es como find, igual que find solo devuelve un objeto segun
        //un parametro Some, devuelve true o false en vez de devolver el objeto , a si que some me permite ir recorriendo cada
        //episodio del personaje y cuando el episode ese incluido en la lista de filterOptions (episidios filtrados) entonces some devolvera
        //true y por ende el objeto sera agregado en la lista que esta almacenando filter
        // return character.episode.some(episode => {
        //     filterOptions.includes(episode)})
      })
    }
    else{
      return characters
    }
  }

  async getOptionsSpecies(){
    let data = await this.dataBase
    return new Set(data.map((character)=>character.species))

  }

  async getOptionsGender(){
    let data = await this.dataBase
    return new Set(data.map((character)=>character.gender))
  }

  async getOptionsOrigin(){
    let data = await this.dataBase
    return new Set(data.map((character)=>character.origin.name))
  }

  async getOptionsLocation(){
    let data = await this.dataBase
    return new Set(data.map((item)=>item.location.name))
  }

  async getOptionsEpisodiosName(){

    let data = await this.dataEpisode

    return Object.values(data)
  }
}


class DataPage{
  constructor(currentPage,nCharacters,numberOfPages = 0){
    this.currentPage = currentPage;

    screen.width < 768 ? this.numberOfPagesInPagination =5 : this.numberOfPagesInPagination =10;

    this.charactersPerPage = nCharacters;
    
    this.numberOfPages = numberOfPages;

  }
}


let dataCharacters = new DataBase(url, urlEpisodes)
let dataPage = new DataPage(1,20,0)

export {dataCharacters, dataPage}

  //siempre debemos aprovechar las funciones de las listas
        //  map     -> hace un loop a una lista y devolviendo un array diferente segun lo que yo halla retornado dentro de la funcion del loop
        //  foreach -> hace un loop pero no permite retornar, por eso siempre hacias un array afuera y luego hacias push dentro de el
        //  filter  -> hace un loop a una lista, y cada que la funcion del loop retorne true, el retorna el mismo elemento que se esta iterando 
        //            (osea retornamos siempre true o false, para darle aviso si descartamos o no el elemento que esta interandose en ese momento)
        //  find    -> hace un loop, pero cuando en nuestra funcion interna algo retorne true, el loop se acaba y devuelve el elemento de ese momento
        //  some    -> hace un loop, y cuando nuestra funcion interna retorne true, el loop se acaba pero a diferencia de find, el no retorna el elemento
        //            solo devuelve un true si encontro algo o un false si no encontro
        //  reduce  -> aun no la entiendo muy dijicil ajjajajaja


      // Acordarte de los algoritmos de busqueda
        //siempre que tenga un diccionario osea un esitlo llave = valor , la busqueda es inmediata sin importar cuantos elementos existen dentro del diccionario

      // [[id,'Nombre'],[id,'Nombre']] a {id:'name',id:'name'} 

        //si tengo 1000 elementos en una lista y quiero bsucar el id 900 
        //en el emjor de los casos solo haria 1 busqueda y en el peor de los casos debo buscar las 1000 veces, porque estaba en el ultimo espacio

        //vs en un objeto si tengo 1000 elementos en un objeto, cada elemento tiene su propia key 
        //de tal manera que solo debo buscar 1 vez para el mejor y peor de los casos


        //si me piden que en una lista [12,9,1,3,5,16,19,2] encuentre estos id's [88,1,4] y los retorne tengo varias opciones:

          //opcion 1 : fors anidados

                                    // let listaBuffer = []

                                    // lista.forEach((elemento)=>{
                                    //   ids.forEach((id)=>{
                                    //     if(elemento == id){
                                    //       listaBuffer.push(elemento)
                                    //     }
                                    //   })
                                    // })


              // para este caso tenemos iteraciones = (lista.length-1 * ids.length-1) 


          //opcion 2 : utilizar includes para evaluar internamente

                                    // let listabuffer = []

                                    // lista.forEach((elemento)=>{
                                    //     if(ids.includes(elemento)){
                                    //       listabuffer.push(elemento)
                                    //     }

                                    // })

              // para este caso tenemos iteraciones = (lista.length) + tiempo de ejecucion de includes que no conocemos (pero es mas optima que un for normal)


           //opcion 3: utilizar filter para el exterior e includes para la evaluacion 


                                     //let listabuffer = lista.filter((elemento)=> ids.includes(elemento))


          //opciones raras, pero sin utilizar listasbuffer para ir haciendo push

                                      // let listabuffer = lista.filter((elemento)=>{

                                      //     let encontrado = false
                                      //     ids.forEach((id)=>{
                                      //         if(elemento == id){
                                      //           encontrado = true
                                      //         }
                                      //     })

                                      //     return encontrado
                                      // })



          
      // Hacer condicionales mas claras
        // lista.length es !== 0  (cubre todas las opciones siempre y cuando no sea 0) esto funciona para discriminar una sola opcion, a si que es muy especifica
        //                         en la mayoria de casos, negar algunas cosas en vez de evaluar cuando son verdad, lleva a tener condicionales extra)
        // lista.length > 0  o lista.length >= 1 (en este caso cubre solo los numeros positivos no los negativos)



































