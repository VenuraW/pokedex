import React, { useEffect } from "react";
import Footer from "../Footer/index";
import Header from "../Header/index";
import ProfileCard from "../ProfileCard/index";
import * as S from "./PokemonProfile.styles";

export const PokemonProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <S.PokemonProfileContainer>
        <ProfileCard />
      </S.PokemonProfileContainer>
      <Footer />
    </>
  );
};
