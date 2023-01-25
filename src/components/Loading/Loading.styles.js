import styled from "@emotion/styled";
import { Container } from "@mui/system";

export const LoadingContainer = styled(Container)(
  {
    display: "flex",
    justifyContent: "center",
    minHeight: "100%",
    alignContent: "center",
  }
);

export const LoadingImage = styled("img")({
  height: "10rem",
});
