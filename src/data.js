//Funcion por Nombres de los Pokemones
const stringOfName = (newFilter, currentSelect, dataArreglo) => {
//  console.log(dataArreglo);
  return dataArreglo
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.name);
};

//Función por tipo de los Pokemones
const stringOfType = (newFilter, currentSelect, dataArreglo) => {
  return dataArreglo
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.type);
};

//Función por Img
const stringOfImg = (newFilter, currentSelect, dataArreglo) => {
  return dataArreglo
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.img);
};

//Función de mapear por Altura de Poke
const stringOfHeight = (newFilter, currentSelect, dataArreglo) => {
  return dataArreglo
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.height);
};

//Función de mapear por Peso de Poke
const stringOfWeight = (newFilter, currentSelect, dataArreglo) => {
    return dataArreglo
    .filter((pokemon) => pokemon[newFilter]
    .includes(currentSelect))
    .map((pokemon) => pokemon.weight);
};

//Se exportan cada una de las funciones para ser usadas en el main.js
export { stringOfType, stringOfName, stringOfImg, stringOfHeight, stringOfWeight };