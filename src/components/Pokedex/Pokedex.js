import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

export const Pokedex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.pokedexHeader}>
        <Text>Pokedex</Text>
        <Text>Pagination:</Text>
      </View>
    </View>
  );
};
