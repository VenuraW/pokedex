import {
  Button,
  Card,
  Divider,
  Typography,
} from "@mui/material";
import React, {
  useEffect,
  useState,
} from "react";
import { fetchPokemonDataById } from "../../api/api";
import Footer from "../Footer";
import { FullPageLayoutDiv } from "../FullPageLayout/FullPageLayout.styles";
import Header from "../Header";
import * as S from "./BackpackPage.styles";
import PokemonType from "../PokemonType";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

export const BackpackPage = () => {
  const poke = [1, 2, 4];
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPokeData = async () => {
    poke.forEach(async (id) => {
      const data = await fetchPokemonDataById(id);
      await setPokeData((pastPoke) => [
        ...pastPoke,
        data,
      ]);
    });
    await setLoading(false);
  };

  useEffect(() => {
    fetchPokeData();
  }, []);

  return (
    <FullPageLayoutDiv>
      <Header />
      <S.BackpackCardContainer>
        {pokeData.map((pokemon, index) => (
          <S.BackpackCardContent>
            <S.BackpackPokemonContainer
              key={index}
            >
              <S.BackpackImage
                src={
                  pokemon.sprites["front_default"]
                }
                alt={`${pokemon.name}-image`}
              />
              <S.PokemonDescriptionContainer>
                <Typography>
                  #{pokemon.id} {pokemon.name}
                </Typography>
                <PokemonType
                  types={pokemon.types}
                  sx={{
                    height: "1rem",
                    paddingLeft: "0!important",
                  }}
                />
              </S.PokemonDescriptionContainer>
            </S.BackpackPokemonContainer>
            <Divider />
          </S.BackpackCardContent>
        ))}
        <S.ButtonContainer>
          <S.SendButton
            variant="contained"
            endIcon={<CardGiftcardIcon />}
          >
            Send
          </S.SendButton>
        </S.ButtonContainer>
      </S.BackpackCardContainer>
      <Footer />
    </FullPageLayoutDiv>
  );
};
