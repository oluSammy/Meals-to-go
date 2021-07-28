import React, { useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  StyledTextInput,
  AuthButton,
  Title,
} from "../components/account.styles";
import { AuthContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/Spacer/Spacer.component";
import { Text } from "../../../components/Typography/Text.component.js";
import { ActivityIndicator, Colors } from "react-native-paper";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { isLoading, error, onLogin } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email || !password) {
      return;
    }

    onLogin(email, password);
    // console.log(email, password);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Log In</Title>
      <AccountContainer>
        <StyledTextInput
          label="Email"
          value={email}
          textContentType="emailAddress"
          autoCapitalize="none"
          keyboardType="email-address"
          onChangeText={(newTxt) => setEmail(newTxt)}
        />

        <StyledTextInput
          label="password"
          value={password}
          textContentType="password"
          autoCapitalize="none"
          secureTextEntry
          onChangeText={(pass) => setPassword(pass)}
        />
        <Spacer size="large">
          <Text variant="error">{error && error}</Text>
        </Spacer>

        {isLoading ? (
          <ActivityIndicator animating={true} color={Colors.blue300} />
        ) : (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={handleLogin}
          >
            Login
          </AuthButton>
        )}
      </AccountContainer>

      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};

export default LoginScreen;
