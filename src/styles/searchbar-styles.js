import styled from "styled-components";

export const searchDiv = styled.div`
  display: flex;
  width: 700px;
  height: 50px;
  padding: 10px;

  background-color: var(--white);
`;

export const searchInput = styled.input`
  width: 500px;
  height: 50px;

  border: none;
  outline: none;
  font-size: 1.5rem;
  color: #b8b8b8;
`;

export const searchButton = styled.button`
  background-color: var(--white);
  color: #b8b8b8;
  display: inline-block;
  font-size: 1.5rem;
  cursor: pointer;
  outline: none;
  border: 2px solid #b8b8b8;
`;
