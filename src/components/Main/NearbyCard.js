import React from 'react';
import {
    Container,
    Img,
    TextH1
} from "../../styles/global-styles"

const NearbyCard = ({imgSrc, imgName}) => {
    return (
        <Container w="100%" flexDir="row" align="center">
            <Img w="75px" h="75px" borR="5px" src={imgSrc} />
            <Container p="0 0 0 5%" flexDir="column">
                <TextH1 fontS="1rem" fontW="700">{imgName}</TextH1>
                <TextH1 fontS=".9rem" fontW="400">45 minutes drive</TextH1>
            </Container>
        </Container>
    )
}

export default NearbyCard
