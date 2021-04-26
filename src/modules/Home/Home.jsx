import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './Home.scss';
import { getWeatherData } from './services';
import DailyWeather from './DailyWeather/DailyWeather';
import HourlyWeather from './HourlyWeather/HourlyWeather';
import { Spinner, Tab, Tabs } from '../../shared/library';


const Home = ({ 
  weather: { err, loading, city } 
}) => {
  const [timezone, setTimezone] = useState('');
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const data = await getWeatherData(city);

        setWeatherData(data);
        setTimezone(data && data.timezone);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [city]);


  return (
    <section className="home">
      {loading && <Spinner />}
      {err && (
        <div className="weather-error">
          <h3>
            Showing weather for {city.name} failed.
          </h3>
          <p>The reason was: {err}</p>
        </div>
      )}

      {city.name 
        ? (
          <> 
            <h3 className="current-city">{city.name}</h3>
            <article className="weather">
              <Tabs>
                <Tab label="current-weather" tabName="Now">
                  <DailyWeather 
                    timezone    = {timezone}
                    data        = {weatherData && weatherData.daily}
                    currentData = {weatherData && weatherData.current}
                  />
                </Tab>
                <Tab label="hourly" tabName="24 hours">
                  <HourlyWeather
                    city      = {city}
                    timezone  = {timezone}
                    data      = {weatherData && weatherData.hourly}
                  />
                </Tab>
                <Tab label="daily" tabName="10 days">
                  <p>10 Days</p>
                </Tab>
                <Tab label="weekend" tabName="Weekend">
                  <p>Weekend</p>
                </Tab>
              </Tabs>
            </article>
          </>
        )
        : <h2 className="info">To see the weather forecast, you have to choose a city.</h2>
      }
    </section>
  );
}


const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps, {})(Home);
