import React, { useContext } from "react";
import { FavoritesContext } from "../../services/favourites/favourites.context";
// import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
// import { View } from "react-native";

const Favourites = ({ restaurant }) => {
  const { favorites, addFavorites, removeFavorites } =
    useContext(FavoritesContext);

  const isFaved = favorites.find(
    (btn) => btn.restaurant.placeId === restaurant.restaurant.placeId
  );

  const handleLike = () => {
    isFaved ? removeFavorites(restaurant) : addFavorites(restaurant);
  };

  return (
    <TouchableOpacity onPress={handleLike} style={{ marginLeft: 20 }}>
      <AntDesign
        name={isFaved ? "heart" : "hearto"}
        size={24}
        color={isFaved ? "red" : "black"}
      />
    </TouchableOpacity>
  );
};

export default Favourites;
