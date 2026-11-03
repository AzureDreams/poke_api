const input = document.querySelector('#poke-input');
const searchBtn = document.querySelector('#search-poke');
const pokeSprite = document.querySelector('#pokemon-sprite');
const pokeName = document.querySelector('#pokename');

searchBtn.addEventListener('click',async()=>{
const userInput = input.value;
try{
  const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
  const pokeData = await pokeResponse.json();
  const pkmnName = pokeData.name;
  pokeName.textContent = pkmnName;
  const imageUrl = pokeData.sprites.front_default;
  pokeSprite.src = imageUrl;
} catch(error){
pokeName.textContent = "Error please try again.";
}
})