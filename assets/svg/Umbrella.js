import React, {memo} from 'react';

import {Path, Svg} from 'react-native-svg';

const Umbrella = ({color, size}) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M8 19C8 20.1046 8.89543 21 10 21C11.1046 21 12 20.1046 12 19V11M12 11C13.1256 11 14.1643 11.3719 15 11.9996C15.8357 11.3719 16.8744 11 18 11C19.1258 11 20.1643 11.3721 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3.83566 11.3723 4.87439 11 6 11C7.12561 11 8.16434 11.3719 9 11.9996C9.83566 11.3719 10.8744 11 12 11Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default memo(Umbrella);
