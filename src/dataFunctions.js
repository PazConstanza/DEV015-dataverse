


export const filterData = (data, filterBy, value) => {
  
  const dataFiltrada = data.filter(campeona => campeona.hechos[filterBy] === value);
  
  return dataFiltrada;
};

export const sortData = (data, sortBy, sortOrder) => {
  const dataOrdenada = data
  if (sortOrder === "asc") {
    return dataOrdenada.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return 1;
      } else if (a[sortBy] < b[sortBy]) {
        return -1;
      } else {
        return 0;
      }
    });
  } else if (sortOrder === "desc") {
    return dataOrdenada.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      } else if (a[sortBy] < b[sortBy]) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {

    return dataOrdenada;
  }
};
