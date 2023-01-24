import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
} from "@mui/material";

export const ProfileCardContainer = styled(Card)(
  ({ theme }) => ({
    margin: "auto",
    maxWidth: "fit-content",
    postion: "relative",
    justifySelf: "center",
    marginTop: "2rem",
    marginBottom: "2rem",
    borderRadius: 0,
    boxShadow: `${theme.pixel.shadow}`,
    "&.MuiCard-root:hover": `${theme.pixel.selectedShadow}`,
  })
);

export const ProfileCardContent = styled(
  CardContent
)({
  position: "relative",
});

export const ProfileGrid = styled(Grid)({
  justifyContent: "center",
  marginTop: "2rem",
});

export const ProfileBackButton = styled(Button)(
  ({ theme }) => ({
    position: "absolute",
    left: "1rem",
    top: "1rem",
    borderRadius: 0,
    boxShadow: `${theme.pixel.buttonShadow}`,
  })
);

export const ProfileImage = styled(`img`)({
  marginTop: "1rem",
  height: "15rem",
});

export const ProfileTextContainer = styled(
  Container
)({
  marginLeft: "1rem",
  marginRight: "1rem",
});

export const ProfileDescriptionContainer = styled(
  Container
)({ marginTop: "1rem" });

export const ProfileValuesBox = styled(Box)({
  paddingLeft: "4px",
  color: "#7D7D7D",
});
