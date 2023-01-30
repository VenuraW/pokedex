import React, {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchKantoPokemonList,
  fetchPokemonDataByUrl,
} from "../../../api/api";
import Loading from "../../Loading/index";
import PokemonType from "../../PokemonType";
import * as S from "./PokemonList.styles";

const PokemonList = ({ search }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [colors, setColors] = useState({});
  const [filterData, setFilterData] = useState(
    []
  );

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
      await setFilterData((pastPoke) => [
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

  useEffect(() => {
    if (search.length > 0) {
      const searchData = pokeData.filter((poke) =>
        poke.name
          .toLowerCase()
          .startsWith(search.toLowerCase())
      );
      setFilterData(searchData);
    } else {
      setFilterData(pokeData);
    }
  }, [search]);

  if (loading) return <Loading />;

  const setPokeColor = async (id, color) => {
    let newColor = {};
    newColor[id] = color[2];
    // console.log(colors);
    await setColors({ ...colors, ...newColor });
  };

  return (
    <S.PokemonListGridContainer
      container
      spacing={{ xs: 4, md: 6 }}
      columns={{ xs: 2, sm: 6, md: 10 }}
    >
      {filterData?.map((poke, index) => {
        return (
          <S.PokemonListGridItem item key={index}>
            {
              <S.PokemonListCard color={colors}>
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
