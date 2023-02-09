import styled from "@emotion/styled";
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { getShadow } from "../../constants/colors";

export const HeaderAppBar = styled(AppBar)(
  ({ theme }) => ({
    position: "static",
    backgroundColor: `${theme.palette.pokemon.red}`,
    borderBottom: `${theme.pixel.border}`,
    maxHeight: "8rem",
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

export const BackpackIconButton = styled(
  IconButton
)(({ theme }) => ({
  color: `${theme.palette.pokemon.golden_yellow}`,
}));

export const IconBox = styled(Box)(
  ({ theme }) => ({
    position: "absolute",
    right: "2rem",
    top: "2rem",
    backgroundColor: `${theme.palette.pokemon.boston_red}`,
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderSmall,
      theme.sizes.pixelBorderExtraSmall,
      theme.palette.pokemon.black
    )}`,
  })
);

export const BackpackBadge = styled(Badge)(
  ({ theme }) => ({
    // color: `${theme.palette.pokemon.golden_yellow}`,
  })
);
