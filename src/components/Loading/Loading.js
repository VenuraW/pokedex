import React from "react";
import pokegif from "../../assets/poke_load.gif";
import * as S from "./Loading.styles";

export const Loading = () => {
  return (
    <S.LoadingContainer>
      <S.LoadingImage
        src={pokegif}
        alt="loading"
      />
    </S.LoadingContainer>
  );
};
