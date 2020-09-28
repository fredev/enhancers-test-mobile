import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import DeviceInfo from 'react-native-device-info';
// @ts-ignore
import RadialGradient from 'react-native-radial-gradient';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import styled from 'styled-components';
import fromUnixTime from 'date-fns/fromUnixTime';
import formatDate from 'date-fns/format';
import Header from '../components/Header';
import HeaderTitle from '../components/HeaderTitle';
import IconButton from '../components/IconButton';
import ArrowLeft from '../components/Icon/ArrowLeft';
import Plus from '../components/Icon/Plus';
import {RootState} from '../store/rootReducer';
import WeatherIcon from '../components/WeatherIcon';
import WeatherDaily from "../components/WeatherDaily";
import WeatherHourly from "../components/WeatherHourly";

const WeatherRadialGradient = styled(RadialGradient)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000066;
  padding-top: ${DeviceInfo.hasNotch() ? '25px' : 0};
  z-index: 0;
`;

const DatetimeText = styled(Text)`
  width: 100%;
  padding: 10px;
  font-family: 'Poppins-Medium';
  font-size: 20px;
  letter-spacing: 0;
  line-height: 18px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const WeatherNameText = styled(Text)`
  font-family: 'Poppins-Light';
  width: 100%;
  padding: 10px;
  font-size: 20px;
  letter-spacing: 0;
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.colors.secondary};
`;

const WeatherNow = styled(View)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 20px;
`;

const WeatherTemperature = styled(Text)`
  font-family: 'Poppins-Bold';
  font-size: 110px;
  letter-spacing: 0;
  line-height: 166px;
  text-align: right;
  color: ${(props) => props.theme.colors.secondary};
`;

const WeatherScreen: React.FC = () => {
  const navigation = useNavigation();

  const {weather, name} = useSelector(
    (state: RootState) => state.weather.cities[state.weather.selected],
  );

  const onBackPress = () => {
    navigation.goBack();
  };

  const onPlusPress = () => {
    console.warn('on plus press');
  };

  const getDatetime = () => {
    const datetime = fromUnixTime(weather.daily[0].datetime);
    const day = formatDate(datetime, 'eeee dd');
    const month = formatDate(datetime, 'MMMM').toLowerCase();

    return `${day}, ${month}`;
  };

  const getWeatherName = () => {
    switch (weather.daily[0].id) {
      case 1:
        return 'Moderate Rain';
      case 2:
        return 'Sunny';
      case 3:
        return 'Cloudy';
      default:
        return '';
    }
  };

  const getColors = () => {
    switch (weather.daily[0].id) {
      case 1:
        return ['#011354', '#5B9FE3'];
      case 2:
        return ['#5374E7', '#77B9F5'];
      case 3:
        return ['#464C64', '#99A9B9'];
      default:
        return ['#5374E7', '#77B9F5'];
    }
  };

  return (
    <WeatherRadialGradient
      colors={getColors()}
      center={[0, 0]}
      stops={[0, 1]}
      radius={1500}>
      <Header
        left={<IconButton icon={<ArrowLeft />} onPress={onBackPress} />}
        center={<HeaderTitle>{name}</HeaderTitle>}
        right={<IconButton icon={<Plus />} onPress={onPlusPress} />}
      />
      <ScrollView>
        <DatetimeText>{getDatetime()}</DatetimeText>
        <WeatherNameText>{getWeatherName()}</WeatherNameText>
        <WeatherNow>
          <WeatherIcon id={weather.daily[0].id} />
          <WeatherTemperature>{weather.daily[0].temp}°</WeatherTemperature>
        </WeatherNow>

        <WeatherHourly />

        <WeatherDaily />
        <View style={{height: 120}} />
      </ScrollView>
    </WeatherRadialGradient>
  );
};

export default WeatherScreen;
