import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { AuthContextProvider } from "./src/services/authentication/authentication.context";
import Navigation from "./src/infrastructure/navigation/index";
import * as firebase from "firebase";
// import firebase from "firebase/app";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA-sp6EuCP8a1hHkrUJTY3utQJI-0lCaQU",
  authDomain: "mealstogo-6e4fb.firebaseapp.com",
  projectId: "mealstogo-6e4fb",
  storageBucket: "mealstogo-6e4fb.appspot.com",
  messagingSenderId: "248050337508",
  appId: "1:248050337508:web:6b4971c036e52963880ef1",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latodLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latodLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
