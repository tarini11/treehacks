import { StyleSheet} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomePage from './HomePage';
import CitiesPage from './CitiesPage';
import WeatherPage from './WeatherPage';
import FiveDayPage from './FiveDayPage';

const Stack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <HomePage navigation={navigation}/>
  );
}

function Cities({navigation}) {
  return (
    <CitiesPage navigation={navigation}/>
  );
}

function Weather({route, navigation}) {
  return (
    <WeatherPage route={route} navigation={navigation} />
  );
}

function FiveDay({route}) {
  return (
    <FiveDayPage route={route} />
  );
}
//const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cities" component={Cities} />
      <Stack.Screen name="Weather" component={Weather} />
      <Stack.Screen name="Five Day" component={FiveDay} />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
