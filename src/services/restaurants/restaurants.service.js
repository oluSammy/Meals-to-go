import { mocks, mockImages } from "./mock/index";
import camelize from "camelize";

export const transformData = (data) => {
  //   const newResult = camelize(data);

  //   console.log(mockImages)
  const mappedResult = data.results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_tatus === "CLOSED_TEMPORARILY",
    };
  });

  // console.log(newResult);

  return camelize(mappedResult);
};

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];

    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};

// export const restaurantsRequest = (location) => {
//   return fetch(
//     `http://localhost:5001/mealstogo-6e4fb/us-central1/placesNearBy?location=${location}`
//   ).then((res) => {
//     return res.json();
//   });
// };
