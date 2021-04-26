import React, { useEffect, useState } from 'react';

import './HourlyWeather.scss';
import HourlyITem from './HourlyItem';
import AddMetrics from '../AddMetrics/AddMetrics';
import { getDate } from '../../../shared/utils/date';
import useModal from '../../../shared/hooks/useModal';
import usePagination from '../../../shared/hooks/usePagination';
import { Button, Modal } from '../../../shared/library';


const HourlyWeather = ({ data, timezone, city }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const { toggleModal, showModal, closeModal } = useModal();
  const { day, previousData, prevPage, nextPage } = usePagination(city);

  useEffect(() => {
    if(day < 0) {
      setHourlyData(previousData);
    } else {
      const currData = data && data.slice(0, 24);
      setHourlyData(currData);
    }
  }, [data, previousData, day]);

  const hourlyItems = hourlyData && hourlyData.map((data, i) => {
    const {
      dt,
      temp,
      weather,
      pressure,
      humidity,
      wind_speed,
      feels_like,
    } = data;

    return (
      <HourlyITem 
        key         = {i}
        pressure    = {pressure}
        humidity    = {humidity}
        windSpeed   = {wind_speed}
        weatherIcon = {weather[0].icon}
        temp        = {Math.round(temp)}
        date        = {getDate(dt, timezone)}
        feelsLike   = {Math.round(feels_like)}
        hour        = {getDate(dt, timezone, 'time')}
      />
    );
  });

  return (
    <>  
      <Modal 
        closeModal = {closeModal}
        className  = {toggleModal}
        title      = "Add Metrics Manually"
        main       = {<AddMetrics closeModal={closeModal} />}
      />
      <div className="hourly">
        <aside>
          <HourlyITem aside />
        </aside>
        
        <div className="container"> {hourlyItems} </div>

        <div className="pagination">
          {day > -5 && (
            <Button 
              size      = "small" 
              type      = "light"
              callback  = {prevPage}
            >
              Previous Day
            </Button>
          )}

          {day < 0 && (
            <Button 
              size      = "small" 
              type      = "primary"
              callback  = {nextPage}
            >
              Next Day
            </Button>
          )}
        </div>
        
        <div className="add-metrics">
          <Button
            size     = "small"
            type     = "light"
            callback = {showModal}
          >
            Add metrics Manually 
          </Button>
        </div>
      </div>
    </>
  );
}

export default HourlyWeather;
