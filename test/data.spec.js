// importamos la función `example`
import {stringName, stringImg, stringNum, stringType} from '../src/data.js';
// import POKEMON from '../src/data/pokemon/pokemon.js';

describe('stringName', () => {
  test("debería ser una función", () => {
    expect(typeof stringName).toBe('function');
  });
});
describe('stringImg', () => {
  test("debería ser una funcion", () => {
    expect(typeof stringImg).toBe('function');
});
});
describe('stringNum', () => {
  test("debería ser una funcion", () => {
    expect(typeof stringNum).toBe('function');
});
});

describe('stringType', () => {
  test("debería ser una función", () => {
    expect(typeof stringType).toBe('function');
  });
});

//test('returns `example`', () => {
//expect(example()).toBe('example');
//});