import env from '../config/env';

const getWeatherIcon = (code, size = 100) => {
  if (!code) { return }

  const url = `${env.WEATHER_ICON_URL}${code}@2x.png`;
  const styles = {
    width: `${size}px`,
    height: `${size}px`,
    margin: '0 auto',
  }

  return <img alt="" src={url} style={styles} />
}

export default getWeatherIcon;
