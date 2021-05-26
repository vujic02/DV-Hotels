import React from "react";
import { Button, DivImg, TextP } from "../../../../styles/global-styles";

const Deal = ({ text1, text2, imgPath }) => {
  return (
    <DivImg
      bgImage={imgPath}
      bgPos="center"
      bgSize="cover"
      borR="5px"
      w="100%"
      h="350px"
      pos="relative"
      flexDir="column"
      justify="flex-start"
      align="flex-start"
    >
      <TextP
        m="1rem 0 1rem 1rem"
        fontS="2rem"
        fontW="700"
        col="#fff"
        breakWord="break-word"
      >
        {text1}
      </TextP>
      <TextP
        m="0 0 1rem 1rem"
        fontS="1.5rem"
        fontW="500"
        col="#fff"
        breakWord="break-word"
      >
        {text2}
      </TextP>

      <Button
        pos="absolute"
        b="1rem"
        r="1rem"
        p="0 .5rem"
        fontW="600"
        fontS="1rem"
        h="50px"
        bor="1px solid var(--denimBlue)"
        borR="5px"
        col="var(--denimBlue)"
        bg="#fff"
        justify="center"
        flexDir="row"
        align="center"
        bgH="var(--denimBlue)"
        colH="var(--white)"
      >
        Book now
      </Button>
    </DivImg>
  );
};

export default Deal;
