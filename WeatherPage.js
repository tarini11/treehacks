import { StyleSheet, View, ImageBackground, Image} from "react-native";
import { useState, useEffect } from "react";
import { Text, Icon, Button } from 'react-native-paper';

import unixConversion from './unixConversion';
import getWeatherData from './getWeatherData';

export default function weatherPage({route, navigation}) {
  const { city, lat, long } = route.params;
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    async function getData() {
      try { 
        const myData = await getWeatherData(lat, long);
        setWeatherData(myData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []);

  let contentDisplayed = null;

  if (weatherData === null) {
    contentDisplayed = null
  }
  else {
    let imageUrl = "https://openweathermap.org/img/wn/" + weatherData.current.weather[0].icon + "@2x.png"
    console.log(imageUrl)
    contentDisplayed = <>
    <View style ={styles.city}>
    <Text variant="displayLarge" style={styles.bigText}>
          {city}
      </Text>
      <Text variant="displaySmall" style={styles.text}>
          {weatherData.current.temp}°
      </Text>
      <Text variant="displaySmall" style={styles.text1}>
          {weatherData.current.weather[0].description}
      </Text>
      <Text variant="displaySmall" style={styles.text1}>
          Feels Like: {weatherData.current.feels_like}°
        </Text>
    </View>
    <View style={styles.icon_weather}>
    <Image source={{ uri: imageUrl }} style={styles.image1} />
    </View>
      <View style={styles.sun_moon}>
        <View style={styles.sunrise}>
        <Text variant="displaySmall" style={styles.text}>
            Sunrise 
            <Icon
                source="weather-sunset-up"
                size={30}
                color="#DBAC0D"
            /> 
            </Text>
            <Text variant="displaySmall" style={styles.text}>
            {unixConversion(weatherData.current.sunrise, weatherData.timezone_offset)} AM
          </Text>
        </View>
        <View style={styles.sunset}>
        <Text variant="displaySmall" style={styles.text}>
            Sunset 
            <Icon
                source="weather-sunset-down"
                size={30}
                color="#DB2C0D"
            /> 
            </Text>
            <Text variant="displaySmall" style={styles.text}>
            {unixConversion(weatherData.current.sunset, weatherData.timezone_offset)} PM
          </Text>
        </View>
      </View>
      <View style={styles.fiveDay}>
      <Button 
        mode="contained"
        onPress={() => { navigation.navigate('Five Day',{
            city: city,
            lat: lat,
            long: long
          })
        }}>
            See 5 day weather
        </Button>
      </View></>
  }

  return (
      <View style={styles.container}>
        <ImageBackground source={require("./backdrop.jpeg")} resizeMode="cover" style={styles.image}>
        {contentDisplayed}
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
    city: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      marginTop: 10,
      width: "100%",
      borderRadius: "100%",
      backgroundColor: '#151841'
    },
    min_max: {
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigText: {
      fontSize: 50,
      color: "#6A72E5"
    },
    text: {
      fontSize: 30,
      color: "#6A72E5"
    },
    text1: {
      fontSize: 20,
      color: "#5459A0"
    },
    icon_weather: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center'
    },
    sun_moon: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      width: "100%"
    },
    sunrise: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    sunset: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fiveDay: {
      flex: 3,
      justifyContent: 'center',
    },
    fiveDayButton: {
      padding: 10,
      backgroundColor: "#a8d1d1",
    },
    fButton: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      backgroundColor: '#7274A4'
    },
    icons: {
      padding: 10,
      borderWidth:1
    },
    image: {
      flex: 1,
      width: '100%', 
      height: '100%',
    },
    image1: {
      width: 100,
      height: 100, 
    }
});
