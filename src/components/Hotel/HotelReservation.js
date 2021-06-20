import React from "react";
import { Button, Container, TextH1, TextP } from "../../styles/global-styles";
import { Line, Input, Selection } from "../../styles/hotelpage-styles";

const HotelReservation = ({ hotel }) => {
  return (
    <Container
      flexDir="column"
      bg="var(--aeganBlue)"
      borR="5px"
      h="70%"
      hM1="100%"
      mM1="3rem 0 0 0"
    >
      <TextH1
        col="var(--white)"
        fontS="2rem"
        fontW="300"
        alignText="center"
        m="1rem 0 1rem 0"
      >
        Reservation
      </TextH1>
      <Line w="90%" align="center" />
      <Container flexDir="column" p="5% 6%">
        <Container flexDir="row">
          <Container flexDir="column">
            <TextP col="#fff" fontS="1.3rem" fontW="300" p=".5rem 0">
              Check In
            </TextP>
            <Input
              w="180px"
              h="50px"
              outL="none"
              borR="3px"
              bor="1px solid #fff"
              fontS="1.2rem"
              fontW="500"
              col="rgba(0,0,0,0.8)"
              p="0 0 0 10px"
              type="date"
            ></Input>
          </Container>
          <Container flexDir="column" p="0 0 0 30px">
            <TextP col="#fff" fontS="1.3rem" fontW="300" p=".5rem 0">
              Nights
            </TextP>
            <Selection defaultValue={2}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Selection>
          </Container>
        </Container>
        <Container flexDir="column" p="5% 0 0 0">
          <TextP col="#fff" fontS="1.3rem" fontW="300" p=".5rem 0">
            Check Out
          </TextP>
          <Input
            w="180px"
            h="50px"
            outL="none"
            borR="3px"
            bor="1px solid #fff"
            fontS="1.2rem"
            fontW="500"
            col="rgba(0,0,0,0.8)"
            p="0 0 0 10px"
            type="date"
          ></Input>
        </Container>
        <Container flexDir="column" p="5% 0 0 0">
          <TextP col="#fff" fontS="1.3rem" fontW="300" p=".5rem 0">
            Rooms
          </TextP>
          <Selection>
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </Selection>
        </Container>
        <Container selfJustify="flex-end" p="10% 0 0 0">
          <Button
            p=".8rem 2rem"
            borR="3px"
            bor="1px solid var(--aeganBlue)"
            fontS="1.2rem"
            fontW="500"
            col="var(--aeganBlue)"
            bg="#fff"
            bgH="var(--denimBlue)"
            colH="var(--white)"
          >
            Check Availability
          </Button>
        </Container>
      </Container>
    </Container>
  );
};

export default HotelReservation;
