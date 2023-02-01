import React from "react";
import { useNavigate } from "react-router-dom";
import PokemonType from "../../PokemonType";
import * as S from "./PokemonList.styles";

const PokemonList = ({ filterData }) => {
  const navigate = useNavigate();

  return (
    <S.PokemonListGridContainer container>
      {filterData.map((poke, index) => {
        return (
          <S.PokemonListGridItem item key={index}>
            {
              <S.PokemonListCard>
                <S.PokemonListCardActionArea
                  onClick={() =>
                    navigate("/" + poke.id)
                  }
                >
                  <S.PokemonListCardMedia
                    component="img"
                    image={
                      poke.sprites[
                        "front_default"
                      ]
                    }
                    alt={poke.name}
                  />
                  <PokemonType
                    types={poke.types}
                    sx={{
                      justifyContent:
                        "space-around",
                    }}
                  />
                  <S.PokemonListCardTypography
                    gutterBottom
                    variant="h6"
                  >
                    {poke.name}
                  </S.PokemonListCardTypography>
                </S.PokemonListCardActionArea>
              </S.PokemonListCard>
            }
          </S.PokemonListGridItem>
        );
      })}
    </S.PokemonListGridContainer>
  );
};

export default PokemonList;
