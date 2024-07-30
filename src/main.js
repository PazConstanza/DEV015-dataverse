import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';



//console.log( renderItems(data), data);
const tarjetas = renderItems(data)  // Llama a "renderItems" para crear las tarjetas a partir de los datos
const TotalTarjetas = document.getElementById("root") // se obtiene el elemento del DOM donde se agregarán las tarjetas
tarjetas.forEach(tarjeta => {           // Añade cada tarjeta (ul) al contenedor en el DOM
  TotalTarjetas.appendChild(tarjeta)
});



//Filtro por dificultad
const filtroDif = document.getElementById("Dificultad");
filtroDif.addEventListener("change", function () {
  const datoSeleccionado = filtroDif.value;
  const dataFiltrada = filterData(data, "dificultadDeUso", datoSeleccionado)
  const tarjetas = renderItems(dataFiltrada)
  const TotalTarjetas = document.getElementById("root")
  TotalTarjetas.innerHTML = "";
  tarjetas.forEach(tarjeta => {
    TotalTarjetas.appendChild(tarjeta)
  });


})



//Filtro por tipo de daño
const filtroDano = document.getElementById("Daño");
filtroDano.addEventListener("change", function () {
  const datoSeleccionado = filtroDano.value;
  const dataFiltrada = filterData(data, "tipoDeDano", datoSeleccionado)
  const tarjetas = renderItems(dataFiltrada)
  const TotalTarjetas = document.getElementById("root")
  TotalTarjetas.innerHTML = "";
  tarjetas.forEach(tarjeta => {
    TotalTarjetas.appendChild(tarjeta)
  });

})

//Filtro por carril
const filtroCarril = document.getElementById("Carril");
filtroCarril.addEventListener("change", function () {
  const datoSeleccionado = filtroCarril.value;
  const dataFiltrada = filterData(data, "carril", datoSeleccionado)
  const tarjetas = renderItems(dataFiltrada)
  const TotalTarjetas = document.getElementById("root")
  TotalTarjetas.innerHTML = "";
  tarjetas.forEach(tarjeta => {
    TotalTarjetas.appendChild(tarjeta)
  });


})


//orden por alfabeto
const filtroOrden = document.getElementById("orden");
filtroOrden.addEventListener("change", function () {
  const datoSeleccionado = filtroOrden.value;
  const data2 = [...data];
  const dataOrdenada = sortData(data2, "name", datoSeleccionado)
  const tarjetas = renderItems(dataOrdenada)
  const TotalTarjetas = document.getElementById("root")
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
  

  const tarjetas = renderItems(data)
  const TotalTarjetas = document.getElementById("root")
  TotalTarjetas.innerHTML = "";
  tarjetas.forEach(tarjeta => {
    TotalTarjetas.appendChild(tarjeta)
  });



});

const conteo = document.getElementById("metricas")
conteo.addEventListener("click", function () {
  const datos = computeStats(data);
  const infoMetricas = document.getElementById("infoMetricas");
  infoMetricas.innerHTML = `El ${datos['Físico']}% de estas ${datos['Total']} campeonas, son de daño físico, mientras que el ${datos['Mágico']}% son de daño mágico.`;
});




