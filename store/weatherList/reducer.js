import initState from './initState';

export default (state = initState, action) => {
  switch (action.type) {
    case 'update_current_loc':
      return {
        ...state,
        gprs: 0,
        current_latitude: action.payload.latitude,
        current_longitude: action.payload.longitude,
      };
    case 'pushFromApi':
      return {...state, ...action.payload};
    case 'updateDropdown':
      return {...state, gprs: action.payload.gprs};
    default:
      return state;
  }
};
