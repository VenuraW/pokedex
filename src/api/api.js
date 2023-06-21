const POKEMON_API =
  "https://pokeapi.co/api/v2/pokemon";

const POKEMON_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const POKE_LIMIT = 151;

export const fetchKantoPokemonList = () => {
  let url =
    POKEMON_API + "?limit=" + String(POKE_LIMIT);

  return fetchPokeData(url);
};

// Fetch Pokemon Data by URL
export const fetchPokemonDataByUrl = (url) => {
  return fetchPokeData(url);
};

const fetchPokeData = (url) => {
  try {
    return fetch(url).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPokemonDataById = (id) => {
  let url = POKEMON_API + "/" + String(id);
  return fetchPokeData(url);
};

export const getPokemonPictureURL = (poke_id) => {
  return `${POKEMON_IMAGE}/${poke_id}.png`;
};
