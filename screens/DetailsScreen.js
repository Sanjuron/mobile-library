import React from 'react'
import {StyleSheet,Text, View} from 'react-native';

function DetailsScreen() {
    return(
        <View style={styles.container}>
            <Text>Voir détails</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default DetailsScreen;