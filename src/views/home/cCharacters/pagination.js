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


  if(screen.width < 768){
    
    //si la páginas es menor a 5, se renderiza
    if(numberOfPages <= dataPage.numberOfPagesInPagination){
      let i = 1
      while(i <= numberOfPages){
        indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
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
          indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }

      }else if(dataPage.pageNumber+1 == dataPage.initPageBlock){
        let i = dataPage.pageNumber
        dataPage.initPageBlock = i
        dataPage.endPageBlock = i+4
        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }
      }else{
      let i = dataPage.initPageBlock
      while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
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
        indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
        i++
      }
      
    }else{
      
      if(dataPage.pageNumber-1 == dataPage.endPageBlock){
        let i = dataPage.pageNumber-9
        dataPage.initPageBlock = i
        dataPage.endPageBlock++

        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }

      }else if(dataPage.pageNumber+1 == dataPage.initPageBlock){
        let i = dataPage.pageNumber
        dataPage.initPageBlock = i
        dataPage.endPageBlock = i+9
        while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
          i++
        }
      }else{
      let i = dataPage.initPageBlock
      while(i <= dataPage.endPageBlock){
          indexPage.innerHTML += (`<a href="/#/personajes/${i}" id="${i}" class="indexNumber">${i}</a>`)
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
    })
  })

}

async function nextPageCharacters (){
  let numberOfPages = dataPage.numberOfPages

  //suma solo si existen mas paginas que visualizar
  if(dataPage.pageNumber < numberOfPages){
    dataPage.pageNumber += 1
  }
  window.location.hash = `#/personajes/${dataPage.pageNumber}`
  
  
}

async function previousPageCharacters (){
  if(dataPage.pageNumber > 1){
    dataPage.pageNumber -= 1
  }
  window.location.hash = `#/personajes/${dataPage.pageNumber}`
  
}

export {cPageNumbering, renderPageNumbering}





















