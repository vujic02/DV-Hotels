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
  StarContainer,
} from "../../styles/card-styles";

import TestImage from "../../hotel.jpg";

const Card = () => {
  return (
    <CardDiv>
      <CardImage src={TestImage} />
      <PriceTagWrapper>
        <PriceTag>$120/Night</PriceTag>
      </PriceTagWrapper>
      <CardHeader>Hotel Las Vegas</CardHeader>
      <StarContainer>
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <FilledStar />
          <OutlineStar />
      </StarContainer>
      <CardDescription>Las Vegas Hotel Test</CardDescription>
    </CardDiv>
  );
};

export default Card;
