import {cCharacterCard} from "./cCharacterCard.js";
import {cPageNumbering, renderPageNumbering } from "./pagination.js";
import {dataCharacters, dataPage} from "../../../utils/Data.js";

let cCharacters = ()=>{
  let view =`   <div class ="loader"></div>
                <div class="cCharacters__characters"></div>
                <div class="charactersNotFound hidden"></div>`
  let pageCharacters = document.createElement("div");
  pageCharacters.classList.add("cCharacters");
  pageCharacters.innerHTML = view;
  
  //inserto el componente numeración de página
  pageCharacters.insertAdjacentElement ("beforeend", cPageNumbering())


  //hacer la peticion de datos osea arrancar a pedirlos

  //cuando ya los tenga entonces ejecutar rendercharacters mandar a ejecutar la funcion por un callback en vez de awaits

  //como el loader ya fue renderizado entonces ...la funcion callback lo apagaria

  renderCharacters()


  return pageCharacters

}


//TODO: CAMBIAR EL CSS DE LA PAGINACION (BUGS DE SELECCION)

async function renderCharacters(){

  let data = await dataCharacters.filtrar() 
  
  // console.log('ya tengo la info perro');
  let characters =  document.querySelector(".cCharacters__characters")
  let pagination = document.querySelector(".pageNumbering")
  let charactersNotFound = document.querySelector(".charactersNotFound")
  let loader = document.querySelector(".loader")

  loader.classList.add("hidden")

  //elimina los personajes visualmente
  characters.innerHTML = ""
  
  //TODO: HACER UN COMPONENTE PARA EL NOTFOUND MAS BIEN
  if(data.length > 0){
    //modifica en el dataPage el número de paginas a renderizar
    dataPage.numberOfPages = Math.ceil(data.length/dataPage.charactersPerPage)
    characters.classList.remove("hidden")
    pagination.classList.remove("hidden")
    charactersNotFound.classList.add("hidden")
    
    //si existen mas personajes que el limite de personajes por hoja
    if(data.length > dataPage.charactersPerPage){

      //renderizar los personajes de la hoja actual
      let groupCharacters = data.slice(dataPage.charactersPerPage*(dataPage.currentPage-1),dataPage.charactersPerPage*dataPage.currentPage)
      groupCharacters.forEach(character => {
        characters.appendChild(cCharacterCard(character))
      });
      renderPageNumbering()

    }else{
      data.forEach(character => {
        characters.appendChild(cCharacterCard(character))
      });
      //renderiza la numeración de la página
      let pageNumbering = document.querySelector(".pageNumbering")
      pageNumbering. innerHTML = "<div class='pageNumbering__index'> <div class='indexNumber indexNumber__selected'>1</div> </div>"
    }

  }else{
    
    //no hay personajes disponibles, agregar notFound
    charactersNotFound.classList.remove("hidden")
    characters.classList.add("hidden")
    pagination.classList.add("hidden")
    
  }

}


export{cCharacters, renderCharacters}

