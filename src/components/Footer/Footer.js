import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import * as S from "./Footer.styles";

export const Footer = () => {
  return (
    <S.FooterPaper
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <S.FooterBox>
          <S.FooterTypography
            variant="caption"
            color="white"
          >
            created by Venura. pokémon and pokémon
            character names are trademarks of
            Nintendo.
          </S.FooterTypography>
        </S.FooterBox>
      </Container>
    </S.FooterPaper>
  );
};
