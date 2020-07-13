import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function HomeScreen({ navigation, route }) {
  function navigateToDetails() {
    navigation.navigate("details");
  }

  function navigateToLibrary() {
    navigation.reset({index: 0, routes: [{name:"library"}]});
  }

  return (
    <View style={styles.container}>
      <Text>Bienvenue sur ma page d'accueil</Text>
      <br />
      <Button title="Voir des détails" onPress={navigateToDetails} />
      <br />
      <Button title="Afficher la bibliothèque" onPress={navigateToLibrary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    margin: 5,
    padding: 5,
  },
});

export default HomeScreen;
