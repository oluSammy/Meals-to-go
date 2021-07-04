import React from "react";
// import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

import styled from "styled-components/native";

const Title1 = styled.Text`
  padding: 8px 20px;
  color: ${(props) => props.theme.colors.ui.primary};
`;

const CardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: #ffffff;
`;

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "sammy restaurant",
    icon = "my Icon",
    photos = [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    address = "1 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <>
      <Card>
        <CardCover source={{ uri: photos[0] }} />
        <Title1>{name}</Title1>
      </Card>
    </>
  );
};

export default RestaurantInfoCard;
