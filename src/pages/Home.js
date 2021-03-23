import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchBar from "../components/Main/SearchBar";
import Text from "../components/Main/Text";
import Card from "../components/Main/Card";
import NearbyCard from "../components/Main/NearbyCard";
import ReusableCard from "../components/Main/ReusableCard";
import Featured from "../components/Main/Featured";
import Footer from "../components/Footer/Footer"

import { LandingOverlay } from "../styles/home-styles";
import { Grid, Overlay, TextH1 } from "../styles/global-styles";
import { Paths, HomePageImgs } from "../utils/Links";

const Home = ({ toggle, isOpen, modalState, toggleModal }) => {
  return (
    <section className="home-page">
      <Navbar isOpen={isOpen} toggle={toggle} toggleModal={toggleModal} modalState={modalState} />
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
      <Grid cols="repeat(3, 1fr)" colsM1="repeat(2, 1fr)" colsM2="1fr" gridGap="1rem" gridGapM="2rem" p="1% 5% 0 5%" pM="3% 5% 0 5%">
          <Card />
          <Card />
          <Card />
      </Grid>
      <TextH1 opac="0.85" alignText="left" fontS="2rem" fontW="700" m="5% 0 0 5%">Explore Nearby</TextH1>
      <Grid cols="repeat(4, 1fr)" colsM1="repeat(3, 1fr)" colsM2="repeat(2, 1fr)" gridGap="2rem" p="1% 5% 0 5%" pM="3% 5% 0 5%">
        {Paths.map((place, idx) => (
          <NearbyCard key={idx} imgSrc={place.path} imgName={place.name} />
        ))}
      </Grid>
      <TextH1 opac="0.85" alignText="left" fontS="2rem" fontW="700" m="5% 0 0 5%">Explore Nearby</TextH1>
      <Grid cols="repeat(4, 1fr)" colsM1="repeat(3, 1fr)" colsM2="repeat(2, 1fr)" gridGap="1rem" p="1% 5% 0 5%" pM="3% 5% 0 5%">
        {HomePageImgs.map((img, idx)=> (
          <ReusableCard key={idx} imgSrc={img.path} imgName={img.name} />
        ))}
      </Grid>
      <TextH1 opac="0.85" alignText="left" fontS="2rem" fontW="700" m="5% 0 1% 5%">Featured Hotel</TextH1>
      <Featured />
      <Footer />
    </section>
  );
};

export default Home;
