import React, { useEffect, useState, createContext } from "react";
import axios from "axios";
import { SignUpUrl } from "../utils/backendUrls";

export const userContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const registerUser = (e, name, email, password) => {
    e.preventDefault();

    console.log(name, email, password);
    axios
      .post(SignUpUrl, { name, email, password })
      .then((data) => {
        console.log(data);
        setUser(data.data);
      })
      .catch((err) => {
        console.dir(err);
        if (err.response?.data) {
          console.log(err.response.data);
          setError(err.response.data);
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      });
  };

  return (
    <userContext.Provider
      value={{
        userStuff: [user, setUser],
        userFuncs: [registerUser],
        err: [error, setError],
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};
