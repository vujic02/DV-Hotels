import React, { useState } from "react";
import SearchBar from "../components/Main/SearchBar";
import SpecialDeals from "../components/Main/SpecialDeals";
import Card from "../components/Main/Card";
import Recommended from "../components/Main/Recommended";
import { Container, TextH1, Grid } from "../styles/global-styles";
import { Link } from "react-router-dom";

const Hotels = ({ hotels, setSelected }) => {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container
        justify="center"
        align="center"
        w="100%"
        h="490px"
        bg="rgba(24,24,24,0.05)"
      >
        <Container w="1200px">
          <SearchBar hotels={hotels} search={search} setSearch={setSearch} />
        </Container>
      </Container>
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
    </div>
  );
};

export default Hotels;
