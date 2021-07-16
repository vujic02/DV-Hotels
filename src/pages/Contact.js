import React from "react";
import {
  Container,
  Grid,
  Img,
  TextH1,
  Overlay,
  DivImg,
  Button,
} from "../styles/global-styles";
import {
  Input,
  TextArea,
  Selection,
  Label,
} from "../styles/contactpage-styles";

const Contact = () => {
  return (
    <div>
      <DivImg
        bgImage="./images/contactbg.jpg"
        bgPos="center"
        bgSize="cover"
        w="100%"
        h="500px"
      >
        <Overlay
          bg="linear-gradient(0deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.35) 90%)"
          flexDir="column"
          justify="center"
          align="center"
          w="100%"
          h="100%"
          p="0 15%"
          pM="0 10%"
        >
          <TextH1 fontS="2.5rem" fontW="700" col="var(--white)">
            LET'S WORK TOGETHER
          </TextH1>
          <TextH1 fontS="1.5rem" fontW="200" col="var(--white)">
            WE'RE EVEN COOLER IN REAL LIFE
          </TextH1>
        </Overlay>
      </DivImg>
      <Grid
        p="50px 200px 50px 200px"
        cols="2fr 1fr"
        colsM1="1fr"
        pM1="50px 25px 50px 25px"
      >
        <Container p="0 50px 0 0" flexDir="column" pM="0">
          <Img src="./images/contact.jpg" w="100%" h="70%" objFit="cover" />
          <Container flexDir="column" align="flex-start" p="2rem 0 0 0">
            <TextH1 fontS="2rem" fontW="700" col="var(--aeganBlue)">
              OUR CREATIVE SPACE
            </TextH1>
            <TextH1 fontS="1rem" fontW="400" opac="0.8" p=".5rem 0 0 0">
              We are conveniently located in beautiful downtown San Antonio,
              Texas off of Broadway and 6th Street. Schedule an appointment to
              come visit our creative space.
            </TextH1>
            <Container w="100%" p="2rem 0 0 0" flexDirM2="column">
              <Container flexDir="column">
                <TextH1 fontS="2rem" fontW="700" col="var(--aeganBlue)">
                  CONNECT
                </TextH1>
                <TextH1 fontS="1.5rem" fontW="400" opac="0.8" p=".5rem 0 0 0">
                  (555) 333-8888
                </TextH1>
                <TextH1 fontS="1rem" fontW="700" opac="0.9" p="1rem 0 0 0">
                  Adress:
                </TextH1>
                <TextH1 fontS="1rem" fontW="400" opac="0.8" p=".5rem 0 0 0">
                  980 Southern Avenue
                </TextH1>
                <TextH1 fontS="1rem" fontW="400" opac="0.8" p="0 0 0 0">
                  Northwood, IA
                </TextH1>
              </Container>
              <Container flexDir="column" p="0 0 0 25%" pM1="2rem 0 0 0">
                <TextH1 fontS="2rem" fontW="700" col="var(--aeganBlue)">
                  HOURS
                </TextH1>
                <TextH1 fontS="1rem" fontW="400" opac="0.8" p=".5rem 0 0 0">
                  Monday-Friday 8am-4pm
                </TextH1>
                <TextH1 fontS="1rem" fontW="400" opac="0.8">
                  Closed Saturdays & Sundays
                </TextH1>
              </Container>
            </Container>
          </Container>
        </Container>
        <Container
          flexDir="column"
          justify="flex-start"
          align="center"
          h="fit-content"
          w="100%"
          bg="#eee"
          bor="1px solid var(--aeganBlue)"
          mM1="2rem 0 0 0"
        >
          <Container w="100%" flexDir="column" align="center" p="2rem 0 0 0">
            <TextH1
              fontS="1.8rem"
              fontW="600"
              alignText="center"
              col="var(--aeganBlue)"
            >
              IT ALL STARTS HERE
            </TextH1>
            <TextH1
              fontS="1rem"
              fontW="300"
              alignText="center"
              opac="0.8"
              m="5px 0 0 0"
            >
              Contact us on github.
            </TextH1>
          </Container>
          <form>
            <Container flexDir="column" m="2rem 0 0 0" w="100%">
              <Label htmlFor="input1">Select Topic</Label>
              <Selection name="input1">
                <option>Job Offer</option>
                <option>Question about our project</option>
                <option>Other</option>
              </Selection>
              <Label htmlFor="input2">Name</Label>
              <Input name="input2" type="text"></Input>
              <Label htmlFor="input3">Email</Label>
              <Input name="input3" type="email"></Input>
              <Label htmlFor="input4">Your Message</Label>
              <TextArea name="input4"></TextArea>
              <Button
                m="1rem 0 3rem 0"
                p=".5rem 0"
                fontS="1.2rem"
                justify="center"
                align="center"
                fontW="500"
                bg="var(--aeganBlue)"
                bor="1px solid var(--aeganBlue)"
                borR="3px"
                col="#fff"
                bgH="var(--denimBlue)"
                type="submit"
              >
                Submit
              </Button>
            </Container>
          </form>
        </Container>
      </Grid>
    </div>
  );
};

export default Contact;
