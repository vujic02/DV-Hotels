import React from 'react'
import { Container, TextP, TextH1, Button } from '../../styles/global-styles'

const Text = ({containerMargin}) => {
    return (
        <Container>
        <Container m={containerMargin} w="50%" wM1="100%" flexDir="column" justify="space-around" align="flex-start">
            <TextH1 m="1% 0 .5% 0" fontS="2.5rem" fontW="500" col="var(--white)">Double points, double <br/> rewards</TextH1>
            <TextP m=".5% 0" fontS="1.2rem" fontW="200" col="var(--white)">Make your next trip twice as rewarding with 2X the points for stays at any of our 1,100+ hotels between February 1st and April 30. 2021.</TextP>
            <Button m="1% 0" fontS="1.8rem" fontW="400" bor="1px solid var(--white)" bg="transparent" col="var(--white)" p=".7rem 1rem" bgH="var(--white)" borH="1px solid var(--aeganBlue)" colH="var(--aeganBlue)">Register now</Button>
        </Container>
        </Container>
    )
}

export default Text
