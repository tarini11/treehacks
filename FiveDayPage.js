import { StyleSheet, SafeAreaView, Pressable, View, Image, FlatList, ImageBackground} from "react-native";
import { useState, useEffect } from "react";
import { Text, Surface} from 'react-native-paper';

import getWeatherData from './getWeatherData';

export default function fiveDay({route}) {
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
    let imageUrl1 = "https://openweathermap.org/img/wn/" + weatherData.daily[0].weather[0].icon[0] + weatherData.daily[0].weather[0].icon[1] + "n@2x.png"
    let imageUrl2 = "https://openweathermap.org/img/wn/" + weatherData.daily[1].weather[0].icon[0] + weatherData.daily[1].weather[0].icon[1] + "n@2x.png"
    let imageUrl3 = "https://openweathermap.org/img/wn/" + weatherData.daily[2].weather[0].icon[0] + weatherData.daily[2].weather[0].icon[1] + "n@2x.png"
    let imageUrl4 = "https://openweathermap.org/img/wn/" + weatherData.daily[3].weather[0].icon[0] + weatherData.daily[3].weather[0].icon[1] + "n@2x.png"
    let imageUrl5 = "https://openweathermap.org/img/wn/" + weatherData.daily[4].weather[0].icon[0] + weatherData.daily[4].weather[0].icon[1] + "n@2x.png"
    contentDisplayed = <>
    <View style={styles.day}>
      <View style={styles.dayNum}>
      <Text variant="titleLarge" style={styles.text}>
        Day 1
      </Text>
      </View>
      <View style={styles.day1}>
        <View style={styles.day2}>
        <View>
        <Text variant="titleLarge" style={styles.text1}>
        {weatherData.daily[0].weather[0].description}
        </Text>
        </View> 
        <View>
        <Image source={{ uri: imageUrl1 }} style={styles.image1} />
        </View>
        </View>
        <View style={styles.day2}>
        <View style={styles.min}>
        <Text variant="titleLarge" style={styles.text}>
          L: {weatherData.daily[0].temp.min}°
        </Text>
        </View>
        <View style={styles.max}>
        <Text variant="titleLarge" style={styles.text}>
        H: {weatherData.daily[0].temp.max}°
        </Text>
      </View>
      </View>
      </View>
    </View>
    <View style={styles.day}>
      <View style={styles.dayNum}>
      <Text variant="titleLarge" style={styles.text}>
        Day 2
      </Text>
      </View>
      <View style={styles.day1}>
        <View style={styles.day2}>
        <View>
        <Text variant="titleLarge" style={styles.text1}>
        {weatherData.daily[1].weather[0].description}
        </Text>
        </View> 
        <View>
        <Image source={{ uri: imageUrl2 }} style={styles.image1} />
        </View>
        </View>
        <View style={styles.day2}>
        <View style={styles.min}>
        <Text variant="titleLarge" style={styles.text}>
          L: {weatherData.daily[1].temp.min}°
        </Text>
        </View>
        <View style={styles.max}>
        <Text variant="titleLarge" style={styles.text}>
        H: {weatherData.daily[1].temp.max}°
        </Text>
      </View>
      </View>
      </View>
    </View>
    <View style={styles.day}>
      <View style={styles.dayNum}>
      <Text variant="titleLarge" style={styles.text}>
        Day 3
      </Text>
      </View>
      <View style={styles.day1}>
        <View style={styles.day2}>
        <View>
        <Text variant="titleLarge" style={styles.text1}>
        {weatherData.daily[2].weather[0].description}
        </Text>
        </View> 
        <View>
        <Image source={{ uri: imageUrl3 }} style={styles.image1} />
        </View>
        </View>
        <View style={styles.day2}>
        <View style={styles.min}>
        <Text variant="titleLarge" style={styles.text}>
          L: {weatherData.daily[2].temp.min}°
        </Text>
        </View>
        <View style={styles.max}>
        <Text variant="titleLarge" style={styles.text}>
        H: {weatherData.daily[2].temp.max}°
        </Text>
      </View>
      </View>
      </View>
    </View>
    <View style={styles.day}>
      <View style={styles.dayNum}>
      <Text variant="titleLarge" style={styles.text}>
        Day 4
      </Text>
      </View>
      <View style={styles.day1}>
        <View style={styles.day2}>
        <View>
        <Text variant="titleLarge" style={styles.text1}>
        {weatherData.daily[3].weather[0].description}
        </Text>
        </View> 
        <View>
        <Image source={{ uri: imageUrl4 }} style={styles.image1} />
        </View>
        </View>
        <View style={styles.day2}>
        <View style={styles.min}>
        <Text variant="titleLarge" style={styles.text}>
          L: {weatherData.daily[3].temp.min}°
        </Text>
        </View>
        <View style={styles.max}>
        <Text variant="titleLarge" style={styles.text}>
        H: {weatherData.daily[3].temp.max}°
        </Text>
      </View>
      </View>
      </View>
    </View>
    <View style={styles.day}>
      <View style={styles.dayNum}>
      <Text variant="titleLarge" style={styles.text}>
        Day 5
      </Text>
      </View>
      <View style={styles.day1}>
        <View style={styles.day2}>
        <View>
        <Text variant="titleLarge" style={styles.text1}>
        {weatherData.daily[4].weather[0].description}
        </Text>
        </View> 
        <View>
        <Image source={{ uri: imageUrl5 }} style={styles.image1} />
        </View>
        </View>
        <View style={styles.day2}>
        <View style={styles.min}>
        <Text variant="titleLarge" style={styles.text}>
          L: {weatherData.daily[4].temp.min}°
        </Text>
        </View>
        <View style={styles.max}>
        <Text variant="titleLarge" style={styles.text}>
        H: {weatherData.daily[4].temp.max}°
        </Text>
      </View>
      </View>
      </View>
    </View>
    
    </>
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
    justifyContent: 'center',
  },
  day: {
    marginTop: 30,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#151841',
    borderRadius: "100%"
  },
  day1: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  day2: {
    flexDirection: "row",
  },
  dayName: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  condition: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center', 
    textAlignVertical: 'center',
  },
  min: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  max: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%', 
    height: '100%',
  },
  text: {
    color: "#6A72E5"
  },
  dayNum: {
    marginLeft: 7
  },
  text1: {
    color: "#5459A0"
  },
  image1: {
    width: 50,
    height: 30, 
  }
});
