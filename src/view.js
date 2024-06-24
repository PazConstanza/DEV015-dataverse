import dataset from "./data/dataset.js";

export const renderItems = (data) => {
  console.log(data)


  
  let uls=data.map(campeona => {
    let elemento= document.createElement("ul")
    for (let propiedad in campeona){
      let liElementos= document.createElement("li")

      if (propiedad === "imageUrl") {
        let imgElement = document.createElement("img");
            imgElement.src = campeona[propiedad];
            imgElement.alt = campeona.name;
            imgElement.width = 300
            imgElement.height = 200
            liElementos.appendChild(imgElement);
            
        } else {
          liElementos.textContent= propiedad + ": " + campeona[propiedad]
        }
      
      elemento.appendChild(liElementos)

    }
    return elemento
  })
  return uls 
  



  data.forEach(campeona => {
    console.log(campeona.name)
  });
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  return 'example';
};

