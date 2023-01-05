import { useState } from "react";
import { Image, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { searchPokemon } from "../../services/api";
import { styles } from "./styles";

export const Search = () => {
  const [search, setSearch] = useState("");
  const [pokemon, setPokemon] = useState("");

  const onChangeSearch = (query) => setSearch(query);

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  const onIconPressHandler = () => {
    onSearchHandler(search.toLowerCase());
  };

  return (
    <View>
      <Searchbar
      style={styles.searchbarStyle}
        placeholder="Search"
        onIconPress={onIconPressHandler}
        onChangeText={onChangeSearch}
        value={search}
      />
      <View>
        {pokemon ?
        <View>
         <Text>Nome:{pokemon.name}</Text>
         <Text>Peso:{pokemon.weight}</Text>
         <Image source={{uri:pokemon.sprites.front_default}}
          style={{width: 100, height: 100}} />
         </View>
         
         :null}
      </View>
    </View>
  );
};
