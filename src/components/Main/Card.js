import React from "react";
import {
  CardDescription,
  CardHeader,
  CardImage,
  PriceTag,
  CardDiv,
  PriceTagWrapper,
} from "../../styles/card-styles";

import {
  StarContainer,
  FilledStar,
  EmptyStar,
} from "../../styles/global-styles";

const Card = ({ hotel }) => {
  let filled = [...Array(hotel.stars)];
  let empty = [...Array(Math.abs(hotel.stars - 5))];

  return (
    <CardDiv>
      <CardImage src={hotel.image} />
      <PriceTagWrapper>
        <PriceTag>${hotel.price}/Night</PriceTag>
      </PriceTagWrapper>
      <CardHeader>{hotel.name}</CardHeader>
      <StarContainer pos="absolute" l="20px" t="20px" tM="30px">
        {filled.map((num, index) => (
          <FilledStar
            col="var(--denimBlue)"
            w="1.5rem"
            h="1.5rem"
            key={index}
          />
        ))}
        {empty.map((num, index) => (
          <EmptyStar col="var(--denimBlue)" w="1.5rem" h="1.5rem" key={index} />
        ))}
      </StarContainer>
      <CardDescription>Hotel Description</CardDescription>
    </CardDiv>
  );
};

export default Card;
