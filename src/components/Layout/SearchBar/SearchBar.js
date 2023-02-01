import React from "react";
import * as S from "./SearchBar.styles";

export const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarPaper>
        <S.SearchTextField
          defaultValue={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          id="standard-adornment-search"
          variant="standard"
          placeholder="search"
          InputProps={{ disableUnderline: true }}
          aria-describedby="standard-search-helper-text"
          inputProps={{
            "aria-label": "search",
          }}
        />
      </S.SearchBarPaper>
    </S.SearchBarContainer>
  );
};
