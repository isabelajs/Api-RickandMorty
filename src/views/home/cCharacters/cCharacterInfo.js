
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
                    <div class="cOptionButton">Episodios</div>
                  </div>
                </div>
              </div>`
  let characterInfo = document.createElement("div")
  characterInfo.classList.add("cCharacterInfo")
  characterInfo.innerHTML = view

  let episodes = characterInfo.querySelector(".cOptionButton")
  //TODO debo hacer una función que me pemrita desplegar el menú
  episodes.addEventListener("click",(event)=>showEpisodeMenu(event.path[0],character.episode))

  //abre el modal con la información del personaje
  characterInfo.addEventListener("click", (event)=>{closeModal(event.target)})

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

function showEpisodeMenu (button, episodes){
  button.classList.toggle("cOptionButton--selected")
  let options = button.querySelector(".options")
  episodes.forEach(episode => { 
    let numberEpisode = episode.split("/")[5];  
  });
}

