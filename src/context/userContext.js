import React, { useState, createContext } from "react";
import axios from "axios";
import { SignUpUrl, LoginUrl } from "../utils/backendUrls";

export const userContext = createContext();
export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const registerUser = (e, name, email, password) => {
    e.preventDefault();

    axios
      .post(SignUpUrl, { name, email, password })
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        if (err.response?.data) {
          setError(err.response.data);
          setTimeout(() => {
            setError("");
          }, 2000);
        }
      });
  };

  const loginUser = (e, email, password) => {
    e.preventDefault();

    axios
      .post(LoginUrl, { email, password })
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => {
        if (err.response?.data) {
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
        userFuncs: [registerUser, loginUser],
        login: [loginUser],
        err: [error, setError],
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};
