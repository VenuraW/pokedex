import {
  Input,
  InputAdornment,
  Paper,
} from "@mui/material";
import React from "react";
import * as S from "./SearchBar.styles";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <S.SearchBarContainer>
      <S.SearchBarPaper>
        <Input
          disableUnderline
          defaultValue={search}
          autoComplete={false}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          id="standard-adornment-search"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
          aria-describedby="standard-search-helper-text"
          inputProps={{
            "aria-label": "search",
          }}
        />
      </S.SearchBarPaper>
    </S.SearchBarContainer>
  );
};
