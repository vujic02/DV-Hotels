import styled from "styled-components";

export const SearchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 80px;
  padding: 10px;
  border-radius: 10px;

  background-color: var(--white);
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
  background-color: var(--white);
  color: #b8b8b8;
  display: inline-block;
  font-size: 1.3rem;
  cursor: pointer;
  outline: none;
  border: 2px solid #b8b8b8;
  height: 40px;

  padding: 5px 10px;

  &:hover {
    background-color: #dcdcdc;
  }
`;
