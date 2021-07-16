import React from "react";
import { Container, TextP } from "../../styles/global-styles";

const AboutStep = () => {
  return (
    <Container flexDir="row" align="center">
      <div className="ellipse">1</div>
      <Container m="0 0 0 1.5rem" flexDir="column" justify="space-between">
        <TextP
          opac="0.8"
          fontS="1.2rem"
          fontW="700"
          breakWord="break-all"
          m="0 0 .25rem 0"
        >
          Find a hotel you want to visit
        </TextP>
        <TextP
          opac="0.80"
          fontS="1rem"
          fontW="500"
          breakWord="break-all"
          m=".25rem 0 0 0"
        >
          Visit our Hotels page in order to do so.
        </TextP>
      </Container>
    </Container>
  );
};

export default AboutStep;
