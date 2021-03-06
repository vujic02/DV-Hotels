import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchBar from "../components/Main/SearchBar";

import { LandingOverlay } from "../styles/home-styles";

import { Overlay } from "../styles/global-styles";

import Card from "../components/Main/Card";

const Home = ({ toggle, isOpen }) => {
  return (
    <div>
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
          bg="linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 90%)"
          flexDir="column"
          justify="center"
          w="100%"
          h="100%"
          p="0 15%"
          pM="0 10%"
        >
          <SearchBar />
          <Card />
        </Overlay>
      </LandingOverlay>
    </div>
  );
};

export default Home;
