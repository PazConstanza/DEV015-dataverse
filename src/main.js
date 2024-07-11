//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';



//console.log( renderItems(data), data);
let tarjetas = renderItems(data)  // Llama a "renderItems" para crear las tarjetas a partir de los datos
let TotalTarjetas = document.getElementById("campeonas") // se obtiene el elemento del DOM donde se agregarán las tarjetas
tarjetas.forEach(tarjeta => {           // Añade cada tarjeta (ul) al contenedor en el DOM
    TotalTarjetas.appendChild(tarjeta)
});


//Los filtros se escuchan... pero no filtran :D falta la funcion
document.addEventListener("DOMContentLoaded", function () {  //Filtro por dificultad
    const filtroDif = document.getElementById("Dificultad");
    filtroDif.addEventListener("change", function () {
        const datoSeleccionado = filtroDif.value;
        console.log(datoSeleccionado);
    })
})
document.addEventListener("DOMContentLoaded", function () {  //Filtro por tipo de daño
    const filtroDaño = document.getElementById("Daño");
    filtroDaño.addEventListener("change", function () {
        const datoSeleccionado = filtroDaño.value;
        console.log(datoSeleccionado);
    })
})
document.addEventListener("DOMContentLoaded", function () {  //Filtro por carril
    const filtroCArril = document.getElementById("Carril");
    filtroCArril.addEventListener("change", function () {
        const datoSeleccionado = filtroCArril.value;
        console.log(datoSeleccionado);
    })
})