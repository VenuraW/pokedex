import styled from "@emotion/styled";
import { AppBar } from "@mui/material";

export const HeaderAppBar = styled(AppBar)(
  ({ theme }) => ({
    position: "static",
    backgroundColor: `${theme.palette.pokemon.red}`,
    borderBottom: `${theme.pixel.border}`,
  })
);
