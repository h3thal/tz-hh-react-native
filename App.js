import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Weather from './screens/Weather/Weather';
import About from './screens/About/About';
import {NavigationContainer} from '@react-navigation/native';
import User from './assets/svg/User';
import {useDispatch, useSelector} from 'react-redux';
import Umbrella from './assets/svg/Umbrella';
import IconWeather from './components/UI/IconWeather';
import GetLocation from 'react-native-get-location';
import {getWeatherFromApi} from './components/api';
import {city} from './assets/CONSTANTS';
import {StatusBar} from 'react-native';

const Tab = createBottomTabNavigator();

const App = () => {
  const weatherList = useSelector(state => state.weatherList);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const location = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 10000,
        });
        dispatch({
          type: 'update_current_loc',
          payload: {latitude: location.latitude, longitude: location.longitude},
        });
        // dispatch(getWeatherFromApi(location.latitude, location.longitude));
      } catch (error) {
        const {code, message} = error;
        console.warn(code, message);
      }
    };

    fetchWeatherData();
  }, []);

  useEffect(() => {
    if (weatherList.gprs === 0) {
      dispatch(
        getWeatherFromApi(
          weatherList.current_latitude,
          weatherList.current_longitude,
        ),
      );
    } else if (weatherList.gprs > 0) {
      dispatch(
        getWeatherFromApi(
          city[weatherList.gprs - 1].latitude,
          city[weatherList.gprs - 1].longitude,
        ),
      );
    }
  }, [weatherList.gprs]);

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'} backgroundColor={'#5e7fc6ff'} />
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {backgroundColor: '#5e7fc6ff'},
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#a0b7e2ff',
          headerStyle: {backgroundColor: '#5e7fc6ff'},
          headerTitleStyle: {color: '#fff'},
        }}>
        <Tab.Screen
          name={'Weather'}
          component={Weather}
          options={{
            title: 'Погода',
            tabBarLabel: 'Погода',
            tabBarIcon: ({focused, color, size}) =>
              weatherList?.current_weather ? (
                <IconWeather
                  size={size}
                  color={color}
                  weatherCode={weatherList.current_weather.weathercode}
                />
              ) : (
                <Umbrella size={size} color={color} />
              ),
          }}
        />
        <Tab.Screen
          name={'About'}
          component={About}
          options={{
            title: 'Информация',
            tabBarLabel: 'Информация',
            tabBarIcon: ({focused, color, size}) => (
              <User size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
