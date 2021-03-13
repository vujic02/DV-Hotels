import React from "react";
import {
  CardDescription,
  CardHeader,
  CardImage,
  PriceTag,
  CardDiv,
  FilledStar,
  OutlineStar,
  PriceTagWrapper,
} from "../../styles/card-styles";
import {Container} from "../../styles/global-styles"

import TestImage from "../../hotel.jpg";

const Card = () => {
  return (
    <CardDiv>
      <CardImage src={TestImage} />
      <PriceTagWrapper>
        <PriceTag>$120/Night</PriceTag>
      </PriceTagWrapper>
      <CardHeader>Hotel Las Vegas</CardHeader>
      <Container justify="center" align="center">
        <FilledStar />
        <FilledStar />
        <FilledStar />
        <FilledStar />
        <OutlineStar />
      </Container>
      <CardDescription>Las Vegas Hotel Test</CardDescription>
    </CardDiv>
  );
};

export default Card;
