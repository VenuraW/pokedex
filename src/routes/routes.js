import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Error from "../components/Error";
import PokemonProfile from "../components/PokemonProfile";
import BackpackPage from "../components/BackpackPage";

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
  {
    path: "/backpack",
    element: <BackpackPage />,
  },
]);
