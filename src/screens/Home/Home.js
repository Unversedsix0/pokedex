import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Pokedex, Search } from "../../components";
import { getPokemons } from "../../services/api";
import { styles } from "./styles";

export const Home = () => {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const result = await getPokemons();
      setPokemons(result);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  };

  useEffect(() => {
    console.log("Carregou");
    fetchPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Search />
        <Pokedex 
        pokemons={pokemons}
        loading={loading}
        />
      </View>
    </View>
  );
};
