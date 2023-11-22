import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MainContainer from '../../components/MainContainer/MainContainer';
import CONSTANTS from '../../assets/CONSTANTS';
import ListContainer from '../../components/ListContainer/ListContainer';

const Weather = () => {
  const weatherList = useSelector(state => state.weatherList);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <ScrollView>
        <MainContainer />
        {weatherList?.daily?.time && <ListContainer />}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTANTS.bgColor,
    flex: 1,
  },
});

export default Weather;
