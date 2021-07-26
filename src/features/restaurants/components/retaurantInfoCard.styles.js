import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const IconBox = styled.View`
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
`;

export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.sizes[2]};
  position: relative;
`;

export const CardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.sizes[1]};
  background-color: ${(props) => props.theme.colors.ui.quaternary};
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;

export const TextAndIcon = styled.View`
  margin-left: auto;
  flex-direction: row;
`;

export const StyledClosedText = styled.Text`
  margin-right: 10px;
`;
