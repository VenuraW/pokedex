import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { getShadow } from "../../../constants/colors";

export const PokemonListGridContainer = styled(
  Grid
)({
  justifyContent: "space-evenly",
  minHeight: "100%",
});

export const PokemonListCardActionArea = styled(
  CardActionArea
)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const PokemonListGridItem = styled(Grid)({
  margin: "2rem",
  width: "12rem",
});

export const PokemonListCard = styled(Card)(
  ({ theme, color }) => ({
    borderRadius: 0,
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderMedium,
      theme.sizes.pixelBorderSmall,
      theme.palette.pokemon.black
    )}`,
    "&.MuiCard-root:hover": {
      boxShadow: `${getShadow(
        theme.sizes.pixelBorderMedium,
        theme.sizes.pixelBorderSmall,
        theme.palette.pokemon.golden_yellow
      )}`,
    },
    // background: `${console.log(color)}`,
  })
);

export const PokemonListTypeContainer = styled(
  Container
)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  columnGap: "0.5rem",
});

export const PokemonListCardMedia = styled(
  CardMedia
)({
  marginTop: "1rem",
  marginRight: "1rem",
  marginLeft: "1rem",
  maxHeight: "fit-content",
});

export const PokemonListCardTypography = styled(
  Typography
)({
  marginLeft: "1rem",
  marginRight: "1rem",
});
