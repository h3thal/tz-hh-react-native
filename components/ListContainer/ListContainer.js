import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import ItemWeather from '../UI/ItemWeather';
import CONSTANTS from '../../assets/CONSTANTS';

const ListContainer = () => {
  const weatherList = useSelector(state => state.weatherList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Прогноз на следующие {CONSTANTS.days} дней
      </Text>
      <View style={styles.list}>
        {weatherList.daily.time.map((item, id) => (
          <ItemWeather
            key={'item-' + item}
            time={item}
            maxTemperature={weatherList.daily.temperature_2m_max[id]}
            minTemperature={weatherList.daily.temperature_2m_min[id]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'column',
    gap: 20,
  },
  list: {
    flexDirection: 'column',
    gap: 15,
  },
  title: {
    color: CONSTANTS.textColorGray,
    fontSize: CONSTANTS.titleTextSize,
  },
});

export default ListContainer;
