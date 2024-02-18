
import { StyleSheet, View, ImageBackground} from "react-native";
import { Button} from 'react-native-paper';

export default function CitiesPage({navigation}) {

  return (
    <View style={styles.container}>
    <ImageBackground source={require("./backdrop.jpeg")} resizeMode="cover" style={styles.image}>
    <View style={styles.stanford}>
    <View style={styles.button}>
    <Button 
        mode="contained"
        onPress={() => { navigation.navigate('Weather',{
            city: "Stanford",
            lat: "37.428230",
            long: "-122.168861"
          })
        }}>
      Stanford
      </Button>
      </View>
    </View>
    <View style={styles.delhi}>
    <View style={styles.button}>
    <Button 
        mode="contained"
        onPress={() => { navigation.navigate('Weather',{
            city: "New Delhi",
            lat: "28.644800",
            long: "77.216721"
          })
        }}>
      New Delhi
      </Button>
    </View>
    </View>
    <View style={styles.seattle}>
    <View style={styles.button}>
    <Button 
        mode="contained"
        onPress={() => { navigation.navigate('Weather',{
            city: "New York",
            lat: "40.7128",
            long: "-73.935242" 
          })
        }}>
      New York
      </Button>
    </View>
    </View>
    <View style={styles.toronto}>
    <View style={styles.button}>
    <Button 
        mode="contained"
        onPress={() => { navigation.navigate('Weather',{
            city: "Toronto",
            lat: "43.653908",
            long: "-79.384293" 
          })
        }}>
      Toronto
      </Button>
    </View>
    </View>
    <View style={styles.dallas}>
    <View style={styles.button}>
    <Button 
        mode="contained"
        onPress={() => { navigation.navigate('Weather',{
            city: "Dallas",
            lat: "32.779167",
            long: "-96.808891"
          })
        }}>
      Dallas
      </Button>
    </View>
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
    justifyContent: 'center',
  },
  stanford: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  delhi: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  seattle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toronto: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dallas: {
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
