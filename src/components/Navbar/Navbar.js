import React from "react";
import {
  Nav,
  Logo,
  LinkDiv,
  Navlink,
  ButtonHolder,
  Avatar,
  MobileIcon,
} from "../../styles/navbar-styles";
import AuthModal from "../Main/AuthModal";
import { Link } from "react-router-dom";
import { Links } from "../../utils/Links";

const Navbar = ({ toggleMobile, isOpen, toggleModal, modalState }) => {
  return (
    <Nav isOpen={isOpen}>
      <Logo src="./images/logo.png" />
      <LinkDiv>
        {Links.map((link, i) => (
          <Navlink key={i}>
            <Link className="navLink" to={link.path}>
              {link.name}
            </Link>
            <div className="underline"></div>
          </Navlink>
        ))}
      </LinkDiv>
      <ButtonHolder onClick={toggleModal} openModal={modalState}>
        <Avatar src="./images/user.jpg" />
      </ButtonHolder>
      <AuthModal modalState={modalState} toggleModal={toggleModal} />
      <MobileIcon isOpen={isOpen} onClick={toggleMobile}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </MobileIcon>
    </Nav>
  );
};

export default Navbar;
