import React from "react";
import {
  SearchDiv,
  SearchInput,
  SearchButton,
} from "../../styles/searchbar-styles";
import * as AiIcons from "react-icons/ai";

const SearchBar = () => {
  return (
    <SearchDiv className="center">
      <AiIcons.AiOutlineSearch
        style={{
          width: "30px",
          height: "30px",
          marginRight: "10px",
          color: "#b8b8b8",
        }}
      />
      <SearchInput type="text" placeholder="Search the hotel name" />
      <SearchButton>Search</SearchButton>
    </SearchDiv>
  );
};

export default SearchBar;
