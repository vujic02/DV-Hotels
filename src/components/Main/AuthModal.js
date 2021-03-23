import React from 'react'
import styled from 'styled-components'
import { Container, Img, TextH1 } from '../../styles/global-styles'
import {VscSignIn, VscSignOut} from "react-icons/vsc"
import {FiSettings} from "react-icons/fi"

const AuthModal = ({modalState}) => {

    return (
        <Modal modalState={modalState}>
        <ModalContainer pos="absolute" modalState={modalState} flexDir="column" w="320px" p="2rem 0 1rem 0" bg="var(--white)" shadow="3px 3px 30px 3px rgba(0,0,0,0.8)" borR=".5rem">
            <Container w="100%" flexDir="column" align="center">
                <Img src="./images/user.jpg" w="80px" h="80px" borR="50%" objFit="cover" />
                <TextH1 m="2% 0 0 0" fontS="1rem" fontW="500">Username</TextH1>
                <TextH1 m="1% 0 5% 0"  fontS="0.75rem" fontW="700" col="rgba(0, 0, 0, 0.7)">user_email@gmail.com</TextH1>
                <Line />
            </Container>
            <Container p="5% 0 0 5%" flexDir="column" align="flex-start" justify="space-around">
                <Container p="5% 0 0 0" align="center">
                    <VscSignIn style={{width: "35px", height: "35px", color: "rgba(0,0,0,0.85)"}} />
                    <TextH1 m="0 0 0 .5rem" fontS="1rem" fontW="600">Log out</TextH1>
                </Container>
                <Container p="5% 0 0 0" align="center">
                    <VscSignOut style={{width: "35px", height: "35px", color: "rgba(0,0,0,0.85)"}} />
                    <TextH1 m="0 0 0 .5rem" fontS="1rem" fontW="600">Log in with another account</TextH1>
                </Container>
                <Container p="5% 0 10% 0" align="center">
                    <FiSettings style={{width: "30px", height: "30px", color: "rgba(0,0,0,0.85)"}} />
                    <TextH1 m="0 0 0 .5rem" fontS="1rem" fontW="600">Account Settings</TextH1>
                </Container>
            </Container>
            <Container flexDir="column" align="center">
                <Line />
                <TextH1 p=".8rem 0 0 0" fontS="0.75rem" fontW="700" col="rgba(0, 0, 0, 0.7)">Don't have an account?</TextH1>
                <TextH1  fontS="0.9rem" fontW="800" col="rgba(0, 0, 0, 0.9)">Register</TextH1>
            </Container>
        </ModalContainer>
        </Modal>
    )
}

const Line = styled.hr`
    border-top: 1px solid #C2C2C2;
    width: 100%;
`

const Modal = styled.div`
    z-index: 100;
    position: fixed;
    width: 100%;
    opacity: ${({modalState}) => (modalState ? "1" : "0")};
    transition: ease-in-out all 0.5s;
`

const ModalContainer = styled.div`
    display: flex;
    justify-content: ${({justify}) => justify};
    align-items: ${({align}) => align};
    flex-direction: ${({flexDir}) => flexDir};
    width: ${({w}) => w};
    height: ${({h}) => h};
    margin: ${({m}) => m};
    padding: ${({p}) => p};
    position: ${({pos}) => pos};
    top: 8.4rem;
    right: .5rem;
    background: ${({bg}) => bg};
    border-radius: ${({borR}) => borR};
    box-shadow: ${({shadow}) => shadow};

    @media screen and (max-width: 1366px) {
        width: ${({wM1}) => wM1};
    }
`

export default AuthModal
