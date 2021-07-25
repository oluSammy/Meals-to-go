import React, { useState } from "react";
import { StyledSafeArea } from "../../../components/Safe-Area/SafeArea";
import RestaurantInfoCard from "../components/retaurantInfoCard.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const restaurant = route.params;

  return (
    <StyledSafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Benedict" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>
        <List.Accordion
          title="lunch"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burgers with Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="dinner"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <List.Accordion
          title="drinks"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Hennessy" />
          <List.Item title="Shayo" />
          <List.Item title="Coffee" />
        </List.Accordion>
      </ScrollView>
    </StyledSafeArea>
  );
};

export default RestaurantDetailScreen;
