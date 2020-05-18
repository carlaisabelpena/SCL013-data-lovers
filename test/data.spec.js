// importamos la función `example`
import {stringName, stringImg, stringNum, stringType, stringHeight, stringWeight, stringCandyCount, stringWaknesses, orderData} from '../src/data.js';
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
  test("stringImg con parametros de name Bulbasaur deberia devolver[http://www.serebii.net/pokemongo/pokemon/001.png]", () => {
    expect(stringImg("name", "Bulbasaur")).toEqual(["http://www.serebii.net/pokemongo/pokemon/001.png"]);
  });
});
describe('stringNum', () => {
  test("debería ser una funcion", () => {
    expect(typeof stringNum).toBe('function');
});
test("stringNum con parámetros de weaknesses Poison debería devolver ['046','047','102','103','114']", () => {
  expect(stringNum("weaknesses", "Poison")).toEqual(["046", "047", "102", "103", "114"]);
});
});

describe('stringType', () => {
  test("debería ser una función", () => {
    expect(typeof stringType).toBe('function');
  });
  test("stringType con parámetros de type y Ghost debería devolver [['Ghost','Poison'],['Ghost','Poison'],['Ghost','Poison']]", () => {
    expect(stringType("type", "Ghost")).toEqual([
      ["Ghost", "Poison"],
      ["Ghost", "Poison"],
      ["Ghost", "Poison"]
    ]);
  });
});
describe('stringHeight', () => {
  test("debería ser una función", () => {
    expect(typeof stringHeight).toBe('function');
  });
  test("stringHeight con parámetros de type y Ice debería devolver ['1.70 m','1.50 m','1.40 m','2.49 m','1.70 m']", () => {
    expect(stringHeight("type", "Ice")).toEqual(["1.70 m", "1.50 m", "1.40 m", "2.49 m", "1.70 m"]);
  });
});
describe('stringWeight', () => {
  test("debería ser una funcion", () => {
    expect(typeof stringWeight).toBe('function');
});
test("stringWeight con parámetros de weaknesses y Dragon debería devolver ['3.3 kg','16.5 kg','210.0 kg']", () => {
  expect(stringWeight("weaknesses", "Dragon")).toEqual(["3.3 kg", "16.5 kg", "210.0 kg"]);
});
});
describe('stringCandyCount', () => {
  test("debería ser una función", () => {
    expect(typeof stringCandyCount).toBe('function');
  });
  test("stringCandyCount con parámetros de type y Ghost debería devolver [25,100,'No aplica']", () => {
    expect(stringCandyCount("type", "Ghost")).toEqual([25, 100, "No aplica"]);
  });
});
describe('stringWaknesses', () => {
  test("debería ser una función", () => {
    expect(typeof stringWaknesses).toBe('function');
  });

  test('stringWaknesses con parámetros de type y Electric debería devolver [["Ground"],["Ground"],["Fire","Water","Ground"],["Fire","Water","Ground"],["Ground"],["Ground"],["Ground"],["Ground"],["Ice","Rock"]]', () => {
    expect(stringWaknesses("type", "Electric")).toEqual([
      ["Ground"],
      ["Ground"],
      ["Fire", "Water", "Ground"],
      ["Fire", "Water", "Ground"],
      ["Ground"],
      ["Ground"],
      ["Ground"],
      ["Ground"],
      ["Ice", "Rock"]
    ]);
  });
});
describe('orderData', () => {
  test("debería ser una función", () => {
    expect(typeof orderData).toBe('function');
  });
});
const untidyPoke = [{
  "id": 7,
  "num": "007",
  "name": "Squirtle",
  "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
  "type": [
    "Water"
  ],
  "height": "0.51 m",
  "weight": "9.0 kg",
  "candy": "Squirtle Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.58,
  "avg_spawns": 58,
  "spawn_time": "04:25",
  "multipliers": [2.1],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "next_evolution": [{
    "num": "008",
    "name": "Wartortle"
  }, {
    "num": "009",
    "name": "Blastoise"
  }]
}, {
  "id": 8,
  "num": "008",
  "name": "Wartortle",
  "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
  "type": [
    "Water"
  ],
  "height": "0.99 m",
  "weight": "22.5 kg",
  "candy": "Squirtle Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.034,
  "avg_spawns": 3.4,
  "spawn_time": "07:02",
  "multipliers": [1.4],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }],
  "next_evolution": [{
    "num": "009",
    "name": "Blastoise"
  }]
}, {
  "id": 9,
  "num": "009",
  "name": "Blastoise",
  "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
  "type": [
    "Water"
  ],
  "height": "1.60 m",
  "weight": "85.5 kg",
  "candy": "Squirtle Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.0067,
  "avg_spawns": 0.67,
  "spawn_time": "00:06",
  "multipliers": null,
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }, {
    "num": "008",
    "name": "Wartortle"
  }]
}];
const tidyPoke = [{
    "id": 9,
    "num": "009",
    "name": "Blastoise",
    "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
    "type": [
      "Water"
    ],
    "height": "1.60 m",
    "weight": "85.5 kg",
    "candy": "Squirtle Candy",
    "egg": "Not in Eggs",
    "spawn_chance": 0.0067,
    "avg_spawns": 0.67,
    "spawn_time": "00:06",
    "multipliers": null,
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "007",
      "name": "Squirtle"
    }, {
      "num": "008",
      "name": "Wartortle"
    }]
  },
  {
    "id": 7,
    "num": "007",
    "name": "Squirtle",
    "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
    "type": [
      "Water"
    ],
    "height": "0.51 m",
    "weight": "9.0 kg",
    "candy": "Squirtle Candy",
    "candy_count": 25,
    "egg": "2 km",
    "spawn_chance": 0.58,
    "avg_spawns": 58,
    "spawn_time": "04:25",
    "multipliers": [2.1],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "next_evolution": [{
      "num": "008",
      "name": "Wartortle"
    }, {
      "num": "009",
      "name": "Blastoise"
    }]
  }, {
    "id": 8,
    "num": "008",
    "name": "Wartortle",
    "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
    "type": [
      "Water"
    ],
    "height": "0.99 m",
    "weight": "22.5 kg",
    "candy": "Squirtle Candy",
    "candy_count": 100,
    "egg": "Not in Eggs",
    "spawn_chance": 0.034,
    "avg_spawns": 3.4,
    "spawn_time": "07:02",
    "multipliers": [1.4],
    "weaknesses": [
      "Electric",
      "Grass"
    ],
    "prev_evolution": [{
      "num": "007",
      "name": "Squirtle"
    }],
    "next_evolution": [{
      "num": "009",
      "name": "Blastoise"
    }]
  }
];
const tidyPokeDownward = [{
  "id": 8,
  "num": "008",
  "name": "Wartortle",
  "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
  "type": [
    "Water"
  ],
  "height": "0.99 m",
  "weight": "22.5 kg",
  "candy": "Squirtle Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.034,
  "avg_spawns": 3.4,
  "spawn_time": "07:02",
  "multipliers": [1.4],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }],
  "next_evolution": [{
    "num": "009",
    "name": "Blastoise"
  }]
}, {
  "id": 7,
  "num": "007",
  "name": "Squirtle",
  "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
  "type": [
    "Water"
  ],
  "height": "0.51 m",
  "weight": "9.0 kg",
  "candy": "Squirtle Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.58,
  "avg_spawns": 58,
  "spawn_time": "04:25",
  "multipliers": [2.1],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "next_evolution": [{
    "num": "008",
    "name": "Wartortle"
  }, {
    "num": "009",
    "name": "Blastoise"
  }]
}, {
  "id": 9,
  "num": "009",
  "name": "Blastoise",
  "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
  "type": [
    "Water"
  ],
  "height": "1.60 m",
  "weight": "85.5 kg",
  "candy": "Squirtle Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.0067,
  "avg_spawns": 0.67,
  "spawn_time": "00:06",
  "multipliers": null,
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }, {
    "num": "008",
    "name": "Wartortle"
  }]
}];

test('orderData con parámetros de aToZ debería devolver los pokémon ordenado por nombre descendente', () => {
  expect(orderData(untidyPoke, "name", "aToZ")).toEqual(tidyPoke);
});

test('orderData con parámetros de zToA debería devolver los pokémon ordenado por nombre de la Z a la A', () => {
  expect(orderData(untidyPoke, "name", "zToA")).toEqual(tidyPoke.reverse());
});

test('orderData con parámetros de zToA debería devolver los pokémon ordenado por nombre de la Z a la A', () => {
  expect(orderData(untidyPoke, "name", "zToA")).toEqual(tidyPokeDownward);
});
