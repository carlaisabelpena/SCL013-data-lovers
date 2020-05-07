//Funcion para Nombres de los Pokemones
const stringName = (newFilter, currentSelect, dataArray) => {
 //console.log(dataArray);
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.name);
};

//Función para tipo de los Pokemones
const stringType = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.type);
};

//Función para Img
const stringImg = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.img);
};

//Función para altura de los Pokemones
const stringHeight = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.height);
};

//Función para el Peso de los Pokemones
const stringWeight = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.weight);
};

// Función para los caramelos de los pokemones
const stringCandyCount = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.candy_count)
  .map((x) => x !== undefined ? x : 'No aplica');
};

// Función para los Huevos si posee o no
const stringEgg = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.egg).map((x) => x !== 'Not in Eggs' ? x : 'o km');
};

//Función puntos de aparicion
const stringAvgSpawns = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.avg_spawns);
};

// Función para el tiempo de aparición
const stringSpawnTime = (newFilter, currentSelect, dataArray) => {
  return dataArray
  .filter((pokemon) => pokemon[newFilter]
  .includes(currentSelect))
  .map((pokemon) => pokemon.spawn_time);
};

//Se exportan cada una de las funciones para ser usadas en el main.js
export { stringType, stringName, stringImg,
stringHeight, stringWeight, stringCandyCount,
stringEgg, stringAvgSpawns,stringSpawnTime };