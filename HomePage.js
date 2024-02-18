import { StyleSheet, View, ImageBackground} from "react-native";
import { Button } from 'react-native-paper';

export default function HomePage({navigation}) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./backdrop.jpeg")} resizeMode="cover" style={styles.image}>
      <View style={styles.body}>
      <Button icon="weather-cloudy" mode="contained" onPress={() => { navigation.navigate('Cities')
        }}>
        Check Weather
      </Button>
      </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfebeb',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%', 
    height: '100%',
  }
});
