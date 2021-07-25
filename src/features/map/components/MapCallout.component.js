import React from "react";
import styled from "styled-components/native";
import CompactRestaurantInfo from "../../restaurants/CompactRestaurantInfo/CompactRestaurantImage";

const MyText = styled.Text``;

const MapCallout = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} />;
};

// <CompactRestaurantInfo restaurant={restaurant} />
export default MapCallout;
