import {
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, {
  useEffect,
  useState,
} from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { fetchPokemonDataById } from "../../api/api";
import Loading from "../Loading";
import * as S from "./ProfileCard.styles";

const ProfileCard = () => {
  const navigate = useNavigate();
  let { pokemonId } = useParams();
  const [pokeData, setPokeData] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchPokeData = async () => {
    const data = await fetchPokemonDataById(
      pokemonId
    );
    await setPokeData(data);
    await setLoading(false);
  };

  useEffect(() => {
    fetchPokeData();
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loading />;

  return (
    <Card
      sx={{
        margin: "auto",
        maxWidth: "fit-content",
        postion: "relative",
        justifySelf: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
        clipPath: `polygon(20% 0%, 80% 0%, 100% 20%, 100% 90%, 100% 100%, 20% 100%, 0 76%, 0 0)`,
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <Grid
          container
          sx={{
            justifyContent: "center",
            marginTop: "2rem",
          }}
        >
          <Grid item>
            <Button
              sx={{
                position: "absolute",
                left: "1rem",
                top: "1rem",
              }}
              // startIcon={<ArrowBackIcon />}
              variant="outlined"
              onClick={() => navigate("/")}
            >
              back
            </Button>
          </Grid>
          <Grid item>
            <img
              style={{
                marginTop: "1rem",
                height: "15rem",
              }}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
              alt="pokemon-logo"
            />
          </Grid>
          <Grid item>
            <Container
              sx={{
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              <Typography variant="h2">
                #{pokeData?.id} {pokeData?.name}
              </Typography>
              <Container
                disableGutters
                sx={{ marginTop: "1rem" }}
              >
                <Typography
                  variant="h6"
                  component="div"
                >
                  base experience
                  <Box
                    sx={{
                      paddingLeft: "4px",
                      color: "#7D7D7D",
                    }}
                    display="inline"
                  >
                    {pokeData?.base_experience}
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                >
                  weight
                  <Box
                    sx={{
                      paddingLeft: "4px",
                      color: "#7D7D7D",
                    }}
                    display="inline"
                  >
                    {pokeData?.weight}lbs
                  </Box>
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                >
                  types
                  <Box
                    sx={{
                      paddingLeft: "4px",
                      color: "#7D7D7D",
                    }}
                    display="inline"
                  >
                    {pokeData?.types.map(
                      (types, index) => {
                        return (
                          <Box
                            sx={{
                              display: "inline",
                            }}
                            key={index}
                          >
                            {types.type.name}
                            {index !==
                            pokeData?.types
                              .length -
                              1
                              ? ","
                              : ""}
                          </Box>
                        );
                      }
                    )}
                  </Box>
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                >
                  abilities
                  <Box
                    sx={{
                      paddingLeft: "4px",
                      color: "#7D7D7D",
                    }}
                    display="inline"
                  >
                    {pokeData?.abilities.map(
                      (abilities, index) => {
                        return (
                          <Box
                            sx={{
                              display: "inline",
                            }}
                            key={index}
                          >
                            {
                              abilities.ability
                                .name
                            }
                            {index !==
                            pokeData?.abilities
                              .length -
                              1
                              ? ","
                              : ""}
                          </Box>
                        );
                      }
                    )}
                  </Box>
                </Typography>
              </Container>
            </Container>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
