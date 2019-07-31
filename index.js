const fs = require('fs')
const request = require('request');

const download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};


const POKEMONS = [
  "Bulbasaur",
 
  "Ivysaur",
   
  "Venusaur",
   
  "Charmander",
   
  "Charmeleon",
   
  "Charizard",
   
  "Squirtle",
   
  "Wartortle",
   
  "Blastoise",
   
  "Caterpie",
   
  "Metapod",
   
  "Butterfree",
   
  "Weedle",
   
  "Kakuna",
   
  "Beedrill",
   
  "Pidgey",
   
  "Pidgeotto",
   
  "Pidgeot",
   
  "Rattata",
   
  "Raticate",
   
  "Spearow",
   
  "Fearow",
   
  "Ekans",
   
  "Arbok",
   
  "Pikachu",
   
  "Raichu",
   
  "Sandshrew",
   
  "Sandslash",
   
  "Nidoran-f",
   
  "Nidorina",
   
  "Nidoqueen",
   
  "Nidoran-m",
   
  "Nidorino",
   
  "Nidoking",
   
  "Clefairy",
   
  "Clefable",
   
  "Vulpix",
   
  "Ninetales",
   
  "Jigglypuff",
   
  "Wigglytuff",
   
  "Zubat",
   
  "Golbat",
   
  "Oddish",
   
  "Gloom",
   
  "Vileplume",
   
  "Paras",
   
  "Parasect",
   
  "Venonat",
   
  "Venomoth",
   
  "Diglett",
   
  "Dugtrio",
   
  "Meowth",
   
  "Persian",
   
  "Psyduck",
   
  "Golduck",
   
  "Mankey",
   
  "Primeape",
   
  "Growlithe",
   
  "Arcanine",
   
  "Poliwag",
   
  "Poliwhirl",
   
  "Poliwrath",
   
  "Abra",
   
  "Kadabra",
   
  "Alakazam",
   
  "Machop",
   
  "Machoke",
   
  "Machamp",
   
  "Bellsprout",
   
  "Weepinbell",
   
  "Victreebel",
   
  "Tentacool",
   
  "Tentacruel",
   
  "Geodude",
   
  "Graveler",
   
  "Golem",
   
  "Ponyta",
   
  "Rapidash",
   
  "Slowpoke",
   
  "Slowbro",
   
  "Magnemite",
   
  "Magneton",
   
  "Farfetch'd",
   
  "Doduo",
   
  "Dodrio",
   
  "Seel",
   
  "Dewgong",
   
  "Grimer",
   
  "Muk",
   
  "Shellder",
   
  "Cloyster",  
  "Gastly",  
  "Haunter",  
  "Gengar",  
  "Onix",  
  "Drowzee",  
  "Hypno",  
  "Krabby", 
  "Kingler", 
  "Voltorb",
  "Exeggcute",
  "Exeggutor",	
  "Cubone",
  "Marowak",	
  "hitmonlee",
  "hitmonchan",
  "Lickitung",
  "Koffing",
  "Weezing",
  "Rhyhorn",
  "Rhydon",
  "Chansey",
  "Tangela",
  "Kangaskhan",
  "Horsea",
  "Seadra",
  "Goldeen",
  "Seaking",
  "Staryu",
  "Starmie",
  "Mr-Mime",
  "Scyther",
  "Jynx",
  "Electabuzz",
  "Magmar",
  "Pinsir",
  "Tauros",
  "Magikarp",
  "Gyarados",
  "Lapras",
  "Ditto",
  "Eevee",
  "Vaporeon",
  "Flareon",
  "Jolteon",
  "Porygon",
  "Omanyte",
  "Omastar",
  "Kabuto",
  "Kabutops",
  "Aerodactyl",
  "Snorlax",
  "Articuno",
  "Zapdos",
  "Moltres",
  "Dratini",
  "Dragonair",
  "Dragonite",
  "Mewtwo",
  "Mew",
]

const getUrl = (name) => `https://img.pokemondb.net/sprites/red-blue/normal/${name}.png`

for(let i = 0; i < POKEMONS.length; i++) {
  download(getUrl(POKEMONS[i].toLowerCase()), 'sprites/' +i+'.png', function() {
    console.log(`${getUrl(POKEMONS[i].toLowerCase())} downloaded`)
  })
}
