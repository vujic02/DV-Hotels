import React, { useState } from "react";
import SearchBar from "../components/Main/SearchBar";
import Text from "../components/Main/Text";
import Card from "../components/Main/Card";
import NearbyCards from "../components/Main/Reusable/Nearby/NearbyCards";
import ImgCards from "../components/Main/Reusable/ImgCards/ImgCards";
import Featured from "../components/Main/Featured";
import { LandingOverlay } from "../styles/home-styles";
import { Grid, Overlay, TextH1 } from "../styles/global-styles";
import { Paths, HomePageImgs } from "../utils/Links";
import { Link } from "react-router-dom";

const Home = ({ hotels, setSelected }) => {
  const [search, setSearch] = useState("");

  return (
    <section className="home-page">
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
          <SearchBar hotels={hotels} search={search} setSearch={setSearch} />
        </Overlay>
      </LandingOverlay>
      {search !== "" && search.length > 1 ? (
        <TextH1
          opac="0.85"
          alignText="left"
          fontS="2rem"
          fontW="700"
          m="5% 0 0 5%"
        >
          Search Results
        </TextH1>
      ) : null}
      <Grid
        cols="repeat(3, 1fr)"
        colsM1="repeat(2, 1fr)"
        colsM2="1fr"
        gridGap="1rem"
        gridGapM="2rem"
        p="1% 5% 0 5%"
        pM="3% 5% 0 5%"
      >
        {search !== "" && search.length > 1
          ? hotels
              .filter((hotel) =>
                hotel.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((filteredHotel, idx) => (
                <Link
                  to={`/hotel/${filteredHotel.id}`}
                  onClick={() => setSelected(filteredHotel)}
                  key={idx}
                >
                  <Card hotel={filteredHotel} />
                </Link>
              ))
          : null}
      </Grid>
      <TextH1
        opac="0.85"
        alignText="left"
        fontS="2rem"
        fontW="700"
        m="5% 0 0 5%"
      >
        Explore Nearby
      </TextH1>
      <NearbyCards paths={Paths} />
      <TextH1
        opac="0.85"
        alignText="left"
        fontS="2rem"
        fontW="700"
        m="5% 0 0 5%"
      >
        Explore Nearby
      </TextH1>
      <ImgCards images={HomePageImgs} />
      <TextH1
        opac="0.85"
        alignText="left"
        fontS="2rem"
        fontW="700"
        m="5% 0 1% 5%"
      >
        Featured Hotel
      </TextH1>
      <Featured />
    </section>
  );
};

export default Home;
