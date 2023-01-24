import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ProfileCard from "../components/ProfileCard";

export const Pokemon = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Container sx={{ height: "100vh" }}>
        <ProfileCard />
      </Container>
      <Footer />
    </>
  );
};
