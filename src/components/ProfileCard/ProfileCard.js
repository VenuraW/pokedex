import { Grid, Typography } from "@mui/material";
import React, {
  useEffect,
  useState,
} from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  fetchPokemonDataById,
  getPokemonPictureURL,
} from "../../api/api";
import Loading from "../Loading/index";
import * as S from "./ProfileCard.styles";

export const ProfileCard = () => {
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
    <S.ProfileCardContainer>
      <S.ProfileCardContent>
        <S.ProfileGrid container>
          <Grid item>
            <S.ProfileBackButton
              onClick={() => navigate("/")}
            >
              Back
            </S.ProfileBackButton>
          </Grid>
          <Grid item>
            <S.ProfileImage
              src={getPokemonPictureURL(
                pokemonId
              )}
              alt="pokemon-profile-image"
            />
          </Grid>
          <Grid item>
            <S.ProfileTextContainer>
              <Typography variant="h2">
                #{pokeData?.id} {pokeData?.name}
              </Typography>
              <S.ProfileDescriptionContainer
                disableGutters
              >
                <Typography
                  variant="h6"
                  component="div"
                >
                  base experience
                  <S.ProfileValuesBox display="inline">
                    {pokeData?.base_experience}
                  </S.ProfileValuesBox>
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                >
                  weight
                  <S.ProfileValuesBox display="inline">
                    {pokeData?.weight}lbs
                  </S.ProfileValuesBox>
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                >
                  types
                  {pokeData?.types.map(
                    (types, index) => {
                      return (
                        <S.ProfileValuesBox
                          display="inline"
                          key={index}
                        >
                          {types.type.name}
                          {index !==
                          pokeData?.types.length -
                            1
                            ? ","
                            : ""}
                        </S.ProfileValuesBox>
                      );
                    }
                  )}
                </Typography>

                <Typography
                  variant="h6"
                  component="div"
                >
                  abilities
                  {pokeData?.abilities.map(
                    (abilities, index) => {
                      return (
                        <S.ProfileValuesBox
                          display="inline"
                          key={index}
                        >
                          {abilities.ability.name}
                          {index !==
                          pokeData?.abilities
                            .length -
                            1
                            ? ","
                            : ""}
                        </S.ProfileValuesBox>
                      );
                    }
                  )}
                </Typography>
              </S.ProfileDescriptionContainer>
            </S.ProfileTextContainer>
          </Grid>
        </S.ProfileGrid>
      </S.ProfileCardContent>
    </S.ProfileCardContainer>
  );
};

export default ProfileCard;
