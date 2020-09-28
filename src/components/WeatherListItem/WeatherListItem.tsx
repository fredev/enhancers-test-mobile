import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
// @ts-ignore
import RadialGradient from 'react-native-radial-gradient';
import styled from 'styled-components';
import {City} from '../../store/slices/weather';
import formatDate from 'date-fns/format';
import fromUnixTime from 'date-fns/fromUnixTime';
import WeatherIcon from '../WeatherIcon';

const CityText = styled(Text)`
  font-family: 'Poppins-SemiBold';
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  letter-spacing: 0;
  line-height: 39px;
`;

const WeatherRadialGradient = styled(RadialGradient)`
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px 20px;
  padding: 16px 10px;
  border-radius: 25px;
  background-color: #646464;
  overflow: hidden;
`;

const DateText = styled(Text)`
  font-family: 'Poppins-Medium';
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  letter-spacing: 0;
  line-height: 18px;
`;

const TimeText = styled(Text)`
  font-family: 'Poppins-Light';
  color: ${(props) => props.theme.colors.secondary};
  font-size: 12px;
  letter-spacing: 0;
  line-height: 18px;
  margin-top: 12px;
`;

const TemperatureText = styled(Text)`
  font-family: 'Poppins-Bold';
  color: ${(props) => props.theme.colors.secondary};
  font-size: 50px;
  letter-spacing: 0;
  line-height: 76px;
  text-align: right;
`;

const SubItemContainer = styled(View)`
  flex-basis: 25%;
  flex-grow: 0;
`;

interface WeatherListItemProps {
  item: City;

  onPress(): void;
}

const WeatherListItem: React.FC<WeatherListItemProps> = ({item, onPress}) => {
  const datetime = fromUnixTime(item.weather.now.datetime);
  const date = formatDate(datetime, 'eeee dd, LLLL');
  const time = formatDate(datetime, 'hh:mm aaaa');

  let colors;

  switch (item.id) {
    case 1:
      colors = ['#011354', '#5B9FE3'];
      break;
    case 2:
      colors = ['#5374E7', '#77B9F5'];
      break;
    case 3:
      colors = ['#464C64', '#99A9B9'];
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      onLongPress={onPress}
      style={{
        shadowColor: 'rgba(0,0,0,0.17)',
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      <WeatherRadialGradient
        colors={colors}
        center={[0, 0]}
        stops={[0, 1]}
        radius={400}>
        <SubItemContainer>
          <CityText>{item.name}</CityText>
          <DateText>{date}</DateText>
          <TimeText>{time}</TimeText>
        </SubItemContainer>
        <SubItemContainer>
          <WeatherIcon id={item.id} />
        </SubItemContainer>
        <SubItemContainer>
          <TemperatureText>{item.weather.now.temp}°</TemperatureText>
        </SubItemContainer>
      </WeatherRadialGradient>
    </TouchableOpacity>
  );
};

export default WeatherListItem;
