import React, {memo} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CONSTANTS from '../../assets/CONSTANTS';
import {useDispatch, useSelector} from 'react-redux';
import DropDownList from '../DropDownList/DropDownList';
import IconWeather from '../UI/IconWeather';

const MainContainer = () => {
  const dispatch = useDispatch();
  const weatherList = useSelector(state => state.weatherList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Погода на данный момент</Text>
      <View style={styles.temperatureRow}>
        {weatherList?.current_weather?.temperature && (
          <Text style={styles.text}>
            {weatherList.current_weather.temperature} °C
          </Text>
        )}
        {weatherList?.current_weather?.weathercode && (
          <IconWeather
            size={50}
            color={CONSTANTS.textColor}
            weatherCode={weatherList.current_weather.weathercode}
          />
        )}
      </View>
      {weatherList?.current_weather?.windspeed && (
        <Text style={styles.text}>
          Скорость ветра: {weatherList.current_weather.windspeed} км/ч
        </Text>
      )}
      <View>
        <DropDownList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    marginVertical: 50,
  },
  title: {
    fontSize: CONSTANTS.titleTextSize,
    color: CONSTANTS.textColor,
    textAlign: 'center',
  },
  temperatureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: CONSTANTS.textColor,
    fontSize: CONSTANTS.textSize,
  },
});

export default memo(MainContainer);
