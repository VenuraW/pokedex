import { Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { POKE_COLORS } from "../constants/colors";

export const Footer = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        backgroundColor: `${POKE_COLORS.red}`,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            mb: 2,
            my: 1,
          }}
        >
          <Typography
            variant="caption"
            color="white"
          >
            WAO Studios Copyright ©2023
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};
