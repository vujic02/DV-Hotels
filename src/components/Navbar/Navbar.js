import React from 'react'
import {
    Nav, Logo, LinkDiv, Navlink, Button, ButtonHolder, Avatar, MobileIcon
}  from "../../styles/navbar-styles"

const Navbar = () => {

    let MainLogo = "./images/logo.png"

    // Make a useState hook for isOpen, when MobileIcon is clicked, toggle it between true and false ( make it in App.js )
    
    return (
        <Nav>
            <Logo src={MainLogo} />
            <LinkDiv>
                <Navlink>Home<div className="underline"></div></Navlink>
                <Navlink>About<div className="underline"></div></Navlink>
                <Navlink>Hotels<div className="underline"></div></Navlink>
                <Navlink>Contact<div className="underline"></div></Navlink>
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
    )
}

export default Navbar
