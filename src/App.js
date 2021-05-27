import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Register, Login, Contact, Hotels, About } from "./pages";
import { UserProvider } from "./context/userContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState((prev) => !prev);
  };

  console.log(modalState);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Route exact path="/">
            <Home
              toggleModal={toggleModal}
              modalState={modalState}
              isOpen={isOpen}
              toggle={toggle}
            />
          </Route>
          <Route path="/about">
            <About isOpen={isOpen} toggle={toggle} />
          </Route>
          <Route path="/hotels">
            <Hotels isOpen={isOpen} toggle={toggle} />
          </Route>
          <Route path="/contact">
            <Contact isOpen={isOpen} toggle={toggle} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
