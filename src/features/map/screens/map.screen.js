import React, { useEffect, useState, useContext } from "react";
import MapView from "react-native-maps";
import styled from "styled-components";
import Search from "../components/Search.components";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import MapCallout from "../components/MapCallout.component";

const Map = styled(MapView)`
  height: 100%;
`;

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);

  const { viewPort, lat, lng } = location;

  useEffect(() => {
    const northEastLat = viewPort.northeast.lat;
    const southWestLat = viewPort.southwest.lat;
    setLatDelta(northEastLat - southWestLat);
  }, [location, viewPort]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitudeDelta: latDelta,
          latitude: lat,
          longitude: lng,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout
                onPress={() =>
                  navigation.navigate("RestaurantsDetail", { restaurant })
                }
              >
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
