import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngry as farAngry,
  faFlushed as farFlushed,
  faGrimace as farGrimace,
  faDizzy as farDizzy,
  faMeh as farMeh,
  faFrown as farFrown,
  faSmile as farSmile,
  faGrinBeamSweat as farGrinBeamSweat,
  faGrinHearts as farGrinHearts,
  faTired as farTired,
  faSadTear as farSadTear,
  faSadCry as farSadCry,
  faMehRollingEyes as farMehRollingEyes,
  faGrinStars as farGrinStars,
  faSurprise as farSurprise,
  faLaughBeam as farLaughBeam,
  faKissWinkHeart as farKissWinkHeart,
  faLaughSquint as farLaughSquint,
  faGrinSquintTears as farGrinSquintTears,
  faGrinTongueWink as farGrinTongueWink,
} from "@fortawesome/free-regular-svg-icons";
import { Icon } from "react-icons-kit";

import {
  weatherSunny,
  weatherCloudy,
  weatherPartlySunny,
  weatherShower,
  weatherSnow,
} from "react-icons-kit/typicons/";

import {
  iosSunnyOutline,
  iosPartlysunnyOutline,
  iosCloudyOutline,
  iosRainyOutline,
  iosSnowy,
} from "react-icons-kit/ionicons/";

const makeFaceIcon = (iconName, color) => {
  return (
    <FontAwesomeIcon
      face="true"
      icon={iconName}
      style={{ color: `#${color}` }}
    />
  );
};

const makeWeatherIcon = (iconName, color) => {
  return <Icon weather="true" icon={iconName} style={{ color: `#${color}` }} />;
};

export const icons = {
  faceIcons: [
    { id: 0, icon: makeFaceIcon(farMeh, "a1a1a4") },
    { id: 1, icon: makeFaceIcon(farSmile, "ffdb00") },
    { id: 2, icon: makeFaceIcon(farLaughBeam, "fdca30") },
    { id: 3, icon: makeFaceIcon(farLaughSquint, "ffcb00") },
    {
      id: 4,
      icon: makeFaceIcon(farGrinSquintTears, "fdbb30"),
    },
    {
      id: 5,
      icon: makeFaceIcon(farKissWinkHeart, "ea4c89"),
    },
    { id: 6, icon: makeFaceIcon(farGrinHearts, "ea4c89") },
    { id: 7, icon: makeFaceIcon(farGrinStars, "6b5aed") },
    {
      id: 8,
      icon: makeFaceIcon(farGrinTongueWink, "2d72d9"),
    },
    {
      id: 9,
      icon: makeFaceIcon(farGrinBeamSweat, "7acef4"),
    },
    { id: 10, icon: makeFaceIcon(farFrown, "ff8200") },
    { id: 11, icon: makeFaceIcon(farAngry, "fe423f") },
    { id: 12, icon: makeFaceIcon(farGrimace, "e32119") },
    { id: 13, icon: makeFaceIcon(farTired, "97a2a2") },
    { id: 14, icon: makeFaceIcon(farDizzy, "8a8b8c") },
    { id: 15, icon: makeFaceIcon(farSurprise, "8ee000") },
    { id: 16, icon: makeFaceIcon(farFlushed, "6cc24a") },
    {
      id: 17,
      icon: makeFaceIcon(farMehRollingEyes, "8a8acb"),
    },
    { id: 18, icon: makeFaceIcon(farSadTear, "2bb3f3") },
    { id: 19, icon: makeFaceIcon(farSadCry, "147efb") },
  ],

  weatherIcons: [
    { id: 0, icon: makeWeatherIcon(iosSunnyOutline, "f96854") },
    { id: 1, icon: makeWeatherIcon(iosCloudyOutline, "ffb900") },
    { id: 2, icon: makeWeatherIcon(iosPartlysunnyOutline, "a5a9ab") },
    { id: 3, icon: makeWeatherIcon(iosRainyOutline, "0099e5") },
    { id: 4, icon: makeWeatherIcon(iosSnowy, "90cef1") },
  ],
};
