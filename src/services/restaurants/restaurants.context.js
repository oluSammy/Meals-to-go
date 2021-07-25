import React, { useState, createContext, useEffect, useContext } from "react";
import { transformData, restaurantsRequest } from "./restaurants.service";

import { LocationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = () => {
    setIsLoading(true);

    setTimeout(() => {
      restaurantsRequest()
        .then(transformData)
        .then((res) => {
          // console.log(res, "")
          setIsLoading(false);
          setRestaurants(res);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      retrieveRestaurants();
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantContext.Provider>
  );
};
