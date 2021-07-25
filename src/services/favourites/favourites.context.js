import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const add = (restaurant) => {
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
