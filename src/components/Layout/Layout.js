import React, {
  useCallback,
  useEffect,
  useState,
} from "react";
import {
  fetchKantoPokemonList,
  fetchPokemonDataByUrl,
} from "../../api/api";
import Footer from "../Footer/index";
import { FullPageLayoutDiv } from "../FullPageLayout/FullPageLayout.styles";
import Header from "../Header/index";
import Loading from "../Loading";
import * as S from "./Layout.styles";
import PokemonList from "./PokemonList/PokemonList";
import SearchBar from "./SearchBar";
import TypeSelector from "./TypeSelector";

export const Layout = () => {
  const [search, setSearch] = useState("");
  const [availableTypes, setAvailableTypes] =
    useState({});
  const [selectedTypes, setSelectedTypes] =
    useState({});
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  const [filterData, setFilterData] = useState(
    []
  );

  // Fetches the pokemon data from the API and sets the pokeData, filterData and availableTypes
  const fetchData = useCallback(async () => {
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

      let types = availableTypes;
      data.types.forEach(async (type) => {
        types[type.type.name] = true;
      });
      await setAvailableTypes(types);
    });

    await setLoading(false);
  }, [availableTypes]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Sets the filterData based on the search terms and the first letters of the pokemon's name
  const filterSearch = useCallback(
    async (search) => {
      if (search.length > 0) {
        const searchData = pokeData.filter(
          (poke) =>
            poke.name
              .toLowerCase()
              .startsWith(search.toLowerCase())
        );
        await setFilterData(searchData);
      } else {
        await setFilterData(pokeData);
      }
    },
    [pokeData]
  );

  useEffect(() => {
    filterSearch(search);
  }, [search, filterSearch]);

  // Check if types given is in selectedTypes
  const isTypesSelected = useCallback(
    async (types) => {
      let isSelected = false;
      types.forEach((type) => {
        if (type.type.name in selectedTypes) {
          isSelected = true;
        }
      });
      return isSelected;
    },
    [selectedTypes]
  );

  // Filters the filterData based on pokemon types and the selectedTypes
  const filterTypes = useCallback(
    async (selectedTypes) => {
      if (Object.keys(selectedTypes).length > 0) {
        const searchData = await pokeData.filter(
          async (poke) => {
            let isSelected = false;
            poke.types.forEach((type) => {
              if (
                type.type.name in selectedTypes
              ) {
                isSelected = true;
              }
            });
            console.log(isSelected);
            return isSelected;
          }
        );
        console.log(searchData.length);
        await setFilterData(searchData);
      } else {
        await setFilterData(pokeData);
      }
    },
    [isTypesSelected, pokeData]
  );

  useEffect(() => {
    filterTypes(selectedTypes);
  }, [selectedTypes, filterTypes]);

  return (
    <FullPageLayoutDiv>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <S.LayoutContainer>
          <S.FilterContainer>
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
            <TypeSelector
              availableTypes={Object.keys(
                availableTypes
              )}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
            />
          </S.FilterContainer>
          <PokemonList filterData={filterData} />
        </S.LayoutContainer>
      )}
      <Footer />
    </FullPageLayoutDiv>
  );
};
