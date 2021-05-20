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

  renderCharacters()

  return pageCharacters

}


//renderiza los personajes
async function renderCharacters(){
  let data = await dataCharacters.filtrar()
  let characters =  document.querySelector(".cCharacters__characters")
  let pagination = document.querySelector(".pageNumbering")
  let charactersNotFound = document.querySelector(".charactersNotFound")
  let loader = document.querySelector(".loader")
  loader.classList.add("hidden")
  
  characters.innerHTML = ""
  
  
  if(data.length !== 0){
    //modifica en el dataPage el número de paginas a renderizar
    dataPage.numberOfPages = Math.ceil(data.length/dataPage.numberCharactersPage)
    characters.classList.remove("hidden")
    pagination.classList.remove("hidden")
    charactersNotFound.classList.add("hidden")
    

      //evalua si es necesario crear más paginas según el número de personajes
    if(data.length > dataPage.numberCharactersPage){

      let groupCharacters = data.slice(dataPage.numberCharactersPage*(dataPage.pageNumber-1),dataPage.numberCharactersPage*dataPage.pageNumber)
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
    
    charactersNotFound.classList.remove("hidden")
    characters.classList.add("hidden")
    pagination.classList.add("hidden")
    
  }


}






export{cCharacters, renderCharacters}

