import styled from "@emotion/styled";
import {
  alpha,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchKantoPokemonList,
  fetchPokemonDataByUrl,
  getPokemonPictureURL,
} from "../../api/api";
import { POKE_COLORS } from "../../constants/colors";
import Loading from "../Loading";
import * as S from "./PokemonList.styles";

const PokemonList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  // const styles = useStyles();

  const fetchData = async () => {
    console.log("fetch");
    const list = await fetchKantoPokemonList();
    list.results.forEach(async (pokemon) => {
      const data = await fetchPokemonDataByUrl(
        pokemon.url
      );
      await setPokeData((pastPoke) => [
        ...pastPoke,
        data,
      ]);
    });
    await setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;

  return (
    <S.PokemonListGridContainer
      container
      spacing={{ xs: 4, md: 6 }}
      columns={{ xs: 2, sm: 6, md: 10 }}
    >
      {pokeData?.map((poke, index) => {
        return (
          <S.PokemonListGridItem item key={index}>
            <S.PokemonListCard>
              <S.PokemonListCardActionArea
                onClick={() =>
                  navigate("/" + poke.id)
                }
              >
                <S.PokemonListCardMedia
                  component="img"
                  image={getPokemonPictureURL(
                    poke.id
                  )}
                  alt={poke.name}
                />

                <S.PokemonListCardTypography
                  gutterBottom
                  variant="h6"
                >
                  {poke.name}
                </S.PokemonListCardTypography>
              </S.PokemonListCardActionArea>
            </S.PokemonListCard>
          </S.PokemonListGridItem>
        );
      })}
    </S.PokemonListGridContainer>
  );
};

export default PokemonList;
