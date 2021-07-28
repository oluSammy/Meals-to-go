import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { StyledSafeArea } from "../../components/Safe-Area/SafeArea";
import { Ionicons } from "@expo/vector-icons";
import RestaurantNavigator from "./restaurant.navigator";
import MapScreen from "../../features/map/screens/map.screen";
import { Button } from "react-native";
import { AuthContext } from "../../services/authentication/authentication.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { FavoritesContextProvider } from "../../services/favourites/favourites.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};
const Settings = () => {
  const { onLogout } = useContext(AuthContext);
  return (
    <StyledSafeArea>
      <Text>Settingss</Text>
      <Button title="Log Out" onPress={onLogout} />
    </StyledSafeArea>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Tab.Navigator
              screenOptions={createScreenOptions}
              tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "grey",
              }}
            >
              <Tab.Screen name="Restaurants" component={RestaurantNavigator} />
              <Tab.Screen name="Map" component={MapScreen} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
};

export default AppNavigator;
