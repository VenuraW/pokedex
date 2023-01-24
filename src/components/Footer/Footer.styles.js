import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { borderColor } from "../../constants/colors";

export const FooterPaper = styled(Paper)(
  ({ theme }) => ({
    position: "fixed",
    width: "100%",
    bottom: 0,
    backgroundColor: `${theme.palette.pokemon.red}`,
    borderTop: `${theme.pixel.border}`,
  })
);

export const FooterBox = styled(Box)({
  justifyContent: "center",
  display: "flex",
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
});
