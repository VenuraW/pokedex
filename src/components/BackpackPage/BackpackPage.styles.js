import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { getShadow } from "../../constants/colors";

export const BackpackCardContainer = styled(Card)(
  ({ theme }) => ({
    maxWidth: "100%",
    postion: "relative",
    justifySelf: "center",
    margin: "4rem",
    borderRadius: 0,
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderMedium,
      theme.sizes.pixelBorderSmall,
      theme.palette.pokemon.black
    )}`,
  })
);
