import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';



//console.log( renderItems(data), data);
let tarjetas = renderItems(data)  // Llama a "renderItems" para crear las tarjetas a partir de los datos
let TotalTarjetas = document.getElementById("root") // se obtiene el elemento del DOM donde se agregarán las tarjetas
tarjetas.forEach(tarjeta => {           // Añade cada tarjeta (ul) al contenedor en el DOM
    TotalTarjetas.appendChild(tarjeta)
});


//Los filtros se escuchan... pero no filtran :D falta la funcion
document.addEventListener("DOMContentLoaded", function () {  //Filtro por dificultad
    const filtroDif = document.getElementById("Dificultad");
    filtroDif.addEventListener("change", function () {
        const datoSeleccionado = filtroDif.value;
        let dataFiltrada = filterData(data, "dificultadDeUso", datoSeleccionado)
        let tarjetas = renderItems(dataFiltrada)
        let TotalTarjetas = document.getElementById("root")
        TotalTarjetas.innerHTML = "";
        tarjetas.forEach(tarjeta => {           
            TotalTarjetas.appendChild(tarjeta)
        });
        
       
    })
})
document.addEventListener("DOMContentLoaded", function () {  //Filtro por tipo de daño
    const filtroDaño = document.getElementById("Daño");
    filtroDaño.addEventListener("change", function () {
        const datoSeleccionado = filtroDaño.value;
        let dataFiltrada = filterData(data, "tipoDeDano", datoSeleccionado)
        let tarjetas = renderItems(dataFiltrada)
        let TotalTarjetas = document.getElementById("root")
        TotalTarjetas.innerHTML = "";
        tarjetas.forEach(tarjeta => {           
            TotalTarjetas.appendChild(tarjeta)
        });
       
    })
})
document.addEventListener("DOMContentLoaded", function () {  //Filtro por carril
    const filtroCarril = document.getElementById("Carril");
    filtroCarril.addEventListener("change", function () {
        const datoSeleccionado = filtroCarril.value;
        let dataFiltrada = filterData(data, "carril", datoSeleccionado)
        let tarjetas = renderItems(dataFiltrada)
        let TotalTarjetas = document.getElementById("root")
        TotalTarjetas.innerHTML = "";
        tarjetas.forEach(tarjeta => {           
            TotalTarjetas.appendChild(tarjeta)
        });
       

    })

    

})