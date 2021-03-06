import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

export const StyledSafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;
