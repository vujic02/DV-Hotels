import "./css/App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { LinkDiv } from "./components/Navbar/LinkHolder";
import { Navlink } from "./components/Navbar/Navlink";
import { Logo } from "./components/Navbar/Logo";
import { Button } from "./components/Navbar/Button";
import { Avatar } from "./components/Navbar/Avatar";

import MainLogo from "./images/logo.png";
import { ButtonHolder } from "./components/Navbar/ButtonHolder";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Logo src={MainLogo} />
        <LinkDiv>
          <Navlink>Home</Navlink>
          <Navlink>About</Navlink>
          <Navlink>Hotels</Navlink>
          <Navlink>Contact</Navlink>
        </LinkDiv>
        <ButtonHolder>
          <Button>Sign out</Button>
          <Avatar src={MainLogo} />
        </ButtonHolder>
      </Navbar>
    </div>
  );
}

export default App;
