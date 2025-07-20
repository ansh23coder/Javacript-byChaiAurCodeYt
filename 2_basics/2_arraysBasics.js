const marvel_heroes = ["thor", "ironman", "hulk", "spiderman", "captain america"];

const dc_heroes = ["superman", "batman", "wonder woman", "flash", "martian manhunter"];

// console.log(marvel_heroes);
// console.log(dc_heroes);

marvel_heroes.push(dc_heroes)
/*
[
  'thor',
  'ironman',
  'hulk',
  'spiderman',
  'captain america',
  [
    'superman',
    'batman',
    'wonder woman',
    'flash',
    'martian manhunter'
  ]
]
  */
// console.log(marvel_heroes) // output up

const allHeros = marvel_heroes.concat(dc_heroes)
/*[
  'thor',
  'ironman',
  'hulk',
  'spiderman',
  'captain america',
  [
    'superman',
    'batman',
    'wonder woman',
    'flash',
    'martian manhunter'
  ]
]* */

// console.log(marvel_heroes)
// or 
// console.log(allHeros)

/**[
  'thor',
  'ironman',
  'hulk',
  'spiderman',
  'captain america',
  [
    'superman',
    'batman',
    'wonder woman',
    'flash',
    'martian manhunter'
  ]
] */

const all_new_heros = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heros)

/**
 * [
  'thor',
  'ironman',
  'hulk',
  'spiderman',
  'captain america',
  [
    'superman',
    'batman',
    'wonder woman',
    'flash',
    'martian manhunter'
  ],
  'superman',
  'batman',
  'wonder woman',
  'flash',
  'martian manhunter'
]
 */

const arr_of_Array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]] 

const real_arr_of_array = arr_of_Array.flat(Infinity) // Infinity - if don't want to coung depth of subarrays

console.log(real_arr_of_array)
/**
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
 */
console.log(Array.isArray("Anupam")) // false
console.log(Array.from("Anupam")) // [ 'A', 'n', 'u', 'p', 'a', 'm' ]
console.log(Array.from({name: "Anupam"})) // []
// show it - keys/values ka array banana hai ya kuch aur ka


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
// [ 100, 200, 300 ]
