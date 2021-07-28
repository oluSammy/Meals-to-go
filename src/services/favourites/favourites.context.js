import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../authentication/authentication.context";

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(AuthContext);

  const saveFaves = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@faves-${uid}`, jsonValue);
    } catch (e) {
      // saving error
      console.log(e, "error storing");
    }
  };

  const loadFaves = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@faves-${uid}`);
      if (jsonValue !== null) {
        setFavorites(JSON.parse(jsonValue));
      }
    } catch (e) {
      // error reading value
      console.log(e, "error loading");
    }
  };

  useEffect(() => {
    if (user) {
      loadFaves(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      saveFaves(favorites, user.uid);
    }
  }, [favorites, user]);

  const add = (restaurant) => {
    console.log("I REACHED HERE");
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (fave) => fave.placeId !== restaurant.placeId
    );

    setFavorites(newFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorites: add, removeFavorites: remove }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
