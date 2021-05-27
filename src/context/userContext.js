import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { SignUpUrl } from "../utils/backendUrls";

export const userContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  const registerUser = (e, name, email, password) => {
    e.preventDefault();

    console.log(name, email, password);
    axios
      .post(SignUpUrl, { name, email, password })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <userContext.Provider
      value={{ userStuff: [user, setUser], userFuncs: [registerUser] }}
    >
      {props.children}
    </userContext.Provider>
  );
};
