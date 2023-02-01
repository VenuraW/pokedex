import styled from "@emotion/styled";
import { Card } from "@mui/material";
import { Container } from "@mui/system";

export const LayoutContainer = styled(Card)({
  margin: "2rem",
  background: "transparent",
  boxShadow: "none",
  height: "100%",
  // position: "relative",
});

export const FilterContainer = styled(Container)(
  ({ theme }) => ({
    // position: "fixed",
    minHeight: "100%",
  })
);
