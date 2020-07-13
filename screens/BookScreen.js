import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

function BookScreen({navigation, route}) {

  console.log(navigation);
  console.log(route);

  const book = route.params.item;

  // let bookRender = books.filter(book => item.title === book.title );

  return (
    <View style={styles.container}>
      <Text>{book.title}</Text>
      <Text>{book.author}</Text>
      <Text>{book.description}</Text>
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
});

export default BookScreen;

