import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout/index";
import { Error } from "./pages/Error";
import PokemonProfile from "./components/PokemonProfile/index";
import {
  borderColor,
  POKE_COLORS,
} from "./constants/colors";
import { sizes } from "./constants/sizes";

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
    0 ${sizes.pixelBorderMedium} 0 0 ${POKE_COLORS.golden_yellow} 
    -${sizes.pixelBorderSmall} -${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},
    ${sizes.pixelBorderSmall} ${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},
    -${sizes.pixelBorderSmall} ${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},
    ${sizes.pixelBorderSmall} -${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.golden_yellow},`,
    buttonShadow: `-${sizes.pixelBorderSmall} 0 0 0 ${POKE_COLORS.cerulean_blue},
    ${sizes.pixelBorderSmall} 0 0 0 ${POKE_COLORS.cerulean_blue},
    0 ${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.cerulean_blue},
    0 -${sizes.pixelBorderSmall} 0 0 ${POKE_COLORS.cerulean_blue},
    ${sizes.pixelBorderExtraSmall} ${sizes.pixelBorderExtraSmall} 0 0 ${POKE_COLORS.cerulean_blue}`,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
  },
  {
    path: "/:pokemonId",
    element: <PokemonProfile />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <div
        style={{
          minHeight: "100vh",
          background: POKE_COLORS.aero,
        }}
      >
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
