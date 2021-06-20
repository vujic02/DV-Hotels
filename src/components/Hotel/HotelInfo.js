import React from "react";
import { Container, Img, TextH1, TextP } from "../../styles/global-styles";
import { ViewIcon, WifiIcon, Icon, Line } from "../../styles/hotelpage-styles";
import { bed, sandwich, home } from "../../svgs";

const HotelInfo = ({ hotel }) => {
  return (
    <Container flexDir="column">
      <Container>
        <Img src={hotel.imgSrc} w="100%" h="420px" objFit="cover" borR="5px" />
      </Container>
      <Container
        justify="space-between"
        m="2rem 0"
        pos="relative"
        align="center"
      >
        <TextH1
          fontS="clamp(2rem, 8vw, 2.5rem)"
          col="rgba(0, 0, 0, 0.8)"
          fontW="600"
        >
          {hotel.name}
        </TextH1>
        <TextH1
          fontS="clamp(1.5rem, 8vw, 2rem)"
          col="rgba(0, 0, 0, 0.95)"
          fontW="600"
        >
          Starting from:<span> {hotel.price} / night</span>
        </TextH1>
      </Container>
      <Line w="100%" align="center" />
      <Container
        align="center"
        justify="space-around"
        h="100px"
        flexDirM1="column"
        hM1="100%"
      >
        <Container flexDir="column" align="center" mM1="10px 0 0 0">
          <Icon src={bed} />
          <TextP
            fontS="1rem"
            fontW="600"
            col="rgba(0,0,0,0.45)"
            transformText="uppercase"
          >
            {hotel.description.bedroom} bedroom
          </TextP>
        </Container>
        <Container flexDir="column" align="center" mM1="10px 0 0 0">
          <Icon src={sandwich} />
          <TextP
            fontS="1rem"
            fontW="600"
            col="rgba(0,0,0,0.45)"
            transformText="uppercase"
          >
            {hotel.description.breakfest} breakfest
          </TextP>
        </Container>
        <Container flexDir="column" align="center" mM1="10px 0 0 0">
          <ViewIcon />
          <TextP
            fontS="1rem"
            fontW="600"
            col="rgba(0,0,0,0.45)"
            transformText="uppercase"
          >
            {hotel.description.view} view
          </TextP>
        </Container>
        <Container flexDir="column" align="center" mM1="10px 0 0 0">
          <WifiIcon />
          <TextP
            fontS="1rem"
            fontSM1
            fontW="600"
            col="rgba(0,0,0,0.45)"
            transformText="uppercase"
          >
            {hotel.description.breakfest} wifi
          </TextP>
        </Container>
        <Container flexDir="column" align="center" mM1="10px 0 10px 0">
          <Icon src={home} />
          <TextP
            fontS="1rem"
            fontW="600"
            col="rgba(0,0,0,0.45)"
            transformText="uppercase"
          >
            {hotel.description.size}
          </TextP>
        </Container>
      </Container>
      <Line w="100%" />
      <Container flexDir="column" p="2rem 0 0 0">
        <TextH1
          fontS="clamp(2rem, 8vw, 2.5rem)"
          col="rgba(0, 0, 0, 0.8)"
          fontW="600"
          p="1rem 0 0 0"
        >
          Room Details
        </TextH1>
        <TextP
          fontS="clamp(1rem, 8vw, 1.2rem)"
          col="rgba(0, 0, 0, 0.6)"
          fontW="300"
          p="1rem 0 0 0"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis
          quam et lacus finibus volutpat. Donec ac pharetra enim, ut luctus dui.
          Ut vel tortor a risus accumsan facilisis. Sed ultricies varius
          dapibus. In hac habitasse platea dictumst. In id nisi placerat,
          dapibus ante eget, feugiat nunc. Pellentesque rhoncus faucibus
          pretium. Phasellus id sollicitudin dolor. Maecenas porttitor dictum
          consectetur. Aliquam rutrum ex id massa dictum vestibulum. Donec sit
          amet neque ac ligula egestas semper quis ac lacus. Fusce ullamcorper,
          dolor ac tincidunt tempor, nisi nunc semper libero, at egestas lacus
          nisi ut felis. Etiam eget odio suscipit, posuere nisi non, aliquam
          augue. Aliquam metus purus, sagittis in ipsum non, placerat viverra
          risus.
        </TextP>
      </Container>
    </Container>
  );
};

export default HotelInfo;
