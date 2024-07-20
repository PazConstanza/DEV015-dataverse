


export const filterData = (data, filterBy, value) => {
  console.log(filterBy);
  const dataFiltrada = data.filter(campeona => campeona.hechos[filterBy] === value);
  console.log(dataFiltrada)
  return dataFiltrada;
};

export const sortData = (data, sortBy, sortOrder) => {
  let dataOrdenada = data
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
