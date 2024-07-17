import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';



//console.log( renderItems(data), data);
const tarjetas = renderItems(data)  // Llama a "renderItems" para crear las tarjetas a partir de los datos
const totalTarjetas = document.getElementById("campeonas") // se obtiene el elemento del DOM donde se agregarán las tarjetas
tarjetas.forEach(tarjeta => {           // Añade cada tarjeta (ul) al contenedor en el DOM
  totalTarjetas.appendChild(tarjeta)
});

function onChangeFilter(e) {
  const filtroDif = document.getElementById("Dificultad").value;
  const filtroDaño = document.getElementById("Daño").value;
  const filtroCarril = document.getElementById("Carril").value;
  const filteredData = filterData(data, filtroDif, filtroDaño, filtroCarril)
   //Limpiar tarjetas existentes
  // totalTarjetas.innerHTML = '';

   const tarjetasFiltradas = renderItems(filteredData); 
    tarjetasFiltradas.forEach(tarjeta => { totalTarjetas.appendChild(tarjeta);
      
    });
  console.log(filtroDaño);
  console.log(filtroCarril);
  console.log(filtroDif);


}

document.addEventListener("DOMContentLoaded", function () {  

  const filtroDif = document.getElementById("Dificultad"); //Filtro por dificultad
  filtroDif.addEventListener("change", onChangeFilter);
 


  const filtroDaño = document.getElementById("Daño"); //Filtro por tipo de daño
  filtroDaño.addEventListener("change", onChangeFilter);

  
  const filtroCarril = document.getElementById("Carril");//Filtro por carril
  filtroCarril.addEventListener("change", onChangeFilter);


})