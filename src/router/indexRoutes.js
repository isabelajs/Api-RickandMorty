import {dataPage} from "../utils/Data.js"
import {renderCharacters} from "../views/home/cCharacters/cCharacters.js"
import { dataCharacters } from "../utils/Data.js"

const router = ({oldUrl,newUrl})=>{
   //corto la ruta en segmentos
   let roadSegments = newUrl.split("/")

   switch(roadSegments[1]){
      case "home":
         return console.log("home");

      case "personajes":

         let pageNumber = parseInt(roadSegments[2])
         
         if (pageNumber){

            //la primera vez no cuenta
            if(pageNumber <= dataPage.numberOfPages){
               dataPage.currentPage = pageNumber
               renderCharacters()
            }else{
               
            }
            
            // console.log('intento de cambio', pageNumber);

            // }else{
            //    let notFound = document.createElement("div")
            //    let cCharacters = document.querySelector(".cCharacters")
            //    let main = document.querySelector(".app")
            //    notFound.classList.add("notFound")
            //    cCharacters.remove()
            //    main.appendChild(notFound)
            // }

         }
         
         return console.log("personajes");

      case "juegos":
         return console.log("juegos");

      default:         
         return console.log("404!!");
   }
}

export{router}


//si el hash contiene un número debe llevarnos a ese número


//BUG  UNIFICAR EL NOTFOUND CUANDO FALLA ENCONTRAR DATOS Y CUANDO SE PASA DEL NUMERO DE PERSONAJES EN PAGINACION