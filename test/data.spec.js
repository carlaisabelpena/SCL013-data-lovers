// importamos la función `example`
import {stringName, stringImg, stringNum, stringType, stringHeight, stringWeight, stringCandyCount} from '../src/data.js';
// import POKEMON from '../src/data/pokemon/pokemon.js';


describe('stringName', () => {
  test("debería ser una función", () => {
    expect(typeof stringName).toBe('function');
  });
  test('stringName con weaknesses y Fairy como parámetro debería devolver ["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"]', () => {
    expect(stringName('type','Grass')).toStrictEqual(["Bulbasaur", "Ivysaur", "Venusaur", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Bellsprout", "Weepinbell", "Victreebel", "Exeggcute", "Exeggutor", "Tangela"]);
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
//test("stringNum con parámetros de weaknesses Poison debería devolver ['046','047','102','103','114']", () => {
  //expect(stringNum("weaknesses", "Poison")).toEqual(["046", "047", "102", "103", "114"]);
//});
});

describe('stringType', () => {
  test("debería ser una función", () => {
    expect(typeof stringType).toBe('function');
  });
});
describe('stringHeight', () => {
  test("debería ser una función", () => {
    expect(typeof stringHeight).toBe('function');
  });
});
describe('stringWeight', () => {
  test("debería ser una funcion", () => {
    expect(typeof stringWeight).toBe('function');
});
});
describe('stringCandyCount', () => {
  test("debería ser una función", () => {
    expect(typeof stringCandyCount).toBe('function');
  });
});
//test('returns `example`', () => {
//expect(example()).toBe('example');
//});