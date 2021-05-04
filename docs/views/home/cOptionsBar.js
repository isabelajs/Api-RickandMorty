import {renderCharacters} from "./cCharacters/cCharacters.js"
import {dataCharacters} from "../../utils/Data.js"

let cOptionsBar = ()=>{
  const view = `  <div class="cOptionsBar__right">

                    <div class="cOptionButton">
                      <div class="cOptionButton__title menu__title">Filtrar</div>

                      <div class="cOptionButton__container menu__container hidden">
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
                      <div class="cOptionButton__title menu__title">Ordenar</div>
                      <div class="cOptionButton__container menu__container hidden">
                        <div class="containerOptions">
                          <div id="ascendente" class="options">A-Z</div>
                          <div id="descendente" class="options">Z-A</div>
                        </div>
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


  // //renderizo las opciones de los botones y asigno la función desplazar menu
  let optionButtonsTitle =  optionsBar.querySelectorAll(".cOptionButton__title")
  optionButtonsTitle.forEach(button =>{
    renderOptions(button)
    button.addEventListener("click", (event)=> displayOptions(event.path[0]))
  })

  //TODO me hace falta una función que al dar click en un lugar diferente a los botones

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
function displayOptions(buttonSelected){
  let buttonSelectedBefore = document.querySelectorAll(".cOptionButton__title--selected")
  //selecciona todos los contenedores
  let containerButtonSelectedBefore = document.querySelectorAll(".cOptionButton__container")
  let containerButton = buttonSelected.nextSibling.nextSibling
  buttonSelected.classList.toggle("cOptionButton__title--selected")

  if(containerButton.classList.contains("menu__container")){
    containerButton.classList.toggle("hidden")
    containerButtonSelectedBefore.forEach(container=>{
      if(container.classList.contains("menu__container") && container!=containerButton && !container.classList.contains("hidden")){
        container.classList.add("hidden")
      }
    })
  }else{
    containerButton.classList.toggle("hidden")
    containerButtonSelectedBefore.forEach(container=>{
      if(!container.classList.contains("menu__container") && !container.classList.contains("hidden") && container!=containerButton){
        container.classList.add("hidden")
      }
    })
  }
  
  //quita el seleccionado solo si tambien contiene la clase menu title
  buttonSelectedBefore.forEach(button=>{
    if(button.classList.contains("menu__title") && buttonSelected.classList.contains("menu__title")){
      button.classList.remove("cOptionButton__title--selected")

      containerButtonSelectedBefore.forEach(container=>{
        if(!container.classList.contains("menu__container") && !container.classList.contains("hidden") && container!=containerButton){
          container.classList.add("hidden")
        }
      })

    }else if(!button.classList.contains("menu__title")){
      button.classList.remove("cOptionButton__title--selected")
      
    }
  })



}

//cierra el contenedor y quita la selección de los botones
function clickActionsToOptions(event){
   //cierro los menus que esten abiertos
  let containers = document.querySelectorAll(".cOptionButton__container")
  containers.forEach(container=>{container.classList.add("hidden")})

   //deselecciona el boton principal--title
  let buttons = document.querySelectorAll(".cOptionButton__title--selected")
  buttons.forEach(button=>{
    button.classList.remove("cOptionButton__title--selected")
  })

  renderSelectedOption(event.target)
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
//renderiza las opciones
async function renderOptions(button){
  let container = button.nextSibling.nextSibling
  
  
  switch(button.textContent){
    
    case "Especie":
      let optionsSpecies = await dataCharacters.getOptionsSpecies();
      optionsSpecies.forEach(species=>{
        //creo el componente
        let option = document.createElement("div")
        option.classList.add("options")
        option.setAttribute("id", species)
        option.textContent = species

        option.addEventListener("click",()=>{
          let filterSpecies = dataCharacters.filter.species
          if(!filterSpecies.includes(species)){
            filterSpecies.push(species)
            renderCharacters()
          }else{
            filterSpecies.splice(filterSpecies.indexOf(species),1)
            renderCharacters()
          }
          option.classList.toggle("options--selected")

        })
        
        container.appendChild(option)
      })
      break;

    case "Género":
      let optionsGender = await dataCharacters.getOptionsGender();
      optionsGender.forEach(gender=>{
        //creo el componente
        let option = document.createElement("div")
        option.classList.add("options")
        option.setAttribute("id", gender)
        option.textContent = gender

        option.addEventListener("click",()=>{
          let filterGender = dataCharacters.filter.gender
          if(!filterGender.includes(gender)){
            filterGender.push(gender)
            renderCharacters()
          }else{
            filterGender.splice(filterGender.indexOf(gender),1)
            renderCharacters()
          }
          option.classList.toggle("options--selected")

        })

        container.appendChild(option)
      })
      break;
  
    case "Origen":
      let optionsOrigin = await dataCharacters.getOptionsOrigin();
      optionsOrigin.forEach(origin =>{
        let option = document.createElement("div")
        option.classList.add("options")
        option.setAttribute("id", origin )
        option.textContent = origin 

        option.addEventListener("click",()=>{
          let filterOrigin = dataCharacters.filter.origin
          if(!filterOrigin.includes(origin)){
            filterOrigin.push(origin)
            renderCharacters()
          }else{
            filterOrigin.splice(filterOrigin.indexOf(origin),1)
            renderCharacters()
          }
          option.classList.toggle("options--selected")
        })
        container.appendChild(option)
      })
      break;

    case "Locación":
      let optionsLocation = await dataCharacters.getOptionsLocation();
      optionsLocation.forEach(location=>{
        let option = document.createElement("div")
        option.classList.add("options")
        option.setAttribute("id", location)
        option.textContent = location

        option.addEventListener("click",()=>{
          let filterLocation = dataCharacters.filter.location
          if(!filterLocation.includes(location)){
            filterLocation.push(location)
            renderCharacters()
          }else{
            filterLocation.splice(filterLocation.indexOf(location),1)
            renderCharacters()
          }
          option.classList.toggle("options--selected")
        })
        
        container.appendChild(option)
      })
      break;

    case "Episodios":
      let optionsEpisodes = await dataCharacters.getOptionsEpisodiosName();
      optionsEpisodes.forEach(episode=>{
        let option = document.createElement("div")
        option.classList.add("options")
        option.setAttribute("id", episode)
        option.textContent = episode

        option.addEventListener("click",()=>{
          let filterEpisodes = dataCharacters.filter.episode
          if(!filterEpisodes.includes(episode)){
            filterEpisodes.push(episode)
            renderCharacters()
          }else{
            filterEpisodes.splice(filterEpisodes.indexOf(episode),1)
            renderCharacters()
          }
          option.classList.toggle("options--selected")

        })

        container.appendChild(option)
      })
      break;

    }
  

}

//renderiza los personajes en orden
function changeCharactersOrder(event){
  //renderiza los personajes segun el elemento que le pase
  let option = event.target
  renderCharacters(option.id)
  clickActionsToOptions(event)
}

function renderSelectedOption (element){
  let itemSelectedBefore = document.querySelector(".options--selected")
  if(itemSelectedBefore !=null){
    itemSelectedBefore.classList.remove("options--selected")
  }
  element.classList.add("options--selected")
}












