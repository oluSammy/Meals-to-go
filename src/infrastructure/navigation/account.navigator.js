import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AccountScreen from "../../features/account/Screens/account.screen";
import LoginScreen from "../../features/account/Screens/login.screen";
import RegisterScreen from "../../features/account/Screens/register.screen";

const Stack = createStackNavigator();

const AccountNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={AccountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AccountNavigator;
