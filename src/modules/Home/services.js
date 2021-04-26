import axios from 'axios';

import env from '../../shared/config/env';


const getWeatherData = async (city) => {
  const res = await axios.get(
    `${env.WEATHER_MAP_URL}/2.5/onecall?lat=${city.lat}&lon=${city.lng}&units=metric&appid=${env.WEATHER_MAP_KEY}`
  );
    
  return res.data;
}

const createStationaryMetrics = async (data) => {
  const { 
    rain,
    pressure,
    humidity,
    windSpeed,
    temperature,
  } = data;

  const reqData = [
    {
      pressure,
      humidity,
      temperature,
      rain_1h: rain,
      wind_speed: windSpeed,
      dt: new Date().getTime(),
      station_id: env.STATION_ID,
    }
  ];

  const body = JSON.stringify(reqData);

  try {
    await axios.post(env.STATION_CREATE_URL, body);
  } catch (err) {
    console.log(err);
  }
}


export {
  getWeatherData,
  createStationaryMetrics,
}
