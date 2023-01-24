import {
  AppBar,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { POKE_COLORS } from "../../constants/colors";
import * as S from "./Header.styles";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <S.HeaderAppBar elevation={0}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <img
            style={{
              maxWidth: "10rem",
              marginTop: "1rem",
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="pokemon-logo"
          />
          <Typography
            sx={{ marginBottom: "1rem" }}
            variant="h6"
          >
            PokeDex
          </Typography>
        </Toolbar>
      </Container>
    </S.HeaderAppBar>
  );
};
