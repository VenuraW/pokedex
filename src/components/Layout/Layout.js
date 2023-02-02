import React, {
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
  const [filterData, setFilterData] =
    useState(pokeData);
  const [searchData, setSearchData] =
    useState(pokeData);
  const [typeData, setTypeData] =
    useState(pokeData);

  useEffect(() => {
    // Fetches the pokemon data from the API and sets the pokeData, filterData and availableTypes
    const fetchData = async () => {
      await setPokeData([]);
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
          types[type.type.name] = 1;
        });
        await setAvailableTypes(types);
      });

      await setLoading(false);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    // Sets the filterData based on the search terms and the first letters of the pokemon's name
    const filterSearch = async (search) => {
      console.log("hello");
      if (search.length > 0) {
        const searchData = pokeData.filter(
          (poke) =>
            poke.name
              .toLowerCase()
              .startsWith(search.toLowerCase())
        );
        await setSearchData(searchData);
      } else {
        await setSearchData(pokeData);
      }
    };

    filterSearch(search);
    // eslint-disable-next-line
  }, [search]);

  useEffect(() => {
    console.log(selectedTypes);
    // Check if types given is in selectedTypes
    const isTypesSelected = async (poke) => {
      let isSelected = false;
      poke.types.forEach((type) => {
        if (type.type.name in selectedTypes) {
          isSelected = true;
        }
      });
      return isSelected;
    };

    // Filters the filterData based on pokemon types and the selectedTypes
    const filterTypes = async (selectedTypes) => {
      if (Object.keys(selectedTypes).length > 0) {
        const selectePokemonBoolArray =
          await Promise.all(
            pokeData.map(isTypesSelected)
          );

        const selectedPokemon =
          await pokeData.filter(
            (poke, i) =>
              selectePokemonBoolArray[i]
          );
        await setTypeData(selectedPokemon);
      } else {
        await setTypeData(pokeData);
      }
    };

    filterTypes(selectedTypes);
    // eslint-disable-next-line
  }, [selectedTypes]);

  useEffect(() => {
    const getIntersectionData = async () => {
      let data;
      if (searchData.length === pokeData.length) {
        data = typeData;
      } else if (
        typeData.length === pokeData.length
      ) {
        data = searchData;
      } else {
        data = typeData.filter((type) => {
          let typeInSearch = false;
          searchData.forEach((search) => {
            if (search.name === type.name) {
              typeInSearch = true;
            }
          });
          return typeInSearch;
        });
      }
      await setFilterData(data);
    };

    getIntersectionData();
    // eslint-disable-next-line
  }, [searchData, typeData]);

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
              availableTypes={availableTypes}
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
