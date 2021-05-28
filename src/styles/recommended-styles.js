import styled from "styled-components";

export const CountryImage = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  background-image: url(${({ bgImgUrl }) => bgImgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
`;

export const CountryFlag = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  margin-left: 5px;
`;
