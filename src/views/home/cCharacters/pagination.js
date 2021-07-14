import {dataPage} from "../../../utils/Data.js"



let cPageNumbering = ()=>{
  let pagination = document.createElement("div")
  pagination.classList.add("pageNumbering")
  return pagination
}


function renderPageNumbering(){
  let pageNumbering = document.querySelector(".pageNumbering")
  let view = `    <div id="previous" class="bottom"> < </div>
                  <div class='pageNumbering__index'></div>
                  <div id="next" class="bottom">></div>`
  pageNumbering.innerHTML = view

  //permite ir a la pagina anterior
  let previousPage = document.querySelector("#previous")

  previousPage.addEventListener("click",()=>{

    dataPage.currentPage > 1 ? dataPage.currentPage -= 1 : undefined

    window.location.hash = `#/personajes/${dataPage.currentPage}`
    
  })

  //permite ir a la siguiente pagina
  let nextPage = document.querySelector("#next");
  nextPage.addEventListener("click",()=>{

    //suma solo si existen mas paginas que visualizar
    dataPage.currentPage < dataPage.numberOfPages  ? dataPage.currentPage += 1 : undefined
    
    window.location.hash = `#/personajes/${dataPage.currentPage}`
  
    
  })

  //renderiza el número de páginas
  cIndexNumber()
}



function cIndexNumber(){

  let {numberOfPages, numberOfPagesInPagination, currentPage} = dataPage

  let indexPage = document.querySelector(".pageNumbering__index")

  // screen.width < 768 ? numberOfPagesInPagination = 5 : numberOfPagesInPagination = 10

  let elements  = indexOfPagination(numberOfPagesInPagination,currentPage,numberOfPages)

  elements = elements.forEach(index=>{
    const newHtmlIndex = document.createElement('div')
    newHtmlIndex.setAttribute('id',index)
    newHtmlIndex.setAttribute('class','indexNumber')
    newHtmlIndex.textContent = index

    indexPage.appendChild(newHtmlIndex)

  })

  // elements.forEach((indexElement)=>{
    
  // })

  document.getElementById(currentPage).classList.add("indexNumber__selected")

  //asigna el evento div los nuevos botones
  let indexNumber = document.querySelectorAll(".indexNumber")
  indexNumber.forEach(number=>{
    number.addEventListener("click",()=>{
      window.location.hash = `#/personajes/${number.id}`
      currentPage = parseInt(number.id)
    })
  })
}

function indexOfPagination(pagination,currentPage, pages){

  if( pages <= pagination){
    return Array.from({length:  pages}, (_, i) => i +1)
  }else{

    let puntoInicial = 1

    if(currentPage<= Math.ceil(pagination/2)){
      puntoInicial = 1
    }

    else if(( pages-currentPage) > Math.floor(pagination/2)){
      puntoInicial = currentPage - (Math.ceil(pagination/2)-1)
    }
    else{
      puntoInicial =  pages - (pagination-1)
    }


    return Array.from({length: pagination}, (_, i) => i + puntoInicial )
  }
}

export {cPageNumbering, renderPageNumbering}


// == (10)

    // paginasPersonajes <= paginacionContainer

          //renderizo solo las paginas disponibles 

    // paginasPersonajes > paginacionContainer

          //puedo tomar un punto en el medio (estoy alejado 4 espacios mas del 1 osea p + 4 > 5?) 


              // p <= (10/2)

                //-> pI = 1      pF = (10)

                  //->  p = 1   i = 1   f = 20  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 3   i = 1   f = 20  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 4   i = 1   f = 20  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 5   i = 1   f = 20  ->  (1,2,3,4,5,6,7,8,9,10)


              // p > (10/2)   and  (final-p) > (10/2)
              
                //-> pI = p-(10/2)-1      pF = p+(10/2)

                  //->  p = 6   i = 1   f = 20  ->  (2,3,4,5,6,7,8,9,10,11)
                  //->  p = 7   i = 1   f = 20  ->  (3,4,5,6,7,8,9,10,11,12)
                  //->  p = 10  i = 1   f = 20  ->  (6,7,8,9,10,11,12,13,14,15)
                  //->  p = 12  i = 1   f = 20  ->  (8,9,10,11,12,13,14,15,16,17)
                  //->  p = 14  i = 1   f = 20  ->  (10,11,12,13,14,15,16,17,18,19)


              // (final-p) <= (10/2)

                //-> pI = final-(10-1)    Pf= (final)

                  //->  p = 15  i = 1   f = 20  ->  (11,12,13,14,15,16,17,18,19,20)
                  //->  p = 16  i = 1   f = 20  ->  (11,12,13,14,15,16,17,18,19,20)
                  //->  p = 19  i = 1   f = 20  ->  (11,12,13,14,15,16,17,18,19,20)
                  //->  p = 20  i = 1   f = 20  ->  (11,12,13,14,15,16,17,18,19,20)




              // p <= (10/2)

                //-> pI = 1      pF = (10)

                  //->  p = 1   i = 1   f = 11  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 3   i = 1   f = 11  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 4   i = 1   f = 11  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 5   i = 1   f = 11  ->  (1,2,3,4,5,6,7,8,9,10)


              // p > (10/2)   and  (final-p) > (10/2)
              
                //-> pI = p-((10/2)-1)      pF = p+(10/2)

                  //-> 


              // (final-p) <= (10/2)

                //-> pI = final-(10-1)    Pf= (final)

                  //->  p = 6  i = 1   f = 11  ->  (2,3,4,5,6,7,8,9,10,11)







              // p <= (10/2)

                //-> pI = 1      pF = (10)

                  //->  p = 1   i = 1   f = 12  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 3   i = 1   f = 12  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 4   i = 1   f = 12  ->  (1,2,3,4,5,6,7,8,9,10)
                  //->  p = 5   i = 1   f = 12  ->  (1,2,3,4,5,6,7,8,9,10)


              // p > (10/2)   and  (final-p) > (10/2)
              
                //-> pI = p - ((10/2)-1)      pF = p+(10/2)

                  //->  p = 6   i = 1   f = 12  ->  (2,3,4,5,6,7,8,9,10,11)


              // (final-p) <= (10/2)

                //-> pI = final-(10-1)    Pf= (final)

                  //->  p = 7  i = 1   f = 12  ->  (3,4,5,6,7,8,9,10,11,12)














