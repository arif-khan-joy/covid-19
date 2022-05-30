import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import Text from './src/component/text/text';
import { colors } from './src/theme/colors';
import Home from './src/screen/home';

export default function App() {
  const [loaded] = useFonts({
    'GraphikRegular':require('./assets/fonts/GraphikRegular.otf'),
    'GraphikSemibold':require('./assets/fonts/GraphikSemibold.otf'),
    'GraphikBold':require('./assets/fonts/GraphikBold.otf')
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
        <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
