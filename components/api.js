// actions.js
import CONSTANTS from '../assets/CONSTANTS';

export const fetchDataSuccess = data => ({
  type: 'pushFromApi',
  payload: {
    current_weather: data.current_weather,
    daily_units: data.daily_units,
    daily: data.daily,
  },
});

export const fetchDataError = error => ({
  type: 'errorApi',
  payload: {
    error: error,
  },
});

export const getWeatherFromApi = (lati, long) => async dispatch => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&timezone=W-SU&forecast_days=${CONSTANTS.days}&daily=temperature_2m_max,temperature_2m_min&current_weather=true`,
      {
        method: 'GET',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    const json = await response.json();
    console.log(json);
    dispatch(fetchDataSuccess(json));
    //
    // console.log(json);
  } catch (error) {
    console.error(error);
    dispatch(fetchDataError(error));
  }
};
