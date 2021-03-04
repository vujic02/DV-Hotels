import React from "react";
import {
  Nav,
  Logo,
  LinkDiv,
  Navlink,
  Button,
  ButtonHolder,
  Avatar,
  MobileIcon,
} from "../../styles/navbar-styles";

import { Link } from "react-router-dom";
import { Links } from "../../utils/Links";

const Navbar = () => {
  let MainLogo = "./images/logo.png";

  // Make a useState hook for isOpen, when MobileIcon is clicked, toggle it between true and false ( make it in App.js )

  return (
    <Nav>
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
        <Button>Sign out</Button>
        <Avatar src={MainLogo} />
      </ButtonHolder>
      <MobileIcon isOpen={true}>
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
      </MobileIcon>
    </Nav>
  );
};

export default Navbar;
