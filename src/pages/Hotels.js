import React from "react";
import { Navbar, Sidebar, Footer } from "../components/index";
import SearchBar from "../components/Main/SearchBar";
import SpecialDeals from "../components/Main/SpecialDeals";
import Recommended from "../components/Main/Recommended";
import { Container, TextH1 } from "../styles/global-styles";

const Hotels = ({ isOpen, toggle, modalState, toggleModal }) => {
  return (
    <div>
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        modalState={modalState}
        toggleModal={toggleModal}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Container
        justify="center"
        align="center"
        w="100%"
        h="490px"
        bg="rgba(24,24,24,0.05)"
      >
        <Container w="1200px">
          <SearchBar />
        </Container>
      </Container>
      <TextH1
        opac="0.85"
        alignText="left"
        fontS="2rem"
        fontW="700"
        m="5% 0 0 5%"
      >
        Special Deals
      </TextH1>
      <SpecialDeals />
      <TextH1
        opac="0.85"
        alignText="left"
        fontS="2rem"
        fontW="700"
        m="5% 0 0 5%"
      >
        Recommended
      </TextH1>
      <Recommended />
      <Footer />
    </div>
  );
};

export default Hotels;
