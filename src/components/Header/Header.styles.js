import styled from "@emotion/styled";
import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";

export const HeaderAppBar = styled(AppBar)(
  ({ theme }) => ({
    position: "static",
    backgroundColor: `${theme.palette.pokemon.red}`,
    borderBottom: `${theme.pixel.border}`,
  })
);

export const HeaderToolbar = styled(Toolbar)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  })
);

export const HeaderLogo = styled("img")({
  maxWidth: "10rem",
  marginTop: "1rem",
});

export const HeaderTypography = styled(
  Typography
)({
  marginBottom: "1rem",
});
