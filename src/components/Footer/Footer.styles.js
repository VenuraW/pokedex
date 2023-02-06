import styled from "@emotion/styled";
import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const FooterPaper = styled(Paper)(
  ({ theme }) => ({
    width: "100%",
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

export const FooterTypography = styled(
  Typography
)(({ theme }) => ({
  textTransform: "none",
}));
