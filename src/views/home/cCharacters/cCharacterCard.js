import {cCharacterInfo} from "./cCharacterInfo.js"


let cCharacterCard = (character)=>{
  let view = `  <div class="cCharacterCard__id hidden">
                  <p>${character.id}</p>
                </div>

                <img class="cCharacterCard__img" src="${character.image}" alt="">

                <div class="cCharacterCard__txt">
                  <div class="txt__name">${character.name}</div>
                  <div class="txt__status"></div>
                </div>

                <div class="cCharacterCard__info hidden">
                  
                  <div class="info">

                    <div class="info__description">
                        <div class="gender"></div>
                    </div>               
                  </div>

                  <svg class="info__svg" width="106" height="38" viewBox="0 0 106 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M105 1H55.2789H10.568L1 14V37H93.3984L105 26.2414V1Z" stroke="black"/>
                  </svg>
                  
                </div>`

  let characterCard = document.createElement("div");
  characterCard.classList.add("cCharacterCard")
  characterCard.insertAdjacentHTML("afterbegin",view)

  characterCard.addEventListener("mouseenter", (event)=>{visibilityInformation(event.path[0])})
  characterCard.addEventListener("mouseleave", (event)=>{hiddenInformation(event.path[0])})
  characterCard.addEventListener("click", (event)=>{visibilityModalInformation(event.path[1],character)})

  //modifica la barra de estado de vida del personaje
  statusLife(character)
  //modifica el genero en la información del personaje
  gender(character)
  

  function statusLife(character){
    let txtStatus = characterCard.querySelector(".txt__status")
    switch(character.status){
      case "Dead":
        txtStatus.classList.add("txt__status--dead")
        break;
      case "Alive":
        txtStatus.classList.add("txt__status--alive")
        break;
      case "unknown":
        txtStatus.classList.add("txt__status--unknown")
        break;
  
    }
  }

  function gender(character){
    let gender = characterCard.querySelector(".gender")
    switch(character.gender){
      case "Female":
        gender.style.backgroundImage = "url('../assets/img/masculino.svg')";
        break;
      case "Male":
        gender.style.backgroundImage = "url('../assets/img/masculino.svg')";
        break;
      case "Genderless":
        gender.style.backgroundImage = "url('../assets/img/masculino.svg')";
        break;
      case "unknown":
        gender.style.backgroundImage = "url('../assets/img/masculino.svg')";   
        break;
  }
  }
  

  

  return characterCard
}

export{cCharacterCard}



//hace visible la información al pasar el mouse sobre la card
function visibilityInformation(card){
  let id = card.querySelector(".cCharacterCard__id")
  let info = card.querySelector(".cCharacterCard__info")
  id.classList.remove("hidden")
  info.classList.remove("hidden")
  
}

//oculta la informacion si se mueve el mouse fuera de la card
function hiddenInformation(card){
  let id = card.querySelector(".cCharacterCard__id")
  let info = card.querySelector(".cCharacterCard__info")
  id.classList.add("hidden")
  info.classList.add("hidden")
}

//muestra el modal con mas información del personaje
function visibilityModalInformation(card, character){
  let containerCards = document.querySelector(".cCharacters__characters")
  containerCards.appendChild(cCharacterInfo(character))
}

