import React from 'react';
import { View } from 'react-native';

import { styles } from '../Pokedex/styles';

export const Pokedex = (props) => {
  const {id,name,uri} = props;

  return (
    <View style={styles.container}>
      <View>
        <Text>#{id}</Text>
      </View>
      <View>
        <Text>Nome:{name}</Text>
      </View>
      <Image source={{uri:uri}}
          style={{width: 100, height: 100}} />

    </View>
  );
}