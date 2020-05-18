//Importamos la data de arreglo_Pokemon y las funciones creadas desde el data.js
import dataArray from './data/pokemon/pokemon.js';
import {stringNum, stringType, stringName, stringImg, stringHeight, stringWeight, stringCandyCount,
stringEgg, stringAvgSpawns, stringSpawnTime, orderData, stringWaknesses} from './data.js';

//Función para volver al inicio haciendo click en logo
const alternLogoMenu = document.querySelector('.imgLogo');
alternLogoMenu.addEventListener('click', () => {
  window.location.reload();
});

//Debilidades en imagenes para las tarjetas
const weaknesses = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((weaknessesPokemon) => {
    imgEachPokemon += `<img src="./img/typepokemon/${weaknessesPokemon}.png" alt="weaknesses"/>`;
  });
  return imgEachPokemon;
};
 
 
//console.log(dataArray.pokemon)
const dataShows = dataArray.pokemon ;
const dataArr = Object.values(dataShows)

const divCard = document.getElementById('contentOfCards');
while (divCard.hasChildNodes()) {
 divCard.removeChild(divCard.firstChild);
}
document.getElementById('root').innerHTML = '';

//Mostramos data en pantalla principal
for (let i = 0; i < dataArr.length; i++){
 const root = document.createElement('div');
 root.classList.add('card-style');
 root.innerHTML +=`<h3>${dataArr[i].num}</h3>
                  <img src=' ${dataArr[i].img}'>
                  <h3>${dataArr[i].name}</h3>`;
 document.getElementById('contentOfCards').appendChild(root);
  
 //Se realiza div para Modal
 const modal = document.createElement('div');
 modal.classList.add('modal');
 document.getElementById('contentOfCards').appendChild(modal);
  
 //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
 const modalContent = document.createElement('div');
 modalContent.classList.add('modal-content');
 modalContent.innerHTML = `<div class='imgType'>${weaknesses(dataArr[i].type)}</div>
 <div class='pokemon-description'> 
                          <h5>${dataArr[i].name}</h5>
                          <img class='modal-img' src='${dataArr[i].img}'>
                          <p><span class='modal-p'>Height: </span>${dataArr[i].height}</p>
                          <p><span class='modal-p'>Weight: </span>${dataArr[i].weight}</p>
                          <p><span class='modal-p'>Candy Count: </span>${dataArr[i].candy_count}</p>
                          <p><span class='modal-p'>Egg: </span>${dataArr[i].egg}</p>
                          <p><span class='modal-p'>Avg Spawns: </span>${dataArr[i].avg_spawns}</p>
                          <p><span class='modal-p'>Time: </span>${dataArr[i].spawn_time}</p>
                          <p><span class='resistant-p'>Weaknesses: </span></p> 
                          <div class='resistant'>${weaknesses(dataArr[i].weaknesses)}</div> 
                          </div>`;
 modal.appendChild(modalContent);
  
 //X de la tarjeta grande (modal)
 const close = document.createElement('span');
 close.classList.add('close');
 close.innerHTML = '&times;'; // Cierre de la tarjeta modal
 modalContent.insertBefore(close, modalContent.childNodes[0]);
   
 //General Función para abrir la tarjeta
 root.addEventListener('click', () => {
 modal.style.display = 'block';
 });
    
 //General Función para cerrar tarjeta
 close.addEventListener('click', () => {
 modal.style.display = 'none';
 });
 //console.log(modalContent)
}

//Tipo de Pokemones
const selectFilterType = document.getElementById('selectType');
  
//Selector para filtrar por tipo de Pokemon
selectFilterType.addEventListener('change', () => {
   
  //Resetea los elementos a su valor original  
  document.getElementById('selectWeak').value = ''; 
  document.getElementById('searchBar').value = '';  
  document.getElementById('selectOrder').value = '';
  
  // Valor del droplist x tipo de Pokemon
  const typeDroplist = document.getElementById('selectType').value; 
  
  // Variables de las tarjetas de los Pokemon
  const stringPokeName = stringName('type', typeDroplist, dataArray.pokemon);
  const stringPokeType = stringType('type', typeDroplist, dataArray.pokemon);
  const stringPokeImg = stringImg('type', typeDroplist, dataArray.pokemon) ;
  const stringPokeHeight = stringHeight('type', typeDroplist, dataArray.pokemon);
  const stringPokeWeight = stringWeight('type', typeDroplist, dataArray.pokemon);
  const stringPokeCandyCount = stringCandyCount('type', typeDroplist, dataArray.pokemon);
  const stringPokeEgg = stringEgg('type', typeDroplist, dataArray.pokemon);
  const stringPokeAvgSpawns = stringAvgSpawns('type', typeDroplist, dataArray.pokemon);
  const stringPokeTime = stringSpawnTime('type', typeDroplist, dataArray.pokemon)
  const stringPokeNum = stringNum('type', typeDroplist, dataArray.pokemon)
  const stringPokeWeak = stringWaknesses('type', typeDroplist, dataArray.pokemon);

  //Contenerdor de las tarjetas
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
  }
  document.getElementById('welcome').innerHTML = '';
  
  //Muestra las tarjetas x separado con su nombre y numero
  for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
   const card = document.createElement('div');
   card.classList.add('card-style');
   card.innerHTML = `<span class="pokemon-number">${stringPokeNum[i]}</span>
                   <img src=' ${stringPokeImg[i]}'>
                   <h3>${stringPokeName[i]}</h3>`;
   document.getElementById('contentOfCards').appendChild(card);
  
   //Se realiza div para Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
  
   //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='imgType'>${weaknesses(stringPokeType[i])}</div>
   <div class='pokemon-description'> 
                            <h5>${stringPokeName[i]}</h5>
                            <img class='modal-img' src='${stringPokeImg[i]}'>
                            <p><span class='modal-p'>Height: </span>${stringPokeHeight[i]}</p>
                            <p><span class='modal-p'>Weight: </span>${stringPokeWeight[i]}</p>
                            <p><span class='modal-p'>Candy Count: </span>${stringPokeCandyCount[i]}</p>
                            <p><span class='modal-p'>Egg: </span>${stringPokeEgg[i]}</p>
                            <p><span class='modal-p'>Avg Spawns: </span>${stringPokeAvgSpawns[i]}</p>
                            <p><span class='modal-p'>Time: </span>${stringPokeTime[i]}</p>
                           <p><span class='resistant-p'>Weaknesses: </span></p> 
                            <div class='resistant'>${weaknesses(stringPokeWeak[i])}</div> 
                            </div>`;
   modal.appendChild(modalContent);
  
    
   //X de la tarjeta grande (modal)
   const close = document.createElement('span');
   close.classList.add('close');
   close.innerHTML = '&times;'; // Cierre de la tarjeta modal
   modalContent.insertBefore(close, modalContent.childNodes[0]);
   
   //General Función para abrir la tarjeta
   card.addEventListener('click', () => {
   modal.style.display = 'block';
   });
    
   //General Función para cerrar tarjeta
   close.addEventListener('click', () => {
   modal.style.display = 'none';
    });
  }
});

//Debilidades de Pokemones
const selectFilterByWeak = document.getElementById('selectWeak');

selectFilterByWeak.addEventListener('change', () => {
  //Resetea los elementos a su valor original
  document.getElementById('selectType').value = ''; 
  document.getElementById('searchBar').value = '';
  document.getElementById('selectOrder').value = '';

  const weakeDroplist = document.getElementById('selectWeak').value; // Valor del droplist de tipo

  // Todas las variables que aparecen en las tarjetas de cada Pokemón
  const stringPokeName = stringName('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeType = stringType('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeImg = stringImg('weaknesses', weakeDroplist, dataArray.pokemon) ;
  const stringPokeHeight = stringHeight('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeWeight = stringWeight('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeCandyCount = stringCandyCount('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeEgg = stringEgg('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeAvgSpawns = stringAvgSpawns('weaknesses', weakeDroplist, dataArray.pokemon);
  const stringPokeTime = stringSpawnTime('weaknesses', weakeDroplist, dataArray.pokemon)
  const stringPokeNum = stringNum('weaknesses', weakeDroplist, dataArray.pokemon)
  const stringPokeWeak = stringWaknesses('weaknesses', weakeDroplist, dataArray.pokemon);
  
  //Contenerdor de las tarjetas
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
   divCard.removeChild(divCard.firstChild);
  }
  document.getElementById('welcome').innerHTML = '';
 
  //Muestra las tarjetas x separado con su nombre y numero
  for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
   const card = document.createElement('div');
   card.classList.add('card-style');
   card.innerHTML =`<span class="pokemon-number">${stringPokeNum[i]}</span>
                    <img src=' ${stringPokeImg[i]}'>
                    <h3>${stringPokeName[i]}</h3>`;
   document.getElementById('contentOfCards').appendChild(card);
      
   //Se crea div del Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
      
   //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='imgType'>${weaknesses(stringPokeType[i])}</div>
   <div class='pokemon-description'> 
                            <h5>${stringPokeName[i]}</h5>
                            <img class='modal-img' src='${stringPokeImg[i]}'>
                            <p><span class='modal-p'>Height: </span>${stringPokeHeight[i]}</p>
                            <p><span class='modal-p'>Weight: </span>${stringPokeWeight[i]}</p>
                            <p><span class='modal-p'>Candy Count: </span>${stringPokeCandyCount[i]}</p>
                            <p><span class='modal-p'>EGG: </span>${stringPokeEgg[i]}</p>
                            <p><span class='modal-p'>Avg Spawns: </span>${stringPokeAvgSpawns[i]}</p>
                            <p><span class='modal-p'>Time: </span>${stringPokeTime[i]}</p> 
                           <p><span class='resistant-p'>Weaknesses: </span></p> 
                            <div class='resistant'>${weaknesses(stringPokeWeak[i])}</div>
                            </div>`;
   modal.appendChild(modalContent);
      
   //X de la tarjeta grande (modal)
   const close = document.createElement('span');
   close.classList.add('close');
   close.innerHTML = '&times;';
   modalContent.insertBefore(close, modalContent.childNodes[0]);
  
   //General Función para abrir la tarjeta
   card.addEventListener('click', () => {
   modal.style.display = 'block';
    });
  
   //General Función para cerrar la tarjeta
   close.addEventListener('click', () => {
   modal.style.display = 'none';
   });
  }
});

//Buscador
document.getElementById('searchBar').addEventListener('keydown', () => {

  //Resetea los elementos a su valor original
  document.getElementById('selectType').value = ''; 
  document.getElementById('selectWeak').value = ''; 
  document.getElementById('selectOrder').value = '';
 
  // Valores del input
  const inputSearchRaw = document.getElementById('searchBar').value;
  const inputSearch = inputSearchRaw.charAt(0).toUpperCase() + inputSearchRaw.slice(1).toLowerCase();
 
  // Todas las variables que aparecen en las tarjetas de cada Pokemón
  const stringPokeName = stringName('name', inputSearch, dataArray.pokemon);
  const stringPokeType = stringType('name', inputSearch, dataArray.pokemon);
  const stringPokeImg = stringImg('name', inputSearch, dataArray.pokemon) ;
  const stringPokeHeight = stringHeight('name', inputSearch, dataArray.pokemon);
  const stringPokeWeight = stringWeight('name', inputSearch, dataArray.pokemon);
  const stringPokeCandyCount = stringCandyCount('name', inputSearch, dataArray.pokemon);
  const stringPokeEgg = stringEgg('name', inputSearch, dataArray.pokemon);
  const stringPokeAvgSpawns = stringAvgSpawns('name', inputSearch, dataArray.pokemon);
  const stringPokeTime = stringSpawnTime('name', inputSearch, dataArray.pokemon)
  const stringPokeNum = stringNum('name', inputSearch, dataArray.pokemon)
  const stringPokeWeak = stringWaknesses('name', inputSearch, dataArray.pokemon);

  //Contenerdor de las tarjetas
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
  }
  document.getElementById('welcome').innerHTML = '';
  
  //Muestra las tarjetas x separado con su nombre y numero
  for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = `<span class="pokemon-number">${stringPokeNum[i]}</span>
                      <img src=' ${stringPokeImg[i]}'>
                      <h3>${stringPokeName[i]}</h3>`;
    document.getElementById('contentOfCards').appendChild(card);
       
    //Se crea div del Modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    document.getElementById('contentOfCards').appendChild(modal);
      
    //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalContent.innerHTML = `<div class='imgType'>${weaknesses(stringPokeType[i])}</div>
    <div class='pokemon-description'> 
                              <h5>${stringPokeName[i]}</h5>
                              <img class='modal-img' src='${stringPokeImg[i]}'>
                              <p><span class='modal-p'>Height: </span>${stringPokeHeight[i]}</p>
                              <p><span class='modal-p'>Weight: </span>${stringPokeWeight[i]}</p>
                              <p><span class='modal-p'>Candy Count: </span>${stringPokeCandyCount[i]}</p>
                              <p><span class='modal-p'>EGG: </span>${stringPokeEgg[i]}</p>
                              <p><span class='modal-p'>Avg Spawns: </span>${stringPokeAvgSpawns[i]}</p>
                              <p><span class='modal-p'>Time: </span>${stringPokeTime[i]}</p>
                              <p><span class='resistant-p'>Weaknesses: </span></p> 
                              <div class='resistant'>${weaknesses(stringPokeWeak[i])}</div>
                              </div>`;
    modal.appendChild(modalContent);
    
    // Span del X del modal
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;';
    modalContent.insertBefore(close, modalContent.childNodes[0]);
    
    // Función para abrir el modal
    card.addEventListener('click', () => {
      modal.style.display = 'block';
    });
 
    // Función para cerrar el modal
    close.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});

//Ordenador por Nomnbre
document.getElementById("selectOrder").addEventListener('change',() => {
     
  //Resetea los elementos a su valor original
  document.getElementById('selectType').value = ''; 
  document.getElementById('selectWeak').value = ''; 
  document.getElementById('searchBar').value = '';

  const orderName = document.getElementById("selectOrder").value;
  let orderPokeName = orderData(dataShows, "name", orderName);

  //Contenerdor de las tarjetas
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
   divCard.removeChild(divCard.firstChild);
  }
  document.getElementById('welcome').innerHTML = '';

  for(let i = 0; i < orderPokeName.length; i++){
   const card = document.createElement('div');
   card.classList.add('card-style');
   card.innerHTML += `<h3>${orderPokeName[i].num}</h3>
                      <img src= ${orderPokeName[i].img}>
                      <h3>${orderPokeName[i].name}</h3>`;
   document.getElementById('contentOfCards').appendChild(card);    
    
   //Se crea div del Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
      
   //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='imgType'>${weaknesses(orderPokeName[i].type)}</div>
   <div class='pokemon-description'> 
                           <h5>${orderPokeName[i].name}</h5>
                           <img class='modal-img' src='${orderPokeName[i].img}'>
                           <p><span class='modal-p'>Height: </span>${orderPokeName[i].height}</p>
                           <p><span class='modal-p'>Weight: </span>${orderPokeName[i].weight}</p>
                           <p><span class='modal-p'>Candy Count: </span>${orderPokeName[i].candy_count}</p>
                           <p><span class='modal-p'>EGG: </span>${orderPokeName[i].egg}</p>
                           <p><span class='modal-p'>Avg Spawns: </span>${orderPokeName[i].avg_spawns}</p>
                           <p><span class='modal-p'>Time: </span>${orderPokeName[i].spawn_time}</p>
                           <p><span class='resistant-p'>Weaknesses: </span></p> 
                           <div class='resistant'>${weaknesses(orderPokeName[i].weaknesses)}</div>
                           </div>`;
   modal.appendChild(modalContent);
   
   // Span del X del modal
   const close = document.createElement('span');
   close.classList.add('close');
   close.innerHTML = '&times;';
   modalContent.insertBefore(close, modalContent.childNodes[0]);

   // Función para abrir el modal
   card.addEventListener('click', () => {
     modal.style.display = 'block';
   });

    // Función para cerrar el modal
    close.addEventListener('click', () => {
     modal.style.display = 'none';
    });
  }
});