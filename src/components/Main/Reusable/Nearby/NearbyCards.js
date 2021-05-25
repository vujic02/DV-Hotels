import React from "react";
import NearbyCard from "./NearbyCard";
import { Grid } from "../../../../styles/global-styles";

const NearbyCards = ({ paths }) => {
  return (
    <Grid
      cols="repeat(4, 1fr)"
      colsM1="repeat(3, 1fr)"
      colsM2="repeat(2, 1fr)"
      gridGap="2rem"
      p="1% 5% 0 5%"
      pM="3% 5% 0 5%"
    >
      {paths.map((place, idx) => (
        <NearbyCard key={idx} imgSrc={place.path} imgName={place.name} />
      ))}
    </Grid>
  );
};

export default NearbyCards;
