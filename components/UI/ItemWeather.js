import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CONSTANTS from '../../assets/CONSTANTS';

const ItemWeather = ({minTemperature, maxTemperature, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <Text style={styles.text}>{time}</Text>
        <Text style={styles.text}>
          Темп: {((minTemperature + maxTemperature) / 2).toFixed(1)} °C
        </Text>
      </View>
      <View style={styles.containerRow}>
        <Text style={styles.text}>Мин: {minTemperature} °C</Text>
        <Text style={styles.text}>Макс: {maxTemperature} °C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: CONSTANTS.textColorGray,
    fontSize: CONSTANTS.textSize,
  },
  containerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ItemWeather;
