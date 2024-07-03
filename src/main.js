import { example } from './dataFunctions.js';
import { renderItems } from './view.js';


import data from './data/dataset.js';

console.log(example, renderItems(data), data);

let tarjetas = renderItems(data)  // Llama a "renderItems" para crear las tarjetas a partir de los datos
let TotalTarjetas = document.getElementById("campeonas") // se obtiene el elemento del DOM donde se agregarán las tarjetas
tarjetas.forEach(tarjeta => {           // Añade cada tarjeta (ul) al contenedor en el DOM
    TotalTarjetas.appendChild(tarjeta)
});

