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

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { isLoading, error, onRegister } = useContext(AuthContext);

  const handleLogin = () => {
    if (!email || !password || !confirmPassword) {
      return;
    }

    onRegister(email, password, confirmPassword);
  };

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Register</Title>
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
          secure
          secureTextEntry
          onChangeText={(pass) => setPassword(pass)}
        />

        <StyledTextInput
          label="confirm password"
          value={confirmPassword}
          textContentType="password"
          autoCapitalize="none"
          secure
          secureTextEntry
          onChangeText={(pass) => setConfirmPassword(pass)}
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
            Register
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

export default RegisterScreen;
