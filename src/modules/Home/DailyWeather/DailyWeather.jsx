import React, { useState, useEffect } from 'react';

import './DailyWeather.scss';
import DailyItem from './DailyItem';
import CurrentItem from './CurrentItem/CurrentItem';
import { getDate, getWeekDayName } from '../../../shared/utils/date';


const DailyWeather = ({ data, currentData, timezone }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    setDailyData(data && data.slice(0, 7));
  }, [data]);

  const dailyItems = dailyData && dailyData.map((item, i) => {
    const {
      dt,
      temp,
      weather,
      pressure,
      humidity,
      feels_like,
      wind_speed,
    } = item;

    return (
      <DailyItem
        key         = {i}
        humidity    = {humidity}
        pressure    = {pressure}
        windSpeed   = {wind_speed}
        weekDay     = {getWeekDayName(dt)}
        date        = {getDate(dt, timezone)}
        weatherIcon = {weather && weather[0].icon}
        highTemp    = {Math.round(temp && temp.max)}
        lowTemp     = {Math.round(temp && temp.min)}
        status      = {weather && weather[0].description}
        feelsLike   = {Math.round(feels_like && feels_like.eve)}
      />
    )
  });

  const {
    temp,
    sunset,
    sunrise,
    weather,
    humidity,
    wind_speed,
    feels_like,
  } = currentData;

  return (
    <section className="daily">
      <div className="current">
        <CurrentItem  
          humidity    = {humidity}
          windSpeed   = {wind_speed}
          weatherIcon = {weather[0].icon}
          currTemp    = {Math.round(temp)}
          status      = {weather[0].description}
          feelsLike   = {Math.round(feels_like)}
          sunrise     = {getDate(sunrise, timezone, 'time')}
          sunset      = {getDate(sunset, timezone, 'time')}
        />

      </div>

      <article className="container"> {dailyItems} </article>     
    </section>
  );
}

export default DailyWeather;
