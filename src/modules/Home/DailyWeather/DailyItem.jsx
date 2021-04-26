import React from 'react';

import './DailyItem.scss';
import getWeatherIcon from '../../../shared/utils/getWeatherIcon';
import { Tooltip } from '../../../shared/library';


const DailyItem = ({
  date,
  status,
  weekDay,
  lowTemp,
  highTemp,
  pressure,
  humidity,
  feelsLike,
  windSpeed,
  weatherIcon,
}) => {

  const infoContent = (
    <div className="info-popup">
        <p className="title">{weekDay}</p>
        <div className="wrapper">
          <div>
            <p>Temperature</p>
            <p>Feels like</p>
            <p>Wind speed</p>
            <p>Atm. pressure</p>
            <p>Humidity</p>
          </div>
          <div>
            <p>{lowTemp}/{highTemp}°C</p>
            <p>{feelsLike}°C</p>
            <p>{windSpeed}m/s</p>
            <p>{pressure}pHa</p>
            <p>{humidity}%</p>
          </div>
        </div>
    </div>
  );

  return (
    <div className="daily-item">
      <p>{weekDay}</p>
      <small className="date">{date}</small>
    
      <Tooltip position="bottom" content={infoContent}>
        <i className="fas fa-info-circle" /> 
      </Tooltip>
        
      {getWeatherIcon(weatherIcon)}

      <p className="temp">
        <span>{lowTemp}° </span>
        <small>/</small>
        <span> {highTemp}°</span>
      </p>

      <p className="status">{status}</p>
    </div>
  );
}

export default DailyItem;
