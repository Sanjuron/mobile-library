import React from "react";
import {ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import {Card, Image} from "react-native-elements";

function BookScreen({navigation, route}) {

  console.log(navigation);
  console.log(route);

  const book = route.params.item;


  return (
    <Card containerStyle={{padding: 0}}>
    <View style={styles.container}>
      <Image source={{uri :book.img}}
              style={{width: 400, height: 400,}}
              resizeMode="contain"
              PlaceholderContent={<ActivityIndicator/>}
              />
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.description}</Text>
    </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
      },
});

export default BookScreen;

