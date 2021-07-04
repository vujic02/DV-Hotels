import React from "react";
import { Footer } from "../components";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import AboutStep from "../components/About/AboutStep";
import {
  Button,
  Container,
  Img,
  Grid,
  TextH1,
  TextP,
} from "../styles/global-styles";

const About = ({ isOpen, toggle, modalState, toggleModal }) => {
  return (
    <div>
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        modalState={modalState}
        toggleModal={toggleModal}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Container p="0 50px 0 50px" pM1="0 25px 0 25px" pM2="0 10px 0 10px">
        <Grid
          cols="1fr 1fr"
          colsM1="1fr"
          w="100%"
          h="100%"
          m="30px 0 0 0"
          mM1="120px 0 0 0"
        >
          <Container w="100%" h="100%" justify="center" align="center">
            <Img
              src="./images/about.jpg"
              objFit="cover"
              w="75%"
              h="85%"
              wM="100%"
              hM="80%"
            />
          </Container>
          <Container
            m="80px 0 0 0"
            p="0 50px 0 50px"
            pM="0 25px 0 25px"
            pM2="0"
            mM1="20px 0 0 0"
            justify="flex-start"
            flexDir="column"
          >
            <TextH1 opac="0.85" fontS="2rem" fontW="700">
              About our website & how it works.
            </TextH1>
            <Container w="80%" p="2rem 0 3rem 0">
              <TextP
                opac="0.8"
                fontS="1.2rem"
                fontW="500"
                breakWord="break-all"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nunc.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Phasellus nunc.Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Phasellus nunc.
              </TextP>
            </Container>
            <Container h="400px" flexDir="column" justify="space-between">
              <AboutStep />
              <AboutStep />
              <AboutStep />
            </Container>
            <Container p="5rem 0 3rem 0">
              <Button
                p=".8rem 2rem"
                borR="3px"
                bor="1px solid var(--aeganBlue)"
                fontS="1.5rem"
                fontW="500"
                col="var(--aeganBlue)"
                bg="transparent"
                bgH="var(--denimBlue)"
                colH="var(--white)"
              >
                Start Searching
              </Button>
            </Container>
          </Container>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
};

export default About;
