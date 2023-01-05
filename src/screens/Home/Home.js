
import { Text, View } from 'react-native';
import { Search } from '../../components';
import { styles } from './styles';

export const Home = () => {
  return (
    <View style={styles.container}>
        <View>
           <Search/>
        </View>
    </View>
  )
}
