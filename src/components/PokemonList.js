import styled from "@emotion/styled";
import {
  alpha,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, {
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import {
  fetchKantoPokemonList,
  fetchPokemonDataByUrl,
  getPokemonPictureURL,
} from "../api/api";
import { POKE_COLORS } from "../constants/colors";
import Loading from "./Loading";

const StyledCardActionArea = styled(
  CardActionArea
)(
  ({ theme }) => `
    .MuiCardActionArea-focusHighlight {
        background: transparent;
    }   
`
);

const PokemonList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [pokeData, setPokeData] = useState([]);
  // const styles = useStyles();

  const fetchData = async () => {
    console.log("fetch");
    const list = await fetchKantoPokemonList();
    list.results.forEach(async (pokemon) => {
      const data = await fetchPokemonDataByUrl(
        pokemon.url
      );
      await setPokeData((pastPoke) => [
        ...pastPoke,
        data,
      ]);
    });
    await setLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{
        justifyContent: "center",
      }}
    >
      {pokeData?.map((poke, index) => {
        return (
          <Grid
            item
            key={index}
            sx={{
              margin: "1rem",
              maxWidth: "20rem",
            }}
            xs={2}
          >
            <Card
              sx={{
                "&.MuiCard-root:hover": {
                  boxShadow: `0px 0px 0px 8px ${alpha(
                    POKE_COLORS.golden_yellow,
                    0.8
                  )}`,
                },
              }}
            >
              <StyledCardActionArea
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
                onClick={() =>
                  navigate("/" + poke.id)
                }
              >
                <CardMedia
                  sx={{
                    marginTop: "1rem",
                    marginRight: "1rem",
                    marginLeft: "1rem",
                    maxHeight: "fit-content",
                  }}
                  component="img"
                  image={getPokemonPictureURL(
                    poke.id
                  )}
                  alt={poke.name}
                />

                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  {poke.name}
                </Typography>
              </StyledCardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default PokemonList;
