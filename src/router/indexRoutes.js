import {dataPage} from "../utils/Data.js"
import {renderCharacters} from "../views/home/cCharacters/cCharacters.js"

const router = (router)=>{
   //corto la ruta en segmentos
   let roadSegments = router.split("/")

   switch(roadSegments[1]){
      case "home":
         return console.log("home");

      case "personajes":
         let pageNumberInHash = parseInt(roadSegments[2])

         if (pageNumberInHash){

            if(pageNumberInHash <= dataPage.numberOfPages){
               dataPage.pageNumber = pageNumberInHash
               renderCharacters()
            }else{
               let notFound = document.createElement("div")
               let cCharacters = document.querySelector(".cCharacters")
               let main = document.querySelector(".app")
               notFound.classList.add("notFound")
               cCharacters.remove()
               main.appendChild(notFound)
            }

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