import { Card } from "@mui/material";
import React from "react";
import Footer from "../Footer";
import { FullPageLayoutDiv } from "../FullPageLayout/FullPageLayout.styles";
import Header from "../Header";
import * as S from "./BackpackPage.styles";

export const BackpackPage = () => {
  return (
    <FullPageLayoutDiv>
      <Header />
      <S.BackpackCardContainer>
        Hi
      </S.BackpackCardContainer>
      <Footer />
    </FullPageLayoutDiv>
  );
};
