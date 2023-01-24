import { Container } from "@mui/system";
import React from "react";
import pokegif from "../assets/poke_load.gif";

const Loading = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignContent: "center",
      }}
    >
      <img
        style={{ height: "10rem" }}
        src={pokegif}
        alt="loading"
      />
    </Container>
  );
};

export default Loading;
