import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import uniqueId from "lodash/uniqueId";

import {
  iosSunnyOutline,
  iosPartlysunnyOutline,
  iosCloudyOutline,
  iosRainyOutline,
  iosSnowy,
} from "react-icons-kit/ionicons/";

// const weathers = [
//   {
//     id: 0,
//     weather: (
//       <Icon icon={weatherSunny} size={30} style={{ color: "#c6d6df" }} />
//     ),
//   },
// ];

const weathers = [
  { id: 0, weather: iosSunnyOutline, color: "#e32119" },
  { id: 1, weather: iosPartlysunnyOutline, color: "#ff8a00" },
  { id: 2, weather: iosCloudyOutline, color: "#989898" },
  { id: 3, weather: iosRainyOutline, color: "#0099e5" },
  { id: 4, weather: iosSnowy, color: "#44c7f4" },
];

const WeathersBody = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  margin: auto 0;
`;

const WeatherUnit = styled.div`
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1);
  }
`;

const WeatherModal = ({ weatherData }) => {
  const [weatherChosen, setWeatherChosen] = useState(null);

  return (
    <>
      <div
        className="weather-wrapper"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <WeathersBody className="weathers-body">
          {weathers.map((weather, idx) => {
            return (
              <WeatherUnit key={uniqueId()}>
                <Icon
                  icon={weather.weather}
                  // size={idx === weatherChosen ? 35 : 32}
                  size={32}
                  onClick={() => {
                    setWeatherChosen(idx);
                    weatherData(idx);
                  }}
                  style={{
                    color: idx === weatherChosen ? weather.color : "#8a959e",
                    backgroundColor:
                      idx === weatherChosen
                        ? weather.color + "45"
                        : "transparent",
                    borderRadius: "50%",
                    fontWeight: 400,
                  }}
                />
              </WeatherUnit>
            );
          })}
        </WeathersBody>
      </div>
    </>
  );
};

export default WeatherModal;
