export const POKE_COLORS = {
  red: "#FF0000",
  boston_red: "#CC0000",
  cerulean_blue: "#3B4CCA",
  golden_yellow: "#FFDE00",
  gold_foil: "#B3A125",
  aero: "#68BEE8",
};

export const borderColor = "black";

export const typesColorMapping = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

export const getColorsFromTypes = (types) => {
  let colors = "";
  if (types.length == 1) {
    colors =
      typesColorMapping[types[0].type.name];
  } else {
    colors = "linear-gradient(to right, ";
    types.map((type, index) => {
      colors += `${
        typesColorMapping[type.type.name]
      } 50% ${
        index != types.length - 1 ? ", " : ""
      }`;
    });
    colors += ")";
  }
  console.log(colors);
  return colors;
};
