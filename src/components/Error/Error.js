import { Typography } from "@mui/material";
import React from "react";
import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">Oops!</Typography>
      <Typography variant="body1">
        Sorry, an unexpected error has occurred.
      </Typography>
      <Typography variant="body1">
        {error.statusText || error.message}
      </Typography>
    </div>
  );
};
