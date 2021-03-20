import React from "react";
import {
  CardDescription,
  CardHeader,
  CardImage,
  PriceTag,
  CardDiv,
  PriceTagWrapper
} from "../../styles/card-styles";

import {
  StarContainer,
  FilledStar,
  EmptyStar
}  from "../../styles/global-styles"

import TestImage from "../../hotel.jpg";

const Card = () => {
  return (
    <CardDiv>
      <CardImage src={TestImage} />
      <PriceTagWrapper>
        <PriceTag>$120/Night</PriceTag>
      </PriceTagWrapper>
      <CardHeader>Hotel Las Vegas</CardHeader>
      <StarContainer pos="absolute" l="20px" t="20px" tM="30px">
        <FilledStar col="var(--denimBlue)" w="1.5rem" h="1.5rem" />
        <FilledStar col="var(--denimBlue)" w="1.5rem" h="1.5rem" />
        <FilledStar col="var(--denimBlue)" w="1.5rem" h="1.5rem" />
        <FilledStar col="var(--denimBlue)" w="1.5rem" h="1.5rem"/>
        <EmptyStar col="var(--denimBlue)" w="1.5rem" h="1.5rem" />
      </StarContainer>
      <CardDescription>Las Vegas Hotel Test</CardDescription>
    </CardDiv>
  );
};

export default Card;
