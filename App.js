import React from "react";
import { StyleSheet, Text, View } from "react-native";
//importation des bibliothèques pour la navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LibraryScreen from "./screens/LibraryScreen";
import BookScreen from "./screens/BookScreen";

// donne accès à Stack.navigator et Stack.screen
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "Accueil" }}
        />
        <Stack.Screen name="details" component={DetailsScreen} />
        <Stack.Screen
          name="library"
          component={LibraryScreen}
          options={{ title: "Bibliothèque" }}
        />
        <Stack.Screen
          name="book"
          component={BookScreen}
          options={{ title: "Livre" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
