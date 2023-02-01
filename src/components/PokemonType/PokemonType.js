import React from "react";
import * as S from "./PokemonType.styles";

export const PokemonType = ({ types, sx }) => {
  return (
    <S.PokemonTypeContainer sx={sx}>
      {types.map((type, index) => {
        return (
          <img
            key={index}
            src={require(`../../assets/types/${type.type.name}.png`)}
            alt={`${type.type.name}`}
          />
        );
      })}
    </S.PokemonTypeContainer>
  );
};
