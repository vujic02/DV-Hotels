import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchBar from "../components/Main/SearchBar";
import Text from "../components/Main/Text"

import { LandingOverlay } from "../styles/home-styles";

import { Grid, Overlay, SectionHeading, TextH1 } from "../styles/global-styles";

import Card from "../components/Main/Card";

const Home = ({ toggle, isOpen }) => {
  return (
    <section className="home-page">
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <LandingOverlay
        bgImage="./images/landing.jpg"
        bgPos="center"
        bgSize="cover"
        w="100%"
        h="860px"
      >
        <Overlay
          bg="linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 90%)"
          flexDir="column"
          justify="center"
          w="100%"
          h="100%"
          p="0 15%"
          pM="0 10%"
        >
          <Text containerMargin="8% 0" />
          <SearchBar />
        </Overlay>
      </LandingOverlay>
      <SectionHeading lineCol="#111" m="5% 0 0 0">
        <TextH1 fontS="2rem" fontW="300">Search Results</TextH1>
        <div className="bottom-line"></div>
      </SectionHeading>
      <Grid cols="repeat(3, 1fr)" colsM1="repeat(2, 1fr)" colsM2="1fr" gridGap="1rem" p="5% 5% 0 5%">
        <Card />
        <Card />
        <Card />
      </Grid>
    </section>
  );
};

export default Home;
