import React, { useState, createContext } from "react";
import * as firebase from "firebase";
import { loginRequest } from "./authentication.service";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged((usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((newUser) => {
        setUser(newUser);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      setError("passwords do not match");
      return;
    }
    setIsLoading(true);
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((newUser) => {
        setUser(newUser);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    firebase.auth().signOut();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, error, onLogin, onRegister, onLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
