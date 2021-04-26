import React from 'react';

import './CurrentItem.scss';
import FooterItem from './FooterItem';
import getWeatherIcon from '../../../../shared/utils/getWeatherIcon';


const CurrentItem = ({
  sunset,
  status,
  sunrise,
  currTemp,
  humidity,
  windSpeed,
  feelsLike,
  weatherIcon,
}) => {
  
  return (
    <section className="current-item">
      <header>
        {getWeatherIcon(weatherIcon, 200)}

        <p className="temp">
          <span>{currTemp}</span>
          <small>°C</small>
        </p>
      </header>

      <main>
        <p className="status">{status}</p>

        <p>
          Feelings like {feelsLike}
          <small style={{verticalAlign: 'text-top'}}>°C</small>
        </p>
      </main>

      <footer>
        <FooterItem
          dimension  = "%"
          value      = {humidity}
          iconColor  = "skyblue"
          textColor  = "skyblue"
          iconClass  = "fa-tint"
        />

        <FooterItem
          dimension  = "m/s"
          iconColor  = "skyblue"
          textColor  = "skyblue"
          iconClass  = "fa-wind"
          value      = {windSpeed}
        />

        <FooterItem 
          iconColor  = "orange"
          iconClass  = "fa-cloud-sun"
          value      = {`Sunrise ${sunrise}`}
        />

        <FooterItem
          iconColor  = "darkblue"
          iconClass  = "fa-cloud-moon"
          value      = {`Sunset ${sunset}`}
        />
      </footer>
    </section>
  );
}

export default CurrentItem;
