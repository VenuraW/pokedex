import styled from "@emotion/styled";
import {
  Container,
  Paper,
  TextField,
} from "@mui/material";
import { getShadow } from "../../../constants/colors";

export const SearchBarPaper = styled(Paper)(
  ({ theme }) => ({
    width: "100%",
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
  display: "flex",
  justifyContent: "flex",
  margin: "1rem auto",
  height: "fit-content",
});

export const SearchTextField = styled(TextField)(
  ({ theme }) => ({
    margin: "0 1rem",
    width: "100%",
  })
);
