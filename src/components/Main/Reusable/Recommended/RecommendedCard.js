import React from "react";
import {
  CountryImage,
  CountryFlag,
} from "../../../../styles/recommended-styles";

import { Container, TextP } from "../../../../styles/global-styles";

const RecommendedCard = ({
  bgImg,
  imgHeight,
  countryFlag,
  countryName,
  numOfProperties,
}) => {
  return (
    <CountryImage bgImgUrl={bgImg} w="100%" h={imgHeight}>
      <Container align="center" justify="flex-start" m="2.5rem 0 0 2.5rem">
        <TextP col="var(--white)" fontS="2rem" fontW="700">
          {countryName}
        </TextP>
        <CountryFlag src={countryFlag} />
      </Container>
      <TextP col="var(--white)" fontS="1rem" fontW="500" m=".5rem 0 0 2.5rem">
        {numOfProperties} properties
      </TextP>
    </CountryImage>
  );
};

export default RecommendedCard;
