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
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
