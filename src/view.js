import dataset from "./data/dataset.js";



export const renderItems = (data) => {
  const tarjetas = data.map(campeona => {
    const tarjeta = document.createElement("ul");   // Crea un elemento "ul" para cada campeona
    tarjeta.classList.add("tarjeta")               // Asigna una clase "tarjeta" para utilizarlo con CSS

    
    let imgTarjeta = document.createElement("li");       // Crea un elemento "li" que contiene la imagen
    let imgElemento = document.createElement("img");     // Crea el elemento "img" y se asignan sus atributos
    imgElemento.src = campeona.imageUrl;                //Da la ruta de imagen
    imgElemento.alt = campeona.name;                   //Texto alternativo si no carga la imagen
    imgElemento.width = 300;                          //alto de la imagen
    imgElemento.height = 200;                        //Ancho de la imagen
    imgElemento.classList.add("imagen");           // Asigna una clase "imagen" para utilizarlo con CSS
    imgTarjeta.appendChild(imgElemento);          // Añade la imagen al 'li'
    tarjeta.appendChild(imgTarjeta);           // Añade el 'li' con la imagen a la tarjeta
    let infoTarjeta = document.createElement("li");      // Crea un 'li' que contendrá la información adicional


    let liElemento = document.createElement("li"); // Crea un 'li' para el nombre y asignar el texto
 
    
const información = [campeona.nombre, campeona.descripcionCorta, campeona.hechos.frase, campeona.hechos.dificultadDeUso, campeona.hechos.tipoDeDano, campeona.hechos.carril];  //Se crea un array con la informacion a mmostrar

// Recorrer el array y crear un <li> para cada elemento
información.forEach((texto, index) => {
    // Crear un nuevo elemento <li>
    const nuevoLi = document.createElement('li');
    
    // Asignar un ID único a cada <li>
    nuevoLi.id = `elemento${index + 1}`;
    
    // Agregar texto al <li>
    nuevoLi.textContent = texto;
    
    // Añadir el <li> al <ul>
    tarjeta .appendChild(nuevoLi);
    console.log(nuevoLi);
  });


    infoTarjeta.appendChild(liElemento);  // Añadir el 'li' con el nombre al contenedor de información

    tarjeta.appendChild(imgTarjeta);  // Añade la imagen y la información a la tarjeta
    tarjeta.appendChild(infoTarjeta);
    return tarjeta  // Retorna el elemento "ul" creado
  });

  

  return tarjetas    // Retorna la lista completa de las tarjetas
};