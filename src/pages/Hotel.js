import React from "react";
import { Grid } from "../styles/global-styles";
import { Footer, Sidebar, Navbar } from "../components/index";
import { HotelInfo, HotelReservation } from "../components/Hotel/index";

const Hotel = ({ hotel }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Grid
        m="300px 0 100px 0"
        p="0 5%"
        cols="1fr .5fr"
        colsM1="1fr"
        gridGap="0 20px"
      >
        <HotelInfo hotel={hotel} />
        <HotelReservation hotel={hotel} />
      </Grid>
      <Footer />
    </div>
  );
};

export default Hotel;
