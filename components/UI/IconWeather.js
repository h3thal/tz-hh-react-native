import React, {useMemo} from 'react';
import Sun from '../../assets/svg/Sun';
import Cloud from '../../assets/svg/Cloud';
import Rain from '../../assets/svg/Rain';
import Snow from '../../assets/svg/Snow';
import {useSelector} from 'react-redux';
import Thunderstorm from '../../assets/svg/Thunderstorm';

const IconWeather = ({size, color}) => {
  const weatherList = useSelector(state => state.weatherList);
  const weatherConditions = [
    [0, 1], // солнце
    [2, 3, 45, 48], // облачно
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82], // дождь
    [71, 73, 75, 77, 85, 86], // снег
    [95, 96, 99], // гроза
  ];

  const checkWeatherConditions = useMemo(() => {
    if (
      weatherList?.current_weather?.weathercode &&
      weatherList.current_weather.weathercode >= 0
    ) {
      for (let i = 0; i < weatherConditions.length; i++) {
        console.log(i);
        if (
          weatherConditions[i].includes(weatherList.current_weather.weathercode)
        ) {
          return i;
        }
      }
    }
  }, [weatherList.current_weather]);

  const weatherIcon = [
    <Sun size={size} color={color} />,
    <Cloud size={size} color={color} />,
    <Rain size={size} color={color} />,
    <Snow size={size} color={color} />,
    <Thunderstorm size={size} color={color} />,
  ];

  return weatherIcon[checkWeatherConditions];
};

export default IconWeather;
