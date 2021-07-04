import React from "react";
import { StyleSheet, View, SafeAreaView, StatusBar } from "react-native";
import SearchBar from "../../../components/SearchBar/SearchBar";
import RestaurantInfoCard from "../components/retaurantInfoCard.component";
import styled from "styled-components/native";

const StyledSafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  /* margin-top: ${StatusBar.currentHeight}px; */
`;

const StyledList = styled(View)`
  padding: 16px;
  flex: 1;
`;

// const StyledList = styled(View)`
//   padding: ${(props) => props.theme.space[3]};
//   background-color: blue;
//   flex: 1;
// `;

const StyledSearchContainer = styled(View)`
  padding: 16px;
`;

// const StyledSearchContainer = styled(View)`
//   padding: ${(props) => props.theme.space[3]}
// `;

const RestaurantScreen = () => {
  return (
    <StyledSafeArea>
      <StyledSearchContainer>
        <SearchBar />
      </StyledSearchContainer>
      <StyledList style={styles.list}>
        <RestaurantInfoCard />
      </StyledList>
    </StyledSafeArea>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: 16,
  },
  list: {},
});

export default RestaurantScreen;
