import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home, Register, Login, Contact, Hotels, About, Hotel } from "./pages";
import { UserProvider } from "./context/userContext";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState((prev) => !prev);
  };

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  let hotel = {
    name: "Luxury apartment in London",
    price: "30$",
    imgSrc: "./images/deals1.jpg",
    description: {
      view: "city",
      wifi: "free",
      bedroom: "1",
      size: "200 sqft",
      breakfest: "free",
    },
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
            <About
              isOpen={isOpen}
              toggle={toggle}
              toggleModal={toggleModal}
              modalState={modalState}
            />
          </Route>
          <Route path="/hotels">
            <Hotels
              isOpen={isOpen}
              toggle={toggle}
              toggleModal={toggleModal}
              modalState={modalState}
            />
          </Route>
          <Route path="/contact">
            <Contact
              isOpen={isOpen}
              toggle={toggle}
              toggleModal={toggleModal}
              modalState={modalState}
            />
          </Route>
          <Route path="/login">
            <Login
              isOpen={isOpen}
              toggle={toggle}
              toggleModal={toggleModal}
              modalState={modalState}
            />
          </Route>
          <Route path="/register">
            <Register
              isOpen={isOpen}
              toggle={toggle}
              toggleModal={toggleModal}
              modalState={modalState}
            />
          </Route>
          <Route path="/hoteldev">
            <Hotel hotel={hotel} />
          </Route>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
