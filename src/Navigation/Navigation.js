import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../components/LoginScreen/Login";
import GamePlayScreen from "../components/GamePlayScreen/GamePlay";
import HistoryScreen from "../components/HistoryScreen/History";
import LostScreen from "../components/LostScreen/Lost";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GamePlay" component={GamePlayScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Lost" component={LostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
