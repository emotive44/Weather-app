import moment from 'moment-timezone';

import { weekDays } from '../constants';


const getDate = (seconds, timezone, type = 'date') => {
  const miliSeconds = seconds * 1000;

  const dateFormat = type === 'date' ? 'DD.MM.YYYY' : 'HH:mm';
  
  return moment(miliSeconds).tz(timezone).format(dateFormat);
}

const getDateInSeconds = (day) => {
  const date = new Date();

  const miliSeconds = date.setDate(date.getDate() + day);

  return Math.trunc(miliSeconds / 1000);
}

const getWeekDayName = (seconds) => {
  const today = new Date().getDay();

  const weekDay = moment(seconds * 1000).weekday();

  if(weekDay === today) {
    return 'Today';
  } else if (weekDay === today + 1) {
    return 'Tomorrow';
  } else {
    return weekDays[weekDay];
  }
}


export {
  getDate,
  getWeekDayName,
  getDateInSeconds,
}
