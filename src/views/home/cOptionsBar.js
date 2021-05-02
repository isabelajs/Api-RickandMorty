import {renderCharacters} from "./cCharacters/cCharacters.js"
import {dataCharacters} from "../../utils/Data.js"

let cOptionsBar = ()=>{
  const view = `  <div class="cOptionsBar__right">

                      <div class="cOptionButton">

                        <div class="cOptionButton__title">Filtrar</div>

                        <div class="cOptionButton__container hidden">

                          <div class="cOptionButton">
                            <div class="cOptionButton__title">Especie</div>
                            <div class="cOptionButton__container hidden"></div>
                          </div>
                          
                          <div class="cOptionButton">
                            <div class="cOptionButton__title">Género</div>
                            <div class="cOptionButton__container hidden"></div>
                          </div>

                          <div class="cOptionButton">
                            <div class="cOptionButton__title">Origen</div>
                            <div class="cOptionButton__container hidden"></div>
                          </div>
                          
                          <div class="cOptionButton">
                            <div class="cOptionButton__title">Locación</div>
                            <div class="cOptionButton__container hidden"></div>
                          </div>
                          
                          <div class="cOptionButton">
                            <div class="cOptionButton__title">Episodios</div>
                            <div class="cOptionButton__container hidden"></div>
                          </div>

                        </div>

                      </div>


                      <div class="cOptionButton">
                        <div class="cOptionButton__title">Ordenar</div>
                        <div class="cOptionButton__container hidden">
                          <div id="ascendente" class="options">A-Z</div>
                          <div id="descendente" class="options">Z-A</div>
                        </div>
                      </div>


                      <div class="cOptionsBar__lifeBar">
                        <div class="lifeBar">
                          <div id="Alive" class="containerLife  containerLife--alive hideContainerLife"></div>
                          <div id="Dead" class="containerLife  containerLife--dead hideContainerLife"></div>
                          <div id="unknown" class="containerLife  containerLife--unknown hideContainerLife"></div>
                        </div>
                      </div>
                  </div>`
  let optionsBar = document.createElement("div");
  optionsBar.classList.add("cOptionsBar")
  optionsBar.insertAdjacentHTML("afterbegin",view)

  //cambio la selección en los estados de vida
  let containerLife = optionsBar.querySelectorAll(".containerLife")
  containerLife.forEach(container =>{container.addEventListener("click", (event)=>{selectStatusLife(event.path[0])})})


  //renderizo las opciones de los botones y asigno la función desplazar menu
  let optionButtonsTitle =  optionsBar.querySelectorAll(".cOptionButton__title")
  optionButtonsTitle.forEach(button=>{renderOptions(button)})
  optionButtonsTitle.forEach(button =>{
    console.log(button);
    button.addEventListener("click", (event)=> displayOptions(event.path[0]))})
  

  //le agrega el evento de ocultar el contenedor y deseleccionar el boton
  let options = optionsBar.querySelectorAll(".options")
  options.forEach(option=>{
    option.addEventListener("click",(event)=>{
      changeCharactersOrder(event)
    })
  })
  
  return optionsBar

}

//desplaza las opciones y se selecciona el boton
function displayOptions(button){
  button.classList.toggle("cOptionButton__title--selected")

  //aparece visible el contenedor de opciones
  let container = button.nextSibling.nextSibling;
  container.classList.toggle("hidden")
}

//cierra el contenedor y quita la selección de los botones
function clickActionsToOptions(){
   //cierro los menus que esten abiertos
  let containers = document.querySelectorAll(".cOptionButton__container")
  containers.forEach(container=>{container.classList.add("hidden")})

   //deselecciona el boton principal--title
  let buttons = document.querySelectorAll(".cOptionButton__title--selected")
  buttons.forEach(button=>{
    button.classList.remove("cOptionButton__title--selected")
  })
}

export {cOptionsBar, displayOptions,clickActionsToOptions}


//permite seleccionar los diferentes estados de vida y renderiza
let status = []
function selectStatusLife(container){
  container.classList.toggle("hideContainerLife")

  if (status.includes(container.id)){
    let indice = status.indexOf(container.id)
    status.splice(indice,1)
  }else{
    status.push(container.id)
  }
  dataCharacters.filter.status = status
  renderCharacters()
}

//renderiza los personajes en orden
function changeCharactersOrder(event){
  //renderiza los personajes segun el elemento que le pase
  let option = event.target
  renderCharacters(option.id)
  clickActionsToOptions()
}


//renderiza las opciones
async function renderOptions(button){
  let container = button.nextSibling.nextSibling
  switch(button.textContent){

    case "Especie":
      let optionsSpecies = await dataCharacters.getOptionsSpecies();
      optionsSpecies.forEach(optionsSpecies=>{
        container.insertAdjacentHTML("afterbegin",`<div id="${optionsSpecies}" class="options">${optionsSpecies}</div>`)
      })
      break;

    case "Género":
      let optionsGender = await dataCharacters.getOptionsGender();
      optionsGender.forEach(Gender=>{
        container.insertAdjacentHTML("afterbegin",`<div id="${Gender}" class="options">${Gender}</div>`)
      })
      break;
  
    case "Origen":
      let optionsOrigen = await dataCharacters.getOptionsOrigin();
      optionsOrigen.forEach(optionsOrigen=>{
        container.insertAdjacentHTML("afterbegin",`<div id="${optionsOrigen}" class="options">${optionsOrigen}</div>`)
      })
      break;

    case "Locación":
      let optionsLocation = await dataCharacters.getOptionsLocation();
      optionsLocation.forEach(optionsLocation=>{
        container.insertAdjacentHTML("afterbegin",`<div id="${optionsLocation}" class="options">${optionsLocation}</div>`)
      })
      break;

    case "Episodios":
      let optionsEpisodes = await dataCharacters.getOptionsEpisodiosName();
      optionsEpisodes.forEach(optionsEpisodes=>{
        container.insertAdjacentHTML("afterbegin",`<div id="${optionsEpisodes}" class="options">${optionsEpisodes}</div>`)
      })
      break;

    }

}




