
let cSearch = ()=>{
      let view = `      <button class="cSearch__buttonSend"></button>
                        <input class="cSearch__search" type="search"  id ="buscador" placeholder="Buscar">`
      let search = document.createElement("div")
      search.classList.add("cSearch")
      search.innerHTML = view
      return search
}

export {cSearch};