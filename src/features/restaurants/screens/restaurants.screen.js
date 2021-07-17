import React from "react";
import { View, FlatList } from "react-native";
import SearchBar from "../../../components/SearchBar/SearchBar";
import RestaurantInfoCard from "../components/retaurantInfoCard.component";
import styled from "styled-components/native";
import { StyledSafeArea } from "../../../components/Safe-Area/SafeArea";

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;

const RestaurantScreen = () => {
  return (
    <StyledSafeArea>
      <StyledSearchContainer>
        <SearchBar />
      </StyledSearchContainer>
      <FlatList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        // eslint-disable-next-line react-native/no-inline-styles
        contentContainerStyle={{ padding: 16 }}
      />
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
