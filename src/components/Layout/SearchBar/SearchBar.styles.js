import styled from "@emotion/styled";
import { Container, Paper } from "@mui/material";
import { getShadow } from "../../../constants/colors";

export const SearchBarPaper = styled(Paper)(
  ({ theme }) => ({
    width: "fit-content",
    borderRadius: 0,
    display: "flex",
    justifyContent: "flex-end",
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderSmall,
      theme.sizes.pixelBorderExtraSmall,
      theme.palette.pokemon.black
    )}`,
  })
);

export const SearchBarContainer = styled(
  Container
)({
  maxWidth: "100% !important",
  display: "flex",
  justifyContent: "flex-end",
  margin: "1rem auto",
});
