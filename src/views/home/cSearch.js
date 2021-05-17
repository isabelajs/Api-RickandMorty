import {dataCharacters} from "../../utils/Data.js"
import { renderCharacters } from "./cCharacters/cCharacters.js"

let cSearch = ()=>{
      let view = `      <button class="cSearch__buttonSend"></button>
                        <input class="cSearch__search" type="text"  id ="buscador" placeholder="Buscar">`
      let search = document.createElement("div")
      search.classList.add("cSearch")
      search.innerHTML = view
      let buttonSearch = search.querySelector(".cSearch__buttonSend")
      buttonSearch.addEventListener("click", searchFunction )

      return search
}

export {cSearch};

function searchFunction (){
      let searchWordContainer = document.querySelector(".cSearch__search")
      let wordSearch = searchWordContainer.value;

      if(wordSearch !==""){
            dataCharacters.filter.search = wordSearch
            renderCharacters()
      }else{
            dataCharacters.filter.search = null
            renderCharacters()
      }

      window.location.hash = "#/personajes/1"
}

