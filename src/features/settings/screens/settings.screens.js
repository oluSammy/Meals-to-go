import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { StyledSafeArea } from "../../../components/Safe-Area/SafeArea";
import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (usr) => {
    const photoUri = await AsyncStorage.getItem(`${usr.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(() => {
    getProfilePicture(user);
  }, [user]);

  return (
    <StyledSafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("camera")}>
        <AvatarContainer>
          {!photo ? (
            <Avatar.Icon size={50} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image
              size={50}
              source={{ uri: photo }}
              backgroundColor="#2182BD"
            />
          )}
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
      </TouchableOpacity>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </StyledSafeArea>
  );
};

export default SettingsScreen;
