{/* <div class="cOptionsBar">
      <div class="cOptionsBar__right">
          <div class="cOptionButton">Filtar</div>
          <div class="cOptionButton">Ordenar</div>
          <div class="cOptionsBar__lifeBar">
            <div class="lifeBar">
              <div class="containerLife  containerLife--alive "></div>
              <div class="containerLife  containerLife--dead hideContainerLife"></div>
              <div class="containerLife  containerLife--unknown hideContainerLife"></div>
            </div>
          </div>
      </div>
</div> */}

let cOptionsBar = ()=>{
  const view = `  <div class="cOptionsBar__right">
                      <div class="cOptionButton">Filtar</div>
                      <div class="cOptionButton">Ordenar</div>
                      <div class="cOptionsBar__lifeBar">
                        <div class="lifeBar">
                          <div class="containerLife  containerLife--alive "></div>
                          <div class="containerLife  containerLife--dead hideContainerLife"></div>
                          <div class="containerLife  containerLife--unknown hideContainerLife"></div>
                        </div>
                      </div>
                  </div>`
  let optionsBar = document.createElement("div");
  optionsBar.classList.add("cOptionsBar")
  optionsBar.insertAdjacentHTML("afterbegin",view)

  //cambio la selección en los estados de vida
  let containerLife = optionsBar.querySelectorAll(".containerLife")
  containerLife.forEach(container =>{container.addEventListener("click", (x)=>{selectStatusLife(x.path[0])})})


  return optionsBar

}

export {cOptionsBar}


function selectStatusLife(container){
   container.classList.toggle("hideContainerLife")
}

