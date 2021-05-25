import React from "react";
import ImageCard from "./ImageCard";
import { Grid } from "../../../../styles/global-styles";

const ImgCards = ({ images }) => {
  return (
    <Grid
      cols="repeat(4, 1fr)"
      colsM1="repeat(3, 1fr)"
      colsM2="repeat(2, 1fr)"
      gridGap="1rem"
      p="1% 5% 0 5%"
      pM="3% 5% 0 5%"
    >
      {images.map((img, idx) => (
        <ImageCard key={idx} imgSrc={img.path} imgName={img.name} />
      ))}
    </Grid>
  );
};

export default ImgCards;
