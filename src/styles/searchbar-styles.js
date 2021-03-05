import styled from "styled-components";
import {AiOutlineSearch} from "react-icons/ai";

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  padding: 1rem;
  border-radius: 10px;
  background-color: var(--white);

`;

export const SearchInput = styled.input`
  width: 85%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: var(--black);

  &::placeholder {
    color: #C4C4C4;
    opacity: 1;
  }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 30px;
  color: #C4C4C4;
`

