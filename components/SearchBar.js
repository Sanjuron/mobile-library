import React, { useState } from "react";
import { Input } from "react-native-elements";
import axios from "axios";
import { Text, View } from "react-native";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const [books, setBooks] = useState(['']);
  // console.log(query);

  console.log(books);

  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(function (res) {
      setBooks(res.data);
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <View>
      <Input
        onChangeText={(val) => setQuery(val)}
        placeholder="Entrez un livre"
      />
    </View>
  );
}
