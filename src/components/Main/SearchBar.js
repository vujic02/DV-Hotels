import React from "react";
import {
  SearchDiv,
  SearchIcon,
  SearchInput,
} from "../../styles/searchbar-styles";

import { Button, Container } from "../../styles/global-styles";

const SearchBar = () => {
  return (
    <SearchDiv>
      <Container flexDir="row" justify="space-around" align="center" w="60%">
        <SearchIcon />
        <SearchInput type="text" placeholder="Search the hotel name" />
      </Container>
      <Button
        p="0 2.5rem"
        fontW="400"
        fontS="1.5rem"
        h="50px"
        bor="1px solid var(--denimBlue)"
        col="var(--denimBlue)"
        bg="transparent"
        justify="center"
        flexDir="row"
        align="center"
        bgH="var(--denimBlue)"
        colH="var(--white)"
      >
        Search
      </Button>
    </SearchDiv>
  );
};

export default SearchBar;
