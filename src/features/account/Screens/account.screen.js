import React from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthButton,
  Title,
} from "../components/account.styles";

const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To GO</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </AuthButton>
        <AuthButton
          icon="email"
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

export default AccountScreen;
