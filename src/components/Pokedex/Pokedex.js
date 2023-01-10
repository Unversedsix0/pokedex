import { FlatList, Text, View } from "react-native";
import { Pokemon } from "../Pokemon/Pokemon.js"
import { styles } from "./styles";

export const Pokedex = (props) => {
    
    const{pokemons, loading} = props

    const renderItem = ({item})=>{
      return <Pokemon 
      id={item.id}
      name={item.name}
      uri={item.uri}
      />
    }
   
  return (
    <View style={styles.container}>
      <View style={styles.pokedexHeader}>
        <Text>Pokedex</Text>
        <Text>Pagination:</Text>
      </View>
      {loading ? <Text>Carregando, relaxa ai...</Text> : 
      <Text>Carregou</Text>
      }
        <FlatList
        data={pokemons}
        keyExtractor={item => item.name}
        renderItem={renderItem}
        />
    </View>
  );
};
