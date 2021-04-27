import {renderCharacters} from "./cCharacters"
import {dataPage} from "../../../utils/Data.js"


let cPageNumbering = ()=>{
  let pagination = document.createElement("div")
  pagination.classList.add("pageNumbering")
  return pagination
}


function renderPageNumbering(){
  //agrego el componente pageNumbering
  let pageNumbering = document.querySelector(".pageNumbering")
  let view = `    <div id="previous" class="bottom"> < </div>
                  <div class='pageNumbering__index'></div>
                  <div id="next" class="bottom">></div>`
  pageNumbering.innerHTML = view

  //permite ir a la pagina anterior
  let previousPage = document.querySelector("#previous")
  previousPage.addEventListener("click",()=>{previousPageCharacters();})

  //permite ir a la siguiente pagina
  let nextPage = document.querySelector("#next");
  nextPage.addEventListener("click",()=>{nextPageCharacters()})

  //renderiza el número de páginas
  renderIndexNumber()
}



async function renderIndexNumber(){
  let numberOfPages = dataPage.numberOfPages
  let indexPage = document.querySelector(".pageNumbering__index")

  //DONDE ESTOY PARADO 8

  if(screen.width <768){
    
    //si la páginas es menor a 5, se renderiza
    if(numberOfPages <= dataPage.numberOfPagesInPagination){
      let i = 1
      while(i <= numberOfPages){
        indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
        i++
      }
      


    }else{
      


      //boton-inicial = 1
      //boton-final = 5
      //boton-select = 2

      if(dataPage.pageNumber-1 == dataPage.endPageBlock){
        let i = dataPage.pageNumber-4
        dataPage.initPageBlock = i
        dataPage.endPageBlock++

        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }

      }else if(dataPage.pageNumber+1 == dataPage.initPageBlock){
        let i = dataPage.pageNumber
        dataPage.initPageBlock = i
        dataPage.endPageBlock = i+4
        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }
      }else{
      let i = dataPage.initPageBlock
      while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }
      }

      //evaluo dataPage.pageNumber-1 = dataPage.endButtonblock , renderizar ....  i = dataPage.pageNumber
        //let i = dataPage.pageNumber - 4

        //i = 2

        //boton-inicial = i 

        // while(i <= boton-final){
        //   indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
        //   i++
        // }


        //boton-final = i-1


      //evaluo dataPage.pageNumber+1= el primer boton, renderizar ....  i = dataPage.pageNumber
        //i = datapage.paagenumber 
        //boton-inicial = i 
        //boton-final = i

      //else -> no me estan pidiendo desplazamientos
        //renderizar i = boton-inicial






      
      // while(i <= numberOfPages){
      //   if(i<= 5){
      //     indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
      //   }
      //   i++
      // }


    }

  }else{
    if(numberOfPages <= dataPage.numberOfPagesInPagination){
      let i = 1
      while(i <= numberOfPages){
        indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
        i++
      }
      
    }else{
      
      if(dataPage.pageNumber-1 == dataPage.endPageBlock){
        let i = dataPage.pageNumber-9
        dataPage.initPageBlock = i
        dataPage.endPageBlock++

        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }

      }else if(dataPage.pageNumber+1 == dataPage.initPageBlock){
        let i = dataPage.pageNumber
        dataPage.initPageBlock = i
        dataPage.endPageBlock = i+9
        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }
      }else{
      let i = dataPage.initPageBlock
      while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }
      }
      
    }
  }
  
  //ejecuta el seleccionado
  let page = document.getElementById(dataPage.pageNumber)
  page.classList.add("indexNumber__selected")

  //asigna el evento a los nuevos botones
  let indexNumber = document.querySelectorAll(".indexNumber")
  indexNumber.forEach(number=>{
    number.addEventListener("click",()=>{
      dataPage.pageNumber = parseInt(number.id)
      renderCharacters()
    })
  })

}


async function nextPageCharacters (){
  let numberOfPages = dataPage.numberOfPages

  //suma solo si existen mas paginas que visualizar
  if(dataPage.pageNumber < numberOfPages){
    dataPage.pageNumber += 1
  }

  renderCharacters()
  
}

async function previousPageCharacters (){
  if(dataPage.pageNumber > 1){
    dataPage.pageNumber -= 1
  }
  //renderiza los personajes
  renderCharacters()
}

export {cPageNumbering, renderPageNumbering}




// function nextPagesOfIndexes(){
//   let numberOfPages = dataPage.numberOfPages
//   let buttons = document.querySelectorAll(".indexNumber")
//   let lastButton = buttons[buttons.length-1]

//   if(parseInt(lastButton.id)+10 > numberOfPages){

//     if(parseInt(lastButton.id) + numberOfPages%10 <= numberOfPages){
//       //actualizar la seleccion
//       buttons.forEach(button =>{
//         button.textContent =parseInt(button.textContent) + numberOfPages%10
//         button.id = parseInt(button.textContent)
//         button.href = `#${parseInt(button.textContent) }`
//       })

//     }

//   }
//   else{
//     buttons.forEach(button =>{
//       console.log(button);
//       button.textContent =parseInt(button.textContent) + 10 
//       button.id = parseInt(button.textContent)
//       button.href = `#${parseInt(button.textContent) }`
  
//     })
  
//   }
// }

















// //cambio en el diseño de la paginación
// function changeInPagination (){
//   let numberOfPages = dataPage.numberOfPages
//   let indexPage = document.querySelector(".pageNumbering__index")
//   if (screen.width >= 768){ 
//     if(numberOfPages<=dataPage.numberOfPagesInPagination){
//       let i = 1
//       while(i <= numberOfPages){
//         indexPage.appendChild(`<a href="" class="indexNumber">${i}</a>`)
//         i++
//       }

//     }else{

//       let view = `<div class="previousPage arrow" > < </div>
//                   <div class="pageNumbers">
//                   <a href="#1" id="1" class="indexNumber">1</a>
//                   <a href="#2" id="2" class="indexNumber">2</a>
//                   <a href="#3" id="3" class="indexNumber">3</a>
//                   <a href='#4' id="4" class='indexNumber'>4</a>
//                   <a href='#5' id="5" class='indexNumber'>5</a>
//                   <a href="#6" id="6" class="indexNumber">6</a>
//                   <a href="#7" id="7" class="indexNumber">7</a>
//                   <a href="#8" id="8" class="indexNumber">8</a>
//                   <a href='#9' id="9" class='indexNumber'>9</a>
//                   <a href='#10' id="10" class='indexNumber'>10</a>
//                   </div> 
//                   <div class="nextPage arrow">></div>`

//       indexPage.innerHTML = view

//       //crea el siguiente bloque de páginas
//       let nextPage = document.querySelector(".nextPage")
//       nextPage.addEventListener("click",()=>{nextPagesOfIndexes()})

//       //crea el anterior bloque de páginas
//       let previousPage = document.querySelector(".previousPage")
//       previousPage.addEventListener("click",()=>{previousPagesOfIndexes()})

//     }
//     // permite saber tener el renderizado de la pagina dandole click al número
//     let pages = document.querySelectorAll(".indexNumber")
//     pages.forEach(page=>{
//     page.addEventListener("click",(event)=>{pageSelectedOneClick(event.target.textContent)})
//     })

    
    
//   }

  

// }

// function nextPagesOfIndexes(){
//   let numberOfPages = dataPage.numberOfPages
//   let buttons = document.querySelectorAll(".indexNumber")
//   let lastButton = buttons[buttons.length-1]

//   if(parseInt(lastButton.id)+10 > numberOfPages){

//     if(parseInt(lastButton.id) + numberOfPages%10 <= numberOfPages){
//       //actualizar la seleccion
//       buttons.forEach(button =>{
//         button.textContent =parseInt(button.textContent) + numberOfPages%10
//         button.id = parseInt(button.textContent)
//         button.href = `#${parseInt(button.textContent) }`
//       })

//     }

//   }
//   else{
//     buttons.forEach(button =>{
//       console.log(button);
//       button.textContent =parseInt(button.textContent) + 10 
//       button.id = parseInt(button.textContent)
//       button.href = `#${parseInt(button.textContent) }`
  
//     })
  
//   }
// }

// function previousPagesOfIndexes(){
//   let numberOfPages = dataPage.numberOfPages

//   let buttons = document.querySelectorAll(".indexNumber")
//   let firstButton = buttons[0]

//   if(parseInt(firstButton.id)!==1){
//     if(parseInt(firstButton.id)%10 == 1 ){
//       buttons.forEach(button =>{
//         button.textContent =parseInt(button.textContent) - 10 
//         button.id = parseInt(button.textContent)
//         button.href = `#${parseInt(button.textContent)}`
//       })
//     }else{
//         buttons.forEach(button =>{
//           button.textContent =parseInt(button.textContent) - numberOfPages%10 
//           button.id = parseInt(button.textContent)
//           button.href = `#${parseInt(button.textContent)}`
//         })
      
//     }
//   }

  
  
// }






//limpiar los contenedores
//dibujar los nuevos personajes
//dibujar el nuevo orden de paginas



