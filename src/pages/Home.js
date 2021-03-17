import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchBar from "../components/Main/SearchBar";
import Text from "../components/Main/Text";
import Card from "../components/Main/Card";
import NearbyCard from "../components/Main/NearbyCard";

import { LandingOverlay } from "../styles/home-styles";
import { Grid, Overlay, TextH1 } from "../styles/global-styles";
import { Paths } from "../utils/Links";


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
      <TextH1 opac="0.85" alignText="left" fontS="2rem" fontW="700" m="5% 0 0 5%">Search Results</TextH1>
      <Grid cols="repeat(3, 1fr)" colsM1="repeat(2, 1fr)" colsM2="1fr" gridGap="1rem" p="1% 5% 0 5%">
          <Card />
          <Card />
          <Card />
      </Grid>
      <TextH1 opac="0.85" alignText="left" fontS="2rem" fontW="700" m="5% 0 0 5%">Explore Nearby</TextH1>
      <Grid cols="repeat(4, 1fr)" colsM1="repeat(3, 1fr)" colsM2="repeat(2, 1fr)" gridGap="2rem" p="1% 5% 0 5%">
        {Paths.map(place => (
          <NearbyCard imgSrc={place.path} imgName={place.name} />
        ))}
      </Grid>

      
    </section>
  );
};

export default Home;
