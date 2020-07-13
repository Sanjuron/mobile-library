import React from "react";
import { ScrollView, StyleSheet,View } from "react-native";
import books from "../datas/books.json";
import { Input, ListItem, Text } from "react-native-elements";
import SearchBar from "../components/SearchBar";

function LibraryScreen({ navigation, route }) {
  function navigateToBook(item) {
    navigation.navigate("book", {item});
  }

  // const bookList = books.map(book => {
  //   return  <Text onPress={navigateToBook}>{book.title}</Text>
  //   });

  return (
    <View style={styles.container}>
      <Text h1 style={styles.title}>Ma bibliothèque</Text>
      <SearchBar/>
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
    // alignItems: "center",
    // justifyContent: "center",
  },
  title: {
    marginBottom: 10,
    marginTop: 10,
  }
});

export default LibraryScreen;
