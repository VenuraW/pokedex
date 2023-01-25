import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export const PokemonListGridContainer = styled(
  Grid
)({
  justifyContent: "center",
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
  margin: "1rem",
  width: "12rem",
});

export const PokemonListCard = styled(Card)(
  ({ theme }) => ({
    borderRadius: 0,
    boxShadow: `${theme.pixel.shadow}`,
    "&.MuiCard-root:hover": {
      boxShadow: `${theme.pixel.selectedShadow}`,
    },
  })
);

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
