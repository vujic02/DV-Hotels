import React from "react";
import { Container, Grid, TextP } from "../../styles/global-styles";
import { CountryFlag, CountryImage } from "../../styles/recommended-styles";

const Recommended = () => {
  return (
    <Container p="1% 5% 5% 5%" flexDir="column">
      <Grid cols="repeat(2, 1fr)" colsM1="1fr" gridGap="20px">
        <CountryImage bgImgUrl="./images/landing.jpg" w="100%" h="360px">
          <Container
            w="150px"
            align="center"
            justify="space-around"
            m="2.5rem 0 0 2.5rem"
          >
            <TextP col="var(--white)" fontS="2rem" fontW="700">
              Serbia
            </TextP>
            <CountryFlag src="https://www.countryflags.io/rs/flat/32.png" />
          </Container>
          <TextP
            col="var(--white)"
            fontS="1rem"
            fontW="500"
            m=".5rem 0 0 2.5rem"
          >
            3427 properties
          </TextP>
        </CountryImage>
        <CountryImage bgImgUrl="./images/landing.jpg" w="100%" h="360px">
          <Container
            w="150px"
            align="center"
            justify="space-around"
            m="2.5rem 0 0 2.5rem"
          >
            <TextP col="var(--white)" fontS="2rem" fontW="700">
              Serbia
            </TextP>
            <CountryFlag src="https://www.countryflags.io/rs/flat/32.png" />
          </Container>
          <TextP
            col="var(--white)"
            fontS="1rem"
            fontW="500"
            m=".5rem 0 0 2.5rem"
          >
            2477 properties
          </TextP>
        </CountryImage>
      </Grid>

      <Grid m="3rem 0 0 0" cols="repeat(3, 1fr)" colsM1="1fr" gridGap="20px">
        <CountryImage bgImgUrl="./images/landing.jpg" w="100%" h="270px">
          <Container
            w="150px"
            align="center"
            justify="space-around"
            m="2.5rem 0 0 2.5rem"
          >
            <TextP col="var(--white)" fontS="2rem" fontW="700">
              Serbia
            </TextP>
            <CountryFlag src="https://www.countryflags.io/rs/flat/32.png" />
          </Container>
          <TextP
            col="var(--white)"
            fontS="1rem"
            fontW="500"
            m=".5rem 0 0 2.5rem"
          >
            1746 properties
          </TextP>
        </CountryImage>
        <CountryImage bgImgUrl="./images/landing.jpg" w="100%" h="270px">
          <Container
            w="150px"
            align="center"
            justify="space-around"
            m="2.5rem 0 0 2.5rem"
          >
            <TextP col="var(--white)" fontS="2rem" fontW="700">
              Serbia
            </TextP>
            <CountryFlag src="https://www.countryflags.io/rs/flat/32.png" />
          </Container>
          <TextP
            col="var(--white)"
            fontS="1rem"
            fontW="500"
            m=".5rem 0 0 2.5rem"
          >
            2356 properties
          </TextP>
        </CountryImage>
        <CountryImage bgImgUrl="./images/landing.jpg" w="100%" h="270px">
          <Container
            w="150px"
            align="center"
            justify="space-around"
            m="2.5rem 0 0 2.5rem"
          >
            <TextP col="var(--white)" fontS="2rem" fontW="700">
              Serbia
            </TextP>
            <CountryFlag src="https://www.countryflags.io/rs/flat/32.png" />
          </Container>
          <TextP
            col="var(--white)"
            fontS="1rem"
            fontW="500"
            m=".5rem 0 0 2.5rem"
          >
            5433 properties
          </TextP>
        </CountryImage>
      </Grid>
    </Container>
  );
};

export default Recommended;
