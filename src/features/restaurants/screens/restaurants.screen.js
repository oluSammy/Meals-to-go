import React, { useContext } from "react";
import { View, FlatList } from "react-native";
import RestaurantInfoCard from "../components/retaurantInfoCard.component";
import styled from "styled-components/native";
import { StyledSafeArea } from "../../../components/Safe-Area/SafeArea";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, Colors } from "react-native-paper";
import Search from "../components/search.component";

const StyledLoader = styled(View)`
  margin-top: 50%;
`;

const RestaurantScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantContext);

  // console.log(restaurants, "RESSS");
  return (
    <StyledSafeArea>
      <Search />
      {isLoading ? (
        <StyledLoader>
          <ActivityIndicator animating={true} color={Colors.blue800} />
        </StyledLoader>
      ) : (
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.name}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16 }}
        />
      )}
    </StyledSafeArea>
  );
};

// const styles = StyleSheet.create({
//   search: {
//     padding: 16,
//   },
//   list: {},
// });

export default RestaurantScreen;
