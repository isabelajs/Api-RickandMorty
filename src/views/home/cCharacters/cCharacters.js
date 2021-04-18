// import {cCharacterCard} from "./cCharacterCard";
import {getResults} from "../../../utils/functionsData.js";
import {cCharacterCard} from "./cCharacterCard.js";
import {previousLink} from "../../../utils/functionsData.js"
import {nextLink} from "../../../utils/functionsData.js"

let cCharacters = (url)=>{
  let view =` <div class="cCharacters__characters"></div>
              <div class="pageNumbering">
                <div id="previous" class="bottom">Anterior</div>
                <div class="pageNumbering__index">1/34</div>
                <div id="next" class="bottom">Siguiente</div>
              </div>`
  let pageCharacters = document.createElement("div");
  pageCharacters.classList.add("cCharacters");
  pageCharacters.innerHTML = view;
  
  let characters =  pageCharacters.querySelector(".cCharacters__characters")
  //permite cargas los personales de una página
  
  async function resultados(url){
    let resultados = await getResults(url);
    characters.innerHTML =" "
    resultados.forEach(character => {
      characters.appendChild(cCharacterCard(character))
    });
  }

  async function nextPageCharacters(url){
    let newPage = await nextLink(url)
    // resultados(newPage)
  }





  //permite ir a la pagina anterior
  let previousPage = pageCharacters.querySelector("#previous")
  previousPage.addEventListener("click",()=>{console.log("hello");})
  
  //permite ir a la siguiente pagina
  let nextPage = pageCharacters.querySelector("#next");
  nextPage.addEventListener("click",()=>{nextPageCharacters(url)})

  
  resultados(url)

  
  return pageCharacters
  
}


export{cCharacters}

