import React from "react";
import { Grid } from "../../styles/global-styles";
import Deal from "./Reusable/Deal/Deal";
import { Deals } from "../../utils/Links";

const SpecialDeals = () => {
  return (
    <Grid
      cols="repeat(2, 1fr)"
      colsM2="1fr"
      gridGap="1rem"
      p="1% 5% 0 5%"
      pM="3% 5% 0 5%"
    >
      {Deals.map((deal) => (
        <Deal text1={deal.text1} text2={deal.text2} imgPath={deal.img} />
      ))}
    </Grid>
  );
};

export default SpecialDeals;
