import {configureStore} from '@reduxjs/toolkit';
import weatherList from './weatherList/reducer';

export default configureStore({
  reducer: {
    weatherList: weatherList,
  },
});
