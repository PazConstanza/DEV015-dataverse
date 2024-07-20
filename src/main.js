import { filterData, sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';



//console.log( renderItems(data), data);
let tarjetas = renderItems(data)  // Llama a "renderItems" para crear las tarjetas a partir de los datos
let TotalTarjetas = document.getElementById("root") // se obtiene el elemento del DOM donde se agregarán las tarjetas
tarjetas.forEach(tarjeta => {           // Añade cada tarjeta (ul) al contenedor en el DOM
    TotalTarjetas.appendChild(tarjeta)
});



//Filtro por dificultad
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



//Filtro por tipo de daño
const filtroDano = document.getElementById("Daño");
filtroDano.addEventListener("change", function () {
    const datoSeleccionado = filtroDano.value;
    let dataFiltrada = filterData(data, "tipoDeDano", datoSeleccionado)
    let tarjetas = renderItems(dataFiltrada)
    let TotalTarjetas = document.getElementById("root")
    TotalTarjetas.innerHTML = "";
    tarjetas.forEach(tarjeta => {
        TotalTarjetas.appendChild(tarjeta)
    });

})

//Filtro por carril
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


//orden por alfabeto
const filtroOrden = document.getElementById("orden");
filtroOrden.addEventListener("change", function () {
    const datoSeleccionado = filtroOrden.value;
    let dataOrdenada = sortData(data, "nombre", datoSeleccionado)
    console.log("dataOrdenada: " + dataOrdenada)
    let tarjetas = renderItems(dataOrdenada)
    let TotalTarjetas = document.getElementById("root")
    TotalTarjetas.innerHTML = "";
    tarjetas.forEach(tarjeta => {
        TotalTarjetas.appendChild(tarjeta)
    });

})

const resetButton = document.getElementById("reset-button")

resetButton.addEventListener("click", function () {
    filtroDif.value = "Default"
    filtroDano.value = "Default"
    filtroCarril.value = "Default"
    filtroOrden.value = "Default"

    let tarjetas = renderItems(data)
    console.log("data desde boton: " + data[0].nombre)
    let TotalTarjetas = document.getElementById("root")
    TotalTarjetas.innerHTML = "";
    tarjetas.forEach(tarjeta => {
        TotalTarjetas.appendChild(tarjeta)
    });



});





