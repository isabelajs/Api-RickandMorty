function getData(urlData){
   return fetch(urlData)
            .then(response =>response.json())
            .catch(error => console.error(error))
};

export{getData}