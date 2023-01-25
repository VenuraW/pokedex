const POKEMON_API =
  "https://pokeapi.co/api/v2/pokemon";

const POKEMON_IMAGE =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

const POKE_LIMIT = 151;

export const fetchKantoPokemonList = () => {
  let url =
    POKEMON_API + "?limit=" + String(POKE_LIMIT);

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const fetchPokemonDataByUrl = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};

export const fetchPokemonDataById = (id) => {
  let url = POKEMON_API + "/" + String(id);

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
};

export const getPokemonPictureURL = (poke_id) => {
  return `${POKEMON_IMAGE}/${poke_id}.png`;
};
