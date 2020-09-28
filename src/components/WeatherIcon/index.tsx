import React from 'react';
import {View} from 'react-native';
import ModerateRain from '../Icon/ModerateRain';
import Sunny from '../Icon/Sunny';
import Cloudy from '../Icon/Cloudy';
import LightRain from "../Icon/LightRain";

interface WeatherIconProps {
  id: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = (props) => {
  switch (props.id) {
    case 1:
      return <ModerateRain />;
    case 2:
      return <Sunny />;
    case 3:
      return <Cloudy />;
    case 4:
      return <LightRain />
    default:
      return <View />;
  }
};

export default WeatherIcon;
