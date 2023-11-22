import React, {memo} from 'react';
import {Path, Svg} from 'react-native-svg';

const Snow = ({size, color}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M11.9994 3V7M11.9994 7V17M11.9994 7L8.99943 4M11.9994 7L14.9994 4M11.9994 17V21M11.9994 17L8.99943 20M11.9994 17L14.9994 20M4.20624 7.49999L7.67034 9.49999M7.67034 9.49999L16.3306 14.5M7.67034 9.49999L3.57227 10.5981M7.67034 9.49999L6.57227 5.40191M16.3306 14.5L19.7947 16.5M16.3306 14.5L17.4287 18.5981M16.3306 14.5L20.4287 13.4019M4.2067 16.5L7.6708 14.5M7.6708 14.5L16.3311 9.49999M7.6708 14.5L3.57273 13.4019M7.6708 14.5L6.57273 18.5981M16.3311 9.49999L19.7952 7.49999M16.3311 9.49999L17.4291 5.40192M16.3311 9.49999L20.4291 10.5981"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(Snow);
