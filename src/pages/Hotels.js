import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const Hotels = ({isOpen, toggle}) => {
  return (
    <div>
      <Navbar isOpen={isOpen} toggle={toggle}  />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <h1>Hotels Page</h1>
    </div>
  );
};

export default Hotels;
