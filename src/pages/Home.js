import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import SearchBar from "../components/Main/SearchBar";

const Home = ({ toggle, isOpen }) => {
  return (
    <div>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <h1>Home Page</h1>
      <SearchBar />
    </div>
  );
};

export default Home;
