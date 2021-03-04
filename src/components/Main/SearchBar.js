import React from "react";
import {
  searchDiv,
  searchInput,
  searchButton,
} from "../../styles/searchbar-styles";

const SearchBar = () => {
  return (
    <searchDiv>
      <searchInput type="text" placeholder="Search the hotel name" />
      <searchButton>Search</searchButton>
    </searchDiv>
  );
};

export default SearchBar;
