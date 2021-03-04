import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 80px;
  padding: 10px;
  border-radius: 10px;

  background-color: var(--fadedWhite);
`;

export const SearchInput = styled.input`
  width: 500px;
  height: 40px;

  border: none;
  outline: none;
  font-size: 1.5rem;
  color: var(--black);

  &:placeholder {
    color: #b8b8b8;
    opacity: 1;
  }
`;

export const SearchButton = styled.button`
  background-color: var(--fadedWhite);
  color: #b8b8b8;
  display: inline-block;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  border: 1px solid #b8b8b8;
  height: 40px;

  padding: 10px 15px;
`;
