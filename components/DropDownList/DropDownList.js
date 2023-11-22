import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {useDispatch, useSelector} from 'react-redux';

const DropDownList = () => {
  const weatherList = useSelector(state => state.weatherList);
  const dispatch = useDispatch();

  return (
    <Picker
      selectedValue={weatherList.gprs}
      onValueChange={(itemValue, itemIndex) => {
        dispatch({type: 'updateDropdown', payload: {gprs: itemIndex}});
      }}
      style={{height: 50, width: 150}}>
      <Picker.Item label="Текущее" value={0} />
      <Picker.Item label="Москва" value={1} />
      <Picker.Item label="Санкт-Петербург" value={2} />
      <Picker.Item label="Тамбов" value={3} />
      <Picker.Item label="Нью-Йорк" value={4} />
      <Picker.Item label="Кения" value={5} />
    </Picker>
  );
};

export default DropDownList;
