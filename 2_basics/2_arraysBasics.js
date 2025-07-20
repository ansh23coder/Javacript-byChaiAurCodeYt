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
console.log(marvel_heroes) // output up

marvel_heroes.concat(dc_heroes)
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