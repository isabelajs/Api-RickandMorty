// import {cCharacterCard} from "./cCharacterCard";
import {cCharacterCard} from "./cCharacterCard.js";
import { pageNumbering } from "./pagination.js";

let cCharacters = (dataCharacters)=>{
  let view =` <div class="cCharacters__characters"></div>`
  let pageCharacters = document.createElement("div");
  pageCharacters.classList.add("cCharacters");
  pageCharacters.innerHTML = view;

  mainPage(dataCharacters)
  pageCharacters.insertAdjacentElement ("beforeend", pageNumbering(dataCharacters))
 
  return pageCharacters

}



//obtengo toda la base de datos de los personajes
async function getCharacters(dataCharacters){
  let data = await dataCharacters.dataBase
  return data
}

 //renderizo los personajes segun el grupo que me especifiquen y la data
function renderCharacters(groupCharacters){
  let characters =  document.querySelector(".cCharacters__characters")
  characters.innerHTML = ""
  groupCharacters.forEach(character => {
    characters.appendChild(cCharacterCard(character))
  });
}

let numberCharactersPage = 20
//renderiza la primera pagina
async function mainPage (dataCharacters){
  let data = await getCharacters(dataCharacters)
  let seccionData = data.slice(0,numberCharactersPage)
  let indexPage = document.querySelector(".pageNumbering__index")
  indexPage.textContent = `${1 +"/"+ Math.round(data.length/20)}`
  renderCharacters(seccionData, dataCharacters)
}


export{cCharacters, getCharacters, renderCharacters}

