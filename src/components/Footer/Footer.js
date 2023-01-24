import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { POKE_COLORS } from "../../constants/colors";
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
            WAO Studios Copyright ©2023
          </Typography>
        </S.FooterBox>
      </Container>
    </S.FooterPaper>
  );
};
