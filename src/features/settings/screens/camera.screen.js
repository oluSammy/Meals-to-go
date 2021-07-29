import React, { useState, useEffect, useRef, useContext } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import styled from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../services/authentication/authentication.context";

const CameraScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const { user } = useContext(AuthContext);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const ProfiledCamera = styled(Camera)`
    width: 100%;
    height: 100%;
  `;

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text>No Access to camera</Text>;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  return (
    <TouchableOpacity onPress={snap}>
      <ProfiledCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={Camera.Constants.Type.front}
      />
    </TouchableOpacity>
  );
};

export default CameraScreen;
