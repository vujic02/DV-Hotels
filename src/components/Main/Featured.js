import React from 'react';
import { Container, Img, TextH1, Overlay, DivImg, TextP, FilledStar, StarContainer } from '../../styles/global-styles';


const Featured = () => {
    return (
        <Container h="526px" w="100%" p="0 5%" pos="relative" m="0 0 8% 0">
            <DivImg bgPos="center" bgSize="cover" borR=".5rem"  bgImage="./images/homepage/featured.jpg" w="100%" h="100%">
                <Overlay borR=".5rem" w="100%" h="100%" bg="linear-gradient(270deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.92) 80%)">
                <Container w="100%" h="100%" flexDir="column" justify="center" align="flex-start" p="0 0 0 5%">
                    <Container flexDir="row" w="100%">
                        <Container flexDir="column" h="100%" justify="center" m=".2rem 0 0 0">
                            <Img h="45px" w="52px" src="https://www.countryflags.io/it/flat/64.png"></Img>
                        </Container>
                        <TextH1 p="0 0 0 1%" fontS="3rem" fontW="400" col="var(--white)">Hotel Plaza</TextH1>
                    </Container>
                    <StarContainer m=".5% 0 0 0">
                        <FilledStar col="var(--white)" fontS="2rem" />
                        <FilledStar col="var(--white)" fontS="2rem" />
                        <FilledStar col="var(--white)" fontS="2rem" />
                        <FilledStar col="var(--white)" fontS="2rem"/>
                        <FilledStar col="var(--white)" fontS="2rem" />
                    </StarContainer>
                    <TextH1 m="1% 0 0 0" fontS="2rem" fontW="500" col="var(--aeganBlue)">200$/night</TextH1>
                    <TextP m="1% 0 0 0" fontS="1.5rem" fontW="500" col="var(--white)">Hotel playa is a luxurious hotel on the beaches of italy.</TextP>
                    <TextP m=".2% 0 0 0" fontS="1.5rem" fontW="500" col="var(--white)">Available 6 rooms, 1 penthouse.</TextP>
                </Container>
                </Overlay>
            </DivImg>
        </Container>
    )
}

export default Featured
