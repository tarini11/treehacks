const apiKey = '5a5a8a676f03d9e34025c4f6b516a125';
const units = 'metric'

const getWeatherData = async (lat, long) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${units}&appid=${apiKey}`);
        const data = await response.json();
        return data;
      }
      catch(error) {
        throw error;
      }
      
};

export default getWeatherData;
