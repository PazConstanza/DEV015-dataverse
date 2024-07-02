import dataset from "./data/dataset.js";


export const renderItems = (data) => {
  const prioritarios = ["imageUrl", "name", "shortDescription", "dificultadDeUsoDelCampeon", "tipoDeDano", "carril", "frase"];
  const nombrePrioritarios = {
    dificultadDeUsoDelCampeon: "Dificultad de Uso: ",
    tipoDeDano: "Tipo de Daño: ",
    carril: "Posición: ",
    frase: "Frase: "
  };

  const secundarios = ["description", "extraInfo", "datoCurioso"]
  const nombreSecundarios = {
    description: "Descripción: ",
    extraInfo: "Dato",
    datoCurioso: "Dato curioso"
  };


  let ulElementos = data.map(campeona => {
    let Elemento = document.createElement("ul");
    Elemento.classList.add('tarjeta');

    let imgLi = document.createElement("li");
    imgLi.classList.add("img-container");

    let propiedadesOcultas = document.createElement("ul");
    propiedadesOcultas.classList.add("propiedades-ocultas");
    propiedadesOcultas.style.display = "none";


    let propiedadesVisibles = document.createElement("ul");
    propiedadesVisibles.classList.add("propiedades-visibles");

    for (let propiedad in campeona) {
      if (propiedad === "id") continue;

      let liElementos = document.createElement("li");

      if (propiedad === "imageUrl") {
        let imgElement = document.createElement("img");
        imgElement.src = campeona[propiedad];
        imgElement.alt = campeona.name;
        imgElement.width = 300;
        imgElement.height = 200;
        imgLi.appendChild(imgElement);
      } else if (propiedad === "facts") {
        let facts = campeona.facts;

        for (let propiedadesFact in facts) {
          if (propiedadesFact === "datoCurioso") continue;

          let factElementLi = document.createElement("li");
          factElementLi.textContent = `${nombrePrioritarios[propiedadesFact] || propiedadesFact} ${facts[propiedadesFact]}`;
          propiedadesVisibles.appendChild(factElementLi);
        }
      } else {
        liElementos.textContent = `${nombrePrioritarios[propiedad] || propiedad}: ${campeona[propiedad]}`;

        if (prioritarios.includes(propiedad)) {
          propiedadesVisibles.appendChild(liElementos);
        } else {
          propiedadesOcultas.appendChild(liElementos);
        }
      }
    }

    let leerMas = document.createElement("button");
    leerMas.textContent = "Leer más";
    leerMas.classList.add("leer-mas");
    leerMas.addEventListener("click", () => {
      if (propiedadesOcultas.style.display === "none") {
        propiedadesOcultas.style.display = "flex";
        leerMas.textContent = "Leer menos";
      } else {
        propiedadesOcultas.style.display = "none";
        leerMas.textContent = "Leer más";
      }
    });

    propiedadesVisibles.appendChild(leerMas);
    propiedadesVisibles.appendChild(propiedadesOcultas);

    Elemento.appendChild(imgLi);
    Elemento.appendChild(propiedadesVisibles);

    return Elemento;
  });

  return ulElementos;
};