import React, { useEffect } from "react";
import Footer from "../Footer/index";
import Header from "../Header/index";
import ProfileCard from "./ProfileCard/index";
import * as S from "./PokemonProfile.styles";
import { FullPageLayoutDiv } from "../FullPageLayout/FullPageLayout.styles";

export const PokemonProfile = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <FullPageLayoutDiv>
      <Header />
      <S.PokemonProfileContainer>
        <ProfileCard />
      </S.PokemonProfileContainer>
      <Footer />
    </FullPageLayoutDiv>
  );
};
