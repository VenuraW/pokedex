import styled from "@emotion/styled";
import {
  Button,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import { getShadow } from "../../constants/colors";

export const BackpackCardContainer = styled(Card)(
  ({ theme }) => ({
    width: "50vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center",
    margin: "4rem",
    borderRadius: 0,
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderMedium,
      theme.sizes.pixelBorderSmall,
      theme.palette.pokemon.black
    )}`,
  })
);

export const BackpackImage = styled(`img`)({
  height: "6rem",
});

export const BackpackCardContent = styled(
  CardContent
)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "0!important",
  paddingBottom: "0!important",
}));

export const BackpackPokemonContainer = styled(
  Container
)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
}));

export const PokemonDescriptionContainer = styled(
  Container
)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const BackpackTypeImage = styled("img")({
  height: "1rem",
});

export const SendButton = styled(Button)(
  ({ theme }) => ({
    margin: "1rem",
    backgroundColor: `${theme.palette.pokemon.red}`,
    borderRadius: 0,
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderSmall,
      theme.sizes.pixelBorderExtraSmall,
      theme.palette.pokemon.black
    )}`,
    "&.MuiButtonBase-root:hover": {
      backgroundColor: `${theme.palette.pokemon.red}`,
      filter: "brightness(95%)",
      boxShadow: `${getShadow(
        theme.sizes.pixelBorderSmall,
        theme.sizes.pixelBorderExtraSmall,
        theme.palette.pokemon.black
      )}`,
    },
  })
);

export const ButtonContainer = styled(Container)(
  ({ theme }) => ({
    display: "flex",
    justifyContent: "flex-end",
  })
);
