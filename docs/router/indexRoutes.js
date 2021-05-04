const router = (router)=>{
   switch(router){
      case "#/home":
         return console.log("home");
      case "#/personajes":
         return console.log("personajes");
      case "#/juegos":
         return console.log("juegos");
      default:
         return console.log("404!!");
      
   }
}

export{router}