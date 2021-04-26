const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


export const validate = (value, name) => {
  switch(name) {
    case 'username':
      if(value === '') {
        return 'Please enter a username';
      } else if (value.match(/^\d/)) {
        return 'Username can not start with digit';
      } else if(value.length < 4) {
        return 'Username should have to be more than 4 symbols';
      } else if (value.length > 15) {
        return 'Username should have to be less than 15 symbols'
      } else {
        return 'correct';
      }
    case 'email':
      if (value === '') {
        return 'Please enter an email';
      } else if (!validateEmail(value)) {
        return 'Please enter a valid email';
      } else {
        return 'correct';
      }
    case 'temperature':
      if (value === '') {
        return 'Please enter a temperature';
      } else if (value < -20) {
        return 'Temperature can not be under -20°C';
      } else if (value > 60) {
        return 'Temperature can over 60°C';
      } else {
        return 'correct';
      }
    case 'windSpeed':
      if (value === '') {
        return 'Please enter a wind speed';
      } else if (value < 0) {
        return 'Wind speed can not be under 0m/s';
      } else if (value > 200) {
        return 'Wind speed can over 200m/s';
      } else {
        return 'correct';
      }
    case 'humidity':
      if (value === '') {
        return 'Please enter a humidity';
      } else if (value < 0) {
        return 'Humidity can not be under 0%';
      } else if (value > 100) {
        return 'Humidity can over 100%';
      } else {
        return 'correct';
      }
    case 'pressure':
      if (value === '') {
        return 'Please enter a pressure';
      } else if (value < 0) {
        return 'Pressure can not be under 0pHa';
      } else if (value > 3000) {
        return 'Pressure can over 3000pHa';
      } else {
        return 'correct';
      }
    case 'rain':
      if (value === '') {
        return 'Please enter a rain';
      } else if (value < 0) {
        return 'Rain can not be under 0mm';
      } else if (value > 1000) {
        return 'Rain can over 1000mm';
      } else {
        return 'correct';
      }
    default: 
      return '';
  }
}
