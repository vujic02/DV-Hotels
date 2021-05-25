import React from "react";
import { Container, Img, TextP } from "../../../../styles/global-styles";

const ReusableCard = ({ imgSrc, imgName }) => {
  return (
    <Container flexDir="column">
      <Img src={imgSrc} objFit="cover" borR=".5rem" w="100%" h="360px"></Img>
      <TextP fontS="1.5rem" fontW="400" m="1% 0 0 0">
        {imgName}
      </TextP>
    </Container>
  );
};

export default ReusableCard;
