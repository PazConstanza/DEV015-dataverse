


export const filterData = (data, filterBy, value) => {
    console.log(filterBy);
    const dataFiltrada = data.filter(campeona => campeona.hechos[filterBy] === value);
      console.log(dataFiltrada)
    return dataFiltrada;
  };
  
