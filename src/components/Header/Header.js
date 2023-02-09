import BackpackIcon from "@mui/icons-material/Backpack";
import { Container } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Header.styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderAppBar elevation={0}>
      <Container maxWidth="xl">
        <S.HeaderToolbar
          disableGutters
          onClick={() => navigate("/")}
        >
          <S.HeaderLogo
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemon-logo"
          />
          <S.HeaderTypography variant="h6">
            PokePost
          </S.HeaderTypography>
        </S.HeaderToolbar>
        <S.IconBox>
          <S.BackpackIconButton aria-label="backpack">
            <S.BackpackBadge
              color="secondary"
              variant="dot"
            >
              <BackpackIcon fontSize="large" />
            </S.BackpackBadge>
          </S.BackpackIconButton>
        </S.IconBox>
      </Container>
    </S.HeaderAppBar>
  );
};
