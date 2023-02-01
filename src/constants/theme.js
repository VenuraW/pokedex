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
    pokemon: POKE_COLORS,
  },
  sizes: sizes,
  pixel: {
    border: `${sizes.pixelBorderMedium} solid ${borderColor}`,
    borderColor: borderColor,
    shadow: `-${sizes.pixelBorderMedium} 0 0 0 ${borderColor},
      ${sizes.pixelBorderMedium} 0 0 0 ${borderColor},
      0 -${sizes.pixelBorderMedium} 0 0 ${borderColor},
      0 ${sizes.pixelBorderMedium} 0 0 ${borderColor},
      -${sizes.pixelBorderSmall} -${sizes.pixelBorderSmall} 0 0 ${borderColor},
      ${sizes.pixelBorderSmall} ${sizes.pixelBorderSmall} 0 0 ${borderColor},
      -${sizes.pixelBorderSmall} ${sizes.pixelBorderSmall} 0 0 ${borderColor},
      ${sizes.pixelBorderSmall} -${sizes.pixelBorderSmall} 0 0 ${borderColor}`,
    selectedShadow: `-${sizes.pixelBorderMedium} 0 0 0 ${POKE_COLORS.golden_yellow},
      ${sizes.pixelBorderMedium} 0 0 0 ${POKE_COLORS.golden_yellow},
      0 -${sizes.pixelBorderMedium} 0 0 ${POKE_COLORS.golden_yellow},
      0 ${sizes.pixelBorderMedium} 0 0 ${POKE_COLORS.golden_yellow}, 
      -${sizes.pixelBorderSmall} -${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},
      ${sizes.pixelBorderSmall} ${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},
      -${sizes.pixelBorderSmall} ${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},
      ${sizes.pixelBorderSmall} -${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow}`,
    buttonShadow: `-${sizes.pixelBorderSmall} 0 0 0 ${POKE_COLORS.cerulean_blue},
      ${sizes.pixelBorderSmall} 0 0 0 ${POKE_COLORS.cerulean_blue},
    0 ${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.cerulean_blue},
      0 -${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.cerulean_blue},
      ${sizes.pixelBorderExtraSmall} ${sizes.pixelBorderExtraSmall} 0 0 ${POKE_COLORS.cerulean_blue},
      -${sizes.pixelBorderExtraSmall} ${sizes.pixelBorderExtraSmall} 0 0 ${POKE_COLORS.cerulean_blue},
      -${sizes.pixelBorderExtraSmall} -${sizes.pixelBorderExtraSmall} 0 0 ${POKE_COLORS.cerulean_blue},
      ${sizes.pixelBorderExtraSmall} -${sizes.pixelBorderExtraSmall} 0 0 ${POKE_COLORS.cerulean_blue}`,
  },
});
