import React, { useContext } from "react";
import { FavoritesContext } from "../../../services/favourites/favourites.context";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import RestaurantInfoCard from "../../restaurants/components/retaurantInfoCard.component";

const Faves = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites, "***FAVES");
  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantsDetail", {
                restaurant: item.restaurant,
              })
            }
          >
            <RestaurantInfoCard restaurant={item.restaurant} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.restaurant.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default Faves;
