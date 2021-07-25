import React, { useContext, useEffect, useState } from "react";
// import SearchBar from "../../../components/SearchBar/SearchBar";
import { View } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const StyledSearchContainer = styled(View)`
  padding: ${(props) => props.theme.sizes[1]};
  position: absolute;
  z-index: 999;
  top: 40px;
  width: 100%;
`;

const Search = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <StyledSearchContainer>
      <Searchbar
        placeholder="search for a location"
        icon="map"
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
