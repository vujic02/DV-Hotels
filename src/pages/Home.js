import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Home = ({ toggle, isOpen }) => {
  return (
    <div>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
