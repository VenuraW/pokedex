import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { RouterProvider } from "react-router-dom";
import {
  borderColor,
  POKE_COLORS,
} from "./constants/colors";
import { sizes } from "./constants/sizes";
import { router } from "./routes/routes";

const theme = createTheme({
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: "100vh",
          background: theme.palette.pokemon.aero,
        }}
      >
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
