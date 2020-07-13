import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import books from "../datas/books.json";
import { Input, ListItem } from "react-native-elements";

function LibraryScreen({ navigation, route }) {
  function navigateToBook(item) {
    navigation.navigate("book", {item});
  }

  // const bookList = books.map(book => {
  //   return  <Text onPress={navigateToBook}>{book.title}</Text>
  //   });

  return (
    <View style={styles.container}>
      <Text>Ma bibliothèque</Text>
      <Input placeholder="Entrez un livre"/>
      {/* <ScrollView>{bookList}</ScrollView> */}
      {books.map((item, i) => (
        <ListItem
          key={i}
          title={item.title}
          // leftIcon={{ name: item.icon }}
          bottomDivider
          chevron
          onPress={() => navigateToBook(item)}
        />
      ))}
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

export default LibraryScreen;
