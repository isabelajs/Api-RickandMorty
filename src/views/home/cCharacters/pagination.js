import {getCharacters} from "./cCharacters";
import {renderCharacters} from "./cCharacters"


let pageNumbering = (dataCharacters)=>{
  let view = `  <div id="previous" class="bottom">Anterior</div>
                <div class='pageNumbering__index'></div>
                <div id="next" class="bottom">Siguiente</div>`
  let pagination = document.createElement("div")
  pagination.classList.add("pageNumbering")
  pagination. innerHTML = view

  //permite ir a la pagina anterior
  let previousPage = pagination.querySelector("#previous")
  previousPage.addEventListener("click",()=>{previousPageCharacters(dataCharacters);})

 //permite ir a la siguiente pagina
  let nextPage = pagination.querySelector("#next");
  nextPage.addEventListener("click",()=>{nextPageCharacters(dataCharacters)})

  // //cambia el diseño en la paginacion
  // window.onload = changeInPagination
  // window.onresize = changeInPagination
 
  
  return pagination
}

export {pageNumbering}


let pageNumber = 1;
let numberCharactersPage = 20;

async function nextPageCharacters (dataCharacters){
  let data = await getCharacters(dataCharacters)
  let numberOfPages = Math.round(data.length/numberCharactersPage)

  if(pageNumber < numberOfPages){
    pageNumber += 1
  }
  
  let seccionData = data.slice(numberCharactersPage*(pageNumber-1), numberCharactersPage*pageNumber)

  let indexPage = document.querySelector(".pageNumbering__index")
  indexPage.textContent = `${pageNumber +"/"+ numberOfPages}`
  renderCharacters(seccionData)
}

async function previousPageCharacters (dataCharacters){
  let data = await getCharacters(dataCharacters)
  let numberOfPages = Math.round(data.length/numberCharactersPage)

  if( pageNumber > 1){
    pageNumber -= 1
  }
  let seccionData = data.slice(numberCharactersPage*(pageNumber-1), numberCharactersPage*pageNumber)

  let indexPage = document.querySelector(".pageNumbering__index")
  indexPage.textContent = `${pageNumber +"/"+ numberOfPages}`
  renderCharacters(seccionData)
}

function changeInPagination (){
  if (screen.width >= 768){ 
    let view = `  <a href="">1</a>
                  <a href=""></a>`
    let previousBottom = document.querySelector("#previous")
    
  }
}