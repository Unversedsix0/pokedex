import { Text, View } from "react-native";
import { styles } from "./styles";

export const Pokedex = (props) => {
    const{pokemons, loading} = props
   
  return (
    <View style={styles.container}>
      <View style={styles.pokedexHeader}>
        <Text>Pokedex</Text>
        <Text>Pagination:</Text>
      </View>
      {loading ? <Text>Carregando, relaxa ai...</Text> : 
      <Text>Carregou</Text>
      }
    </View>
  );
};
