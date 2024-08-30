import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { userService } from "../reducers-slice/userSlice";

export default function Loginpage({ route, navigation }) {

  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(userService())
    navigation.push('Users')
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSubmit} title="Login"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
