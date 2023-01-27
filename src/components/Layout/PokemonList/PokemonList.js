import React, {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchKantoPokemonList,
  fetchPokemonDataByUrl,
  getPokemonPictureURL,
} from "../../../api/api";
import Loading from "../../Loading/index";
import * as S from "./PokemonList.styles";

const PokemonList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);

  const fetchData = async () => {
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
            <S.PokemonListCard types={poke.types}>
              <S.PokemonListCardActionArea
                onClick={() =>
                  navigate("/" + poke.id)
                }
              >
                <S.PokemonListCardMedia
                  component="img"
                  image={
                    poke.sprites["front_default"]
                  }
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
