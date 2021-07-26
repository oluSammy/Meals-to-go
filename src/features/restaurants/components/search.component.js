import React, { useContext, useState, useEffect } from "react";
// import SearchBar from "../../../components/SearchBar/SearchBar";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
`;

const Search = ({ isFavoriteToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <StyledSearchContainer>
      <Searchbar
        icon={isFavoriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="search for a location"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </StyledSearchContainer>
  );
};

export default Search;
