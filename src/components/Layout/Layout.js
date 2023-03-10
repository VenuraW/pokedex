import { Container } from "@mui/material";
import React from "react";
import Footer from "../Footer/index";
import Header from "../Header/index";
import PokemonList from "../PokemonList";
import * as S from "./Layout.styles";

export const Layout = () => {
  return (
    <>
      <Header />
      <S.LayoutContainer>
        <PokemonList />
      </S.LayoutContainer>
      <Footer />
    </>
  );
};
