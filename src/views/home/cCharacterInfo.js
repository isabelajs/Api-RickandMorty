
let cCharacterInfo = ()=>{
  let view =` <div class="infoContenido">
                <div class="infoContenido__title">MORTY SMITH</div>
                <img class="infoContenido__img" src="https://rickandmortyapi.com/api/character/avatar/8.jpeg" alt="">
                <div class="infoContenido__info">
                  <div class="info__text">Status:</div>
                  <div class="info__text">Status:</div>
                  <div class="info__text">Status:</div>
                  <div class="info__text">Status:</div>
                </div>
              </div>`
  let characterInfo = document.createElement("div")
  characterInfo.classList.add("cCharacterInfo")
  characterInfo.innerHTML = view
  return characterInfo
}

export{cCharacterInfo}