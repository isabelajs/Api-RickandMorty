import "./styles/style.scss"

import {router} from "./router/indexRoutes.js"

window.addEventListener("hashchange", ()=>{
   router(window.location.hash)
})