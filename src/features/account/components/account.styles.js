import styled from "styled-components/native";
import { colors } from "../../../infrastructure/theme/colors";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Text } from "react-native";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/imageBg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
  marginBottom: 10,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const StyledTextInput = styled(TextInput)`
  width: 250px;
  margin-bottom: 10px;
`;

export const Title = styled(Text)`
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 3px;
  padding: ${(props) => props.theme.space[2]};
`;
