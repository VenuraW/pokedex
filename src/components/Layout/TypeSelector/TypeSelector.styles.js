import styled from "@emotion/styled";
import { Chip, Grid } from "@mui/material";
import {
  getShadow,
  typesColorMapping,
} from "../../../constants/colors";

export const TypeSelectorGrid = styled(Grid)(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: "2rem",
  })
);

export const TypeGridItem = styled(Grid)(
  ({ theme }) => ({
    margin: "1rem",
  })
);

export const TypeChip = styled(Chip)(
  ({ theme, type, selected }) => ({
    borderRadius: 0,
    border: 0,
    // color: `${console.log(type, selected)}`,
    boxShadow: `${getShadow(
      theme.sizes.pixelBorderSmall,
      theme.sizes.pixelBorderExtraSmall,
      selected
        ? theme.palette.pokemon.golden_yellow
        : theme.palette.pokemon.black
    )}`,
    background: `${
      typesColorMapping[type] || "white"
    }`,
    fontFamily: `${theme.typography.allVariants.fontFamily}`,
    color: `${
      typesColorMapping[type] ? "white" : "black"
    }`,
    ".Mui-focusVisible": {
      color: "red",
    },
  })
);
