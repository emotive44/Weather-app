import { useState, useEffect } from 'react';
import axios from 'axios';

import env from '../config/env';
import { getDateInSeconds } from '../../shared/utils/date';


const usePagination = (city) => {
  const [day, setDay] = useState(0);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setErr(null);

        if(day < 0) {
          const dt = getDateInSeconds(day);
          
          const res = await axios.get(
            `${env.WEATHER_MAP_URL}2.5/onecall/timemachine?lat=${city.lat}&lon=${city.lng}&dt=${dt}&units=metric&appid=${env.WEATHER_MAP_KEY}`
          );
          
          setData(res.data.hourly);
          setLoading(false);
        }
      } catch (err) {
        setErr(err.response.data.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [day, city]);


  const prevPage = () => {
    if (day > -5) {
      setDay((prev) => prev - 1);
    }
  };

  const nextPage = () => {
    if (day < 1) {
      setDay((prev) => prev + 1);
    }
  };

  return {
    err,
    day,
    loading,
    previousData: data,
    prevPage,
    nextPage,
  };
};

export default usePagination;
