import React from 'react'
import { Container, Grid, TextH1 } from '../../styles/global-styles'
import {AiFillGithub} from "react-icons/ai"


const Footer = () => {

    let currentDate = new Date()
    
    return (
        <Container flexDir="column" p="2% 0" bg="var(--denimBlue)">
            <Grid cols="repeat(4, 1fr)" colsM1="repeat(2, 1fr)" gridGap="2rem" m="1% 0 0 0" mM1="5% 0 0 0" align="center" justify="center">
                <Container flexDir="column">
                    <TextH1 fontS="1.2rem" fontW="700" col="var(--white)">About Us</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)" m="5% 0 0 0">DS360</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)">vujic02</TextH1>
                </Container>
                <Container flexDir="column">
                    <TextH1 fontS="1.2rem" fontW="700" col="var(--white)">About Us</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)" m="5% 0 0 0">DS360</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)">vujic02</TextH1>
                </Container>
                <Container flexDir="column">
                    <TextH1 fontS="1.2rem" fontW="700" col="var(--white)">About Us</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)" m="5% 0 0 0">DS360</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)">vujic02</TextH1>
                </Container>
                <Container flexDir="column">
                    <TextH1 fontS="1.2rem" fontW="700" col="var(--white)">About Us</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)" m="5% 0 0 0">DS360</TextH1>
                    <TextH1 fontS=".9rem" fontW="500" col="var(--white)">vujic02</TextH1>
                </Container>
            </Grid>
            <Grid cols="repeat(3, 1fr)" colsM1="repeat(1, 1fr)" gridGap="2rem" gridGapM="1rem" m="5% 0 0 0" align="center" justify="center">
                <TextH1 fontS="1.5rem" fontW="700" col="var(--white)">DV Hotels</TextH1>
                <TextH1 fontS=".9rem" fontW="600" col="var(--white)">© {currentDate.getFullYear()} DV Hotels</TextH1>
                <Container>
                    <AiFillGithub style={{width: "45px", height: "45px", color: "#fff"}} />
                </Container>
            </Grid>
        </Container>
    )
}

export default Footer
