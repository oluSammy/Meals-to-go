import React, { useContext, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import RestaurantInfoCard from "../components/retaurantInfoCard.component";
import styled from "styled-components/native";
import { StyledSafeArea } from "../../../components/Safe-Area/SafeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favourites/favourites.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import Search from "../components/search.component";
import FavouritesBar from "../../../components/FavouritesBar/FavouritesBar.component";

const StyledLoader = styled(View)`
  margin-top: 50%;
`;

const RestaurantScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  const { favorites, addFavorites, removeFavorites } =
    useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <StyledSafeArea>
      <Search
        isFavoriteToggled={isToggled}
        onFavouritesToggle={() => setIsToggled(!isToggled)}
      />
      {isToggled && (
        <FavouritesBar
          favourites={favorites}
          navigation={navigation}
          onNavigate={navigation.navigate}
        />
      )}
      {isLoading ? (
        <StyledLoader>
          <ActivityIndicator animating={true} color={Colors.blue800} />
        </StyledLoader>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantsDetail", { restaurant: item })
              }
            >
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </StyledSafeArea>
  );
};

export default RestaurantScreen;
