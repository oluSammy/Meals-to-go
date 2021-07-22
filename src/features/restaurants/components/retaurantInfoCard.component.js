import React from "react";
// import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { View, Image } from "react-native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

import { Text } from "../../../components/Typography/Text.component";
import {
  IconBox,
  Info,
  Address,
  CardCover,
  Rating,
  TextAndIcon,
  StyledClosedText,
  RestaurantCard,
} from "./retaurantInfoCard.styles";

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "sammy restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ],
    address = "1 some random street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  // console.log(photos, "---")

  return (
    <>
      <RestaurantCard>
        <CardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <IconBox>
            <Rating>
              {ratingArray.map((_, idx) => (
                <View key={idx}>
                  <SvgXml xml={star} width={20} height={20} />
                </View>
              ))}
            </Rating>
            <TextAndIcon>
              {isClosedTemporarily && (
                <StyledClosedText>Closed Temporarily</StyledClosedText>
              )}
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
              <Image
                style={{ marginLeft: 10, width: 15, height: 15 }}
                source={{ uri: icon }}
              />
            </TextAndIcon>
          </IconBox>
          <Address>{address}</Address>
        </Info>
      </RestaurantCard>
    </>
  );
};

export default RestaurantInfoCard;
