import { Container } from "@mui/material";
import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import PokemonList from "../components/PokemonList";

export const Layout = () => {
  return (
    <>
      <Header />
      <Container
        style={{
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <PokemonList />
      </Container>
      <Footer />
    </>
  );
};
