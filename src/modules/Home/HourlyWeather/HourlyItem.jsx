import React from 'react';

import './HourlyItem.scss';
import getWeatherIcon from '../../../shared/utils/getWeatherIcon';


const HourlyItem = ({
  hour,
  date,
  temp,
  aside,
  pressure,
  humidity,
  windSpeed,
  feelsLike,
  weatherIcon,
}) => {
  const itemClasses = ['hourly-item'];
  if(aside) {
    itemClasses.push('aside');
  }
 
  return (
    <div className={itemClasses.join(' ')}>
      <div className="section-1">
        <b>{aside ? 'Hour' : hour}</b>
        <small>{aside ? 'Date' : date}</small>
        {!aside && (
          <>
            {getWeatherIcon(weatherIcon)}
            <span>{temp}°C</span>
          </>
        )}
      </div>

      <div className="section-2">
        {aside
          ? <span>Wind speed</span>
          : (
            <>
              <i className="fas fa-wind" />
              <small>{windSpeed}m/s</small>
            </>
          )
        }
      </div>

      <div className="section-3">
        <span>{aside ? 'Feels like' : `${feelsLike} °C`}</span>
        <span>{aside ? 'Wind Speed' : `${windSpeed} m/s`}</span>
        <span>{aside ? 'Atm. pressure' : `${pressure} pHa`}</span>
        <span>{aside ? 'Humidity' : `${humidity} %`}</span>
      </div>
    </div>
  );
}

export default HourlyItem;
