import { filterData, sortData, computeStats} from '../src/dataFunctions.js';
import {data as fakeData} from './data.js';

//console.log(fakeData);

describe('test orden', () => {

  it('test orden asc', () => {
   const dataOrden = sortData(fakeData, "name", "asc" )
    expect(dataOrden[0].name).toBe('Camille');
  });

  it('test orden des', () => {
    const dataOrden = sortData(fakeData, "name", "des" )
     expect(dataOrden[0].name).toBe('Miss Fortune');
   });

});

describe('test filtrosdif', () => {

  it('test filtro dificultad', () => {
    const dataFiltroDificultad = filterData(fakeData,"dificultadDeUso","Baja")
    expect(dataFiltroDificultad.length).toBe(7);
  });

  it('test filtro dificultad', () => {
    const dataFiltroDifMedia = filterData(fakeData,"dificultadDeUso","Media")
    expect(dataFiltroDifMedia.length).toBe(8);
  });

  it('test filtro dificultad', () => {
    const dataFiltroDifAlta= filterData(fakeData,"dificultadDeUso","Alta")
    expect(dataFiltroDifAlta.length).toBe(6);
  });

});

describe('test filtrosDaño', () => {

  it('test filtro Tipo de Daño', () => {
    const dataFiltroFisico = filterData(fakeData,"tipoDeDano","Mágico")
    expect(dataFiltroFisico.length).toBe(13);
  });

  it('test filtro Tipo de Daño', () => {
    const dataFiltroDifMagico = filterData(fakeData,"tipoDeDano","Físico")
    expect(dataFiltroDifMagico.length).toBe(8);
  });

});

describe('test filtroCarril', () => {

  it('test filtro Carril', () => {
    const dataFiltroBot = filterData(fakeData,"carril","Bot")
    expect(dataFiltroBot.length).toBe(3);
  });

  it('test filtro Carril', () => {
    const dataFiltroSupport = filterData(fakeData,"carril","Support")
    expect(dataFiltroSupport.length).toBe(3);
  });

  it('test filtro Carril', () => {
    const dataFiltroMid = filterData(fakeData,"carril","Mid")
    expect(dataFiltroMid.length).toBe(2);
  });

  it('test filtro Carril', () => {
    const dataFiltroJungla = filterData(fakeData,"carril","Jungla")
    expect(dataFiltroJungla.length).toBe(3);
  });

  it('test filtro Carril', () => {
    const dataFiltroTop = filterData(fakeData,"carril","Top")
    expect(dataFiltroTop.length).toBe(3);
  });

});