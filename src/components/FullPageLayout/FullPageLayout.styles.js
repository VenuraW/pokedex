import styled from "@emotion/styled";

export const FullPageLayoutDiv = styled("div")(
  ({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "space-between",
    background: `${theme.palette.pokemon.aero}`,
  })
);
