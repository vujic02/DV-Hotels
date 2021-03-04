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

import { Link } from "react-router-dom";
import { Links } from "../../utils/Links";

const Navbar = ({toggle, isOpen}) => {

  let MainLogo = "./images/logo.png";
  let UserLogo = "./images/user.jpg"

  return (
    <Nav isOpen={isOpen}>
      <Logo src={MainLogo} />
      <LinkDiv>
        {Links.map((link) => (
          <Navlink>
            <Link className="navLink" to={link.path}>
              {link.name}
            </Link>
            <div className="underline"></div>
          </Navlink>
        ))}
      </LinkDiv>
      <ButtonHolder>
        <Avatar src={UserLogo} />
      </ButtonHolder>
      <MobileIcon isOpen={isOpen} onClick={toggle}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </MobileIcon>
    </Nav>
  );
};

export default Navbar;
