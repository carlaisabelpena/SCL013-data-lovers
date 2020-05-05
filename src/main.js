//Importamos la data de arreglo_Pokemon y las funciones creadas desde el data.js
import dataArreglo from './data/pokemon/pokemon.js';
import {stringOfType, stringOfName, stringOfImg, stringOfHeight, stringOfWeight} from './data.js';


//Selector de tipo
const selectFilterByType = document.getElementById('selectType');
  
//Selector para filtrar por tipo de Pokemon
selectFilterByType.addEventListener('change', () => {
  
  document.getElementById('selectWeak').value = ''; 
  document.getElementById('searchBar').value = ''; 

 // Valor del droplist x tipo de Pokemon
  const typeDroplist = document.getElementById('selectType').value; 
  
  // Variables de las tarjetas de los Pokemon
  const stringPokeName = stringOfName('type', typeDroplist, dataArreglo.pokemon);
  const stringPokeType = stringOfType('type', typeDroplist, dataArreglo.pokemon);
  const stringPokeImg = stringOfImg('type', typeDroplist, dataArreglo.pokemon) ;
  const stringPokeHeight = stringOfHeight('type', typeDroplist, dataArreglo.pokemon);
  const stringPokeWeight = stringOfWeight('type', typeDroplist, dataArreglo.pokemon);


  // Borra los hijos del contenido de la tarjeta antes de imprimir
  const divCard = document.getElementById('contentOfCards');
  while (divCard.hasChildNodes()) {
    divCard.removeChild(divCard.firstChild);
   }
  document.getElementById('welcome').innerHTML = '';
  
  //Muestra las tarjetas por separado con su nombre
  for (let i = 0, len = stringPokeName.length; i < len; i += 1) {
    const card = document.createElement('div');
    card.classList.add('card-style');
    card.innerHTML = `<h3>${stringPokeName[i]}</h3>
                     <img src=' ${stringPokeImg[i]}'>`;
    document.getElementById('contentOfCards').appendChild(card);
  
   //Se crea div del Modal
   const modal = document.createElement('div');
   modal.classList.add('modal');
   document.getElementById('contentOfCards').appendChild(modal);
  
   //Contenido del Modal, dentro del div realizado antes Modal
   const modalContent = document.createElement('div');
   modalContent.classList.add('modal-content');
   modalContent.innerHTML = `<div class='pokemon-description'> 
                            <img class='modal-img' src='${stringPokeImg[i]}'>
                            <h3>${stringPokeName[i]}</h3>
                            <p><span class='modal-p'>TIPO: </span>${stringPokeType[i]}</p> 
                            <p><span class='modal-p'>ALTURA: </span>${stringPokeHeight[i]}</p>
                            <p><span class='modal-p'>PESO: </span>${stringPokeWeight[i]}</p>
                            </div>`;
    modal.appendChild(modalContent);
  
    //X del modal
    const close = document.createElement('span');
    close.classList.add('close');
    close.innerHTML = '&times;'; // Cierre de la tarjeta modal
    modalContent.insertBefore(close, modalContent.childNodes[0]);
    
    //General Función para abrir el modal
    card.addEventListener('click', () => {
    modal.style.display = 'block';
    });
    
    //General Función para cerrar el modal
    close.addEventListener('click', () => {
    modal.style.display = 'none';
    });
  
  }
});