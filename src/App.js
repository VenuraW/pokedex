import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Error } from "./pages/Error";
import { Pokemon } from "./pages/PokemonProfile";
import { POKE_COLORS } from "./constants/colors";

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
    element: <Pokemon />,
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <div
        style={{
          minHeight: "100vh",
          background: `linear-gradient(
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://w0.peakpx.com/wallpaper/654/738/HD-wallpaper-grid-black-dark-green-line-square-texture.jpg")`,
        }}
      >
        <RouterProvider router={router} />
        {/* <Footer /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
