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
          <Typography
            variant="caption"
            color="white"
          >
            Created by Venura. Pokémon and Pokémon
            character names are trademarks of
            Nintendo.
          </Typography>
        </S.FooterBox>
      </Container>
    </S.FooterPaper>
  );
};
