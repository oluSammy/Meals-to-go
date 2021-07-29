import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
// import { Settings } from "react-native";
import SettingsScreen from "../../features/settings/screens/settings.screens";
import Faves from "../../features/settings/screens/Faves.screen";
import Camera from "../../features/settings/screens/camera.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={Faves} />
      <SettingsStack.Screen name="camera" component={Camera} />
    </SettingsStack.Navigator>
  );
};
