import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar/Navbar"
import Sidebar from "../components/Sidebar/Sidebar"
import { AuthContainer, BgContainer, Input }  from "../styles/authpage-styles"
import { 
    Container,
    DivImg,
    Img,
    TextP,
    Button
} from '../styles/global-styles';




const Login = ({isOpen, toggle, toggleModal, modalState}) => {

    useEffect(() => {
        document.body.style.background = "#E4E4E4"
    }, [])

    return (
        <>
        <Navbar isOpen={isOpen} toggle={toggle} toggleModal={toggleModal} modalState={modalState} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Container flexDir="row" justify="center" align="center" w="100%" h="100vh"> 
            <Container w="80%" h="620px">
                <AuthContainer>
                    <Container m="3rem 0" flexDir="column" align="center">
                        <Img src="./images/logo.png" w="150px" h="80px" objFit="cover" m="0 0 0 -1rem" />
                    </Container>
                    <Container flexDir="column" justify="center">
                        <TextP fontS=".8rem" fontW="600" col="#7d7d7d">Experience the world with ease.</TextP>
                        <TextP fontS="2rem" fontW="700" col="rgba(0,0,0,0.85)">Log in your account.</TextP>
                    </Container>
                    <Container w="100%" p="1rem 0 0 0" flexDir="column">
                        <TextP fontS="1rem" fontW="500" m="0 0 .8rem 0" col="#7d7d7d">Email</TextP>
                        <Input/>
                    </Container>
                    <Container w="100%" p="1rem 0 0 0" flexDir="column">
                        <TextP fontS="1rem" fontW="500" m="0 0 .8rem 0" col="#7d7d7d">Password</TextP>
                        <Input/>
                    </Container>
                    <Container flexDir="column" justify="center" p="1.5rem 0 0 0">
                        <Button p=".7rem 0" fontS="1.5rem" fontW="600" col="var(--white)" bg="var(--aeganBlue)" bor="1px solid transparent" justify="center" align="center" borR=".4rem" colH="var(--aeganBlue)" borH="1px solid var(--aeganBlue)" bgH="transparent">Log In</Button>
                    </Container>
                    <Container justify="center">
                        <Container pos="absolute" b=".5rem">
                            <TextP fontS="1rem" fontW="500" col="#7d7d7d">Don't own an account?</TextP>
                            <TextP fontS="1rem" fontW="700" m="0 0 0 .2rem" col="var(--aeganBlue)">Register.</TextP>
                        </Container>
                    </Container>
                </AuthContainer>
                <BgContainer>
                    <DivImg w="100%" h="100%" flexDir="column" justify="center" align="center">
                        <TextP fontS="2rem" fontW="700" col="var(--white)">Don’t own an account?</TextP>
                        <Container w="70%">
                            <TextP alignText="center" fontS="1.2rem" fontW="300" col="var(--white)">Register an account so you have access for quick & easy way to find a place to stay anywhere in the world!</TextP>
                        </Container>
                        <Button m=".6rem 0 0 0" p=".5rem 1.5rem" fontS="1.4rem" fontW="500" col="var(--white)" bg="transparent" bor="1px solid var(--white)" justify="center" align="center" borR=".4rem" colH="var(--black)" borH="1px solid var(--white)" bgH="var(--white)"><Link to="/register">Register</Link></Button>
                    </DivImg>
                </BgContainer>
            </Container>
        </Container>
        </>
    )
}

export default Login
