// import {cCharacterCard} from "./cCharacterCard";
import {getResults} from "../../../utils/functionsData.js"
import {cCharacterCard} from "./cCharacterCard.js"



let cCharacters = ()=>{
  let view =` <div class="cCharacters__characters"></div>
              <div class="pageNumbering">
                <div class="bottom">Anterior</div>
                <div class="pageNumbering__index">1/34</div>
                <div class="bottom">Siguiente</div>
              </div>`
  let pageCharacters = document.createElement("div");
  pageCharacters.classList.add("cCharacters");
  pageCharacters.innerHTML = view;
  
  let characters =  pageCharacters.querySelector(".cCharacters__characters")
  async function resultados(){
    let resultados = await getResults();
    resultados.forEach(character => {
      characters.appendChild(cCharacterCard(character))
    });
  }
  
  
  
  
  resultados()

  
  return pageCharacters
  
}


export{cCharacters}

