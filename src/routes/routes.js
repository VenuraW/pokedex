import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";
import PokemonProfile from "../components/PokemonProfile";

export const router = createBrowserRouter([
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
