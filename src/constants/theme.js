import { createTheme } from "@mui/system";
import {
  borderColor,
  POKE_COLORS,
} from "./colors";
import { sizes } from "./sizes";

export const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: "Courier",
      textTransform: "lowercase",
    },
  },
  palette: {
    primary: {
      main: `${POKE_COLORS.cerulean_blue}`,
    },
    secondary: {
      main: `${POKE_COLORS.golden_yellow}`,
    },
    pokemon: POKE_COLORS,
  },
  sizes: sizes,
  pixel: {
    border: `${sizes.pixelBorderMedium} solid ${borderColor}`,
    borderColor: borderColor,
  },
});
