import React, { useState } from "react";
import Footer from "../Footer/index";
import Header from "../Header/index";
import PokemonList from "./PokemonList/PokemonList";
import * as S from "./Layout.styles";
import SearchBar from "./SearchBar";

export const Layout = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <S.LayoutContainer>
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
        <PokemonList search={search} />
      </S.LayoutContainer>
      <Footer />
    </>
  );
};
