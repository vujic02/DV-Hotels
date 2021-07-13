import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Img, TextH1 } from "../../styles/global-styles";
import { VscSignIn, VscSignOut } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import { userContext } from "../../context/userContext";

import { Link } from "react-router-dom";

const AuthModal = ({ modalState, toggleModal }) => {
  const { userStuff } = useContext(userContext);
  const [user, setUser] = userStuff;

  const logOut = () => {
    setUser({});
    localStorage.removeItem("userEmail");
  };

  return (
    <Modal modalState={modalState}>
      <ModalContainer
        flex={modalState}
        pos="fixed"
        modalState={modalState}
        flexDir="column"
        w="320px"
        p="2rem 0 1rem 0"
        bg="var(--white)"
        shadow="3px 3px 30px 3px rgba(0,0,0,0.8)"
        borR=".5rem"
      >
        <Container w="100%" flexDir="column" align="center">
          <Img
            src="./images/user.jpg"
            w="80px"
            h="80px"
            borR="50%"
            objFit="cover"
          />
          <TextH1 m="2% 0 0 0" fontS="1rem" fontW="500">
            {user?.name || "Username"}
          </TextH1>
          <TextH1
            m="1% 0 5% 0"
            fontS="0.75rem"
            fontW="700"
            col="rgba(0, 0, 0, 0.7)"
          >
            {user?.email || "user@email.com"}
          </TextH1>
          <Line />
        </Container>
        <Container
          p="5% 0 0 5%"
          flexDir="column"
          align="flex-start"
          justify="space-around"
        >
          <Container
            p="5% 0 0 0"
            align="center"
            onClick={() => {
              toggleModal();
              logOut();
            }}
          >
            <VscSignIn
              style={{
                width: "35px",
                height: "35px",
                color: "rgba(0,0,0,0.85)",
              }}
            />
            <TextH1
              col="rgba(0,0,0,0.85)"
              m="0 0 0 .5rem"
              fontS="1rem"
              fontW="600"
            >
              <a style={{ cursor: "pointer" }}>Log out</a>
            </TextH1>
          </Container>
          <Container p="5% 0 0 0" align="center" onClick={() => toggleModal()}>
            <VscSignOut
              style={{
                width: "35px",
                height: "35px",
                color: "rgba(0,0,0,0.85)",
              }}
            />
            <TextH1
              col="rgba(0,0,0,0.85)"
              m="0 0 0 .5rem"
              fontS="1rem"
              fontW="600"
            >
              <Link to="/login">Log in with another account</Link>
            </TextH1>
          </Container>
          <Container
            p="5% 0 10% 0"
            align="center"
            onClick={() => toggleModal()}
          >
            <FiSettings
              style={{
                width: "30px",
                height: "30px",
                color: "rgba(0,0,0,0.85)",
              }}
            />
            <TextH1
              col="rgba(0,0,0,0.85)"
              m="0 0 0 .6rem"
              fontS="1rem"
              fontW="600"
            >
              <Link to="/account-settings">Account Settings</Link>
            </TextH1>
          </Container>
        </Container>
        <Container flexDir="column" align="center">
          <Line />
          <TextH1
            p=".8rem 0 0 0"
            fontS="0.75rem"
            fontW="700"
            col="rgba(0, 0, 0, 0.7)"
          >
            Don't have an account?
          </TextH1>
          <TextH1
            fontS="0.9rem"
            fontW="800"
            col="rgba(0, 0, 0, 0.9)"
            onClick={() => toggleModal()}
          >
            <Link
              style={{ textDecoration: "none", color: "rgba(0,0,0,0.7)" }}
              to="/login"
            >
              Register
            </Link>
          </TextH1>
        </Container>
      </ModalContainer>
    </Modal>
  );
};

const Line = styled.hr`
  border-top: 1px solid #c2c2c2;
  width: 100%;
`;

const Modal = styled.div`
  z-index: 100;
  position: fixed;
  width: 100%;
  opacity: ${({ modalState }) => (modalState ? "1" : "0")};
  transition: ease-in-out all 0.5s;
`;

const ModalContainer = styled.div`
  display: ${({ flex }) => (flex === true ? "flex" : "none")};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  position: ${({ pos }) => pos};
  top: 90px;
  right: 0.5rem;
  background: ${({ bg }) => bg};
  border-radius: ${({ borR }) => borR};
  box-shadow: ${({ shadow }) => shadow};

  @media screen and (max-width: 1366px) {
    width: ${({ wM1 }) => wM1};
  }

  @media screen and (max-width: 768px) {
    top: 90px;
    left: 20px;
  }
`;

export default AuthModal;
