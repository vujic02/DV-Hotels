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
            <TextH1 p="0 0 0 5%" fontS="1rem" fontW="700">{imgName}</TextH1>
        </Container>
    )
}

export default NearbyCard
