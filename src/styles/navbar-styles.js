import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  height: 90px;
  background-color: var(--fadedWhite);
  z-index: 1000;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Navlink = styled.a`
  font-size: 1.5rem;
  font-weight: 500;
  font-family: Montserrat, sans-serif;
  color: var(--black);
  position: relative;
  overflow: hidden;

  .underline {
    position: absolute;
    left: -100%;
    bottom: 0;
    background: var(--denimBlue);
    width: 100%;
    height: 2px;
    transition: all ease 0.3s;
  }

  &:hover {
    .underline {
      left: 0;
    }
  }

`;

export const Button = styled.button`
  background-color: var(--denimBlue);
  display: inline-block;
  padding: .6rem;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  outline: none;
  border: 1px solid transparent;
  border-radius: 5px;


  &:active{
    transition: 0.2s all ease-in-out;
    background-color: var(--white);
    color: var(--denimBlue);
    border: 1px solid var(--denimBlue);
  }

`;

export const ButtonHolder = styled.div`
  width: 200px;
  height: 90px;
  align-items: center;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LinkDiv = styled.div`
  height: 90px;
  width: 500px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Avatar = styled.img`
  border-radius: 30px;
  width: 50px;
  height: 50px;
  background-color: white;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

export const MobileIcon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  width: 3rem;
  height: 3rem;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  
  .line {
    width: 100%;
    height: .4rem;
    background: var(--black);
    transition: 0.3s ease-in-out all;
  }

  .line1 {
    transform: ${({isOpen}) => (isOpen ? "translateY(16px) rotate(45deg)" : "" )};
  }

  .line2 {
    opacity: ${({isOpen}) => (isOpen ? "0" : "1")};
  }

  .line3 {
    transform: ${({isOpen}) => (isOpen ?  "translateY(-16px) rotate(-45deg)" : "" )};
  }

`;