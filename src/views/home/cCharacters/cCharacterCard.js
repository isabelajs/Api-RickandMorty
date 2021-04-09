import {cCharacterInfo} from "./cCharacterInfo.js"


let cCharacterCard = ()=>{
  let view = `  <div class="cCharacterCard__id hidden">
                  <p>1</p>
                </div>

                <img class="cCharacterCard__img" src="https://rickandmortyapi.com/api/character/avatar/322.jpeg" alt="">

                <div class="cCharacterCard__txt">
                  <div class="txt__name">Morphizer-XE Customer Support</div>
                  <div class="txt__status txt__status--alive"></div>
                </div>

                <div class="cCharacterCard__info hidden">
                  
                  <div class="info">

                    <div class="info__description">
                        <div class="gender"></div>
                        <div class="species"></div>
                    </div>               
                  </div>

                  <svg class="info__svg" width="106" height="38" viewBox="0 0 106 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M105 1H55.2789H10.568L1 14V37H93.3984L105 26.2414V1Z" stroke="white"/>
                  </svg>
                  
                </div>`

  let characterCard = document.createElement("div");
  characterCard.classList.add("cCharacterCard")
  characterCard.insertAdjacentHTML("afterbegin",view)

  characterCard.addEventListener("mouseover",()=>{visibilityInformation()})
  characterCard.addEventListener("mouseleave",()=>{hiddenInformation()})
  characterCard.addEventListener("click", ()=>{visibilityModalInformation()})
  return characterCard
}

export{cCharacterCard}

function visibilityInformation(){
  let id = document.querySelector(".cCharacterCard__id")
  let info = document.querySelector(".cCharacterCard__info")
  id.classList.remove("hidden")
  info.classList.remove("hidden")
}

function hiddenInformation(){
  let id = document.querySelector(".cCharacterCard__id")
  let info = document.querySelector(".cCharacterCard__info")
  id.classList.add("hidden")
  info.classList.add("hidden")
}

function visibilityModalInformation(){
  let main = document.querySelector("main")
  main.appendChild(cCharacterInfo())
}

