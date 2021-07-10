import React from "react";
import {
  SearchDiv,
  SearchIcon,
  SearchInput,
} from "../../styles/searchbar-styles";

import { Button, Container } from "../../styles/global-styles";

const SearchBar = ({ search, setSearch }) => {
  return (
    <SearchDiv>
      <Container flexDir="row" justify="space-around" align="center" w="60%">
        <SearchIcon />
        <SearchInput
          type="text"
          placeholder="Search the hotel name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Container>
    </SearchDiv>
  );
};

export default SearchBar;
