import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { HotelList } from "./utils/hotels";
import { Navbar, Sidebar, Footer } from "./components";
import { Home, Register, Login, Contact, Hotels, About, Hotel } from "./pages";
import { UserProvider } from "./context/userContext";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalState, setModalState] = useState(false);
  const [hotels] = useState([...HotelList]);
  const [selected, setSelected] = useState([]);

  const toggleModal = () => {
    setModalState((prev) => !prev);
  };

  const toggleMobile = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Navbar
            isOpen={isOpen}
            toggleMobile={toggleMobile}
            toggleModal={toggleModal}
            modalState={modalState}
          />
          <Sidebar isOpen={isOpen} toggleMobile={toggleMobile} />
          <Route exact path="/">
            <Home hotels={hotels} setSelected={setSelected} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/hotels">
            <Hotels hotels={hotels} setSelected={setSelected} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          {hotels.map((ht, index) => (
            <Route
              path={`/hotel/${ht.id}`}
              render={() => <Hotel hotel={ht} />}
            />
          ))}
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
