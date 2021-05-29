import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const About = ({ isOpen, toggle, modalState, toggleModal }) => {
  return (
    <div>
      <Navbar
        isOpen={isOpen}
        toggle={toggle}
        modalState={modalState}
        toggleModal={toggleModal}
      />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <h1>About Page</h1>
    </div>
  );
};

export default About;
