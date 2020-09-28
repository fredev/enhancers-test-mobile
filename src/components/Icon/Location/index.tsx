import React from 'react';
import {Image} from 'react-native';
import location from './location.png';

const Location: React.FC = () => (
  <Image source={location} style={{height: 28}} />
);

export default Location;
