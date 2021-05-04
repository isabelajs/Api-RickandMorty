import {displayOptions,clickActionsToOptions} from "../cOptionsBar.js"


let cCharacterInfo = (character)=>{
  let view =` <div class="cInfoContainer">
                <div class="cInfoContainer__contents">
                  <div class="contents__title">${character.name}</div>
                  <img class="contents__img" src=${character.image} alt="">
                  <div class="contents__info">
                    <div class="info__text">Status: ${character.status}</div>
                    <div class="info__text">Specie: ${character.species}</div>
                    <div class="info__text">Type: ${character.type}</div>
                    <div class="info__text">Gender: ${character.gender}</div>
                    <div class="info__text">Origin: ${character.origin.name}</div>
                    <div class="info__text">Location: ${character.location.name}</div>
                    <div class="cOptionButton">
                            <div class="cOptionButton__title">Episodios</div>
                            <div class="cOptionButton__container hidden"></div>
                    </div>
                  </div>
                </div>
              </div>`
  let characterInfo = document.createElement("div")
  characterInfo.classList.add("cCharacterInfo")
  characterInfo.innerHTML = view
  
  //modifica el tamaño del nombre por si es muy largo
  aggNameCharacterInfo(character, characterInfo)

  //cierra el modal al darle en algún lugar fuera del contenedor
  characterInfo.addEventListener("click", (event)=>{ closeModal(event.target)})

  //selecciona el botón y despleza el menu de opciones
  let buttonEpisode = characterInfo.querySelector(".cOptionButton__title")
  renderOptionsEpisodes(buttonEpisode,character)
  buttonEpisode.addEventListener("click", (event)=>{ displayOptions(event.target) })

  return characterInfo
}

export{cCharacterInfo}

//cierra el modal y desbloquea el scroll
function closeModal(elementSelect){
  let outsideElement = document.querySelector(".cCharacterInfo")
  let html = document.querySelector("html")
  if(elementSelect == outsideElement){
    outsideElement.remove()
    html.classList.remove("scrollHidden")
  }  
  
}

//cambia el tamaño del titulo si es muy largo
function aggNameCharacterInfo(character, contenedor){
  let title = contenedor.querySelector(".contents__title")
  if (character.name.length >= 20){
    title.style.fontSize = "11px"
  }
}

async function renderOptionsEpisodes(buttonEpisode,character){
  let container = buttonEpisode.nextSibling.nextSibling
  let episodes = character.episode

  episodes.forEach(episode => {
    container.innerHTML +=`<div id="${episode}" class="options">${episode}</div>`
  });

  let options =container.querySelectorAll(".options")
  options.forEach(option=>{
    option.addEventListener("click",()=>{ clickActionsToOptions()})
  })
}

