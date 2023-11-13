//Declaramos los dos arrays a donde vamos a guardar los pokemons

const allPokemons = [];
const allPokemons2 = [];

//Realizamos a traves de la función "pokemon" la llamada a la API 'pokeapi'

const pokemon = async (number) => {
const responsePokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
const resPokemon = await responsePokemon.json();
return resPokemon;

}

//A traves de la función "forPokemon", recorremos la llamada realizada previamente a la API, 
//con el fin de obtener los 150 pokemons indicados en el ejercicio y poder pintarlo.

const forPokemon = async () =>{ 

for (let i = 1; i < 153; i++) {
  let pokemons =  await pokemon(i);
  allPokemons.push(pokemons.sprites.other.dream_world['front_default']);
  allPokemons2.push(pokemons.name);
}

pintarPokemonImg();

}

const div$$ = document.querySelector('.container');
const lista$$ = document.getElementById("container-pokedex");

//En la función "pintarPokemonImg", tenemos como objetivo, poder mostrar por pantalla las imagenes y nombres seleccionadas anteriormente.

const pintarPokemonImg = () =>{

for (let i = 1; i < 151; i++) {

  let div1$$ = document.createElement('div');
  div1$$.classList.add('container-pokedex-card');

  let imagen = allPokemons[i];
      
  const img$$ = document.createElement('img');
  img$$.src = imagen;
  img$$.classList.add("imagen");
  div1$$.appendChild(img$$);
  
  let nombre = allPokemons2[i];
  const p$$ = document.createElement('p');
  p$$.textContent = nombre;
  p$$.classList.add("parrafo");
  div1$$.appendChild(p$$);

  lista$$.appendChild(div1$$);

      
  }
}

const input$$ = document.querySelector('#buscador');

//Realizamos a traves de la función "buscar", el filtro para poder seleccionar los pokemons que tenemos en dicho array.


const buscar = () => {
 
  while (lista$$.firstChild) {
    lista$$.removeChild(lista$$.firstChild);
  }

  const texto = input$$.value.toLowerCase();

  const results$$ = allPokemons2.filter((allpokemon) => allpokemon.toLowerCase().includes(texto) );

  for (const result$$ of results$$) {
    const div1$$ = document.createElement('div');
    div1$$.classList.add('container-pokedex-card');
  
    const img$$ = document.createElement('img');
    const pokemonFind$$ = allPokemons2.indexOf(result$$);
    img$$.src = allPokemons[pokemonFind$$];
    img$$.classList.add('imagen');
    div1$$.appendChild(img$$);
  
    const p$$ = document.createElement('p');
    p$$.textContent = result$$;
    p$$.classList.add('parrafo');
    div1$$.appendChild(p$$);
  
    lista$$.appendChild(div1$$);
  }
  
};

input$$.addEventListener('input', buscar);


forPokemon();