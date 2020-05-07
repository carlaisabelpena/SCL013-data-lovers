//Importamos la data de arreglo_Pokemon y las funciones creadas desde el data.js
import dataArray from './data/pokemon/pokemon.js';
import {stringType, stringName, stringImg, stringHeight, stringWeight, stringCandyCount,
stringEgg, stringAvgSpawns, stringSpawnTime} from './data.js';


//console.log(dataArray.pokemon)
const dataShows = dataArray.pokemon ;
const dataArr = Object.values(dataShows)

console.log(dataArr)
//Mostramos data en pantalla principal //inconsluso
    for (let i = 0; i < dataArr.length; i++){
    console.log(dataArr[i].name)
}
    const root = document.getElementById('contentOfCards');
    for (let i = 0; i < dataArr.length; i++) {
    root.innerHTML += `<img src="${dataArr[i].img}" alt="">`
}

//Tipo de Pokemones
const selectFilterType = document.getElementById('selectType');
  
//Selector para filtrar por tipo de Pokemon
selectFilterType.addEventListener('change', () => {
   
   //Resetea los elementos a su valor original  
   document.getElementById('selectWeak').value = ''; 
   document.getElementById('searchBar').value = ''; 

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
   card.innerHTML = `<img src=' ${stringPokeImg[i]}'>
                    <h3>${stringPokeName[i]}</h3>`;
   document.getElementById('contentOfCards').appendChild(card);
  
   //Se realiza div para Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
  
   //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='pokemon-description'> 
                            <img class='modal-img' src='${stringPokeImg[i]}'>
                            <h3>${stringPokeName[i]}</h3>
                            <p><span class='modal-p'>Altura: </span>${stringPokeHeight[i]}</p>
                            <p><span class='modal-p'>Peso: </span>${stringPokeWeight[i]}</p>
                            <p><span class='modal-p'>Candy Count: </span>${stringPokeCandyCount[i]}</p>
                            <p><span class='modal-p'>EGG: </span>${stringPokeEgg[i]}</p>
                            <p><span class='modal-p'>Avg Spawns: </span>${stringPokeAvgSpawns[i]}</p>
                            <p><span class='modal-p'>Time: </span>${stringPokeTime[i]}</p>
                            <p><span class='modal-p'>TIPO: </span>${stringPokeType[i]}</p> 
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
   card.innerHTML = `<img src=' ${stringPokeImg[i]}'>
                    <h3>${stringPokeName[i]}</h3>`;
   document.getElementById('contentOfCards').appendChild(card);
      
   //Se crea div del Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
      
  //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='pokemon-description'> 
                            <img class='modal-img' src='${stringPokeImg[i]}'>
                            <h3>${stringPokeName[i]}</h3>
                            <p><span class='modal-p'>Altura: </span>${stringPokeHeight[i]}</p>
                            <p><span class='modal-p'>Peso: </span>${stringPokeWeight[i]}</p>
                            <p><span class='modal-p'>Candy Count: </span>${stringPokeCandyCount[i]}</p>
                            <p><span class='modal-p'>EGG: </span>${stringPokeEgg[i]}</p>
                            <p><span class='modal-p'>Avg Spawns: </span>${stringPokeAvgSpawns[i]}</p>
                            <p><span class='modal-p'>Time: </span>${stringPokeTime[i]}</p>
                            <p><span class='modal-p'>TIPO: </span>${stringPokeType[i]}</p> 
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
document.getElementById('searchBar').addEventListener('keydown', (e) => {
   if (e.keyCode === 13) {
   //Resetea los elementos a su valor original
   document.getElementById('selectType').value = ''; 
   document.getElementById('selectWeak').value = ''; 
  
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
   card.innerHTML = `<img src=' ${stringPokeImg[i]}'>
                          <h3>${stringPokeName[i]}</h3>`;
   document.getElementById('contentOfCards').appendChild(card);
      
   //Se crea div del Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
      
   //Contenido del Modal //lo que va dentro de la tarjeta grande //Por concluir falta agregar img de debilidades y fortalezas
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='pokemon-description'> 
                            <img class='modal-img' src='${stringPokeImg[i]}'>
                            <h3>${stringPokeName[i]}</h3>
                            <p><span class='modal-p'>Altura: </span>${stringPokeHeight[i]}</p>
                            <p><span class='modal-p'>Peso: </span>${stringPokeWeight[i]}</p>
                            <p><span class='modal-p'>Candy Count: </span>${stringPokeCandyCount[i]}</p>
                            <p><span class='modal-p'>EGG: </span>${stringPokeEgg[i]}</p>
                            <p><span class='modal-p'>Avg Spawns: </span>${stringPokeAvgSpawns[i]}</p>
                            <p><span class='modal-p'>Time: </span>${stringPokeTime[i]}</p>
                            <p><span class='modal-p'>TIPO: </span>${stringPokeType[i]}</p> 
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
    }
  });
  