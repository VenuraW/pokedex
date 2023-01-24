const POKEMON_API =
  "https://pokeapi.co/api/v2/pokemon";

const POKE_LIMIT = 151;

export const fetchKantoPokemonList = () => {
  let url =
    POKEMON_API + "?limit=" + String(POKE_LIMIT);

  return fetch(url).then((response) =>
    response.json()
  );
};

export const fetchPokemonDataByUrl = (url) => {
  return fetch(url).then((response) =>
    response.json()
  );
};

export const fetchPokemonDataById = (id) => {
  let url = POKEMON_API + "/" + String(id);

  return fetch(url).then((response) =>
    response.json()
  );
};
