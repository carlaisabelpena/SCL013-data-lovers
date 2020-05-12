// importamos la función `example`
import {stringName, stringImg} from '../src/data.js';
// import POKEMON from '../src/data/pokemon/pokemon.js';

describe('data', () => {
test ('stringName debería ser una función', () => {
 expect(typeof stringName).toBe('function');
});

describe('data',() => {
  test ('stringImg deberia ser una funcion', () => {
    expect(typeof stringImg).toBe('function');
  });

});
});
//test('returns `example`', () => {
//expect(example()).toBe('example');
//});