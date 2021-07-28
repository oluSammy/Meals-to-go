import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { ScrollView } from "react-native-gesture-handler";
import Spacer from "../../components/Spacer/Spacer.component";
import CompactRestaurantInfo from "../../features/restaurants/CompactRestaurantInfo/CompactRestaurantImage";

const FavouritesWrapper = styled.View`
  padding: 10px 20px;
`;

const FaveWrapper = styled.View`
  margin-left: 10px;
`;

const FavouritesBar = ({ favourites, onNavigate, navigation }) => {
  if (!favourites.length) return null;
  return (
    <FavouritesWrapper>
      <Text variant="caption">Favourites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.restaurant.name;
          const res = restaurant.restaurant;
          return (
            <FaveWrapper key={key}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", {
                    restaurant: restaurant.restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant.restaurant} />
              </TouchableOpacity>
            </FaveWrapper>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};

export default FavouritesBar;
