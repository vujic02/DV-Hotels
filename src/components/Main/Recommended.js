import React from "react";
import { Container, Grid } from "../../styles/global-styles";
import { CountriesInfo1, CountriesInfo2 } from "../../data/countries-data";
import RecommendedCard from "./Reusable/Recommended/RecommendedCard";

const Recommended = () => {
  return (
    <Container p="1% 5% 5% 5%" flexDir="column">
      <Grid cols="repeat(2, 1fr)" colsM1="1fr" gridGap="20px">
        {CountriesInfo1.map((country) => (
          <RecommendedCard
            bgImg={country.bgImg}
            imgHeight={country.imgHeight}
            countryFlag={country.countryFlag}
            countryName={country.countryName}
            numOfProperties={country.numOfProperties}
          />
        ))}
      </Grid>

      <Grid m="3rem 0 0 0" cols="repeat(3, 1fr)" colsM1="1fr" gridGap="20px">
        {CountriesInfo2.map((country) => (
          <RecommendedCard
            bgImg={country.bgImg}
            imgHeight={country.imgHeight}
            countryFlag={country.countryFlag}
            countryName={country.countryName}
            numOfProperties={country.numOfProperties}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Recommended;
